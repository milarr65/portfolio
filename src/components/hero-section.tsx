"use client";

import { Badge } from "@/components/ui/badge";
import { useLocale } from "@/contexts/locale-context";
import Image from "next/image";

export default function HeroSection() {
	const { dict } = useLocale();

	return (
		<section
			className="w-full mt-[60px] flex items-center justify-center mb-[30px]"
			id="hero"
		>
			<div className="w-9/10 flex flex-col justify-center items-center gap-9">
				<div
					id="hero-header"
					className="flex flex-col sm:flex-row gap-8 items-center w-fit"
				>
					<Image
						src="/my-pics/myPicture3.jpg"
						width={150}
						height={150}
						alt="Professional headshot"
						className="aspect-square overflow-hidden rounded-2xl object-cover shadow-lg md:size-45 size-35"
					/>
					<div className="flex flex-col gap-3 text-center sm:text-left">
						<h1 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
							Camila Arroyo
						</h1>
						<p className="text-xl text-muted-foreground md:text-2xl lg:text-3xl">
							{dict.hero.tagline}
						</p>
					</div>
				</div>
				<div
					id="hero-content"
					className="flex flex-col gap-5 justify-center items-center"
				>
					<div className="flex flex-wrap gap-3 justify-center">
						{dict.hero.badges.map((badge) => (
							<Badge
								key={badge.id}
								variant="secondary"
								className="px-4 py-2 text-sm font-medium"
							>
								<span>{badge.emoji}</span>
								<p>{badge.value}</p>
							</Badge>
						))}
					</div>
					<div className="space-y-4">
						<p className="max-w-[600px] text-lg text-muted-foreground md:text-xl text-justify sm:text-center">
							{dict.hero.description}
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
