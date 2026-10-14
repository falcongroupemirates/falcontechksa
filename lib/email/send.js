import { emailConfig, getResend } from "./config";

// Sends the team notification and (optionally) the visitor's confirmation.
// Returns true when the team email was accepted by Resend.
export async function deliver({
  to,
  cc,
  subject,
  replyTo,
  team,
  customer,
  tag,
}) {
  const resend = getResend();

  if (!resend) {
    // No API key: fine in development (logged), an error in production.
    console.warn(
      `[email] RESEND_API_KEY, EMAIL_FROM or EMAIL_TO is not set — "${subject}" was not sent.`,
    );
    if (process.env.NODE_ENV !== "production") {
      console.log(team.text);
      return true;
    }
    return false;
  }

  const { error } = await resend.emails.send({
    from: emailConfig.from,
    to,
    cc: cc?.length ? cc : undefined,
    bcc: emailConfig.bcc.length ? emailConfig.bcc : undefined,
    subject,
    html: team.html,
    text: team.text,
    replyTo: replyTo || undefined,
    tags: [{ name: "form", value: tag }],
  });

  if (error) {
    console.error(`[email] team notification failed (${tag}):`, error);
    return false;
  }

  if (customer && emailConfig.autoReply) {
    const res = await resend.emails.send({
      from: emailConfig.from,
      to: customer.to,
      subject: customer.subject,
      html: customer.html,
      text: customer.text,
      replyTo: to[0],
      tags: [{ name: "form", value: `${tag}-autoreply` }],
    });
    // The enquiry already reached the team, so a failed confirmation is
    // logged but doesn't fail the request.
    if (res.error)
      console.error(`[email] auto-reply failed (${tag}):`, res.error);
  }

  return true;
}
