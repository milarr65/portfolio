"use client";

import { useLocale } from "@/contexts/locale-context";
import { Button } from "./ui/button";
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "./ui/sheet";
import { Menu } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import LanguageSwitcher from "./lang-switcher";

export default function SideMenu() {
	const { lang, dict } = useLocale();

	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button variant={"ghost"} size="lg">
					<Menu />
				</Button>
			</SheetTrigger>
			<SheetContent className="max-w-[250px]">
				<SheetHeader>
					<SheetTitle className="text-xl">Menu</SheetTitle>
				</SheetHeader>
				<div className="w-full flex flex-col items-start px-3 gap-6 text-lg">
					<div className="w-full flex flex-col gap-3">
						<p className="text-muted-foreground">
							{lang === "en" ? "Language" : "Idioma"}
						</p>

						<LanguageSwitcher className="w-full" />
					</div>
					<div className="w-full flex flex-col gap-2">
						<p className="text-muted-foreground">
							{lang === "en" ? "Theme" : "Tema"}
						</p>

						<ThemeToggle className="w-full" />
					</div>
					<div className="w-full flex flex-col gap-2 items-start">
						<p className="text-muted-foreground">
							{lang === "en" ? "Navigation" : "Navegación"}
						</p>

						{dict.navbar.links.map((link) => (
							<Button key={link.id} asChild variant="link" className="text-lg">
								<a href={link.href}>{link.label}</a>
							</Button>
						))}
					</div>
				</div>
			</SheetContent>
		</Sheet>
	);
}
