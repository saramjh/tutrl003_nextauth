import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "../components/Navbar"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
	title: "Login Tutorial",
	description: "Login with Next-Auth with mongoDB",
}

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Navbar />
				{children}
			</body>
		</html>
	)
}
