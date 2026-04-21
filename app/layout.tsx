import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Find Roomie — Compatibility-first roommate matching",
  description:
    "A structured matching system for India. Score compatibility on lifestyle, budget and location before you ever message. Built for people who want a peaceful flat, not a feed.",
  metadataBase: new URL("https://findroomie.in"),
  openGraph: {
    title: "Find Roomie — Compatibility-first roommate matching",
    description:
      "Score compatibility before you message. Verified profiles, mutual-consent chat, and a 'Find Together' mode if you're still hunting for a room.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body>
        <div className="grain" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
