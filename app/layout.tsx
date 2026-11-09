import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { faqData } from "@/data/faq";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://devicedeck.app";

export const viewport: Viewport = {
  themeColor: "#090a0f",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Device Deck — Native Mac Setup & External Display Controller | DDC/CI Brightness & Audio",
    template: "%s | Device Deck for macOS",
  },
  description:
    "Control external display hardware brightness via DDC/CI, route audio devices instantly, maintain closed-lid clamshell mode, and auto-trigger desk profiles when plugging into a Thunderbolt dock or monitor. Built with pure Swift for Apple Silicon and Intel Macs.",
  keywords: [
    "Device Deck",
    "macOS display brightness",
    "DDC CI Mac",
    "external monitor brightness macbook",
    "mac audio switcher",
    "mac desk profiles",
    "clamshell mode macbook",
    "macbook closed lid external display",
    "apple silicon brightness controller",
    "mac menu bar utility",
    "Dell UltraSharp brightness mac",
    "LG UltraFine DDC mac",
    "Kapil Yadav Mac app",
  ],
  authors: [{ name: "Kapil Yadav", url: "https://github.com/kapilyadav" }],
  creator: "Kapil Yadav",
  publisher: "Kapil Yadav",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    title: "Device Deck — Your Mac Setup, One Click Away",
    description:
      "Native macOS app for multi-monitor DDC/CI brightness, instant audio routing, closed-lid clamshell mode, and dock connection automation.",
    url: siteUrl,
    siteName: "Device Deck",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Device Deck macOS App Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Device Deck — Your Mac Setup, One Click Away",
    description:
      "Native macOS app for multi-monitor DDC/CI brightness, audio routing, and auto-applying desk profiles on dock connect.",
    images: [`${siteUrl}/og-image.png`],
    creator: "@kapilyadav",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Generate JSON-LD Schema
  const softwareApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Device Deck",
    operatingSystem: "macOS 13.0 or later (Ventura, Sonoma, Sequoia, Tahoe)",
    applicationCategory: "UtilitiesApplication",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    downloadUrl: `${siteUrl}/downloads/Device-Deck-1.5.1.dmg`,
    softwareVersion: "1.5.1",
    fileSize: "2.3MB",
    author: {
      "@type": "Person",
      name: "Kapil Yadav",
    },
    description:
      "A fast, native macOS utility unifying multi-display DDC/CI hardware brightness, audio routing, dock connection automation, and MacBook battery health management.",
    featureList: [
      "DDC/CI hardware display brightness and software dimming fallback",
      "Instant audio output and microphone switching",
      "Desk profiles that auto-apply on Thunderbolt dock or monitor connection",
      "Keep awake and closed-lid clamshell desk mode",
      "MacBook battery health inspection and macOS Tahoe charge limit integration",
      "Compact menu bar companion and cursor-targeted keyboard shortcuts",
    ],
    screenshot: `${siteUrl}/og-image.png`,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body className="min-h-screen bg-[#090a0f] text-zinc-100 antialiased selection:bg-deck-accent selection:text-white flex flex-col justify-between">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
