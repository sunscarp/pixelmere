import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const trimField = (value: unknown): string =>
  typeof value === "string" ? value.trim() : "";

export async function POST(request: Request) {
  const payload = (await request.json().catch(() => null)) as Record<
    string,
    unknown
  > | null;

  const name = trimField(payload?.name);
  const email = trimField(payload?.email);
  const message = trimField(payload?.message);

  if (!name || !email || !emailPattern.test(email) || !message) {
    return NextResponse.json(
      { error: "Please provide a valid name, email, and message." },
      { status: 400 },
    );
  }

  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const from = process.env.SMTP_FROM ?? user;
  const to = process.env.SMTP_TO ?? user;

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

  try {
    await transporter.sendMail({
      from,
      to,
      replyTo: `${name} <${email}>`,
      subject: `New enquiry from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
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
