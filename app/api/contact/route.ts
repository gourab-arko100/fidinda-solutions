import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const DIVISION_LABELS: Record<string, string> = {
  financial: "FINANCIAL — Fidinda Financial Solutions",
  management: "MANAGEMENT — Fidinda Management Solutions",
  health: "HEALTH — Fidinda Health Solutions",
  travel: "TRAVEL — Fidinda Travel Solutions",
  "not-sure": "NOT SURE — please route",
};

const LANGUAGES = ["English", "Khmer"];

/* Basic in-memory rate limit (best effort on serverless). */
const hits = new Map<string, { count: number; ts: number }>();
const WINDOW_MS = 10 * 60 * 1000;
const MAX_HITS = 5;

function limited(ip: string) {
  const now = Date.now();
  const h = hits.get(ip);
  if (!h || now - h.ts > WINDOW_MS) {
    hits.set(ip, { count: 1, ts: now });
    return false;
  }
  h.count += 1;
  return h.count > MAX_HITS;
}

const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const str = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "");

export async function POST(req: Request) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) {
    console.error("Contact form: TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID is not set.");
    return NextResponse.json(
      { ok: false, error: "The contact form is not configured yet. Please call or email us directly." },
      { status: 500 },
    );
  }

  const ip = (req.headers.get("x-forwarded-for") || "").split(",")[0].trim() || "unknown";
  if (limited(ip)) {
    return NextResponse.json({ ok: false, error: "Too many messages. Please try again in a few minutes." }, { status: 429 });
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: bots fill hidden fields — pretend success.
  if (str(body.company, 200)) return NextResponse.json({ ok: true });

  const name = str(body.name, 120);
  const email = str(body.email, 160);
  const phone = str(body.phone, 40);
  const division = str(body.division, 20);
  const language = str(body.language, 20);
  const message = str(body.message, 3000);

  const digits = phone.replace(/\D/g, "");
  if (
    name.length < 2 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email) ||
    digits.length < 7 ||
    digits.length > 15 ||
    !(division in DIVISION_LABELS) ||
    !LANGUAGES.includes(language) ||
    message.length < 10
  ) {
    return NextResponse.json({ ok: false, error: "Please check the form fields and try again." }, { status: 422 });
  }

  const time = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Asia/Phnom_Penh",
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date());

  const text = [
    "📩 <b>New enquiry — fidindasolutions.com</b>",
    "",
    `🏷 <b>Division:</b> <b>${esc(DIVISION_LABELS[division])}</b>`,
    "",
    `👤 <b>Name:</b> ${esc(name)}`,
    `📧 <b>Email:</b> ${esc(email)}`,
    `📱 <b>Phone / WhatsApp:</b> ${esc(phone)}`,
    `🗣 <b>Preferred language:</b> ${esc(language)}`,
    "",
    "💬 <b>Message:</b>",
    esc(message),
    "",
    `🕒 ${esc(time)} (Phnom Penh)`,
  ].join("\n");

  try {
    const tg = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: chatId, text, parse_mode: "HTML", disable_web_page_preview: true }),
      cache: "no-store",
    });
    if (!tg.ok) {
      console.error("Telegram error:", tg.status, await tg.text());
      return NextResponse.json({ ok: false, error: "We couldn't send your message. Please try again or call us." }, { status: 502 });
    }
  } catch (err) {
    console.error("Telegram request failed:", err);
    return NextResponse.json({ ok: false, error: "We couldn't send your message. Please try again or call us." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
