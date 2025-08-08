"use client";
import { createContext, useContext, ReactNode } from "react";
import { Dictionary } from "@/lib/types";

type LocaleContextValue = {
	lang: "en" | "es";
	dict: Dictionary;
};
const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({
	children,
	lang,
	dict,
}: {
	children: ReactNode;
	lang: "en" | "es";
	dict: Dictionary;
}) {
	return (
		<LocaleContext.Provider value={{ lang, dict }}>
			{children}
		</LocaleContext.Provider>
	);
}

export function useLocale() {
	const ctx = useContext(LocaleContext);
	if (!ctx) throw new Error("useLocale must be inside LocaleProvider");

	return ctx;
}
