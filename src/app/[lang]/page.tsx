import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/hero-section";
import MoreAbout from "@/components/more";
import Navbar from "@/components/navbar";
import ScrollToTopBtn from "@/components/ScrollToTopBtn";
import SecondProjectsSection from "@/components/second-project-section";
import SkillsSection from "@/components/skills-section";

export default async function Home() {
	return (
		<div className="font-sans flex flex-col justify-center min-h-screen overflow-x-hidden">
			<Navbar />
			<main className="w-full flex flex-1 flex-col gap-30 items-center sm:items-start justify-center my-23 sm:my-7">
				<HeroSection />
				<SkillsSection />
				<SecondProjectsSection />
				<ContactSection />
				<MoreAbout />
				<ScrollToTopBtn />
			</main>
			<Footer />
		</div>
	);
}
