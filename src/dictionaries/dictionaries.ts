"use server";
import { Dictionary } from "@/lib/types";

const dictionaries = {
	en: async (): Promise<Dictionary> => {
		const dictModule = await import("./en.json");
		return dictModule.default;
	},
	es: async (): Promise<Dictionary> => {
		const dictModule = await import("./es.json");
		return dictModule.default;
	},
} as const;

type Locale = keyof typeof dictionaries;

export const getDictionary = async (locale: Locale) => {
	return await dictionaries[locale]();
};
