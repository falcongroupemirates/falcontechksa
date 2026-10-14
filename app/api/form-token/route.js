import { NextResponse } from "next/server";
import { issueFormToken } from "@/lib/email/spam";

// Signed timestamp the forms fetch when they load (see lib/email/spam.js).
export const dynamic = "force-dynamic";

export function GET() {
  return NextResponse.json(
    { token: issueFormToken() },
    { headers: { "Cache-Control": "no-store" } },
  );
}
