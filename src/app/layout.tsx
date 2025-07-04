import type { Metadata } from "next";
import { GoogleAnalytics } from '@next/third-parties/google';
import { Figtree } from "next/font/google";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AutoPopupDialog from "@/components/auto-popup-dialog";
import { siteDetails } from '@/data/siteDetails';

import "./globals.css";

const figtree = Figtree({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap'
});

export const metadata: Metadata = {
  title: siteDetails.metadata.title,
  description: siteDetails.metadata.description,
  openGraph: {
    title: siteDetails.metadata.title,
    description: siteDetails.metadata.description,
    url: siteDetails.siteUrl,
    type: 'website',
    images: [
      {
        url: '/images/logo.png',
        width: 1200,
        height: 675,
        alt: siteDetails.siteName,
      },
    ],
  }
};

export default function RootLayout({
                                     children
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
      <body className={`${figtree.className} antialiased`}>
      {siteDetails.googleAnalyticsId && <GoogleAnalytics gaId={siteDetails.googleAnalyticsId} />}
      <AutoPopupDialog />
      <Header />
      {children}
      <Footer />
      </body>
      </html>
  );
}
