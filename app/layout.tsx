import type { Metadata } from "next";
import { Figtree, Doto, Micro_5 } from "next/font/google";
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

const micro_5 = Micro_5({
  variable: "--font-micro-5",
  subsets: ["latin"],
  weight: "400"
});



export const metadata: Metadata = {
  title: "ᔦꝊᔦ𐌊𐋅𐌀𐌉 - 𐌔Ꝋ𐌅𐌕Ꮤ𐌀𐌓𐌄 𐌄𐌍Ᏽ𐌉𐌍𐌄𐌄𐌓",
  description: "Built with Next.js, Tailwind CSS, and TypeScript.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${figtree.variable} ${doto.variable} ${micro_5.variable} antialiased flex flex-col items-center `}
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
