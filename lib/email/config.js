// Email settings — read only from environment variables (.env.local locally,
// Project Settings → Environment Variables on Vercel). No hard-coded defaults.
import { Resend } from "resend";

const list = (v) =>
  (v || "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);

export const emailConfig = {
  apiKey: process.env.RESEND_API_KEY,
  // Must be an address on a domain verified in Resend.
  from: process.env.EMAIL_FROM,
  // Team inboxes that receive the forms (comma-separated). EMAIL_TO_ENQUIRY /
  // EMAIL_TO_RFQ are optional per-form overrides of EMAIL_TO.
  enquiryTo: list(process.env.EMAIL_TO_ENQUIRY || process.env.EMAIL_TO),
  rfqTo: list(process.env.EMAIL_TO_RFQ || process.env.EMAIL_TO),
  // Optional CC / BCC on the team email (comma-separated, several allowed).
  // EMAIL_CC_ENQUIRY / EMAIL_CC_RFQ override EMAIL_CC per form.
  enquiryCc: list(process.env.EMAIL_CC_ENQUIRY || process.env.EMAIL_CC),
  rfqCc: list(process.env.EMAIL_CC_RFQ || process.env.EMAIL_CC),
  bcc: list(process.env.EMAIL_BCC),
  // Send the visitor a confirmation copy ("we received your message").
  autoReply: process.env.EMAIL_AUTOREPLY === "true",
  // Logo in the email footer (light background, so the black logo) —
  // must be a public https URL.
  logoUrl:
    process.env.EMAIL_LOGO_URL ||
    `${process.env.NEXT_PUBLIC_SITE_URL}/assets/logos/falcon-tech-ksa-black-logo.png`,
};

let client;
// Returns null (emails not sent) until the API key, sender and recipients are set.
export function getResend() {
  const { apiKey, from, enquiryTo, rfqTo } = emailConfig;
  if (!apiKey || !from || (!enquiryTo.length && !rfqTo.length)) return null;
  client ??= new Resend(apiKey);
  return client;
}
