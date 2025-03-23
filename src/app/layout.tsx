import type { Metadata } from "next";
import { Geist, Geist_Mono, Roboto, Prompt } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // Specify font weights you need
  variable: "--font-roboto", // Optional: CSS variable for easy use
});

export const metadata: Metadata = {
  title: "KU Clubs",
  description: "Generated by create next app",
};

const prompt = Prompt({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-prompt",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${prompt.variable} font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
