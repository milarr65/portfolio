"use client";

import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuCheckboxItem,
	DropdownMenuTrigger,
	DropdownMenuLabel,
	DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { SunMoon } from "lucide-react";
import { useTheme } from "next-themes";
import { useLocale } from "@/contexts/locale-context";
import SideMenu from "./SideMenu";
import { Languages } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";

export default function Navbar() {
	const { lang, dict } = useLocale();
	const navLinks = dict.navbar.links;
	const router = useRouter();
	const path = usePathname();
	const { theme, setTheme } = useTheme();

	function switchTo(newLang: "en" | "es") {
		const newPath = path.replace(/^\/(en|es)/, `/${newLang}`);
		document.cookie = `NEXT_LOCALE=${newLang}; path=/; max-age=${
			6 * 60 * 24 * 365
		}`;
		router.push(newPath);
	}

	return (
		<nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 flex justify-center">
			<div className="container flex h-16 items-center justify-between px-4 md:px-6">
				{/* Logo/Name */}
				<div id="nav-start" className="flex items-center">
					<a href="#" className="text-xl font-bold">
						Camila Arroyo
					</a>
				</div>

				{/* Navigation Links - Hidden on mobile */}
				<div id="nav-middle" className="hidden md:flex items-center space-x-8">
					{navLinks.map((link) => (
						<a
							key={link.id}
							href={link.href}
							className="text-sm font-medium transition-colors hover:text-primary"
						>
							{link.label}
						</a>
					))}
				</div>

				{/* Right side controls */}
				<div id="nav-end" className="flex items-center space-x-2">
					<div className="hidden md:flex flex-row gap-2 items-center">
						{/* Language Toggle */}
						<div>
							<DropdownMenu>
								<DropdownMenuTrigger asChild>
									<Button variant="outline">
										<Languages />
									</Button>
								</DropdownMenuTrigger>
								<DropdownMenuContent>
									<DropdownMenuLabel>
										{lang === "en" ? "Language" : "Idioma"}
									</DropdownMenuLabel>
									<DropdownMenuSeparator />
									<DropdownMenuCheckboxItem
										checked={lang === "en"}
										onCheckedChange={() => switchTo("en")}
									>
										{lang === "en" ? "English" : "Inglés"}
									</DropdownMenuCheckboxItem>
									<DropdownMenuCheckboxItem
										checked={lang === "es"}
										onCheckedChange={() => switchTo("es")}
									>
										{lang === "en" ? "Spanish" : "Español"}
									</DropdownMenuCheckboxItem>
								</DropdownMenuContent>
							</DropdownMenu>
						</div>
						{/* Theme Toggle */}
						<DropdownMenu>
							<DropdownMenuTrigger asChild>
								<Button variant="outline">
									<SunMoon />
								</Button>
							</DropdownMenuTrigger>
							<DropdownMenuContent>
								<DropdownMenuLabel>
									{lang === "en" ? "Theme" : "Tema"}
								</DropdownMenuLabel>
								<DropdownMenuSeparator />
								<DropdownMenuCheckboxItem
									checked={theme === "dark"}
									onCheckedChange={() => setTheme("dark")}
								>
									{lang === "en" ? "Dark" : "Oscuro"}
								</DropdownMenuCheckboxItem>
								<DropdownMenuCheckboxItem
									checked={theme === "light"}
									onCheckedChange={() => setTheme("light")}
								>
									{lang === "en" ? "Light" : "Claro"}
								</DropdownMenuCheckboxItem>
								<DropdownMenuCheckboxItem
									checked={theme === "system"}
									onCheckedChange={() => setTheme("system")}
								>
									{lang === "en" ? "System" : "Sistema"}
								</DropdownMenuCheckboxItem>
							</DropdownMenuContent>
						</DropdownMenu>
					</div>

					{/* Mobile menu button */}
					<div className="md:hidden">
						<SideMenu />
					</div>
				</div>
			</div>
		</nav>
	);
}
