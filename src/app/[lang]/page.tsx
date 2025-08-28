import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/hero-section";
import MoreAbout from "@/components/more";
import Navbar from "@/components/navbar";
import SecondProjectsSection from "@/components/second-project-section";
import SkillsSection from "@/components/skills-section";
import { getDictionary } from "@/dictionaries/dictionaries";

export default async function Home({
	params,
}: {
	params: Promise<{ lang: "en" | "es" }>;
}) {
	const { lang } = await params;
	const dict = await getDictionary(lang);

	return (
		<div className="font-sans flex flex-col justify-center min-h-screen">
			<Navbar />
			<main className="w-full flex flex-1 flex-col gap-30 items-center sm:items-start justify-center my-5">
				<HeroSection />
				<SkillsSection />
				<SecondProjectsSection />
				<ContactSection />
				<MoreAbout />
			</main>
			<Footer />
		</div>
	);
}
