"use client";

import { Copyright } from "lucide-react";
import { useLocale } from "@/contexts/locale-context";
import { MyLogo } from "@/assets/icons";

export default function Footer() {
	const { lang } = useLocale();
	return (
		<footer className="flex flex-col gap-6 flex-wrap items-center justify-center w-full bg-card p-5">
			<MyLogo className="size-24 fill-current" />
			<p>
				{lang === "en" ? "Made with ❤️ and Next.js" : "Hecho con ❤️ y Next.js"}
			</p>
			<p className="flex flex-row w-full gap-1 items-center justify-center">
				<span>
					<Copyright className="h-4 w-4 text-current" />
				</span>
				{new Date().getFullYear()}{" "}
				{lang === "en"
					? "All rights reserved"
					: "Todos los derechos reservados."}
			</p>
		</footer>
	);
}
