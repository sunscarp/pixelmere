import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^\+?[0-9\s-]{10,15}$/;

const trimField = (value: unknown): string =>
  typeof value === "string" ? value.trim() : "";

export async function POST(request: Request) {
  const payload = (await request.json().catch(() => null)) as Record<
    string,
    unknown
  > | null;

  const name = trimField(payload?.name);
  const email = trimField(payload?.email);
  const phone = trimField(payload?.phone);
  const message = trimField(payload?.message);
  const contactMethod = trimField(payload?.contactMethod);

  const method = contactMethod === "whatsapp" ? "whatsapp" : "email";
  const contactValid =
    method === "whatsapp"
      ? phonePattern.test(phone)
      : emailPattern.test(email);

  if (!name || !contactValid || !message) {
    return NextResponse.json(
      { error: "Please provide a valid name, contact detail, and message." },
      { status: 400 },
    );
  }

  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const from = process.env.SMTP_FROM ?? user;
  const to = process.env.SMTP_TO ?? user;
  const bcc = process.env.SMTP_TO_BCC ?? undefined;

  if (!host || !user || !pass) {
    return NextResponse.json(
      { error: "Mail server is not configured." },
      { status: 500 },
    );
  }

  const transporter = nodemailer.createTransport({
    host,
    port: Number(process.env.SMTP_PORT ?? 465),
    secure: process.env.SMTP_SECURE !== "false",
    auth: { user, pass },
    authMethod: "LOGIN",
  });

  const contactDetail =
    method === "whatsapp" ? `WhatsApp: ${phone}` : `Email: ${email}`;

  try {
    await transporter.sendMail({
      from,
      to,
      bcc,
      replyTo: email ? `${name} <${email}>` : undefined,
      subject: `New enquiry from ${name}`,
      text: `Name: ${name}\nPreferred contact: ${contactDetail}\n\n${message}`,
    });
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Failed to send contact email:", error);
    return NextResponse.json(
      { error: "Message could not be sent. Please try again." },
      { status: 500 },
    );
  }
}
