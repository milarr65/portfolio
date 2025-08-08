"use client";
import { useRouter, usePathname } from "next/navigation";
import { Button } from "./ui/button";

export default function LanguageSwitcher({
	currentLang,
}: {
	currentLang: "en" | "es";
}) {
	const router = useRouter();
	const path = usePathname();

	function switchTo(lang: "en" | "es") {
		const newPath = path.replace(/^\/(en|es)/, `/${lang}`);
		router.push(newPath);
	}

	return (
		<div className="flex">
			<Button
				variant={currentLang === "en" ? "default" : "secondary"}
				onClick={() => switchTo("en")}
			>
				EN
			</Button>
			<Button
				variant={currentLang === "es" ? "default" : "secondary"}
				onClick={() => switchTo("es")}
			>
				ES
			</Button>
		</div>
	);
}
