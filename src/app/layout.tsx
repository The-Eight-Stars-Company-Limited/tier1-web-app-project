import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import CompanyInfoBar from "@/components/layout/CompanyInfoBar";
import NavBar from "@/components/layout/Navbar";
import Footer from "../components/layout/Footer";

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
    <html lang="en" className={`${poppins.variable}`}>
      <body
        className={`
        flex flex-col min-h-screen
        bg-black text-white overflow-x-hidden
      `}
        suppressHydrationWarning={true}
      >
        <header>
          <CompanyInfoBar />
          <NavBar />
        </header>
        <main className="flex-grow bg-[#FFCF75]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
