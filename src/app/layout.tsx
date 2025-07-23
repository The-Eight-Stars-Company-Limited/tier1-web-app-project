import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import CompanyInfoBar from "@/components/layout/CompanyInfoBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins", 
  subsets: ["latin"],
  weight: "400", 
  display: "swap", 
});

export const metadata: Metadata = {
  title: 'The Eight Stars Company Limited',
  description: 'Your one stop for all your Building, Construction & Electrical Materials',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} bg-black text-white`}>
      <CompanyInfoBar />
        {children}
      </body>
    </html>
  );
}
