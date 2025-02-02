import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Chowdome",
  description: "logistics orm",
};

const beatriceDeck = localFont({
  src: [
    {
      path: './fonts/BeatriceDeck-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/BeatriceDeck-Bold.ttf',
      weight: '700',
      style: 'bold',
    },
    {
      path: './fonts/BeatriceDeck-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/BeatriceDeck-MediumItalic.ttf',
      weight: '500',
      style: 'italic',
    },
  ],
  variable: "--font-beatriceDeck",
})

const satoshi = localFont({
  src: [
    {
      path: './fonts/Satoshi-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Satoshi-Bold.otf',
      weight: '700',
      style: 'bold',
    },
    {
      path: './fonts/Satoshi-Italic.otf',
      weight: '400',
      style: 'italic',
    },
    {
      path: './fonts/Satoshi-BoldItalic.otf',
      weight: '700',
      style: 'italic',
    },
  ],
  variable: "--font-Satoshi",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${beatriceDeck.variable} ${satoshi.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
