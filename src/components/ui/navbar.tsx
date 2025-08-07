"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Moon, Sun, Globe } from "lucide-react";
import { useTheme } from "next-themes";

export default function Navbar() {
	const { theme, setTheme } = useTheme();
	const [language, setLanguage] = useState("en");

	const navLinks = [
		{ href: "#skills", label: language === "en" ? "Skills" : "Habilidades" },
		{ href: "#projects", label: language === "en" ? "Projects" : "Proyectos" },
		{ href: "#contact", label: language === "en" ? "Contact" : "Contacto" },
		{ href: "#resume", label: language === "en" ? "Resume" : "Currículum" },
	];

	return (
		<nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 flex justify-center">
			<div className="container flex h-16 items-center justify-between px-4 md:px-6">
				{/* Logo/Name */}
				<div className="flex items-center">
					<a href="#" className="text-xl font-bold">
						Camila Arroyo
					</a>
				</div>

				{/* Navigation Links - Hidden on mobile */}
				<div className="hidden md:flex items-center space-x-8">
					{navLinks.map((link) => (
						<a
							key={link.href}
							href={link.href}
							className="text-sm font-medium transition-colors hover:text-primary"
						>
							{link.label}
						</a>
					))}
				</div>

				{/* Right side controls */}
				<div className="flex items-center space-x-2">
					{/* Language Toggle */}
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Button variant="ghost" size="sm">
								<Globe className="h-4 w-4" />
								<span className="ml-2 hidden sm:inline">
									{language === "en" ? "EN" : "ES"}
								</span>
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent align="end">
							<DropdownMenuItem onClick={() => setLanguage("en")}>
								🇺🇸 English
							</DropdownMenuItem>
							<DropdownMenuItem onClick={() => setLanguage("es")}>
								🇪🇸 Español
							</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>

					{/* Theme Toggle */}
					<Button
						variant="ghost"
						size="sm"
						onClick={() => setTheme(theme === "light" ? "dark" : "light")}
					>
						<Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
						<Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
						<span className="sr-only">Toggle theme</span>
					</Button>

					{/* Mobile menu button */}
					<div className="md:hidden">
						<DropdownMenu>
							<DropdownMenuTrigger asChild>
								<Button variant="ghost" size="sm">
									<svg
										className="h-4 w-4"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M4 6h16M4 12h16M4 18h16"
										/>
									</svg>
								</Button>
							</DropdownMenuTrigger>
							<DropdownMenuContent align="end" className="w-48">
								{navLinks.map((link) => (
									<DropdownMenuItem key={link.href} asChild>
										<a href={link.href}>{link.label}</a>
									</DropdownMenuItem>
								))}
							</DropdownMenuContent>
						</DropdownMenu>
					</div>
				</div>
			</div>
		</nav>
	);
}
