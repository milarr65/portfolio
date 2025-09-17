"use client";
import { ArrowUp } from "lucide-react";
import { Button } from "./ui/button";
import { Tooltip, TooltipTrigger, TooltipContent } from "./ui/tooltip";
import { useLocale } from "@/contexts/locale-context";

export default function ScrollToTopBtn() {
	const {lang} = useLocale()
	return (
		<Tooltip delayDuration={300}>
			<TooltipTrigger asChild>
				<Button
					className="fixed right-3 bottom-3 z-10"
					onClick={() => {
						document.documentElement.scrollTo({
							top: 0,
							behavior: "smooth",
						});
					}}
				>
					<ArrowUp className="stroke-3" />
				</Button>
			</TooltipTrigger>
			<TooltipContent
				className="bg-secondary text-secondary-foreground"
				avoidCollisions
				side="left"
				sideOffset={5}
			>
				<p>{lang === "en" ? "Back to top" : "Subir"}</p>
			</TooltipContent>
		</Tooltip>
	);
}
