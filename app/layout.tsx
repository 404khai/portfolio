import type { Metadata } from "next";
import { Figtree, Doto } from "next/font/google";
import "./globals.css";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
});

const doto = Doto({
  variable: "--font-doto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ꝋ𐌅𐌄ᏵⱿ - 𐌔Ꝋ𐌅𐌕Ꮤ𐌀𐌓𐌄 𐌄𐌍Ᏽ𐌉𐌍𐌄𐌄𐌓",
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
        className={`${figtree.variable} ${doto.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
