"use server";
import { Dictionary } from "@/lib/types";

const dictionaries = {
	en: async (): Promise<Dictionary> => {
		const module = await import("./en.json");
		return module.default;
	},
	es: async (): Promise<Dictionary> => {
		const module = await import("./es.json");
		return module.default;
	},
} as const;

type Locale = keyof typeof dictionaries;

export const getDictionary = async (locale: Locale) => {
	return await dictionaries[locale]();
};
