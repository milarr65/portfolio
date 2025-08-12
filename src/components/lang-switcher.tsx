"use client";

import { useRouter, usePathname } from "next/navigation";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { useLocale } from "@/contexts/locale-context";
import { useState } from "react";

export default function LanguageSwitcher({ className }: { className?: string }) {
	const router = useRouter();
	const path = usePathname();
	const { lang } = useLocale();
	const [value, setValue] = useState<"en" | "es">(lang);

	function switchTo(newLang: "en" | "es") {
		const newPath = path.replace(/^\/(en|es)/, `/${newLang}`);
		document.cookie = `NEXT_LOCALE=${newLang}; path=/; max-age=${
			6 * 60 * 24 * 365
		}`;
		router.push(newPath);
	}

	return (
		<ToggleGroup
			type="single"
			variant="outline"
			className={className}
			size="sm"
			value={value}
			onValueChange={(value) => {
				if (value === "en" || value === "es") {
					setValue(value);
					switchTo(value);
				}
			}}
		>
			<ToggleGroupItem
				aria-label="Toggle English"
				value="en"
				size="sm"
				className="text-sm"
			>
				English
			</ToggleGroupItem>
			<ToggleGroupItem
				aria-label="Toggle Spanish"
				value="es"
				size="sm"
				className="text-sm"
			>
				Spanish
			</ToggleGroupItem>
		</ToggleGroup>
	);
}
