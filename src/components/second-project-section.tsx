"use client";

import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "./ui/badge";
import { useLocale } from "@/contexts/locale-context";
import { Button } from "./ui/button";
import { ExternalLink } from "lucide-react";
import GithubIcon from "./GithubIcon";
import Image from "next/image";
import ProjectCard from "./ProjectCard";

export default function SecondProjectsSection() {
	const { lang, dict } = useLocale();
	return (
		<section
			id="projects"
			className="w-full flex flex-col items-center justify-center gap-10"
		>
			<h2 className="text-3xl font-bold">
				{lang === "en" ? "Projects" : "Proyectos"}
			</h2>
			<div className="w-9/10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 min-h-[300px]">
				{dict.projects.map((project) => (
					<Dialog key={project.id}>
						<ProjectCard project={project} lang={lang} />

						<DialogContent className="sm:max-w-[425px] flex flex-col gap-7">
							<DialogHeader>
								<div className="relative aspect-4/2 mb-4">
									<Image
										src={project.imgPath}
										alt={project.name}
										fill
										className="object-cover rounded-(--radius)"
									/>
								</div>
								<DialogTitle>{project.name}</DialogTitle>
								<DialogDescription className="text-base">
									{project.description}
								</DialogDescription>
							</DialogHeader>

							<div className="flex flex-row gap-3 flex-wrap justify-center sm:justify-start">
								{project.tools.map((tool, idx) => (
									<Badge
										key={idx}
										variant="outline"
										className="text-base bg-sidebar"
									>
										{tool}
									</Badge>
								))}
							</div>

							<DialogFooter className="gap-4">
								<DialogClose asChild>
									<Button size="sm" variant="outline">
										{lang === "en" ? "Close" : "Cerrar"}
									</Button>
								</DialogClose>
								<Button size="sm" asChild>
									<a href={project.githubLink}>
										<GithubIcon className="size-5 fill-current" />
										{lang === "en" ? "Source Code" : "Código"}
									</a>
								</Button>
								<Button
									size="sm"
									asChild
									className={!project.siteLink ? "hidden" : ""}
								>
									<a href={project.siteLink}>
										<ExternalLink />
										{lang === "en" ? "Live Site" : "Sitio Web"}
									</a>
								</Button>
							</DialogFooter>
						</DialogContent>
					</Dialog>
				))}
			</div>
		</section>
	);
}
