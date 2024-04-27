import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";

const inter = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

export const metadata: Metadata = {
  title: "Just a Dex",
  description: "A simple solutions for you all your swaping needs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
