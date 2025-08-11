import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import CompanyInfoBar from "@/components/layout/CompanyInfoBar";
import NavBar from "@/components/layout/Navbar";
import PageTransitionWrapper from "@/components/layout/PageTransitionWrapper";

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
  icons: {
    icon: '/favicon-1.png',
  },
  description: 'Your one stop for all your Building, Construction & Electrical Materials',
  openGraph: {
    title: 'The Eight Stars Company Limited',
    description: 'Your one stop for all your Building, Construction & Electrical Materials',
    type: 'website',
    locale: 'en_US',
    siteName: 'The Eight Stars Company Limited',
    url: 'https://eightstars.vercel.app',
    images: [
      {
        url: 'https://eightstars.vercel.app/images/general/services-3.jpg',
        width: 1200,
        height: 630,
        alt: 'The Eight Stars Company Limited',
      },
    ],
  },
  twitter: {
    title: 'The Eight Stars Company Limited',
    description: 'Your one stop for all your Building, Construction & Electrical Materials',
    card: 'summary_large_image',
    images: [
      {
        url: 'https://eightstars.vercel.app/images/general/services-3.jpg',
        width: 1200,
        height: 630,
        alt: 'The Eight Stars Company Limited',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`
        ${geistSans.variable} ${geistMono.variable} ${poppins.variable}
        bg-white text-black
        overflow-x-hidden
      `}>
        <PageTransitionWrapper>
          <CompanyInfoBar />
          <NavBar />
          {children}
        </PageTransitionWrapper>
      </body>
    </html>
  );
}