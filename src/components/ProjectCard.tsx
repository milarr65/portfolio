import { Project } from "@/lib/types";
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
import { DialogTrigger } from "./ui/dialog";
import { Button } from "./ui/button";
import { ExternalLink } from "lucide-react";
import GithubIcon from "./GithubIcon";
import Image from "next/image";

export default function ProjectCard({
	project,
	lang,
}: {
	project: Project;
	lang: string;
}) {
	return (
    <DialogTrigger asChild>
		<Card className="aspect-4/1 px-3 py-5 hover:cursor-pointer hover:-translate-y-3 transition-all duration-300 ease-in-out hover:shadow-[0_0_20px_var(--chart-2)] dark:hover:shadow-chart-1">
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
					<Tooltip>
						<TooltipTrigger
							asChild
							className={`ml-2.5 ${!project.siteLink ? "hidden" : ""}`}
						>
							<Button size="icon" variant="secondary" asChild>
								<a href={project.siteLink}>
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
	);
}
