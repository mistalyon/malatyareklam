# Form Backend Deployment Runbook

This document describes the manual steps required to finish wiring the contact form backend that lives in `src/worker/index.ts`. The code side is already in place; the items below require credentials or DNS changes that must be performed by a maintainer.

## 1. Verify the Resend domain

1. Open Resend ▸ Domains ▸ `malatyareklam.com` (region: Ireland / `eu-west-1`).
2. Copy each DNS record (DKIM, SPF MX, SPF TXT, DMARC) and add them in Cloudflare DNS for `malatyareklam.com`.
   - DKIM: `TXT  resend._domainkey  p=MIGfMA…IDAQAB`
   - SPF MX: `MX   send  feedback-smtp.eu-west-1.amazonses.com  priority 10`
   - SPF TXT: `TXT  send  v=spf1 include:amazonses.com ~all`
   - DMARC: `TXT  _dmarc  v=DMARC1; p=none;`
3. Back in Resend, click **Verify records**. Wait until every row turns green.

## 2. Create the Resend API key

1. Resend ▸ API keys ▸ **Create API key**.
2. Name it `malatyareklam-prod`, scope **Full access** (or Sending access only).
3. Copy the key (it will only be shown once).

## 3. Add Cloudflare Worker secrets

In the project root, with Wrangler logged in:

```bash
wrangler secret put RESEND_API_KEY        # paste the Resend key
wrangler secret put CONTACT_TO_EMAIL      # e.g. info@malatyareklam.com
```

`CONTACT_FROM_EMAIL` is already set as a public var in `wrangler.jsonc` and can be overridden the same way if needed.

## 4. Build and deploy

```bash
npm install
npm run build:all   # astro build  +  esbuild worker bundle
npx wrangler deploy
```

The Worker bundle is written to `worker-dist/index.js` and is registered as `main` in `wrangler.jsonc`. Static assets continue to be served from `./dist` via the `ASSETS` binding.

## 5. Smoke test

```bash
curl -sS -X POST https://malatyareklam.com/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","phone":"05551112233","email":"test@example.com","message":"Form backend smoke test","kvkk":"on"}'
```

Expected response: `{"ok":true}`. The submission should arrive at `CONTACT_TO_EMAIL` within seconds, with reply-to set to the visitor address.

## 6. Hardening checklist

- [ ] Add Cloudflare Turnstile to the form once volume warrants it (current honeypot covers naive bots).
- [ ] Enable rate limiting via Cloudflare WAF rule on `/api/contact` (e.g. 5 req/min per IP).
- [ ] Tighten `Access-Control-Allow-Origin` if subdomains are added.
- [ ] Move from DMARC `p=none` to `p=quarantine` after a couple of weeks of clean reports.

