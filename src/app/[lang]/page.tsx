import HeroSection from "@/components/ui/hero-section";
import Navbar from "@/components/ui/navbar";
import { getDictionary } from "@/dictionaries/dictionaries";
import { Copyright } from "lucide-react";

export default async function Home({
	params,
}: {
	params: Promise<{ lang: "en" | "es" }>;
}) {
	const { lang } = await params;
	const dict = await getDictionary(lang)

	return (
		<div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-6 pb-20 gap-16 sm:p-8">
			<Navbar />
			<main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
				<HeroSection />
			</main>
			<footer className="flex flex-col gap-[24px] flex-wrap items-center justify-center w-full">
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
