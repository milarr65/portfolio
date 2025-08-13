"use client";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { useLocale } from "@/contexts/locale-context";
import { useState } from "react";
import useSwitchLocale from "@/hooks/useSwitchLocale";

export default function LanguageSwitcher({
	className,
}: {
	className?: string;
}) {
	const { lang } = useLocale();
	const [value, setValue] = useState<"en" | "es">(lang);
	const switchTo = useSwitchLocale();

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
				{lang === "en" ? "English" : "Inglés"}
			</ToggleGroupItem>
			<ToggleGroupItem
				aria-label="Toggle Spanish"
				value="es"
				size="sm"
				className="text-sm"
			>
				{lang === "en" ? "Spanish" : "Español"}
			</ToggleGroupItem>
		</ToggleGroup>
	);
}
