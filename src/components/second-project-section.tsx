"use client";

import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import {
	Card,
	CardAction,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import { Badge } from "./ui/badge";
import { useLocale } from "@/contexts/locale-context";
import Image from "next/image";
import { Button } from "./ui/button";
import GithubIcon from "./GithubIcon";
import { ExternalLink } from "lucide-react";

export default function SecondProjectsSection() {
	const { lang, dict } = useLocale();
	return (
		<section className="w-full flex flex-col items-center justify-center gap-10">
			<h2 className="text-3xl font-bold">
				{lang === "en" ? "Projects" : "Proyectos"}
			</h2>
			<div className="w-9/10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 min-h-[300px]">
				{dict.projects.map((project) => (
					<Dialog key={project.id}>
						<DialogTrigger asChild>
							<Card
								className="aspect-4/1 px-3
               py-5 hover:-translate-y-3 transition-all duration-300 ease-in-out hover:shadow-chart-1/50 shadow-lg"
							>
								<CardHeader className="relative aspect-3/2">
									<Image
										src={project.imgPath}
										alt={project.name}
										fill
										className="object-cover rounded-(--radius)"
									/>
								</CardHeader>
								<CardFooter className="flex flex-row justify-between items-center px-2 gap-3">
									<CardTitle>{project.name}</CardTitle>
									<CardAction className="">
										<Tooltip>
											<TooltipTrigger asChild className="ml-2.5">
												<Button size="icon" variant="secondary" asChild>
													<a href={project.githubLink}>
														<GithubIcon className="fill-current size-6" />
													</a>
												</Button>
											</TooltipTrigger>
											<TooltipContent>
												{lang === "en" ? "Github Repo" : "Código en Github"}
											</TooltipContent>
										</Tooltip>
										<Tooltip >
											<TooltipTrigger asChild className={`ml-2.5 ${!project.siteLink ? "hidden" : ""}`}>
												<Button size="icon" variant="secondary" asChild>
													<a
														href={project.siteLink}
														
													>
														<ExternalLink className="size-6" />
													</a>
												</Button>
											</TooltipTrigger>
											<TooltipContent>
												{lang === "en" ? "Live Website" : "Sitio Web"}
											</TooltipContent>
										</Tooltip>
									</CardAction>
								</CardFooter>
							</Card>
						</DialogTrigger>
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

						{/* <div
						key={project.id}
						id="project-card"
						className="aspect-3/2 relative outline-2 rounded-2xl outline-secondary overflow-hidden hover:-translate-y-3 transition-all duration-300 ease-in-out"
					>
						<Image
							src={project.imgPath}
							alt={project.name}
							fill
							className="object-cover rounded-2xl"
						/>
          <div className="absolute bottom-0 w-full bg-card p-4 text-sm flex flex-row justify-between items-center">
            {project.name}
            <div>
              <Button size="icon" variant="default" className="text-2xl">
                <GithubIcon className="fill-current size-6"/>
              </Button>
            </div>
          </div>
					</div> */}
					</Dialog>
				))}
			</div>
		</section>
	);
}
