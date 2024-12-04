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

// * Metadata for the entire app
export const metadata: Metadata = {
  title: "ProjectPulse 🎄",
  description: "Discover, share, and explore innovative projects to inspire your next big idea",
  authors: {
    name: "Dan Chanivet",
    url: "https://www.danchanivet.tech"
  },
};

// * Dynamic Metadata we'll get a dynamic object with the params for each page
/*
export async function generateMetadata({ params }: { params: any }){
  const { id } = params;
  const resource = await getResourceById({ id })

  return {
    title: resource.title,
    description: resource.description,
    image: resource.image,
  }
}
*/

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
