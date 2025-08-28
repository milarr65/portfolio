import { Project } from "@/lib/types";
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { DialogTrigger } from "./ui/dialog";
import Image from "next/image";
import * as Icons from "@/assets/icons";
import { FC, SVGProps } from "react";

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
	bootstrap: Icons.Bootstrap,
};

export default function ProjectCard({
	project,
	lang,
}: {
	project: Project;
	lang: string;
}) {
	return (
		<DialogTrigger asChild>
			<Card className="px-3 py-5 hover:cursor-pointer hover:-translate-y-3 transition-all duration-300 ease-in-out hover:shadow-[0_0_13px_var(--color-slate-400)]">
				<CardHeader className="relative aspect-4/2 bg-muted rounded-(--radius)">
					{project.imgPath && (
						<Image
							src={project.imgPath}
							alt={project.name}
							fill
							className="object-cover rounded-(--radius)"
						/>
					)}
				</CardHeader>
				<CardFooter className="flex flex-col items-center px-2 gap-3">
					<div className="flex flex-row flex-wrap justify-between w-full gap-3">
						<CardTitle className="text-lg">{project.name}</CardTitle>
						<div className="flex flex-row  flex-wrap gap-2 items-center">
							{project.tools.map((tool, idx) => {
								let toolName = tool.toLowerCase().split(" ")[0];

								if (tool === "PostgreSQL") {
									toolName = "psql";
								}
								const Icon = icons[toolName];

								if (!Icon) {
									return;
								} else {
									return <Icon key={idx} className="size-6" />;
								}
							})}
						</div>
					</div>
					<p className="w-full text-muted-foreground">{project.tagline}</p>
				</CardFooter>
			</Card>
		</DialogTrigger>
	);
}
