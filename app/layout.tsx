import Header from "@/components/layout/Header";
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
  title: "LIONIXY | AI Prompt Search Engine",
  description: "Search and discover high-performing prompts for AI tools.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[var(--bg-main)] text-[var(--text-main)] antialiased">
        <div className="relative min-h-screen">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
