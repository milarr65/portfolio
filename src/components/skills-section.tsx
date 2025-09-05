"use client";

import { useLocale } from "@/contexts/locale-context";
import SkillHoverIcon from "@/components/SkillHoverIcon";

export default function SkillsSection() {
	const { lang, dict } = useLocale();
	// console.log(SkillHoverIcon);

	return (
		<section
			id="skills"
			className="w-full flex flex-col justify-center items-center h-fit gap-4"
		>
			<h1 className="text-3xl font-bold w-full text-center">
				{lang === "en" ? "Skills & Technologies" : "Aptitudes y Herramientas"}
			</h1>
			<p className="text-xl text-muted-foreground max-w-2xl mx-auto text-center w-9/10">
				{lang === "en"
					? "Hover over the icons to learn more about my experience with each technology"
					: "Pasa el cursor sobre los iconos para ver más sobre mi experiencia con cada tecnología."}
			</p>
			<div className="flex flex-wrap gap-5 w-full mx-auto justify-center my-3 ">
				<div className="w-9/10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-9 place-items-center h-fit">
					{dict.skills.map((skill) => (
						<SkillHoverIcon key={skill.id} skill={skill} lang={lang} />
					))}
				</div>
			</div>
		</section>
	);
}
