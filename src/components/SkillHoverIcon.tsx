import * as Icons from "@/assets/icons";
import {
	HoverCard,
	HoverCardContent,
	HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Badge } from "./ui/badge";
import { Skill } from "@/lib/types";
import { FC, SVGProps } from "react";

const levelStyles: Record<string, string> = {
	Basic: "border-amber-400 border-1 bg-amber-400/20",
	Básico: "border-amber-400 border-1 bg-amber-400/20",

	Intermediate: "border-emerald-400 border-1 bg-emerald-400/20",
	Intermedio: "border-emerald-400 border-1 bg-emerald-400/20",

	Advanced: "border-sky-400 border-1 bg-sky-400/20",
	Avanzado: "border-sky-400 border-1 bg-sky-400/20",
};

const icons: Record<string, FC<SVGProps<SVGElement>>> = {
	html: Icons.Html,
	css: Icons.Css,
	javascript: Icons.Javascript,
	typescript: Icons.Typescript,
	react: Icons.React,
	nextjs: Icons.Nextjs,
	nodejs: Icons.Nodejs,
	express: Icons.Express,
	python: Icons.Python,
	psql: Icons.Psql,
	supabase: Icons.Supabase,
	axios: Icons.Axios,
	tailwind: Icons.Tailwind,
	git: Icons.Git,
	github: Icons.Github,
	photoshop: Icons.Photoshop,
	illustrator: Icons.Illustrator,
	indesign: Icons.Indesign,
};

export default function SkillHoverIcon({
	skill,
	lang,
}: {
	skill: Skill;
	lang: "en" | "es";
}) {
	const Icon = icons[skill.id];

	if (!Icon) {
		console.error(`❌ Missing icon for skill.id: ${skill.id}`);
		return null;
	}
	return (
		<>
			<HoverCard openDelay={500}>
				{/* Gray Icon -- on hover it shows color and scales up  */}
				<HoverCardTrigger asChild>
					<button
						type="button"
						aria-label={`${skill.label} details`}
						className={`group aspect-square size-24 rounded-xl p-3.5 border-secondary border-2 bg-muted/70 dark:bg-card inline-flex place-items-center flex-col hover:-translate-y-2 transition-all ease-in-out duration-300 my-5 ${skill.styles}`}
					>
						<Icon
							className={`size-20 grayscale dark:brightness-125 opacity-70 transform group-hover:scale-110 transition-all ease-in-out duration-300 group-hover:grayscale-0 group-hover:brightness-100 group-hover:opacity-100 ${
								skill.id === "github" ? "dark:invert" : ""
							}`}
						/>
					</button>
				</HoverCardTrigger>
				{/* Card Content */}
				<HoverCardContent side="top" className="flex flex-col gap-5 w-86">
					{/* Skill icon and name */}
					<div
						id="card-header"
						className="flex flex-row flex-wrap gap-3 items-center justify-start"
					>
						<Icon
							className={`size-10 ${
								skill.id === "github" ? "dark:invert" : ""
							}`}
						/>
						<p className="text-lg font-bold">{skill.label}</p>
						<p>{lang === "en" ? "Level" : "Nivel"}</p>
						<Badge
							variant="outline"
							className={`${
								levelStyles[skill.level]
							} font-medium text-primary text-base`}
						>
							{skill.level}
						</Badge>
					</div>

					<p className="text-muted-foreground w-full">{skill.tagline}</p>

					{/* categories badges */}
					<div className="flex flex-wrap justify-start gap-3">
						{skill.categories.map((cat) => (
							<Badge
								key={cat}
								variant="secondary"
								className="text-base font-semibold"
							>
								{cat.slice(0, 1).toUpperCase() + cat.slice(1)}
							</Badge>
						))}
					</div>
				</HoverCardContent>
			</HoverCard>

			{/* Hidden icon square to fake a checker board grid */}
			<div className="aspect-square size-24 rounded-xl p-3.5 border-transparent border-2 bg-transparent my-7 hidden sm:flex"></div>
		</>
	);
}
