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
  description: "Creamos sitios web de alto rendimiento con tecnología Jamstack. Optimizados para velocidad, seguridad y una experiencia de usuario que convierte visitantes en clientes.",
  keywords: ["Desarrollo JAMstack", "Sitios web profesionales", "Diseño web con IA", "Desarrollo web Venezuela"],
  authors: [{ name: "Santiago Narvaez" }],
  openGraph: {
    title: "elsantin Labs - Desarrollo Web JAMstack con IA",
    description: "Creamos sitios web de alto rendimiento con tecnología Jamstack. Optimizados para velocidad, seguridad y conversiones.",
    url: "https://elsantin.com",
    siteName: "elsantin Labs",
    images: [
      {
        url: "/images/og-social-banner.png",
        width: 1200,
        height: 630,
        alt: "elsantin Labs - Desarrollo Web JAMstack",
      },
    ],
    locale: "es_VE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "elsantin Labs - Desarrollo Web JAMstack con IA",
    description: "Creamos sitios web de alto rendimiento con tecnología Jamstack. Optimizados para velocidad, seguridad y conversiones.",
    images: ["/images/og-social-banner.png"],
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
