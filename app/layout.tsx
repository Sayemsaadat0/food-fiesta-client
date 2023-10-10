import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./Components/Shared/Navbar/Navbar";
import Footar from "./Components/Shared/Footar/Footar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Home | Food Fiesta",
	description: "Food Fiesta",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Navbar />
				{children}
				<Footar />
			</body>
		</html>
	);
}
