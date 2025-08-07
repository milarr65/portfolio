import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export default function HeroSection() {
	return (
		<section className="w-full py-12 md:py-24 lg:py-32">
			<div className="container px-4 md:px-6">
				<div className="grid gap-6 lg:grid-cols-[400px_1fr] lg:gap-12 xl:grid-cols-[500px_1fr]">
					<div className="flex justify-center lg:justify-start">
						<div className="relative">
							<Image
								src="/dbd5bbf6fd6c7e9f7611f8ae94130067.jpg"
								width={350}
								height={350}
								alt="Professional headshot"
								className="aspect-square overflow-hidden rounded-full object-cover shadow-lg"
							/>
							<div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/20 to-transparent" />
						</div>
					</div>
					<div className="flex flex-col justify-center space-y-6">
						<div className="space-y-4">
							<h1 className="text-4xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
								Camila Arroyo
							</h1>
							<p className="max-w-[600px] text-lg text-muted-foreground md:text-xl lg:text-2xl">
								Full-stack developer passionate about creating beautiful,
								functional web experiences. I specialize in React, Next.js, and
								modern web technologies to bring ideas to life.
							</p>
						</div>
						<div className="flex flex-wrap gap-3">
							<Badge
								variant="secondary"
								className="px-4 py-2 text-sm font-medium"
							>
								📅 25 years old
							</Badge>
							<Badge
								variant="secondary"
								className="px-4 py-2 text-sm font-medium"
							>
								👨‍💻 Female
							</Badge>
							<Badge
								aria-description="Studies and experience"
								variant="secondary"
								className="px-4 py-2 text-sm font-medium"
							>
								🎓 Graphic design, Web Development
							</Badge>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
