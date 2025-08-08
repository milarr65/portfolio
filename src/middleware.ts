import { NextResponse, NextRequest } from "next/server";

const locales = ["en", "es"] as const;
const defaultLocale = "en";

type Locale = (typeof locales)[number];

function getLocale(req: NextRequest): Locale {
	const header = req.headers.get("accept-language");
	if (!header) return defaultLocale;

	const preferred = header.split(",")[0].split("-")[0];
	return locales.includes(preferred as Locale)
		? (preferred as Locale)
		: defaultLocale;
}

export default function middleware(req: NextRequest) {
	const { pathname } = req.nextUrl;
	// Check if there is any supported locale in the pathname
	const pathnameHasLocale: boolean = locales.some(
		(locale: string) =>
			pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
	);

	if (pathnameHasLocale) return NextResponse.next();

	const locale = getLocale(req);
	req.nextUrl.pathname = `/${locale}${pathname}`;
	return NextResponse.redirect(req.nextUrl);
}

export const config = {
	matcher: [
		// Skip all internal paths (_next)
		"/((?!_next|favicon.ico).*)",
		// Optional: only run on root (/) URL
		// '/'
	],
};
