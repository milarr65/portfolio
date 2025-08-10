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
} from "./card";
import { Badge } from "./badge";
import { Button } from "./button";
import { ExternalLink } from "lucide-react";
import { useLocale } from "@/contexts/locale-context";
import { useState, useEffect } from "react";
import Image from "next/image";

function useIsMobile() {
	const [isMobile, setIsMobile] = useState(false);
	useEffect(() => {
		const checkMobile = () => setIsMobile(window.innerWidth < 768);
		checkMobile();
		window.addEventListener("resize", checkMobile);
		return () => window.removeEventListener("resize", checkMobile);
	}, []);
	return isMobile;
}

export default function ProjectsSection() {
	const { lang, dict } = useLocale();
	const isMobile = useIsMobile();

	return (
		<section className="w-full flex flex-col justify-center items-center h-max mb-6">
			<h1 className="text-3xl font-bold mb-14">Projects</h1>
			<Carousel
				className="w-9/10 justify-center flex"
				orientation={isMobile ? "vertical" : "horizontal"}
			>
				<CarouselContent className={isMobile ? "h-[430px]" : "h-fit"}>
					{dict.projects.map((project) => (
						<CarouselItem
							key={project.id}
							className="basis-8/12 md:basis-1/2 lg:basis-1/3"
						>
							<Card className="h-full flex flex-col justify-between gap-4 max-w-[425px]">
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
								<CardFooter className="">
									<CardAction className="flex justify-between items-center w-full">
										<Button size="sm" asChild>
											<a
												href={project.githubLink}
												target="_blank"
												rel="noopener noreferrer"
											>
												<Image
													alt="github logo"
													src="/github.svg"
													width={14}
													height={14}
												/>
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
		</section>
	);
}
