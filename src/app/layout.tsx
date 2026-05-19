import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";

import "@/app/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: "Hardik Vohra | Mechanical Engineering Portfolio",
  description:
    "Recruiter-focused portfolio for Hardik Vohra featuring CAD, CAE, motorsports, manufacturing optimization, robotics, and leadership projects.",
  openGraph: {
    title: "Hardik Vohra | Mechanical Engineering Portfolio",
    description:
      "Mechanical engineering portfolio featuring project leadership, vehicle design, robotics, and process optimization.",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body>{children}</body>
    </html>
  );
}
