"use client";
import { useRouter, usePathname } from "next/navigation";

export default function LanguageSwitcher({
	currentLang,
}: {
	currentLang: "en" | "es";
}) {
	const router = useRouter();
	const path = usePathname();

	function switchTo(lang: "en" | "es") {
		const newPath = path.replace(/^\/(en|es)/, `/${lang}`);
		document.cookie = `NEXT_LOCALE=${lang}; path=/; max-age=${
			6 * 60 * 24 * 365
		}`;
		router.push(newPath);
	}

	return (
		<div
			id="lang-switch"
			className="inline-flex items-center w-auto rounded transition-all duration-300 ease-in-out"
		>
			<p
				onClick={() => {
					switchTo("en");
				}}
				className={`text-center w-8 cursor-default col-auto text-sm rounded-l p-1 px-2 transition-all duration-300 ease-in-out ${
					currentLang === "en"
						? "bg-primary text-primary-foreground"
						: "bg-muted"
				}`}
			>
				EN
			</p>
			<p
				onClick={() => {
					switchTo("es");
				}}
				className={`text-center w-8 cursor-default rounded-r text-sm p-1 px-2 transition-all duration-300 ease-in-out ${
					currentLang === "es"
						? "bg-primary text-primary-foreground"
						: "bg-muted"
				}`}
			>
				ES
			</p>
		</div>
	);
}
