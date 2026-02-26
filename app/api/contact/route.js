import { NextResponse } from "next/server";

const RESEND_API_URL = "https://api.resend.com/emails";

function jsonError(message, status = 400) {
  return NextResponse.json({ ok: false, message }, { status });
}

async function readResendError(response) {
  try {
    const data = await response.json();
    return data?.message || data?.error || data?.name || "Unknown email provider error.";
  } catch {
    return "Unknown email provider error.";
  }
}

export async function POST(req) {
  try {
    const body = await req.json();
    const name = String(body?.name || "").trim();
    const email = String(body?.email || "").trim();
    const message = String(body?.message || "").trim();

    if (!name || !email || !message) {
      return jsonError("Please fill all fields.");
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      return jsonError("Please enter a valid email.");
    }

    const apiKey = process.env.RESEND_API_KEY;
    const from = process.env.CONTACT_FROM_EMAIL;
    const ownerTo = process.env.CONTACT_TO_EMAIL;

    if (!apiKey || !from || !ownerTo) {
      return jsonError(
        "Email service is not configured. Set RESEND_API_KEY, CONTACT_FROM_EMAIL, CONTACT_TO_EMAIL.",
        500
      );
    }

    const ownerPayload = {
      from,
      to: [ownerTo],
      reply_to: email,
      subject: `New contact form submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    };

    const customerPayload = {
      from,
      to: [email],
      subject: "We received your message",
      text:
        `Hi ${name},\n\n` +
        "Thank you for contacting Qamrul Hassan Shajal Photography. " +
        "We received your message and will get back to you shortly.\n\n" +
        "Your message:\n" +
        `${message}\n\n` +
        "Best regards,\nQamrul Hassan Shajal Photography",
    };

    const [ownerRes, customerRes] = await Promise.all([
      fetch(RESEND_API_URL, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(ownerPayload),
      }),
      fetch(RESEND_API_URL, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(customerPayload),
      }),
    ]);

    if (!ownerRes.ok || !customerRes.ok) {
      const ownerErr = ownerRes.ok ? null : await readResendError(ownerRes);
      const customerErr = customerRes.ok ? null : await readResendError(customerRes);
      const combined = [ownerErr, customerErr].filter(Boolean).join(" | ");
      return jsonError(`Email delivery failed: ${combined}`, 502);
    }

    return NextResponse.json({
      ok: true,
      message: "Message sent successfully. A confirmation email has been sent to you.",
    });
  } catch {
    return jsonError("Unexpected server error. Please try again.", 500);
  }
}
