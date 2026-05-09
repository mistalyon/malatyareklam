export interface Env {
  ASSETS: Fetcher;
  RESEND_API_KEY: string;
  CONTACT_TO_EMAIL: string;
  CONTACT_FROM_EMAIL?: string;
}

interface ContactPayload {
  name?: string;
  phone?: string;
  email?: string;
  service?: string;
  message?: string;
  kvkk?: boolean | string;
  // Honeypot field, must remain empty
  website?: string;
}

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': 'https://malatyareklam.com',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Max-Age': '86400',
};

function json(body: unknown, status = 200, extraHeaders: Record<string, string> = {}): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'no-store',
      ...CORS_HEADERS,
      ...extraHeaders,
    },
  });
}

function sanitize(value: string | undefined, max: number): string {
  if (!value) return '';
  return value.toString().slice(0, max).replace(/[\u0000-\u001F\u007F]/g, ' ').trim();
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPhone(phone: string): boolean {
  const digits = phone.replace(/[^0-9]/g, '');
  return digits.length >= 7 && digits.length <= 15;
}

async function sendViaResend(apiKey: string, payload: Record<string, unknown>): Promise<{ ok: true } | { ok: false; status: number; detail: unknown }> {
  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
  if (!response.ok) {
    let detail: unknown;
    try { detail = await response.json(); } catch { detail = await response.text().catch(() => null); }
    return { ok: false, status: response.status, detail };
  }
  return { ok: true };
}

async function handleContact(request: Request, env: Env): Promise<Response> {
  if (request.method === 'OPTIONS') {
    return new Response(null, { status: 204, headers: CORS_HEADERS });
  }
  if (request.method !== 'POST') {
    return json({ ok: false, error: 'method_not_allowed' }, 405);
  }

  let payload: ContactPayload;
  try {
    const contentType = request.headers.get('content-type') || '';
    if (contentType.includes('application/json')) {
      payload = await request.json<ContactPayload>();
    } else {
      const form = await request.formData();
      payload = Object.fromEntries(form.entries()) as unknown as ContactPayload;
    }
  } catch {
    return json({ ok: false, error: 'invalid_body' }, 400);
  }

  // Honeypot check - bots tend to fill every field
  if (payload.website && payload.website.toString().trim().length > 0) {
    return json({ ok: true });
  }

  const name = sanitize(payload.name, 200);
  const phone = sanitize(payload.phone, 50);
  const email = sanitize(payload.email, 200);
  const service = sanitize(payload.service, 200);
  const message = sanitize(payload.message, 4000);
  const kvkkAccepted = payload.kvkk === true || payload.kvkk === 'on' || payload.kvkk === 'true' || payload.kvkk === '1';

  const errors: Record<string, string> = {};
  if (name.length < 2) errors.name = 'Ad Soyad gereklidir.';
  if (!isValidPhone(phone)) errors.phone = 'Ge\u00e7erli bir telefon numaras\u0131 giriniz.';
  if (!isValidEmail(email)) errors.email = 'Ge\u00e7erli bir e-posta giriniz.';
  if (message.length < 10) errors.message = 'Mesaj en az 10 karakter olmal\u0131d\u0131r.';
  if (!kvkkAccepted) errors.kvkk = 'KVKK onay\u0131 gereklidir.';

  if (Object.keys(errors).length > 0) {
    return json({ ok: false, error: 'validation_failed', fields: errors }, 422);
  }

  if (!env.RESEND_API_KEY || !env.CONTACT_TO_EMAIL) {
    return json({ ok: false, error: 'mailer_not_configured' }, 503);
  }

  const fromAddress = env.CONTACT_FROM_EMAIL || 'Malatya Reklam <noreply@malatyareklam.com>';
  const submittedAt = new Date().toISOString();

  const subject = `Yeni teklif talebi - ${name}`;
  const htmlBody = `<!doctype html><html><body style="font-family:Inter,Arial,sans-serif;color:#111">
<h2 style="margin:0 0 12px">Yeni teklif talebi</h2>
<p style="margin:0 0 16px;color:#555">malatyareklam.com ileti\u015fim formundan g\u00f6nderildi.</p>
<table cellpadding="6" style="border-collapse:collapse">
<tr><td style="color:#888">Ad Soyad</td><td><strong>${escapeHtml(name)}</strong></td></tr>
<tr><td style="color:#888">Telefon</td><td>${escapeHtml(phone)}</td></tr>
<tr><td style="color:#888">E-Posta</td><td>${escapeHtml(email)}</td></tr>
<tr><td style="color:#888">Hizmet</td><td>${escapeHtml(service || '-')}</td></tr>
<tr><td style="color:#888">KVKK</td><td>onayland\u0131 (${escapeHtml(submittedAt)})</td></tr>
</table>
<h3 style="margin:16px 0 8px">Mesaj</h3>
<p style="white-space:pre-wrap;line-height:1.55">${escapeHtml(message)}</p>
</body></html>`;

  const textBody = [
    'Yeni teklif talebi - malatyareklam.com',
    '',
    `Ad Soyad : ${name}`,
    `Telefon  : ${phone}`,
    `E-Posta  : ${email}`,
    `Hizmet   : ${service || '-'}`,
    `KVKK     : onayland\u0131 (${submittedAt})`,
    '',
    'Mesaj:',
    message,
  ].join('\n');

  try {
    const result = await sendViaResend(env.RESEND_API_KEY, {
      from: fromAddress,
      to: env.CONTACT_TO_EMAIL,
      reply_to: email,
      subject,
      html: htmlBody,
      text: textBody,
      headers: {
        'X-Entity-Ref-ID': crypto.randomUUID(),
      },
    });

    if (!result.ok) {
      console.error('resend_error', result.status, result.detail);
      return json({ ok: false, error: 'send_failed' }, 502);
    }

    return json({ ok: true });
  } catch (err) {
    console.error('contact_exception', err);
    return json({ ok: false, error: 'internal_error' }, 500);
  }
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname === '/api/contact') {
      return handleContact(request, env);
    }

    // All other routes fall through to the static asset binding.
    return env.ASSETS.fetch(request);
  },
} satisfies ExportedHandler<Env>;
