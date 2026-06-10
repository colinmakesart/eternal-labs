import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://eternallabs.dev"),
  title: "Eternal Labs | Software Studio",
  description:
    "Eternal Labs creates simple, powerful applications designed to help people improve their lives.",
  applicationName: "Eternal Labs",
  keywords: [
    "Eternal Labs",
    "software studio",
    "mobile apps",
    "First Shift",
    "career app",
  ],
  authors: [{ name: "Eternal Labs" }],
  creator: "Eternal Labs",
  openGraph: {
    title: "Eternal Labs | Software Studio",
    description:
      "Building software that helps people take their first step.",
    url: "https://eternallabs.dev",
    siteName: "Eternal Labs",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eternal Labs | Software Studio",
    description:
      "Building software that helps people take their first step.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
