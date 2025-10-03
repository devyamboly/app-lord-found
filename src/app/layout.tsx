import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
// @ts-ignore
import "./globals.css";
import NavbarSection from "@/components/navbar/NavbarSection";
import FooterSection from "@/components/footer/FooterSection";
import KingdomBackground from "../components/ui/SpaceBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lordfound.com/"),
  title: {
    default: "Lord Found",
    template: "%s | Lord Found",
  },
  applicationName: "Lord Found",
  description:
    "Impulsa tus inversiones con Lord Found, la plataforma profesional de trading con herramientas avanzadas, ejecución segura y soporte experto para mercados globales.",
  keywords: [
    "lord found",
    "plataforma de trading",
    "trading profesional",
    "inversiones digitales",
    "trading de criptomonedas",
    "gestión de patrimonio",
    "trading automatizado",
    "educación financiera",
    "estrategias de trading",
    "trading social",
    "trading en tiempo real",
    "seguridad en inversiones",
    "señales de trading",
    "análisis técnico",
    "lord found trading",
    "lord found inversiones",
    "lord found plataforma",
  ],
  authors: [{ name: "Lord Found", url: "https://lordfound.com/" }],
  creator: "Lord Found",
  publisher: "Lord Found",
  category: "Finance",
  alternates: {
    canonical: "https://lordfound.com/",
  },
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
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://lordfound.com/",
    title: "Lord Found | Plataforma profesional de trading",
    description:
      "Impulsa tus inversiones con Lord Found, la plataforma profesional de trading con herramientas avanzadas, ejecución segura y soporte experto para mercados globales.",
    siteName: "Lord Found",
    images: [
      {
        url: "https://lordfound.com/og.png",
        width: 1200,
        height: 630,
        alt: "Lord Found plataforma de trading",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@lordfound",
    creator: "@lordfound",
    title: "Lord Found | Plataforma profesional de trading",
    description:
      "Impulsa tus inversiones con Lord Found, la plataforma profesional de trading con herramientas avanzadas, ejecución segura y soporte experto para mercados globales.",
    images: ["https://lordfound.com/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        

      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative overflow-hidden`} cz-shortcut-listen="true"
      >
        <KingdomBackground />
        <div className="relative z-[1] flex min-h-screen flex-col">
          <NavbarSection />
          <main className="flex-1">
            {children}
          </main>
          <FooterSection />
        </div>
      </body>
    </html>
  );
}
