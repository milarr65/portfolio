"use client";
import { useLocale } from "@/contexts/locale-context";
import Image from "next/image";

export default function MoreAbout() {
	const { lang, dict } = useLocale();
	return (
		<section
			id="more-about"
			className="w-full flex flex-col gap-6 p-6 items-center justify-center"
		>
			<div className="flex flex-col sm:flex-row items-center justify-center gap-10">
				<Image
					src="/my-pics/myPicture1.jpg"
					alt="my picture"
					width={100}
					height={100}
					className="rounded-2xl size-35 -hue-rotate-10"
				/>
				<h1 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
					{lang === "en" ? "More about me" : "Sobre mi"}
				</h1>
			</div>
			<div className="flex flex-col md:flex-row items-center justify-center w-9/10 gap-8 mb-6">
				<div
					className="text-muted-foreground text-justify text-lg lg:text-xl w-11/12 sm:w-8/12"
					dangerouslySetInnerHTML={{ __html: dict["more-section"] }}
				></div>
			</div>
		</section>
	);
}
