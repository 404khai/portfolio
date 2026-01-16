import type { Metadata } from "next";
import { Figtree, Doto, Micro_5, Irish_Grover, Calistoga, Denk_One, Henny_Penny, Exo_2 } from "next/font/google";
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

const calistoga = Calistoga({
  variable: "--font-calistoga",
  subsets: ["latin"],
  weight: "400"
});


const micro_5 = Micro_5({
  variable: "--font-micro-5",
  subsets: ["latin"],
  weight: "400"
});

const denkOne = Denk_One({
  variable: "--font-denk-one",
  subsets: ["latin"],
  weight: "400"
});

const hennyPenny = Henny_Penny({
  variable: "--font-henny-penny",
  subsets: ["latin"],
  weight: "400"
});

const exo2 = Exo_2({
  variable: "--font-exo-2",
  subsets: ["latin"],
  weight: "400"
});



export const metadata: Metadata = {
  title: "404KHAI.DEV",
  description: "Creative Systems Engineer.",
  icons: {
    icon: '/404khai.jpeg',
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
        className={`${figtree.variable} ${doto.variable} ${micro_5.variable} ${irishGrover.variable} ${calistoga.variable} ${denkOne.variable} ${hennyPenny.variable} ${exo2.variable} antialiased flex flex-col items-center `}
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
