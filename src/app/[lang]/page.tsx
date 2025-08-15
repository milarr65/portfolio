import ContactSection from "@/components/ContactSection";
import HeroSection from "@/components/hero-section";
import Navbar from "@/components/navbar";
import SecondProjectsSection from "@/components/second-project-section";
import SkillsSection from "@/components/skills-section";
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
			<main className="w-full flex flex-col gap-[32px] row-start-2 items-center sm:items-start justify-center my-5">
				<HeroSection />
				<SkillsSection />
				<SecondProjectsSection />
				<ContactSection />
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
