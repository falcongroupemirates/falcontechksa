// Email templates (HTML + plain text) for the website forms.
// Inline styles and tables only — that's what email clients render reliably.

import { emailConfig } from "./config";

const BRAND = "#e31b23";
const INK = "#0b2a45";
const PHONE = "+966 59 276 7326";

export function escapeHtml(s = "") {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

const nl2br = (s) => escapeHtml(s).replace(/\r?\n/g, "<br>");

function layout({ dir = "ltr", lang = "en", heading, body }) {
  const align = dir === "rtl" ? "right" : "left";
  return `<!doctype html>
<html lang="${lang}" dir="${dir}">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#ffffff;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#ffffff;">
    <tr><td>
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100%;background:#ffffff;font-family:'Segoe UI',Tahoma,Arial,sans-serif;color:#1f2933;text-align:${align};" dir="${dir}">
        <tr><td style="background:${INK};padding:20px 28px;border-bottom:4px solid ${BRAND};">
          <div style="font-size:20px;font-weight:600;color:#ffffff;">${escapeHtml(heading)}</div>
        </td></tr>
        <tr><td style="padding:24px 28px;font-size:15px;line-height:1.6;">${body}</td></tr>
        <tr><td style="padding:20px 28px;background:#f8fafb;border-top:1px solid #e5e9ed;font-size:12px;color:#6b7785;">
          <img src="${emailConfig.logoUrl}" width="160" alt="Falcon Technologies" style="display:block;width:160px;max-width:50%;height:auto;border:0;margin-bottom:10px;">
          ${
            lang === "ar"
              ? `فالكون تكنولوجيز — الدمام، المملكة العربية السعودية · <span dir="ltr">${PHONE}</span>`
              : `Falcon Technologies — Dammam, Saudi Arabia · ${PHONE}`
          }
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

function rowsTable(rows, dir = "ltr") {
  const labelAlign = dir === "rtl" ? "right" : "left";
  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;margin:8px 0 4px;">
${rows
  .filter(([, v]) => v)
  .map(
    ([label, value]) => `  <tr>
    <td style="padding:9px 12px 9px 0;border-bottom:1px solid #edf0f3;width:38%;vertical-align:top;font-size:13px;color:#6b7785;text-align:${labelAlign};">${escapeHtml(label)}</td>
    <td style="padding:9px 0;border-bottom:1px solid #edf0f3;vertical-align:top;font-size:15px;color:#1f2933;"><bdi>${nl2br(value)}</bdi></td>
  </tr>`,
  )
  .join("\n")}
</table>`;
}

function rowsText(rows) {
  return rows
    .filter(([, v]) => v)
    .map(([label, value]) => `${label}: ${value}`)
    .join("\n");
}

/* --------------------------------------------------------------- team */
// Notification to the Falcon team. Always in English; the visitor's own
// words are included as written (Arabic stays Arabic).
export function teamEmail({ heading, rows, message }) {
  const html = layout({
    heading,
    body: `
      ${rowsTable(rows)}
      ${
        message?.value
          ? `
      <div style="margin-top:18px;font-size:13px;color:#6b7785;">${escapeHtml(message.label)}</div>
      <div style="margin-top:6px;padding:14px 16px;background:#f3f5f7;border-left:3px solid ${BRAND};border-radius:3px;" dir="auto">${nl2br(message.value)}</div>`
          : ""
      }`,
  });
  const text = [
    heading,
    "",
    rowsText(rows),
    message?.value ? `\n${message.label}:\n${message.value}` : "",
  ].join("\n");
  return { html, text };
}

/* ----------------------------------------------------------- customer */
const COPY = {
  en: {
    enquiry: {
      subject: "Thank you for contacting Falcon Technologies",
      heading: "Thank you for contacting us",
      body: "Thank you for contacting Falcon Technologies. Our team will get back to you shortly.",
    },
    rfq: {
      subject: "Thank you for your quote request — Falcon Technologies",
      heading: "Thank you for your quote request",
      body: "Thank you for your quote request. Our team will contact you shortly.",
    },
    hello: (name) => `Hello ${name},`,
  },
  ar: {
    enquiry: {
      subject: "شكرًا لتواصلك مع فالكون تكنولوجيز",
      heading: "شكرًا لتواصلك معنا",
      body: "شكرًا لتواصلك مع فالكون تكنولوجيز. سيتواصل معك فريقنا قريبًا.",
    },
    rfq: {
      subject: "شكرًا لطلبك عرض السعر — فالكون تكنولوجيز",
      heading: "شكرًا لطلبك عرض السعر",
      body: "شكرًا لطلبك عرض السعر. سيتواصل معك فريقنا قريبًا.",
    },
    hello: (name) => `مرحبًا ${name}،`,
  },
};

// Short thank-you to the visitor, in the language of the page they used.
export function customerEmail({ locale = "en", kind, name }) {
  const c = COPY[locale] || COPY.en;
  const k = c[kind];
  const html = layout({
    dir: locale === "ar" ? "rtl" : "ltr",
    lang: locale,
    heading: k.heading,
    body: `
      <p style="margin:0 0 12px;">${escapeHtml(c.hello(name))}</p>
      <p style="margin:0;">${escapeHtml(k.body)}</p>`,
  });
  const text = [c.hello(name), "", k.body].join("\n");
  return { subject: k.subject, html, text };
}
