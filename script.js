const KHADIJA_BIRTH_DATE = "2026-10-03T09:00:00+03:00";

/* إعدادات احتفال خديجة — عدّلوا النصوص والصور من هنا. */
const celebration = {
  baby: { ar: "خديجة", en: "Khadija" },
  birthDate: KHADIJA_BIRTH_DATE,
  wishesEndpoint: "",
  websiteUrl: "",
  musicFile: "",
  defaultLanguage: "ar",
  gallery: [
    { src: "assets/images/khadija/hero.webp", thumb: "assets/images/khadija/hero-sm.webp", layout: "feature", focus: "face", alt: { ar: "خديجة", en: "Khadija" } },
    { src: "assets/images/khadija/letter.webp", thumb: "assets/images/khadija/letter-sm.webp", layout: "side", focus: "face", alt: { ar: "خديجة", en: "Khadija" } },
    { src: "assets/images/khadija/face.webp", thumb: "assets/images/khadija/face-sm.webp", layout: "side", focus: "face", alt: { ar: "خديجة", en: "Khadija" } },
    { src: "assets/images/khadija/held.webp", thumb: "assets/images/khadija/held-sm.webp", layout: "side", focus: "center", alt: { ar: "خديجة", en: "Khadija" } },
    { src: "assets/images/khadija/feet.webp", thumb: "assets/images/khadija/feet-sm.webp", layout: "wide", focus: "center", alt: { ar: "خديجة", en: "Khadija" } },
    { src: "assets/images/khadija/detail.webp", thumb: "assets/images/khadija/detail-sm.webp", layout: "side", focus: "center", alt: { ar: "خديجة", en: "Khadija" } },
    { src: "assets/images/khadija/foot.webp", thumb: "assets/images/khadija/foot-sm.webp", layout: "side", focus: "center", alt: { ar: "خديجة", en: "Khadija" } },
    { src: "assets/images/khadija/hand.webp", thumb: "assets/images/khadija/hand-sm.webp", layout: "wide", focus: "center", alt: { ar: "خديجة", en: "Khadija" } }
  ]
};

const translations = {
  ar: {
    skip: "تخطَّ إلى المحتوى",
    mainNav: "التنقل الرئيسي",
    languageChoice: "اختيار اللغة",
    playMusic: "تشغيل الموسيقى",
    pauseMusic: "إيقاف الموسيقى",
    playDua: "تشغيل الدعاء",
    pauseDua: "إيقاف الدعاء",
    musicUnavailable: "تعذر تشغيل الموسيقى. يمكنكم متابعة الصفحة بدونها.",
    navHome: "الرئيسية",
    navKhadija: "خديجة",
    navGallery: "الصور",
    navDua: "الدعاء",
    navWishes: "التهاني",
    heroHamd: "الحمد لله الذي بنعمته تتم الصالحات",
    heroBlessing: "رزقنا الله بمولودتنا خديجة 🤍",
    babyName: "خديجة",
    heroDate: "السبت 3 أكتوبر 2026",
    heroTime: "9:00 صباحًا",
    heroPrayer: "اللهم أنبتها نباتًا حسنًا، واجعلها قرة عين لنا، واحفظها بعينك التي لا تنام.",
    discover: "اكتشفوا فرحتنا",
    scrollDown: "الانتقال إلى قصة خديجة",
    storyTitle: "في يومٍ أصبح عالمنا أجمل",
    storyP1: "في يوم السبت 3 أكتوبر 2026، وفي تمام الساعة التاسعة صباحًا، أكرمنا الله بأجمل هدية، ورزقنا بمولودتنا خديجة.",
    nameLabel: "الاسم",
    birthLabel: "تاريخ الميلاد",
    birthValue: "3 أكتوبر 2026",
    timeLabel: "وقت الميلاد",
    timeValue: "9:00 صباحًا",
    dayLabel: "اليوم",
    ageLabel: "عمر خديجة",
    sinceTitle: "منذ أن جاءت خديجة إلى عالمنا",
    days: "يوم",
    hours: "ساعة",
    minutes: "دقيقة",
    seconds: "ثانية",
    beforeArrival: "ننتظر لحظة وصول خديجة.",
    lessThanWeek: "أقل من أسبوع",
    letterTitle: "إلى خديجة 🤍",
    letterSalute: "يا خديجة،",
    letterP1: "جئتِ إلى عالمنا فأصبح أجمل، وأصبحت كل تفاصيل حياتنا تحمل معنى جديدًا.",
    letterP2: "نسأل الله أن يحفظكِ، وأن ينبتكِ نباتًا حسنًا، وأن تكبري بين الحب والرحمة والأمان، وأن تكون حياتكِ أجمل مما تمنينا لكِ.",
    letterP3: "ستبقين دائمًا أجمل هدية رزقنا الله بها.",
    galleryTitle: "بعض من جمال خديجة 🤍",
    galleryText: "صور خديجة.",
    gallerySoon: "بانتظار صورة خديجة",
    closeLightbox: "إغلاق",
    prevPhoto: "الصورة السابقة",
    nextPhoto: "الصورة التالية",
    zoomPhoto: "تكبير",
    zoomOut: "تصغير",
    photoCount: "صورة",
    duaTitle: "دعواتكم لخديجة 🤍",
    duaText: "اللهم احفظ خديجة وبارك لنا فيها واجعلها قرة عين لنا.",
    footerName: "خديجة 🤍",
    amen: "اللهم آمين 🤍",
    duaPlus: "+1 دعوة لخديجة 🤍",
    duaNote: "يُحفظ العدد على هذا الجهاز.",
    wishTitle: "اتركوا تهنئة لخديجة 🤍",
    wishText: "اكتبوا لها دعوة أو كلمة تبقى معنا من هذا اليوم الجميل.",
    wishName: "الاسم",
    wishNamePh: "اكتب اسمك",
    wishMessage: "رسالتك",
    wishMessagePh: "كلماتكم تسعد خديجة وأهلها",
    wishHelpLocal: "تظهر تهنئتكم في هذه الصفحة وتُحفظ على جهازكم.",
    wishHelpRemote: "تُرسل التهنئة للحفظ المشترك وتظهر هنا أيضًا.",
    sendWish: "إرسال التهنئة",
    nameRequired: "من فضلك اكتب اسمك.",
    messageRequired: "من فضلك اكتب رسالة التهنئة.",
    sending: "جارٍ الإرسال...",
    sent: "وصلت تهنئتكم، بارك الله لكم.",
    savedLocal: "ظهرت تهنئتكم هنا على هذا الجهاز.",
    sendFailed: "ظهرت التهنئة هنا، وتعذر إرسالها للحفظ المشترك.",
    slowDown: "شكرًا لقلوبكم، انتظروا لحظة قبل تهنئة أخرى.",
    wishesEmpty: "لم تصل تهنئات بعد. كونوا أول من يبارك لخديجة.",
    closingLine: "اللهم احفظ خديجة وبارك لنا فيها 🤍",
    closingThanks: "الحمد لله على أجمل نعمة",
    duaLive: "دعاء لخديجة",
    footerLine: "الحمد لله الذي بنعمته تتم الصالحات",
    backToTop: "العودة إلى الأعلى"
  },
  en: {
    skip: "Skip to content",
    mainNav: "Main navigation",
    languageChoice: "Choose language",
    playMusic: "Play music",
    pauseMusic: "Pause music",
    playDua: "Play the prayer",
    pauseDua: "Pause the prayer",
    musicUnavailable: "The music could not be played. You can continue without it.",
    navHome: "Home",
    navKhadija: "Khadija",
    navGallery: "Photos",
    navDua: "Prayer",
    navWishes: "Wishes",
    heroHamd: "All praise is due to Allah, by whose blessing good things are completed",
    heroBlessing: "Allah has blessed us with our daughter, Khadija 🤍",
    babyName: "Khadija",
    heroDate: "Saturday, 3 October 2026",
    heroTime: "9:00 in the morning",
    heroPrayer: "O Allah, raise her in goodness, make her the coolness of our eyes, and protect her with Your eye that never sleeps.",
    discover: "Discover our joy",
    scrollDown: "Continue to Khadija’s story",
    storyTitle: "The day our world became more beautiful",
    storyP1: "On Saturday, 3 October 2026, at nine in the morning, Allah honored us with the most beautiful gift and blessed us with our daughter, Khadija.",
    nameLabel: "Name",
    birthLabel: "Date of birth",
    birthValue: "3 October 2026",
    timeLabel: "Time of birth",
    timeValue: "9:00 in the morning",
    dayLabel: "Day",
    ageLabel: "Khadija’s age",
    sinceTitle: "Since Khadija came into our world",
    days: "Days",
    hours: "Hours",
    minutes: "Minutes",
    seconds: "Seconds",
    beforeArrival: "We are waiting for Khadija’s arrival.",
    lessThanWeek: "Less than a week",
    letterTitle: "To Khadija 🤍",
    letterSalute: "Dear Khadija,",
    letterP1: "You came into our world and made it more beautiful, and every detail of our life found a new meaning.",
    letterP2: "We ask Allah to protect you, raise you in goodness, let you grow among love, mercy, and safety, and make your life more beautiful than we wished for you.",
    letterP3: "You will always be the most beautiful gift Allah has given us.",
    galleryTitle: "A little of Khadija’s beauty 🤍",
    galleryText: "Photographs of Khadija.",
    gallerySoon: "Waiting for Khadija’s photo",
    closeLightbox: "Close",
    prevPhoto: "Previous photo",
    nextPhoto: "Next photo",
    zoomPhoto: "Zoom in",
    zoomOut: "Zoom out",
    photoCount: "Photo",
    duaTitle: "Your prayers for Khadija 🤍",
    duaText: "O Allah, protect Khadija, bless her for us, and make her the coolness of our eyes.",
    footerName: "Khadija 🤍",
    amen: "Ameen 🤍",
    duaPlus: "+1 prayer for Khadija 🤍",
    duaNote: "This count is saved on this device.",
    wishTitle: "Leave a wish for Khadija 🤍",
    wishText: "Write her a prayer or a few words we can keep from this beautiful day.",
    wishName: "Name",
    wishNamePh: "Your name",
    wishMessage: "Your message",
    wishMessagePh: "Your words will make Khadija’s family smile",
    wishHelpLocal: "Your wish appears on this page and is saved on your device.",
    wishHelpRemote: "Your wish is sent to the shared collection and also appears here.",
    sendWish: "Send wish",
    nameRequired: "Please enter your name.",
    messageRequired: "Please write a wish.",
    sending: "Sending...",
    sent: "Your wish arrived. May Allah bless you.",
    savedLocal: "Your wish is now shown on this device.",
    sendFailed: "Your wish is shown here, but it could not be sent to the shared collection.",
    slowDown: "Thank you. Please wait a moment before another wish.",
    wishesEmpty: "No wishes yet. Be the first to bless Khadija.",
    closingLine: "O Allah, protect Khadija and bless her for us 🤍",
    closingThanks: "Praise be to Allah for the most beautiful blessing",
    duaLive: "A prayer for Khadija",
    footerLine: "All praise is due to Allah, by whose blessing good things are completed",
    backToTop: "Back to top"
  }
};

const seo = {
  ar: {
    title: "خديجة | رزقنا الله بمولودتنا 🤍",
    description: "الحمد لله الذي بنعمته تتم الصالحات، رزقنا الله بمولودتنا خديجة في 3 أكتوبر 2026، الساعة 9:00 صباحًا.",
    ogTitle: "رزقنا الله بمولودتنا خديجة 🤍",
    ogDescription: "خديجة — 3 أكتوبر 2026 — 9:00 صباحًا",
    imageAlt: "رزقنا الله بمولودتنا خديجة — 3 أكتوبر 2026"
  },
  en: {
    title: "Khadija | Our Daughter Has Arrived",
    description: "Alhamdulillah. We have been blessed with our daughter Khadija, born on Saturday, 3 October 2026 at 9:00 in the morning.",
    ogTitle: "We have been blessed with our daughter Khadija 🤍",
    ogDescription: "Khadija — 3 October 2026 — 9:00 in the morning",
    imageAlt: "We have been blessed with our daughter Khadija — 3 October 2026"
  }
};

const WISH_KEY = "khadija-wishes";
const DUA_KEY = "khadija-duas";
const LANG_KEY = "khadija-language";
const MUSIC_KEY = "khadija-music";
const birthTime = new Date(KHADIJA_BIRTH_DATE).getTime();
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];

let currentLanguage = localStorage.getItem(LANG_KEY) || celebration.defaultLanguage;
if (!translations[currentLanguage]) currentLanguage = celebration.defaultLanguage;

const t = (key) => translations[currentLanguage][key] || key;
const locale = () => (currentLanguage === "ar" ? "ar-EG" : "en-GB");

function toArabicDigits(value) {
  return String(value).replace(/\d/g, (digit) => "٠١٢٣٤٥٦٧٨٩"[digit]);
}
function formatNumber(value, digits = 2) {
  const raw = String(Math.max(0, value)).padStart(digits, "0");
  return currentLanguage === "ar" ? toArabicDigits(raw) : raw;
}
function plainNumber(value) {
  return currentLanguage === "ar" ? toArabicDigits(value) : String(value);
}
function arForm(count, forms) {
  if (count === 1) return forms[0];
  if (count === 2) return forms[1];
  if (count % 100 >= 3 && count % 100 <= 10) return forms[2];
  return forms[3];
}
function countPhrase(count, kind) {
  if (currentLanguage === "ar" && count < 1) return `٠ ${unitLabel(0, kind)}`;
  if (currentLanguage === "ar" && (count === 1 || count === 2)) return unitLabel(count, kind);
  const amount = currentLanguage === "ar" ? plainNumber(count) : String(count);
  return `${amount} ${unitLabel(count, kind)}`;
}
function unitLabel(count, kind) {
  const forms = {
    ar: {
      day: ["يوم", "يومان", "أيام", "يومًا"],
      hour: ["ساعة", "ساعتان", "ساعات", "ساعة"],
      minute: ["دقيقة", "دقيقتان", "دقائق", "دقيقة"],
      second: ["ثانية", "ثانيتان", "ثوانٍ", "ثانية"],
      week: ["أسبوع", "أسبوعان", "أسابيع", "أسبوعًا"],
      prayer: ["دعوة", "دعوتان", "دعوات", "دعوة"]
    },
    en: {
      day: ["day", "days"],
      hour: ["hour", "hours"],
      minute: ["minute", "minutes"],
      second: ["second", "seconds"],
      week: ["week", "weeks"],
      prayer: ["prayer", "prayers"]
    }
  };
  if (currentLanguage === "ar") return arForm(count, forms.ar[kind]);
  return count === 1 ? forms.en[kind][0] : forms.en[kind][1];
}
function cleanText(value, max) {
  return String(value)
    .replace(/[\u0000-\u001F\u007F]/g, "")
    .replace(/[<>]/g, "")
    .trim()
    .slice(0, max);
}

function applyLanguage(language) {
  currentLanguage = translations[language] ? language : celebration.defaultLanguage;
  localStorage.setItem(LANG_KEY, currentLanguage);
  document.documentElement.lang = currentLanguage;
  document.documentElement.dir = currentLanguage === "ar" ? "rtl" : "ltr";

  $$("[data-i18n]").forEach((element) => {
    const value = translations[currentLanguage][element.dataset.i18n];
    if (value !== undefined) element.textContent = value;
  });
  $$("[data-i18n-placeholder]").forEach((element) => {
    element.placeholder = t(element.dataset.i18nPlaceholder);
  });
  $$("[data-i18n-aria]").forEach((element) => {
    if (element.id === "musicButton") return;
    element.setAttribute("aria-label", t(element.dataset.i18nAria));
  });
  $$("[data-i18n-alt]").forEach((element) => {
    element.alt = t(element.dataset.i18nAlt);
  });
  $$("[data-lang]").forEach((button) => button.classList.toggle("active", button.dataset.lang === currentLanguage));

  const meta = seo[currentLanguage];
  document.title = meta.title;
  $('meta[name="description"]').content = meta.description;
  $('meta[property="og:title"]').content = meta.ogTitle;
  $('meta[property="og:description"]').content = meta.ogDescription;
  $('meta[property="og:locale"]').content = currentLanguage === "ar" ? "ar_EG" : "en_US";
  $('meta[name="twitter:title"]').content = meta.ogTitle;
  $('meta[name="twitter:description"]').content = meta.ogDescription;
  const imageUrl = new URL("assets/images/og-cover.jpg", location.href).href;
  const canonical = $("#canonical");
  if (canonical && pageUrl()) canonical.href = pageUrl();
  $('meta[property="og:image"]').content = imageUrl;
  $('meta[name="twitter:image"]').content = imageUrl;
  $('meta[property="og:image:alt"]').content = meta.imageAlt;
  $('meta[name="twitter:image:alt"]').content = meta.imageAlt;

  $("#wishHelp").textContent = celebration.wishesEndpoint ? t("wishHelpRemote") : t("wishHelpLocal");
  if (typeof paintSoundControl === "function") paintSoundControl();
  languageApplied = true;
  const zoom = $("#lightboxZoom");
  if (zoom) zoom.textContent = zoom.getAttribute("aria-pressed") === "true" ? t("zoomOut") : t("zoomPhoto");

  renderGallery();
  renderWishes();
  updateElapsed();
  updateDuaCount();
}

function updateElapsed() {
  const elapsed = birthTime - Date.now();
  const waiting = elapsed > 0;
  $("#sinceCounter").hidden = waiting;
  $("#beforeArrival").hidden = !waiting;
  if (waiting) {
    $("#beforeArrival").textContent = t("beforeArrival");
    return;
  }
  const difference = Date.now() - birthTime;
  const values = {
    days: Math.floor(difference / 86400000),
    hours: Math.floor((difference / 3600000) % 24),
    minutes: Math.floor((difference / 60000) % 60),
    seconds: Math.floor((difference / 1000) % 60)
  };
  Object.entries(values).forEach(([key, value]) => {
    const digits = key === "days" ? 1 : 2;
    const node = $(`#${key}`);
    const next = formatNumber(value, digits);
    if (node.textContent !== next) {
      node.textContent = next;
      if (!reduceMotion && key === "seconds") {
        node.classList.remove("tick");
        void node.offsetWidth;
        node.classList.add("tick");
      }
    }
  });
}

let galleryIndex = 0;
let zoomed = false;
function renderGallery() {
  const grid = $("#galleryGrid");
  grid.replaceChildren();
  celebration.gallery.forEach((item, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `shot ${item.layout || "portrait"}${item.focus === "face" ? " focus-face" : ""}`;
    button.dataset.index = String(index);
    button.setAttribute("aria-label", item.alt[currentLanguage] || t("babyName"));
    const image = document.createElement("img");
    image.src = item.thumb || item.src;
    if (item.thumb) image.srcset = `${item.thumb} 720w, ${item.src} 1400w`;
    image.sizes = item.layout === "feature" ? "(max-width: 720px) 92vw, 40vw" : "(max-width: 720px) 46vw, 28vw";
    image.alt = item.alt[currentLanguage] || "";
    image.loading = "lazy";
    image.decoding = "async";
    image.width = 720;
    image.height = 960;
    button.append(image);
    grid.append(button);
  });
  if ($("#lightbox").open) updateLightbox();
}

function updateLightbox() {
  const item = celebration.gallery[galleryIndex];
  const image = $("#lightboxImage");
  image.removeAttribute("srcset");
  image.src = item.src;
  image.alt = item.alt[currentLanguage] || "";
  $("#lightboxTitle").textContent = `${t("photoCount")} ${plainNumber(galleryIndex + 1)} / ${plainNumber(celebration.gallery.length)}`;
  setZoom(false);
}
function setZoom(on) {
  zoomed = on;
  $("#lightboxImage").classList.toggle("is-zoomed", on);
  const zoom = $("#lightboxZoom");
  zoom.setAttribute("aria-pressed", String(on));
  zoom.textContent = on ? t("zoomOut") : t("zoomPhoto");
}
function moveGallery(step) {
  const total = celebration.gallery.length;
  galleryIndex = (galleryIndex + step + total) % total;
  updateLightbox();
}

function readWishes() {
  try {
    const parsed = JSON.parse(localStorage.getItem(WISH_KEY) || "[]");
    if (!Array.isArray(parsed)) return [];
    return parsed.filter((wish) => wish && typeof wish.name === "string" && typeof wish.message === "string").slice(0, 30);
  } catch {
    return [];
  }
}
function renderWishes() {
  const list = $("#wishList");
  const wishes = readWishes();
  list.replaceChildren();
  if (!wishes.length) {
    const empty = document.createElement("p");
    empty.className = "wish-empty";
    empty.textContent = t("wishesEmpty");
    list.append(empty);
    return;
  }
  const formatter = new Intl.DateTimeFormat(locale(), { dateStyle: "medium", timeZone: "Africa/Cairo" });
  wishes.forEach((wish) => {
    const card = document.createElement("article");
    card.className = "wish-card";
    const quote = document.createElement("p");
    quote.textContent = wish.message;
    const footer = document.createElement("footer");
    const name = document.createElement("strong");
    name.textContent = wish.name;
    const date = document.createElement("time");
    date.dateTime = wish.at || "";
    date.textContent = wish.at ? formatter.format(new Date(wish.at)) : "";
    footer.append(name, date);
    card.append(quote, footer);
    list.append(card);
  });
}

function duaTotal() {
  const count = Number(localStorage.getItem(DUA_KEY) || 0);
  return Number.isFinite(count) && count > 0 ? Math.floor(count) : 0;
}
function updateDuaCount() {
  const count = duaTotal();
  $("#duaCount").textContent = plainNumber(count);
  $("#duaCountLabel").textContent = count === 0 && currentLanguage === "ar" ? "دعوات" : unitLabel(count, "prayer");
}

function pageUrl() {
  if (celebration.websiteUrl) return celebration.websiteUrl;
  if (location.protocol.startsWith("http")) return location.href.split("#")[0];
  return "";
}

const toast = $("#toast");
let toastTimer;
function showToast(message) {
  clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add("visible");
  toastTimer = setTimeout(() => toast.classList.remove("visible"), 2800);
}

function setupNavigation() {
  const links = $$("[data-nav]");
  const sections = $$("main section[data-nav]");
  if (!("IntersectionObserver" in window)) {
    links.forEach((link) => link.classList.toggle("active", link.dataset.nav === "home"));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const name = entry.target.dataset.nav;
      links.forEach((link) => {
        const active = link.dataset.nav === name;
        link.classList.toggle("active", active);
        if (active) link.setAttribute("aria-current", "true");
        else link.removeAttribute("aria-current");
      });
    });
  }, { rootMargin: "-40% 0px -45%", threshold: 0 });
  sections.forEach((section) => observer.observe(section));
}

function setupReveal() {
  if (reduceMotion || !("IntersectionObserver" in window)) {
    $$(".reveal").forEach((element) => element.classList.add("visible"));
    return;
  }
  const observer = new IntersectionObserver((entries, revealObserver) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    });
  }, { threshold: 0.12 });
  $$(".reveal").forEach((element) => observer.observe(element));
}

function setupSky() {
  if (reduceMotion) return;
  const garden = document.createElement("div");
  garden.className = "garden";
  garden.setAttribute("aria-hidden", "true");
  const glyphs = ["♡", "✦", "❀", "✧", "•"];
  const colors = ["#e7a8b8", "#c9a96e", "#e3b4d4", "#f0b89a", "#8fbfa8"];
  for (let index = 0; index < 14; index += 1) {
    const petal = document.createElement("span");
    petal.className = "petal";
    petal.textContent = glyphs[index % glyphs.length];
    petal.style.left = `${(index * 6.4 + (index % 3) * 4) % 100}%`;
    petal.style.fontSize = `${11 + (index % 5) * 3}px`;
    petal.style.color = colors[index % colors.length];
    petal.style.opacity = String(0.28 + (index % 4) * 0.08);
    petal.style.animationDuration = `${16 + (index % 6) * 3}s`;
    petal.style.animationDelay = `${-index * 1.7}s`;
    garden.append(petal);
  }
  document.body.append(garden);
}

function setupOpening() {
  const opening = $("#opening");
  if (!opening) return;
  const finish = () => {
    opening.classList.add("is-done");
    opening.hidden = true;
  };
  if (reduceMotion) {
    finish();
    return;
  }
  opening.addEventListener("click", finish, { once: true });
  window.setTimeout(finish, 2000);
}

function setupParallax() {}

function setupScroll() {
  const progress = $("#scrollProgress");
  const backToTop = $("#backToTop");
  const photo = document.querySelector(".hero-photo img");
  let ticking = false;
  const update = () => {
    ticking = false;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.width = `${max > 0 ? (window.scrollY / max) * 100 : 0}%`;
    backToTop.classList.toggle("visible", window.scrollY > 500);
    if (photo && !reduceMotion) {
      const shift = Math.min(window.scrollY, 180) * 0.04;
      photo.style.transform = shift ? `translate3d(0, ${shift}px, 0)` : "";
    }
  };
  window.addEventListener("scroll", () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(update);
  }, { passive: true });
  backToTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" }));
  update();
}

function setupDua() {
  const button = $("#amenButton");
  const floater = $("#amenFloat");
  let last = 0;
  button.addEventListener("click", () => {
    const now = Date.now();
    if (now - last < 700) return;
    last = now;
    const count = duaTotal() + 1;
    localStorage.setItem(DUA_KEY, String(count));
    updateDuaCount();
    floater.textContent = t("duaPlus");
    floater.classList.remove("show");
    void floater.offsetWidth;
    floater.classList.add("show");
    if (reduceMotion) return;
    for (let index = 0; index < 6; index += 1) {
      const heart = document.createElement("span");
      heart.className = "heart-bit";
      heart.textContent = "♡";
      heart.style.left = `${button.getBoundingClientRect().left + button.offsetWidth / 2 + (index - 2.5) * 16}px`;
      heart.style.top = `${button.getBoundingClientRect().top}px`;
      heart.style.animationDelay = `${index * 0.05}s`;
      document.body.append(heart);
      setTimeout(() => heart.remove(), 1200);
    }
  });
}

function setupWishes() {
  const form = $("#wishForm");
  let lastSubmit = 0;
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    $("#wishNameError").textContent = "";
    $("#wishMessageError").textContent = "";
    if ($("#faxNumber").value) return;

    const name = cleanText($("#wishName").value, 60);
    const message = cleanText($("#wishMessage").value, 400);
    let valid = true;
    if (!name) {
      $("#wishNameError").textContent = t("nameRequired");
      valid = false;
    }
    if (!message) {
      $("#wishMessageError").textContent = t("messageRequired");
      valid = false;
    }
    if (!valid) return;
    if (Date.now() - lastSubmit < 10000) {
      showToast(t("slowDown"));
      return;
    }

    const wish = { name, message, at: new Date().toISOString() };
    const wishes = [wish, ...readWishes()].slice(0, 30);
    localStorage.setItem(WISH_KEY, JSON.stringify(wishes));
    lastSubmit = Date.now();
    form.reset();
    renderWishes();

    if (!celebration.wishesEndpoint) {
      showToast(t("savedLocal"));
      return;
    }

    const submitButton = form.querySelector('button[type="submit"]');
    const original = submitButton.textContent;
    submitButton.disabled = true;
    submitButton.textContent = t("sending");
    const body = new FormData();
    body.append("name", name);
    body.append("message", message);
    body.append("language", currentLanguage);
    body.append("_subject", currentLanguage === "ar" ? "تهنئة لخديجة" : "A wish for Khadija");
    try {
      const response = await fetch(celebration.wishesEndpoint, {
        method: "POST",
        body,
        headers: { Accept: "application/json" }
      });
      if (!response.ok) throw new Error("Wish could not be sent");
      showToast(t("sent"));
    } catch {
      showToast(t("sendFailed"));
    } finally {
      submitButton.disabled = false;
      submitButton.textContent = original;
    }
  });
}

function setupLightbox() {
  const dialog = $("#lightbox");
  const grid = $("#galleryGrid");
  grid.addEventListener("click", (event) => {
    const button = event.target.closest(".shot");
    if (!button) return;
    galleryIndex = Number(button.dataset.index);
    updateLightbox();
    dialog.showModal();
  });
  $("#lightboxClose").addEventListener("click", () => dialog.close());
  $("#lightboxPrev").addEventListener("click", () => moveGallery(-1));
  $("#lightboxNext").addEventListener("click", () => moveGallery(1));
  $("#lightboxZoom").addEventListener("click", () => setZoom(!zoomed));
  $("#lightboxImage").addEventListener("dblclick", () => setZoom(!zoomed));
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  });
  dialog.addEventListener("close", () => setZoom(false));
  dialog.addEventListener("keydown", (event) => {
    const forward = document.documentElement.dir === "rtl" ? "ArrowLeft" : "ArrowRight";
    const backward = document.documentElement.dir === "rtl" ? "ArrowRight" : "ArrowLeft";
    if (event.key === forward) moveGallery(1);
    if (event.key === backward) moveGallery(-1);
  });

  let startX = 0;
  dialog.addEventListener("touchstart", (event) => {
    startX = event.changedTouches[0].clientX;
  }, { passive: true });
  dialog.addEventListener("touchend", (event) => {
    if (zoomed) return;
    const delta = event.changedTouches[0].clientX - startX;
    if (Math.abs(delta) < 45) return;
    const rtl = document.documentElement.dir === "rtl";
    if (delta < 0) moveGallery(rtl ? -1 : 1);
    else moveGallery(rtl ? 1 : -1);
  }, { passive: true });
}

let languageApplied = false;
let duaPaused = false;
let duaPlayPending = false;
let duaMissing = false;
const fallbackEvents = ["pointerdown", "touchstart", "click", "keydown"];

function duaElement() {
  return document.getElementById("khadijaDua");
}

function duaIsPlaying() {
  const audio = duaElement();
  return Boolean(
    audio &&
    !duaMissing &&
    !audio.error &&
    audio.networkState !== HTMLMediaElement.NETWORK_NO_SOURCE &&
    audio.readyState > 0 &&
    !audio.paused &&
    !audio.ended
  );
}

function paintSoundControl() {
  const button = $("#musicButton");
  const live = $("#duaLive");
  const audio = duaElement();
  if (!button) return;
  const playing = duaIsPlaying();
  const on = playing || Boolean(audio && !duaMissing && !duaPaused && !audio.ended);
  button.classList.toggle("is-playing", on);
  button.setAttribute("aria-pressed", String(on));
  button.setAttribute("aria-label", t(on ? "pauseDua" : "playDua"));
  if (live) live.hidden = !playing;
}

function removeDuaFallback() {
  fallbackEvents.forEach((name) => document.removeEventListener(name, onFirstGesture, true));
}

function markDuaMissing() {
  duaMissing = true;
  duaPlayPending = false;
  removeDuaFallback();
  const audio = duaElement();
  if (audio && !audio.paused) audio.pause();
  paintSoundControl();
}

function playDua() {
  const audio = duaElement();
  if (!audio || duaMissing || duaPaused || duaIsPlaying()) return;
  if (audio.error) {
    markDuaMissing();
    return;
  }
  if (audio.ended) audio.currentTime = 0;
  const attempt = audio.play();
  if (!attempt || typeof attempt.then !== "function") {
    paintSoundControl();
    return;
  }
  attempt.then(() => {
    if (audio.error) markDuaMissing();
    else {
      removeDuaFallback();
      paintSoundControl();
    }
  }).catch(() => {
    if (audio.error) markDuaMissing();
    else paintSoundControl();
  });
}

function onFirstGesture(event) {
  if (event.target?.closest?.("#musicButton")) return;
  const audio = duaElement();
  if (!audio || duaPaused || duaMissing) return;
  if (audio.ended) audio.currentTime = 0;
  if (!duaIsPlaying()) playDua();
}

function setupEntryDua() {
  const audio = duaElement();
  const button = $("#musicButton");
  if (!audio || !button) return;
  audio.loop = false;
  audio.autoplay = true;
  audio.muted = false;
  audio.volume = 1;
  audio.preload = "auto";
  audio.addEventListener("error", markDuaMissing);
  audio.addEventListener("play", paintSoundControl);
  audio.addEventListener("playing", paintSoundControl);
  audio.addEventListener("pause", () => {
    paintSoundControl();
    if (!duaPaused && !audio.ended && !audio.error && audio.currentTime > 0.2) playDua();
  });
  audio.addEventListener("canplay", () => playDua(), { once: true });
  audio.addEventListener("ended", () => {
    duaPaused = false;
    removeDuaFallback();
    paintSoundControl();
  });
  button.addEventListener("click", (event) => {
    event.stopPropagation();
    if (duaIsPlaying()) {
      duaPaused = true;
      audio.pause();
      paintSoundControl();
      return;
    }
    duaPaused = false;
    if (audio.ended) audio.currentTime = 0;
    playDua();
  });
  fallbackEvents.forEach((name) => document.addEventListener(name, onFirstGesture, true));
  playDua();
}

$$("[data-lang]").forEach((button) => {
  button.addEventListener("click", () => applyLanguage(button.dataset.lang));
});

setupSky();
setupOpening();
setupParallax();
setupScroll();
setupNavigation();
setupReveal();
setupDua();
setupWishes();
setupLightbox();
setupEntryDua();
applyLanguage(currentLanguage);
window.setInterval(updateElapsed, 1000);
