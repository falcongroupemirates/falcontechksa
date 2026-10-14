import { NextResponse } from "next/server";
import { emailConfig } from "@/lib/email/config";
import { deliver } from "@/lib/email/send";
import { screen } from "@/lib/email/spam";
import { teamEmail, customerEmail } from "@/lib/email/templates";
import {
  localeFrom, t, clientIp, clean, oneLine, isEmail, isPhone, rateLimited,
} from "@/lib/email/request";

// Request for Quote — /request-a-quote (English and Arabic).
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
    need: oneLine(clean(body.need, 120)),
    requirement: clean(body.requirement, 500),
    site: clean(body.site, 120),
    name: oneLine(clean(body.name, 120)),
    company: oneLine(clean(body.company, 160)),
    mobile: clean(body.mobile, 40),
    email: clean(body.email, 200),
    project_location: clean(body.project_location, 200),
    details: clean(body.details, 5000),
  };

  if (!data.need || !data.name || !data.mobile) return fail("missing");
  if (!isPhone(data.mobile)) return fail("phone");
  if (data.email && !isEmail(data.email)) return fail("email");
  if (String(body.details || "").length > 5000) return fail("tooLong");

  const ip = clientIp(request);
  if (rateLimited(ip)) return fail("rate", 429);

  // Spam / bot checks — see lib/email/spam.js
  const spam = await screen(request, body, {
    name: data.name,
    text: [data.requirement, data.project_location, data.details].join("\n"),
    email: data.email || data.mobile || "",
    ip,
  });
  if (spam.block) {
    console.info(`[spam] blocked (${spam.reason}) from ${ip}`);
    if (spam.block === "silent") return NextResponse.json({ ok: true });
    return fail(spam.reason.startsWith("turnstile") ? "verify" : "invalid");
  }

  const team = teamEmail({
    heading: "New request for quote",
    rows: [
      ["Service needed", data.need],
      ["Basic requirement", data.requirement],
      ["Installation / site", data.site],
      ["Name", data.name],
      ["Company", data.company],
      ["Mobile / WhatsApp", data.mobile],
      ["Email", data.email],
      ["Project location", data.project_location],
    ],
    message: { label: "Additional details", value: data.details },
  });

  const confirmation = data.email
    ? customerEmail({
        locale,
        kind: "rfq",
        name: data.name,
      })
    : null;

  const sent = await deliver({
    to: emailConfig.rfqTo,
    subject: `RFQ: ${data.need} — ${data.name}${data.company ? `, ${data.company}` : ""}`,
    replyTo: data.email,
    team,
    customer: confirmation ? { to: data.email, ...confirmation } : null,
    tag: "rfq",
  });

  return sent ? NextResponse.json({ ok: true }) : fail("failed", 502);
}
