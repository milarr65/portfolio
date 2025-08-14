 "use server";

const dictionaries = {
	en: () => import("./en.json").then((module) => module.default),
	es: () => import("./es.json").then((module) => module.default),
} as const;

type Locale = keyof typeof dictionaries;

export const getDictionary = async (locale: Locale) => {
	return dictionaries[locale]();
};
