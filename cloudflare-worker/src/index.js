const ALLOWED_ORIGINS = new Set([
  "https://youssef-ehab-nafaa.github.io",
  "http://127.0.0.1:8756",
  "http://localhost:8756"
]);

const bursts = new Map();
const sends = new Map();

function corsHeaders(origin) {
  if (!origin || !ALLOWED_ORIGINS.has(origin)) return {};
  return {
    "Access-Control-Allow-Origin": origin,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Max-Age": "86400",
    Vary: "Origin"
  };
}

function json(status, payload, origin) {
  return new Response(JSON.stringify(payload), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store",
      ...corsHeaders(origin)
    }
  });
}

function stripControls(value) {
  return value.replace(/[\u0000-\u001F\u007F]/g, "").trim();
}

function hasInjection(value) {
  return /[<>]/.test(value) || /<\s*script|javascript:|on\w+\s*=/i.test(value);
}

export function validateWish(body) {
  if (!body || typeof body !== "object" || Array.isArray(body)) {
    return { ok: false, status: 400 };
  }

  const honeypot = [body.fax_number, body.faxNumber, body.website, body.honeypot, body.company]
    .find((value) => (typeof value === "string" ? value.trim() : value));
  if (honeypot) return { ok: false, honeypot: true };

  if (typeof body.name !== "string" || typeof body.message !== "string") {
    return { ok: false, status: 400 };
  }

  const name = stripControls(body.name);
  const message = stripControls(body.message);
  if (!name || !message || name.length > 50 || message.length > 500) {
    return { ok: false, status: 400 };
  }
  if (hasInjection(body.name) || hasInjection(body.message)) {
    return { ok: false, status: 400 };
  }
  return { ok: true, name, message };
}

function prune(map, key, windowMs) {
  const now = Date.now();
  const stamps = (map.get(key) || []).filter((stamp) => now - stamp < windowMs);
  map.set(key, stamps);
  return stamps;
}

async function clientKey(request) {
  const ip = request.headers.get("CF-Connecting-IP") || request.headers.get("x-forwarded-for") || "local";
  const digest = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(ip));
  return [...new Uint8Array(digest)].slice(0, 8).map((byte) => byte.toString(16).padStart(2, "0")).join("");
}

async function tooSoon(key) {
  const recent = prune(sends, key, 60000);
  if (recent.length > 0) return true;
  try {
    const cacheKey = new Request(`https://khadija-wishes.internal/send/${key}`);
    if (await caches.default.match(cacheKey)) return true;
  } catch {
    /* The isolate memory limit still applies when the cache is unavailable. */
  }
  return false;
}

async function rememberSend(key) {
  prune(sends, key, 60000).push(Date.now());
  try {
    const cacheKey = new Request(`https://khadija-wishes.internal/send/${key}`);
    await caches.default.put(cacheKey, new Response("1", {
      headers: { "Cache-Control": "max-age=60" }
    }));
  } catch {
    /* Ignore cache write failures. */
  }
}

async function dispatchWish(env, name, message) {
  const token = env && env.WISHES_GITHUB_TOKEN;
  const repository = (env && env.GITHUB_REPOSITORY) || "youssef-ehab-nafaa/khadega";
  const eventType = (env && env.DISPATCH_EVENT) || "khadija-wish";
  if (!token || typeof token !== "string") return 500;

  const response = await fetch(`https://api.github.com/repos/${repository}/dispatches`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/vnd.github+json",
      "Content-Type": "application/json",
      "User-Agent": "khadija-wishes",
      "X-GitHub-Api-Version": "2022-11-28"
    },
    body: JSON.stringify({
      event_type: eventType,
      client_payload: { name, message }
    })
  });

  if (response.status === 204) return 202;
  console.log(`Wish dispatch was not accepted. Status ${response.status}.`);
  return 502;
}

export default {
  async fetch(request, env) {
    const origin = request.headers.get("Origin");
    if (origin && !ALLOWED_ORIGINS.has(origin)) {
      return json(403, { success: false, message: "Origin is not allowed" }, "");
    }

    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: corsHeaders(origin) });
    }

    if (request.method !== "POST") {
      return json(405, { success: false, message: "Method is not allowed" }, origin);
    }

    const contentType = request.headers.get("Content-Type") || "";
    if (!contentType.toLowerCase().includes("application/json")) {
      return json(400, { success: false, message: "Invalid wish" }, origin);
    }

    const raw = await request.text();
    if (raw.length > 4000) {
      return json(400, { success: false, message: "Invalid wish" }, origin);
    }

    let body;
    try {
      body = JSON.parse(raw);
    } catch {
      return json(400, { success: false, message: "Invalid wish" }, origin);
    }

    const wish = validateWish(body);
    if (wish.honeypot) {
      return json(202, { success: true, message: "Wish accepted" }, origin);
    }
    if (!wish.ok) {
      return json(wish.status || 400, { success: false, message: "Invalid wish" }, origin);
    }

    const key = await clientKey(request);
    const burst = prune(bursts, key, 60000);
    if (burst.length >= 8) {
      return json(429, { success: false, message: "Please wait" }, origin);
    }
    burst.push(Date.now());
    if (!env || typeof env.WISHES_GITHUB_TOKEN !== "string" || !env.WISHES_GITHUB_TOKEN) {
      return json(500, { success: false, message: "Wish service is unavailable" }, origin);
    }
    if (await tooSoon(key)) {
      return json(429, { success: false, message: "Please wait" }, origin);
    }

    try {
      const status = await dispatchWish(env, wish.name, wish.message);
      if (status === 202) {
        await rememberSend(key);
        return json(202, { success: true, message: "Wish accepted" }, origin);
      }
      return json(status, { success: false, message: "Wish service is unavailable" }, origin);
    } catch {
      console.log("Wish dispatch failed before a response was received.");
      return json(502, { success: false, message: "Wish service is unavailable" }, origin);
    }
  }
};
