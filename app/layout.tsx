import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar"; // 🔹 Navbar import edildi
import Footer from "./components/Footer"; // 🔹 varsa footer import edildi (isteğe bağlı)

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Velora Giyim",
  description: "Zarafetin, modern çizgilerle buluştuğu kadın giyim markası",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#fefcfb] text-gray-900`}
      >
        <Navbar /> {/* 🔹 Navbar her sayfada görünecek */}
        <main >{children}</main> {/* içerik boşluğu */}
        <Footer /> {/* 🔹 varsa footer da sabit görünür */}
      </body>
    </html>
  );
}
