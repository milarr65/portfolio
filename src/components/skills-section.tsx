"use client";

import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Badge } from "./ui/badge";
import {
	Accordion,
	AccordionItem,
	AccordionTrigger,
	AccordionContent,
} from "./ui/accordion";
import { useLocale } from "@/contexts/locale-context";

export default function SkillsSection() {
	const { lang, dict } = useLocale();
	// console.log(dict);

	return (
		<section
			className="w-full flex flex-col justify-center h-fit gap-4"
			id="skills"
		>
			{/* Hidden safelist for Tailwind */}
			{/* <div className="hidden bg-emerald-300 dark:bg-emerald-700" />
			<div className="hidden bg-slate-300 dark:bg-slate-700" />
			<div className="hidden bg-amber-300 dark:bg-amber-700" />
			<div className="hidden bg-indigo-300 dark:bg-indigo-700" /> */}

			<h1 className="text-3xl font-bold w-full text-center">
				{lang === "en" ? "Skills" : "Habilidades"}
			</h1>
			<div className="flex flex-col justify-center items-center">
				{dict.skills.types.map((type, idx) => (
					<Accordion
						key={idx}
						type="single"
						collapsible
						defaultValue="item0"
						className="w-9/10"
					>
						<AccordionItem value={`item${idx}`}>
							<AccordionTrigger>{type.name}</AccordionTrigger>
							<AccordionContent className="grid grid-cols-2 md:grid-cols-3 w-full gap-4">
								{type.content.map((skill) => (
									<Card
										className="w-auto aspect-2/1 sm:aspect-auto"
										key={skill.id}
									>
										<CardHeader className="flex flex-col sm:flex-row flex-wrap gap-4 items-center justify-between">
											<div className="flex flex-col sm:flex-row gap-3 items-center">
												<Image
													src={skill.href}
													width={30}
													height={30}
													alt={skill.label}
													className="w-9 h-9"
												/>
												<CardTitle>{skill.label}</CardTitle>
											</div>
											<Badge
												variant="secondary"
												className={`bg-${skill.color}-300 dark:bg-${skill.color}-700 text-primary`}
											>
												{skill.level}
											</Badge>
										</CardHeader>
									</Card>
								))}
							</AccordionContent>
						</AccordionItem>
					</Accordion>
				))}
			</div>
		</section>
	);
}
