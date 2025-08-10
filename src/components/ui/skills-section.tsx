"use client";

import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Badge } from "./badge";
import {
	Accordion,
	AccordionItem,
	AccordionTrigger,
	AccordionContent,
} from "./accordion";
import { useLocale } from "@/contexts/locale-context";

export default function SkillsSection() {
	const { dict } = useLocale();
	// console.log(dict);

	return (
		<section className="w-full">
			{/* Hidden safelist for Tailwind */}
			<div className="hidden bg-emerald-300 dark:bg-emerald-700 bg-indigo-300 dark:bg-indigo-700 bg-slate-300 dark:bg-slate-700 bg-amber-300 dark:bg-amber-700" />
			<h1 className="text-3xl font-bold w-full text-center">Skills</h1>
			{dict.skills.types.map((type, idx) => (
				<Accordion
					key={idx}
					type="single"
					collapsible
					defaultValue="item0"
					className="w-full"
				>
					<AccordionItem value={`item${idx}`}>
						<AccordionTrigger>{type.name}</AccordionTrigger>
						<AccordionContent className="grid grid-cols-2 md:grid-cols-3 w-full gap-4">
							{type.content.map((skill) => (
								<Card className="w-auto" key={skill.id}>
									<CardHeader className="flex flex-row flex-wrap gap-4 items-center justify-between">
										<div className="flex flex-row gap-3 items-center">
											<Image
												src={skill.href || skill.label.slice(0, 2)}
												width={25}
												height={25}
												alt="react"
												className="w-7"
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
		</section>
	);
}
