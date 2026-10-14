// Server-side spam / bot checks for the website forms.
//
// Layers (cheapest first):
//   1. Origin check     – the POST must come from this website.
//   2. Honeypot         – hidden field only bots fill in.
//   3. Form token       – signed by the server when the form loads; rejects
//                         direct API posts and submissions faster than 3 s.
//   4. Content rules    – links / HTML / BBCode in the text, URLs in the name.
//   5. Duplicates       – same sender + same text within 10 minutes.
//   6. Turnstile        – Cloudflare's invisible bot check, if keys are set.
// Rate limiting lives in request.js.

import crypto from "node:crypto";

const MIN_FILL_MS = 3000; // humans don't fill a form in under 3 seconds
const MAX_AGE_MS = 6 * 60 * 60 * 1000; // token valid for 6 hours

// HMAC secret: FORM_SECRET if set, otherwise derived from the Resend key so it
// is stable across serverless instances. Dev fallback: per-process random.
const SECRET =
  process.env.FORM_SECRET ||
  (process.env.RESEND_API_KEY
    ? crypto.createHash("sha256").update(`form:${process.env.RESEND_API_KEY}`).digest("hex")
    : crypto.randomBytes(32).toString("hex"));

const sign = (value) => crypto.createHmac("sha256", SECRET).update(value).digest("base64url");

export function issueFormToken() {
  const issued = Date.now().toString(36);
  const nonce = crypto.randomBytes(6).toString("base64url");
  const body = `${issued}.${nonce}`;
  return `${body}.${sign(body)}`;
}

// Returns null when OK, otherwise a reason string.
export function checkFormToken(token) {
  if (typeof token !== "string") return "token-missing";
  const [issued, nonce, mac] = token.split(".");
  if (!issued || !nonce || !mac) return "token-malformed";
  const expected = sign(`${issued}.${nonce}`);
  if (mac.length !== expected.length ||
      !crypto.timingSafeEqual(Buffer.from(mac), Buffer.from(expected))) return "token-forged";
  const age = Date.now() - parseInt(issued, 36);
  if (Number.isNaN(age) || age < 0) return "token-invalid";
  if (age < MIN_FILL_MS) return "too-fast";
  if (age > MAX_AGE_MS) return "token-expired";
  return null;
}

// The browser always sends Origin on a fetch POST; it must be this site.
export function checkOrigin(request) {
  const origin = request.headers.get("origin") || request.headers.get("referer");
  if (!origin) return "no-origin";
  let host;
  try { host = new URL(origin).host; } catch { return "bad-origin"; }
  const allowed = new Set([request.headers.get("x-forwarded-host"), request.headers.get("host")]);
  try { allowed.add(new URL(process.env.NEXT_PUBLIC_SITE_URL || "").host); } catch {}
  for (const h of (process.env.FORM_ALLOWED_HOSTS || "").split(",")) if (h.trim()) allowed.add(h.trim());
  return allowed.has(host) ? null : "foreign-origin";
}

const URL_RE = /(https?:\/\/|www\.)\S+/i;
const URL_RE_ALL = /(https?:\/\/|www\.)\S+/gi;

// Free-text checks typical of link/SEO spam.
export function checkContent({ name = "", text = "" }) {
  if (URL_RE.test(name) || /[<>]/.test(name)) return "name-has-link";
  if (/<a\s|\[url[=\]]|\[link[=\]]/i.test(text)) return "markup-link";
  if ((text.match(URL_RE_ALL) || []).length > 2) return "too-many-links";
  return null;
}

// Same sender + same text within 10 minutes → treat as a duplicate.
const seen = new Map();
export function isDuplicate(key, windowMs = 10 * 60 * 1000) {
  const hash = crypto.createHash("sha1").update(key).digest("hex");
  const now = Date.now();
  for (const [k, t] of seen) if (now - t > windowMs) seen.delete(k);
  if (seen.has(hash)) return true;
  seen.set(hash, now);
  return false;
}

// Cloudflare Turnstile — only enforced when TURNSTILE_SECRET_KEY is set.
export async function checkTurnstile(token, ip) {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return null;
  if (!token) return "turnstile-missing";
  try {
    const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      headers: { "content-type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ secret, response: token, ...(ip && ip !== "unknown" ? { remoteip: ip } : {}) }),
    });
    const data = await res.json();
    return data.success ? null : "turnstile-failed";
  } catch (err) {
    console.error("[spam] Turnstile verify error:", err);
    return null; // don't lose real enquiries if Cloudflare is unreachable
  }
}

// Runs every check. Returns { block: "silent" | "error" | null, reason }.
// "silent" → pretend success (don't teach bots); "error" → ask the visitor to retry.
export async function screen(request, body, { name, text, email, ip }) {
  const origin = checkOrigin(request);
  if (origin) return { block: "error", reason: origin };

  if (body?.company_website) return { block: "silent", reason: "honeypot" };

  const token = checkFormToken(body?._token);
  if (token === "too-fast") return { block: "silent", reason: token };
  if (token) return { block: "error", reason: token };

  const content = checkContent({ name, text });
  if (content) return { block: "silent", reason: content };

  const ts = await checkTurnstile(body?._turnstile, ip);
  if (ts) return { block: "error", reason: ts };

  if (isDuplicate(`${email}|${name}|${text}`)) return { block: "silent", reason: "duplicate" };

  return { block: null };
}
