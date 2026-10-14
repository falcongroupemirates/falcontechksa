// Shared request helpers for the form API routes: validation, spam checks,
// rate limiting and English/Arabic error messages.

const MESSAGES = {
  en: {
    invalid: "Invalid request. Please refresh the page and try again.",
    missing: "Please fill in the required fields.",
    email: "Please enter a valid email address.",
    phone: "Please enter a valid mobile number.",
    tooLong: "Your message is too long. Please shorten it and try again.",
    rate: "Too many submissions. Please wait a few minutes and try again.",
    verify: "We couldn't verify your submission. Please try again.",
    failed: "We couldn't send your message right now. Please call or WhatsApp us on +966 59 276 7326.",
  },
  ar: {
    invalid: "طلب غير صالح. يرجى تحديث الصفحة والمحاولة مرة أخرى.",
    missing: "يرجى تعبئة الحقول المطلوبة.",
    email: "يرجى إدخال بريد إلكتروني صحيح.",
    phone: "يرجى إدخال رقم جوال صحيح.",
    tooLong: "رسالتك طويلة جدًا. يرجى اختصارها والمحاولة مرة أخرى.",
    rate: "عدد كبير من الطلبات. يرجى الانتظار بضع دقائق ثم المحاولة مرة أخرى.",
    verify: "تعذّر التحقق من طلبك. يرجى المحاولة مرة أخرى.",
    failed: "تعذّر إرسال رسالتك الآن. يرجى الاتصال بنا أو مراسلتنا عبر واتساب على ‎+966 59 276 7326‎.",
  },
};

// The Arabic forms live under /ar, so the page the form was sent from tells
// us which language to answer in.
export function localeFrom(request) {
  const ref = request.headers.get("referer") || "";
  try {
    const { pathname } = new URL(ref);
    if (pathname === "/ar" || pathname.startsWith("/ar/")) return "ar";
  } catch {}
  return "en";
}

export const t = (locale, key) => (MESSAGES[locale] || MESSAGES.en)[key];

export function pageFrom(request) {
  return request.headers.get("referer") || "";
}

export function clientIp(request) {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
    request.headers.get("x-real-ip") ||
    "unknown"
  );
}

// Trim, collapse to a string and cap the length of every field.
export function clean(value, max = 200) {
  if (value == null) return "";
  return String(value).replace(/\u0000/g, "").trim().slice(0, max);
}

// For subject lines: no line breaks (prevents header injection).
export const oneLine = (s) => s.replace(/[\r\n]+/g, " ").trim();

export const isEmail = (s) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(s);
export const isPhone = (s) => (s.match(/\d/g) || []).length >= 7;

// Best-effort limit: 5 submissions per IP per 10 minutes, per server instance.
const hits = new Map();
export function rateLimited(ip, limit = 5, windowMs = 10 * 60 * 1000) {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < windowMs);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) hits.clear();
  return recent.length > limit;
}
