import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import Navbar from "@/components/navbar/navbar";

const inter = Inter({ subsets: ["latin"] });
const skModernBold = localFont({
  src: "../../public/fonts/hinted-Sk-Modernist-Bold.ttf",
  variable: "--font-sk-modern-bold",
});

const skModernRegular = localFont({
  src: "../../public/fonts/hinted-Sk-Modernist-Regular.ttf",
  variable: "--font-sk-modern-regular",
});

export const metadata: Metadata = {
  title: "Sander Schulhoff",
  description: "San Schulhoff's personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en bg-white">
      <body
        className={`${skModernBold.variable} ${skModernRegular.variable} ${inter.className}`}
      >
        {children}
      </body>
    </html>
  );
}
