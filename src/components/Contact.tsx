"use client";

import { useState } from "react";
import SectionHeading from "./SectionHeading";

type FormValues = {
  name: string;
  email: string;
  phone: string;
  message: string;
  contactMethod: "email" | "whatsapp";
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^\+?[0-9\s-]{10,15}$/;

const initialValues: FormValues = {
  name: "",
  email: "",
  phone: "",
  message: "",
  contactMethod: "email",
};

const fieldClass =
  "w-full rounded-lg border border-line bg-card px-4 py-3 text-ink placeholder:text-ink-soft/70 transition-colors focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20";

export default function Contact() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<Partial<FormValues>>({});
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const validate = (formValues: FormValues): Partial<FormValues> => {
    const next: Partial<FormValues> = {};
    if (!formValues.name.trim()) next.name = "Please enter your name.";
    if (formValues.contactMethod === "whatsapp") {
      if (!formValues.phone.trim()) {
        next.phone = "Please enter your WhatsApp number.";
      } else if (!phonePattern.test(formValues.phone.trim())) {
        next.phone = "Please enter a valid phone number.";
      }
    } else if (!formValues.email.trim()) {
      next.email = "Please enter your email.";
    } else if (!emailPattern.test(formValues.email.trim())) {
      next.email = "Please enter a valid email address.";
    }
    if (!formValues.message.trim()) next.message = "Please enter a message.";
    return next;
  };

  const handleChange = (
    field: keyof FormValues,
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setValues((prev) => ({ ...prev, [field]: event.target.value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const selectMethod = (method: FormValues["contactMethod"]) => {
    setValues((prev) => ({ ...prev, contactMethod: method }));
    setErrors((prev) => ({ ...prev, email: undefined, phone: undefined }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (!Object.values(nextErrors).every((error) => error === undefined)) {
      return;
    }

    setSending(true);
    setSubmitError(null);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!response.ok) {
        throw new Error("Request failed");
      }
      setSubmitted(true);
    } catch {
      setSubmitError(
        "Message could not be sent. Please email us directly at hello@pixelmere.site.",
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="scroll-mt-24 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something together"
          description="Tell us about your project and we'll get back to you within one business day."
        />

        <div className="mt-14 grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <ul className="space-y-6">
              <li>
                <p className="text-sm font-semibold uppercase tracking-wide text-ink-soft">
                  Email
                </p>
                <a
                  href="mailto:hello@pixelmere.site"
                  className="mt-1 inline-block text-lg font-medium text-heading transition-colors hover:text-teal"
                >
                  hello@pixelmere.site
                </a>
              </li>
              <li>
                <p className="text-sm font-semibold uppercase tracking-wide text-ink-soft">
                  Phone
                </p>
                <a
                  href="tel:+918007524042"
                  className="mt-1 inline-block text-lg font-medium text-heading transition-colors hover:text-teal"
                >
                  +91 80075 24042
                </a>
              </li>
              <li>
                <p className="text-sm font-semibold uppercase tracking-wide text-ink-soft">
                  Based in
                </p>
                <p className="mt-1 text-lg font-medium text-heading">Pune, India</p>
                <p className="text-sm text-ink-soft">
                  Working with clients in India and Europe.
                </p>
              </li>
              <li>
                <p className="text-sm font-semibold uppercase tracking-wide text-ink-soft">
                  Instagram
                </p>
                <a
                  href="https://www.instagram.com/pixelmere.site/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-block text-lg font-medium text-heading transition-colors hover:text-teal"
                >
                  @pixelmere.site
                </a>
              </li>
            </ul>
          </div>

          <form
            onSubmit={handleSubmit}
            noValidate
            className="lg:col-span-3"
            aria-label="Contact form"
          >
            {submitted ? (
              <div
                role="status"
                className="rounded-2xl border border-teal/30 bg-teal/10 p-8 text-center dark:border-teal/40 dark:bg-teal/15"
              >
                <span className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-teal text-cream">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M20 6 9 17l-5-5"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <h3 className="text-xl font-semibold text-heading">
                  Message sent
                </h3>
                <p className="mt-2 text-ink-soft">
                  Thanks, {values.name.split(" ")[0]} — your message is on its
                  way. We&apos;ll{" "}
                  {values.contactMethod === "whatsapp"
                    ? "WhatsApp you"
                    : "email you"}{" "}
                  within one business day.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setValues(initialValues);
                    setErrors({});
                    setSubmitError(null);
                    setSubmitted(false);
                  }}
                  className="mt-6 rounded-lg border border-line px-5 py-2.5 text-sm font-medium text-heading transition-colors hover:border-teal/50 hover:text-teal"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <div className="grid gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1.5 block text-sm font-medium text-heading"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={values.name}
                    onChange={(event) => handleChange("name", event)}
                    placeholder="Jane Doe"
                    aria-invalid={Boolean(errors.name)}
                    className={fieldClass}
                  />
                  {errors.name ? (
                    <p role="alert" className="mt-1.5 text-sm text-red-600">
                      {errors.name}
                    </p>
                  ) : null}
                </div>

                <div>
                  <span className="mb-1.5 block text-sm font-medium text-heading">
                    Preferred contact method
                  </span>
                  <div
                    role="group"
                    aria-label="Preferred contact method"
                    className="flex gap-2"
                  >
                    <button
                      type="button"
                      onClick={() => selectMethod("email")}
                      aria-pressed={values.contactMethod === "email"}
                      className={`flex-1 rounded-lg px-4 py-3 text-sm font-medium transition-colors sm:flex-none ${
                        values.contactMethod === "email"
                          ? "bg-teal text-cream"
                          : "border border-line bg-card text-ink-soft hover:border-teal/50 hover:text-teal"
                      }`}
                    >
                      Email
                    </button>
                    <button
                      type="button"
                      onClick={() => selectMethod("whatsapp")}
                      aria-pressed={values.contactMethod === "whatsapp"}
                      className={`flex-1 rounded-lg px-4 py-3 text-sm font-medium transition-colors sm:flex-none ${
                        values.contactMethod === "whatsapp"
                          ? "bg-teal text-cream"
                          : "border border-line bg-card text-ink-soft hover:border-teal/50 hover:text-teal"
                      }`}
                    >
                      WhatsApp
                    </button>
                  </div>
                </div>

                {values.contactMethod === "email" ? (
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-1.5 block text-sm font-medium text-heading"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={values.email}
                      onChange={(event) => handleChange("email", event)}
                      placeholder="jane@company.com"
                      aria-invalid={Boolean(errors.email)}
                      className={fieldClass}
                    />
                    {errors.email ? (
                      <p role="alert" className="mt-1.5 text-sm text-red-600">
                        {errors.email}
                      </p>
                    ) : null}
                  </div>
                ) : (
                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-1.5 block text-sm font-medium text-heading"
                    >
                      WhatsApp number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={values.phone}
                      onChange={(event) => handleChange("phone", event)}
                      placeholder="+91 98765 43210"
                      aria-invalid={Boolean(errors.phone)}
                      className={fieldClass}
                    />
                    {errors.phone ? (
                      <p role="alert" className="mt-1.5 text-sm text-red-600">
                        {errors.phone}
                      </p>
                    ) : null}
                  </div>
                )}

                <div>
                  <label
                    htmlFor="message"
                    className="mb-1.5 block text-sm font-medium text-heading"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={values.message}
                    onChange={(event) => handleChange("message", event)}
                    placeholder="Tell us about your project, timeline, and goals…"
                    aria-invalid={Boolean(errors.message)}
                    className={`${fieldClass} resize-y`}
                  />
                  {errors.message ? (
                    <p role="alert" className="mt-1.5 text-sm text-red-600">
                      {errors.message}
                    </p>
                  ) : null}
                </div>

                <div className="pt-2">
                  {submitError ? (
                    <p role="alert" className="mb-3 text-sm text-red-600">
                      {submitError}
                    </p>
                  ) : null}
                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full rounded-lg bg-teal px-6 py-3.5 text-base font-medium text-cream transition-colors hover:bg-teal/90 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                  >
                    {sending ? "Sending…" : "Send Message"}
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
