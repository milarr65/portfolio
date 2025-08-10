import { NextResponse, NextRequest } from "next/server";

const locales = ["en", "es"] as const;
const defaultLocale = "en";

type Locale = (typeof locales)[number];

function getLocale(req: NextRequest): Locale {
	// check if there's a cookie for the prefered lang
	const cookie = req.cookies.get("NEXT_LOCALE")?.value;
	if (cookie && locales.includes(cookie as Locale)) return cookie as Locale;

	//if no cookie fallback to headers
	const header = req.headers.get("accept-language");
	if (!header) return defaultLocale;

	const preferred = header.split(",")[0].split("-")[0];
	return locales.includes(preferred as Locale)
		? (preferred as Locale)
		: defaultLocale;
}

export default function middleware(req: NextRequest) {
	const { pathname } = req.nextUrl;
	// console.log("[middleware] hit", pathname);
	// SKIP INTERNAL AND STATIC FILES
	if (pathname.startsWith("/_next")) return NextResponse.next(); // next internals
	if (pathname.startsWith("/api")) return NextResponse.next(); // api routes
	if (pathname === "/favicon.ico") return NextResponse.next(); //favicon
	if (pathname.includes(".")) return NextResponse.next(); // .jpeg, .svg, .png, etc...

	// If pathname already has locale, do nothing
	const firstSegment = pathname.split("/")[1];
	if (locales.includes(firstSegment as Locale)) return NextResponse.next();

	// add locale and redirect
	const locale = getLocale(req);
	const url = req.nextUrl.clone();
	url.pathname = `/${locale}${pathname}`;
	return NextResponse.redirect(url);
}

export const config = {
	matcher: ["/:path*"],
};
