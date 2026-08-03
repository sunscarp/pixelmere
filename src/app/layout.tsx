import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pixelmere — Web Development Agency",
  description:
    "Pixelmere is a web development agency building fast, reliable websites that work as hard as you do — design, development, e-commerce, and ongoing support.",
  openGraph: {
    title: "Pixelmere — Web Development Agency",
    description: "We build websites that work as hard as you do.",
    type: "website",
    locale: "en_US",
  },
};

const themeInit = `
  (function () {
    try {
      var stored = localStorage.getItem("theme");
      var prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      if (stored === "dark" || (!stored && prefersDark)) {
        document.documentElement.classList.add("dark");
      }
    } catch (e) {}
  })();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${geist.variable} antialiased`}>
      <body className="min-h-screen bg-page text-ink">
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
        {children}
      </body>
    </html>
  );
}
