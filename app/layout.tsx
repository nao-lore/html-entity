import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  verification: {
    google: "uRTAz7j8N8jDW5BzJaGn-wzrFY5C7KNStVLMKlGzo_4",
  },
  title:
    "HTML Entity Encoder/Decoder - Convert HTML Entities | html-entity",
  description:
    "Free online HTML entity encoder and decoder. Convert special characters to HTML entities and decode HTML entities back to readable text. Supports named, numeric, and hex entities.",
  keywords: [
    "html entity encoder",
    "html entity decoder",
    "html entities",
    "html special characters",
    "encode html",
    "decode html entities",
  ],
  authors: [{ name: "html-entity" }],
  openGraph: {
    title: "HTML Entity Encoder/Decoder - Convert HTML Entities",
    description:
      "Free online tool to encode and decode HTML entities. Convert special characters instantly.",
    url: "https://html-entity.vercel.app",
    siteName: "html-entity",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "HTML Entity Encoder/Decoder - Convert HTML Entities",
    description:
      "Free online tool to encode and decode HTML entities. Convert special characters instantly.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://html-entity.vercel.app",
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
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "HTML Entity Encoder/Decoder",
              description:
                "Free online HTML entity encoder and decoder. Convert special characters to HTML entities and decode entities back to readable text.",
              url: "https://html-entity.vercel.app",
              applicationCategory: "DeveloperApplication",
              operatingSystem: "Any",
              browserRequirements: "Requires JavaScript",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              featureList: [
                "Encode text to HTML entities",
                "Decode HTML entities to text",
                "Named and numeric entity support",
                "Quick reference table with search",
                "One-click copy to clipboard",
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-screen bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}
