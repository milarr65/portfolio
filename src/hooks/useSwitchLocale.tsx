"use client";
import { useRouter, usePathname } from "next/navigation";

export default function useSwitchLocale() {
	const router = useRouter();
	const path = usePathname();

	return (newLang: "en" | "es") => {
		const newPath = path.replace(/^\/(en|es)/, `/${newLang}`);
		document.cookie = `NEXT_LOCALE=${newLang}; path=/; max-age=${
			6 * 60 * 24 * 365
		}`;
		router.replace(newPath, { scroll: false });
	};
}
