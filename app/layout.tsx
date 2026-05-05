import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "BatchGrade",
    template: "%s | BatchGrade",
  },
  description:
    "Automated Grading for CS Classrooms. BatchGrade is an automated grading tool for programming assignments, with the base desktop version available for free and a future hosted service planned.",
  keywords: [
    "automated grading",
    "CS education",
    "programming assignments",
    "classroom tools",
    "student grading",
  ],
  icons: {
    icon: [
      { url: "/circle-check-big.svg", type: "image/svg+xml" },
    ],
    shortcut: "/circle-check-big.svg",
    apple: "/circle-check-big.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
