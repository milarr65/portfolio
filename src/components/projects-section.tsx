"use client";

import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";

import {
	Card,
	CardHeader,
	CardTitle,
	CardAction,
	CardContent,
	CardDescription,
	CardFooter,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ExternalLink } from "lucide-react";
import { useLocale } from "@/contexts/locale-context";
/* import { useState, useEffect } from "react";
 */ import Image from "next/image";
import GithubIcon from "./GithubIcon";

/* function useIsMobile() {
	const [isMobile, setIsMobile] = useState(false);
	useEffect(() => {
		const checkMobile = () => setIsMobile(window.innerWidth < 768);
		checkMobile();
		window.addEventListener("resize", checkMobile);
		return () => window.removeEventListener("resize", checkMobile);
	}, []);
	return isMobile;
} */

export default function ProjectsSection() {
	const { lang, dict } = useLocale();
	// const isMobile = useIsMobile();

	return (
		<section
			className="w-full flex flex-col justify-center items-center h-max mb-6 gap-4 max-w-screen px-6"
			id="projects"
		>
			<h1 className="text-3xl font-bold">
				{lang === "en" ? "Projects" : "Proyectos"}
			</h1>
			<div className="w-9/10 flex flex-col justify-center items-center">
				<Carousel
					className="w-full justify-center flex h-max"
					orientation={"horizontal"}
				>
					<CarouselContent className={`-ml-4 h-max`}>
						{dict.projects.map((project) => (
							<CarouselItem
								key={project.id}
								className="basis-1/1 md:basis-2/3 lg:basis-1/3 pl-4 flex justify-center items-center"
							>
								<Card className="flex flex-col justify-between w-full gap-4 min-w-[240px] max-w-[330px] h-full">
									<CardHeader>
										<div className="relative bg-accent w-full h-38 rounded-xl mb-4">
											<Image
												src={project.imgPath}
												alt={project.name}
												fill
												style={{ objectFit: "cover" }}
												className="rounded-xl"
												sizes="100vw"
											/>
										</div>
										<CardTitle>{project.name}</CardTitle>
										<CardDescription>{project.description}</CardDescription>
									</CardHeader>
									<CardContent className="flex gap-2 flex-wrap">
										{project.tools.map((tool, idx) => (
											<Badge key={idx} variant="secondary">
												{tool}
											</Badge>
										))}
									</CardContent>
									<CardFooter>
										<CardAction className="flex flex-wrap gap-3 justify-between items-center w-full">
											<Button size="sm" asChild>
												<a
													href={project.githubLink}
													target="_blank"
													rel="noopener noreferrer"
												>
													<GithubIcon className="fill-current h-4 w-4" />
													Github repo
												</a>
											</Button>
											<Button
												size="sm"
												asChild={!!project.siteLink}
												disabled={!project.siteLink}
												aria-disabled={!project.siteLink}
											>
												{project.siteLink ? (
													<a
														href={project.siteLink}
														target="_blank"
														rel="noopener noreferrer"
													>
														<ExternalLink />
														{lang === "en" ? "Live Preview" : "Sitio Web"}
													</a>
												) : (
													<span className="opacity-90 pointer-events-none flex items-center gap-1">
														<ExternalLink />
														{lang === "en" ? "Live Preview" : "Sitio Web"}
													</span>
												)}
											</Button>
										</CardAction>
									</CardFooter>
								</Card>
							</CarouselItem>
						))}
					</CarouselContent>
					<CarouselPrevious />
					<CarouselNext />
				</Carousel>
			</div>
		</section>
	);
}
