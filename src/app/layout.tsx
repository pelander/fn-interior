import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FN Interior — Interior Design in Palma",
  description:
    "FN Interior creates thoughtful, refined interiors for homes and commercial spaces across Mallorca.",
  openGraph: {
    title: "FN Interior — Interior Design in Palma",
    description:
      "Thoughtful, refined interiors for homes and commercial spaces across Mallorca.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} antialiased`}>
      <body className="min-h-dvh flex flex-col font-sans">{children}</body>
    </html>
  );
}
