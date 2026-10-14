"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Script from "next/script";

// Bot protection for the website forms (used by the English and Arabic
// Contact and Request-a-Quote forms).
//
//   const guard = useFormGuard();
//   fetch(..., { body: JSON.stringify({ ...form, ...guard.fields() }) })
//   <FormGuard guard={guard} />   // renders Cloudflare Turnstile if configured
//   guard.reset()                 // after each submit attempt
//
// The server checks the signed token (and Turnstile, when keys are set).

const SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || "";

export function useFormGuard() {
  // Refs, not state: the values are only read at submit time, and a stable
  // guard object keeps the Turnstile widget from re-rendering.
  const token = useRef("");
  const turnstile = useRef("");
  const widgetId = useRef(null);

  const loadToken = useCallback(async () => {
    try {
      const res = await fetch("/api/form-token", { cache: "no-store" });
      token.current = (await res.json()).token || "";
    } catch {
      token.current = "";
    }
  }, []);

  useEffect(() => {
    loadToken();
  }, [loadToken]);

  return useMemo(
    () => ({
      fields: () => ({ _token: token.current, _turnstile: turnstile.current }),
      setTurnstile: (t) => {
        turnstile.current = t;
      },
      // After a submit attempt: Turnstile tokens are single-use. The form
      // token is reusable, so it's only re-fetched if it never loaded.
      reset: () => {
        if (!token.current) loadToken();
        turnstile.current = "";
        if (widgetId.current != null && window.turnstile) {
          window.turnstile.reset(widgetId.current);
        }
      },
      widgetId,
    }),
    [loadToken],
  );
}

export default function FormGuard({ guard }) {
  const box = useRef(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!SITE_KEY || !ready || !box.current || guard.widgetId.current != null) return;
    guard.widgetId.current = window.turnstile.render(box.current, {
      sitekey: SITE_KEY,
      appearance: "interaction-only", // invisible unless Cloudflare needs a click
      language: "auto",
      callback: (t) => guard.setTurnstile(t),
      "expired-callback": () => guard.setTurnstile(""),
      "error-callback": () => guard.setTurnstile(""),
    });
    return () => {
      if (guard.widgetId.current != null && window.turnstile) {
        window.turnstile.remove(guard.widgetId.current);
        guard.widgetId.current = null;
      }
    };
  }, [ready, guard]);

  if (!SITE_KEY) return null;

  return (
    <>
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
        strategy="afterInteractive"
        onReady={() => setReady(true)}
      />
      <div ref={box} />
    </>
  );
}
