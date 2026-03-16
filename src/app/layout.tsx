import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shefali Saini | Software Engineer",
  description:
    "Software Engineer with 4+ years at Amazon. MS in Computer Software Engineering at San Jose State University. Expertise in Java, Python, AWS, distributed systems, and ML.",
  keywords: [
    "Shefali Saini",
    "Software Engineer",
    "Amazon",
    "SJSU",
    "AWS",
    "Java",
    "Python",
    "Portfolio",
  ],
  authors: [{ name: "Shefali Saini" }],
  openGraph: {
    title: "Shefali Saini | Software Engineer",
    description:
      "Software Engineer with 4+ years at Amazon. MS in Computer Software Engineering at SJSU.",
    type: "website",
  },
};

import Cursor from "@/components/Cursor";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Cursor />
        {children}
      </body>
    </html>
  );
}
