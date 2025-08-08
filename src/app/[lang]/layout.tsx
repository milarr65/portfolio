import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { LocaleProvider } from "@/contexts/locale-context";
import { getDictionary } from "@/dictionaries/dictionaries";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Camila Arroyo - Web Dev Portfolio",
	description:
		"Full-stack developer passionate about creating beautiful,functional web experiences. I specialize in React, Next.js, and modern web technologies to bring ideas to life.",
};

export async function generateStaticParams() {
	return [{ lang: "en" }, { lang: "es" }];
}

export default async function RootLayout({
	children,
	params,
}: Readonly<{
	children: React.ReactNode;
	params: Promise<{ lang: "en" | "es" }>;
}>) {
	const { lang } = await params;
	const dict = await getDictionary(lang);

	return (
		<html lang={lang} suppressHydrationWarning>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<ThemeProvider
					attribute="class"
					defaultTheme="dark"
					enableSystem
					disableTransitionOnChange
				>
					<LocaleProvider lang={lang} dict={dict}>
						{children}
					</LocaleProvider>
				</ThemeProvider>
			</body>
		</html>
	);
}
