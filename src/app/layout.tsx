// $ This layout acts as a wrapper for all the pages in this app.

import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "ProjectPulse 🎄",
  description: "Discover, share, and explore innovative projects to inspire your next big idea",
  authors: {
    name: "Dan Chanivet",
    url: "https://www.danchanivet.tech"
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >

        {/* This title will appear through every routes*/}
        {/* 
        <h1 className="text-3xl">ROOT</h1> 
        */}


        {children}

      </body>
    </html>
  );
}
