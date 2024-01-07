// * Global Imports
import type { Metadata } from "next";
import { Urbanist } from "next/font/google";

// * Stylesheet
import "./globals.css";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "@hc-huxai: PIAIC-Q2-08",
  description: "Assignment: Use of Pre-built Rest APIs with Axios",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={urbanist.className}>{children}</body>
    </html>
  );
}
