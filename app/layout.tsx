import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./Components/Shared/Navbar/Navbar";
import Footar from "./Components/Shared/Footar/Footar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Navbar></Navbar>
      <body className={`${inter.className} container mx-auto`}>{children}</body>
      <Footar></Footar>
    </html>
  );
}
