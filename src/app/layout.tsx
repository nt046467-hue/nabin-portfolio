import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL || "https://nabin-portfolio.vercel.app",
  ),
  title: "Nabin Thapa | Full-Stack Developer Nepal | Next.js & AI",
  description:
    "Nabin Thapa — Nepal-based full-stack developer specializing in Next.js, React, Firebase, and AI API integration. Available for freelance projects globally.",
  keywords: [
    "Nabin Thapa",
    "full-stack developer",
    "Nepal",
    "Next.js",
    "React",
    "AI integration",
    "freelance developer",
    "web developer Nepal",
    "Firebase",
    "Tailwind CSS",
  ],
  authors: [{ name: "Nabin Thapa" }],
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png" }],
    apple: [{ url: "/favicon.png" }],
  },
  openGraph: {
    title: "Nabin Thapa | Full-Stack Developer Nepal",
    description:
      "Nepal-based full-stack developer specializing in Next.js, React, Firebase, and AI API integration. Available for freelance projects globally.",
    url:
      process.env.NEXT_PUBLIC_BASE_URL || "https://nabin-portfolio.vercel.app",
    siteName: "Nabin Thapa Portfolio",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1344,
        height: 768,
        alt: "Nabin Thapa — Full-Stack Developer Nepal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nabin Thapa | Full-Stack Developer Nepal",
    description:
      "Nepal-based full-stack developer specializing in Next.js, React, Firebase, and AI API integration.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Nabin Thapa",
              url:
                process.env.NEXT_PUBLIC_BASE_URL ||
                "https://nabin-portfolio.vercel.app",
              jobTitle: "Full-Stack Developer",
              email: "nt046467@gmail.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Kathmandu",
                addressCountry: "NP",
              },
              knowsAbout: [
                "Next.js",
                "React",
                "Firebase",
                "AI Integration",
                "Full-Stack Development",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} antialiased bg-navy-deep text-text-primary font-sans`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
