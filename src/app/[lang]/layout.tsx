import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { LocaleProvider } from "@/contexts/locale-context";
import { getDictionary } from "@/dictionaries/dictionaries";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Camila Arroyo - Junior Full Stack Web Developer Portfolio",
  description:
    "Full-stack developer passionate about creating beautiful, functional web experiences. I specialize in React, Next.js, and modern web technologies to bring ideas to life.",
  icons: { icon: "/mila-portfolio-icon.svg" },
  openGraph: {
    title: "Camila Arroyo - Junior Full Stack Web Developer",
    description:
      "Explore my portfolio of full-stack web development projects built with React, Next.js, and modern technologies.",
    url: "https://portfolio-smoky-omega-abrlrtt3eu.vercel.app/",
    siteName: "Camila Arroyo Portfolio",
    type: "website",
  },
  keywords: [
    "web developer",
    "full stack",
    "React",
    "Next.js",
    "portfolio",
    "JavaScript",
    "TypeScript",
  ],
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
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LocaleProvider lang={lang} dict={dict}>
            {children}
            <Toaster richColors position="top-center" />
          </LocaleProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
