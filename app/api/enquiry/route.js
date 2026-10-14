import { NextResponse } from "next/server";
import { emailConfig } from "@/lib/email/config";
import { deliver } from "@/lib/email/send";
import { screen } from "@/lib/email/spam";
import { teamEmail, customerEmail } from "@/lib/email/templates";
import {
  localeFrom, t, clientIp, clean, oneLine, isEmail, rateLimited,
} from "@/lib/email/request";

// General enquiry — Contact Us page (English and Arabic).
export async function POST(request) {
  const locale = localeFrom(request);
  const fail = (key, status = 400) =>
    NextResponse.json({ ok: false, error: t(locale, key) }, { status });

  let body;
  try {
    body = await request.json();
  } catch {
    return fail("invalid");
  }
  if (!body || typeof body !== "object") return fail("invalid");

  const data = {
    name: oneLine(clean(body.name, 120)),
    company: oneLine(clean(body.company, 160)),
    email: clean(body.email, 200),
    phone: clean(body.phone, 40),
    subject: oneLine(clean(body.subject, 120)),
    message: clean(body.message, 5000),
  };

  if (!data.name || !data.email || !data.message) return fail("missing");
  if (!isEmail(data.email)) return fail("email");
  if (String(body.message || "").length > 5000) return fail("tooLong");

  const ip = clientIp(request);
  if (rateLimited(ip)) return fail("rate", 429);

  // Spam / bot checks — see lib/email/spam.js
  const spam = await screen(request, body, {
    name: data.name,
    text: data.message,
    email: data.email || data.mobile || "",
    ip,
  });
  if (spam.block) {
    console.info(`[spam] blocked (${spam.reason}) from ${ip}`);
    if (spam.block === "silent") return NextResponse.json({ ok: true });
    return fail(spam.reason.startsWith("turnstile") ? "verify" : "invalid");
  }

  const team = teamEmail({
    heading: "New website enquiry",
    rows: [
      ["Name", data.name],
      ["Company", data.company],
      ["Email", data.email],
      ["Phone", data.phone],
      ["Subject", data.subject],
    ],
    message: { label: "Message", value: data.message },
  });

  const confirmation = customerEmail({
    locale,
    kind: "enquiry",
    name: data.name,
  });

  const sent = await deliver({
    to: emailConfig.enquiryTo,
    cc: emailConfig.enquiryCc,
    subject: `Website enquiry: ${data.subject || "General"} — ${data.name}`,
    replyTo: data.email,
    team,
    customer: { to: data.email, ...confirmation },
    tag: "enquiry",
  });

  return sent ? NextResponse.json({ ok: true }) : fail("failed", 502);
}
