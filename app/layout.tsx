import type { Metadata } from "next";
import { Exo_2, Rajdhani } from "next/font/google";
import "./globals.css";

const exo2 = Exo_2({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  title: "elsantin Labs - Desarrollo Web JAMstack con IA",
  description: "High-performance JAMstack websites for small and medium businesses worldwide. Modern web development with AI assistance, optimized for speed, security, and conversions that transform visitors into customers.",
  keywords: ["JAMstack development", "small business websites", "AI-assisted web design", "professional websites"],
  authors: [{ name: "Santiago Narvaez" }],
  openGraph: {
    title: "elsantinLabs | Modern JAMstack Websites for Growing Businesses",
    description: "Transform your business with high-performance websites built using cutting-edge JAMstack technology.",
    url: "https://elsantin-labs.vercel.app",
    siteName: "elsantinLabs",
    images: [
      {
        url: "https://elsantin-labs.vercel.app/assets/images/og-social-banner.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "elsantinLabs | JAMstack Websites for Small & Medium Businesses",
    description: "Professional websites that convert visitors into customers. JAMstack technology optimized for business growth and performance worldwide.",
    images: ["https://elsantin-labs.vercel.app/assets/images/og-social-banner.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${exo2.variable} ${rajdhani.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
