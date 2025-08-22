"use client";

import { useLocale } from "@/contexts/locale-context";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SkillHoverIcon from "@/components/SkillHoverIcon";

export default function SkillsSection() {
	const { lang, dict } = useLocale();
	// console.log(SkillHoverIcon);

	return (
		<section
			className="w-full flex flex-col justify-center items-center h-fit gap-4"
			id="skills"
		>
			<h1 className="text-3xl font-bold w-full text-center">
				{lang === "en" ? "Skills & Technologies" : "Tecnologías y Aptitudes"}
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

			<Tabs defaultValue="all" className="w-9/10 items-center gap-5">
				<TabsList>
					<TabsTrigger value="all">All</TabsTrigger>
					<TabsTrigger value="frontend">Frontend</TabsTrigger>
					<TabsTrigger value="backend">Backend</TabsTrigger>
					<TabsTrigger value="tools">Tools & Design</TabsTrigger>
				</TabsList>
			</Tabs>
		</section>
	);
}
