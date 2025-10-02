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
  title: "Lord Found",
  description: "The best trading platform",
  authors: [{ name: "Lord Fund", url: "https://lordfound.com/" }],
  metadataBase: new URL("https://lordfound.com/"),
  keywords: [
    "lord fund",
    "lord found",
    "lord fund app",
    "lord fund trading",
    "lord fund investing",
    "lord fund fund",
    "lord fund crypto",
    "lord fund defi",
    "lord fund nft",
    "lord fund game",
    "lord fund gaming",
    "lord fund nft",
    "lord fund metaverse",
    "lord fund metaverse",
  ],
  openGraph: {
    type: "website",
    url: "https://lordfound.com/",
    title: "Lord Fund",
    description: "The best trading platform",
    siteName: "Lord Fund",
    images: [
      {
        url: "https://lordfound.com/og.png",
        width: 1200,
        height: 630,
        alt: "Lord Fund",
      },
    ],
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
