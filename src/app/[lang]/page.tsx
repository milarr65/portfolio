import HeroSection from "@/components/ui/hero-section";
import Navbar from "@/components/ui/navbar";
import ProjectsSection from "@/components/ui/projects-section";
import SkillsSection from "@/components/ui/skills-section";
import { getDictionary } from "@/dictionaries/dictionaries";
import { Copyright } from "lucide-react";

export default async function Home({
	params,
}: {
	params: Promise<{ lang: "en" | "es" }>;
}) {
	const { lang } = await params;
	const dict = await getDictionary(lang);

	return (
		<div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen">
			<Navbar />
			<main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start justify-center my-5">
				<HeroSection />
				<SkillsSection />
				<ProjectsSection />
			</main>
			<footer className="flex flex-col gap-[24px] flex-wrap items-center justify-center w-full bg-card p-5 !mt-[70px]">
				<p>{dict.footer.madeWith}</p>
				<p className="flex flex-row w-full gap-1 items-center justify-center">
					<span>
						<Copyright className="h-5 w-5" />
					</span>
					{new Date().getFullYear()} | All rights reserved
				</p>
			</footer>
		</div>
	);
}
