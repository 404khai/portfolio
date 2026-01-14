import type { Metadata } from "next";
import { Figtree, Doto, Micro_5, Irish_Grover } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
});

const doto = Doto({
  variable: "--font-doto",
  subsets: ["latin"],
});

const irishGrover = Irish_Grover({
  variable: "--font-irish-grover",
  subsets: ["latin"],
  weight: "400"
});

const micro_5 = Micro_5({
  variable: "--font-micro-5",
  subsets: ["latin"],
  weight: "400"
});



export const metadata: Metadata = {
  title: "404KHAI.DEV",
  description: "Creative Systems Engineer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${figtree.variable} ${doto.variable} ${micro_5.variable} ${irishGrover.variable} antialiased flex flex-col items-center `}
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
