"use client";

import { useState } from "react";
import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { ToggleGroup, ToggleGroupItem } from "./ui/toggle-group";

export function ThemeToggle({ className }: { className?: string }) {
	const { theme, setTheme } = useTheme();
	const [value, setValue] = useState(theme);

	return (
		<ToggleGroup
			type="single"
			variant="outline"
			className={className}
			value={value}
			onValueChange={(val) => {
				setValue(val);
				setTheme(val);
			}}
		>
			<ToggleGroupItem value="dark" aria-label="Dark Theme">
				<Moon />
			</ToggleGroupItem>

			<ToggleGroupItem value="system" aria-label="System Auto theme">
				<Monitor />
			</ToggleGroupItem>

			<ToggleGroupItem value="light" aria-label="Light Theme">
				<Sun />
			</ToggleGroupItem>
		</ToggleGroup>
	);
}
