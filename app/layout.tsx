import { Poppins, Montserrat } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { Metadata } from "next";

const poppins = Poppins({
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	subsets: ["latin"],
	variable: "--font-poppins",
	display: "swap",
});

const montserrat = Montserrat({
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	subsets: ["latin"],
	variable: "--font-montserrat",
	display: "swap",
});

const petrov = localFont({
	src: [
		{
			path: "./fonts/PetrovSans-Trial-Black-BF653889ebef03f.woff",
			weight: "900",
			style: "normal",
		},
		{
			path: "./fonts/PetrovSans-Trial-BlackItalic-BF653889eb6068d.woff",
			weight: "900",
			style: "italic",
		},
		{
			path: "./fonts/PetrovSans-Trial-ExtraBold-BF653889ec4bc3a.woff",
			weight: "800",
			style: "normal",
		},
		{
			path: "./fonts/PetrovSans-Trial-ExtraBoldItalic-BF653889ec2be0c.woff",
			weight: "800",
			style: "italic",
		},
		{
			path: "./fonts/PetrovSans-Trial-Bold-BF653889ec4be3e.woff",
			weight: "700",
			style: "normal",
		},
		{
			path: "./fonts/PetrovSans-Trial-BoldItalic-BF653889eb97ab1.woff",
			weight: "700",
			style: "italic",
		},
	],
	variable: "--font-petrov",
});

export const metadata: Metadata = {
  icons: { icon: "/favicon.ico", apple: "/favicon.ico" },
	title: "Powerhouse Construction Ltd",
	description:
		"At Powerhouse Construction Ltd, we believe that every home, regardless of location, size or economic status, deserve easy access to renewable energy and safe, durable construction.",
	// Open Graph Meta Tags for Social Media Previews
	openGraph: {
		title: "Powerhouse Construction Ltd",
		description:
			"At Powerhouse Construction Ltd, we believe that every home, regardless of location, size or economic status, deserve easy access to renewable energy and safe, durable construction.",
		url: "https://www.powerhouseconstruction.ltd", // Your website URL
		siteName: "Powerhouse Construction Ltd",
		images: [
			{
				url: "/meta-seo.png",
				width: 1200,
				height: 630,
				alt: "Powerhouse Construction Ltd Cover Image",
			},
		],
		locale: "en_US",
		type: "website",
	},
	// Twitter Card Meta Tags for better Twitter previews
	twitter: {
		card: "summary_large_image",
		title: "Powerhouse Construction Ltd",
		description:
			"At Powerhouse Construction Ltd, we believe that every home, regardless of location, size or economic status, deserve easy access to renewable energy and safe, durable construction.",
		images: ["/meta-seo.png"],
	},
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={`${poppins.variable} ${montserrat.variable} ${petrov.variable}`}>{children}</body>
		</html>
	);
}
