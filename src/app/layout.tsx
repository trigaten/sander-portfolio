import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";

const inter = Inter({ subsets: ["latin"] });
const skModernBold = localFont({
  src: "../../public/fonts/hinted-Sk-Modernist-Bold.ttf",
  variable: "--font-sk-modern-bold",
});

const skModernRegular = localFont({
  src: "../../public/fonts/hinted-Sk-Modernist-Regular.ttf",
  variable: "--font-sk-modern-regular",
});

const skModernLight = localFont({
  src: "../../public/fonts/hinted-Sk-Modernist-Light.ttf",
  variable: "--font-sk-modern-light",
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
        className={`${skModernBold.variable} ${skModernRegular.variable} ${skModernLight.variable} ${inter.className}`}
      >
        <div className="flex flex-col min-h-screen">
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
