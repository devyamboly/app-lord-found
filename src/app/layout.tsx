import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative overflow-hidden`}
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
