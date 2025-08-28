import Image from "next/image";

export default function MoreAbout() {
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
					More about me
				</h1>
			</div>
			<div className="flex flex-col md:flex-row items-center justify-center w-9/10 gap-8 mb-6">
				<div className="prose prose-base text-muted-foreground text-justify text-lg">
					<p>
						Hi! I'm Mila, a 25-year-old self-taught web developer based in
						Mexico City. I’m bilingual (Spanish is my first language, and I’ve
						studied English since childhood). I also enjoy learning other
						languages, I can even read and write some Korean.
						<br />
						<br />I originally studied graphic design and earned an associate’s
						degree in high school, with plans to pursue that career. But during
						college, I took a <em>Web Design</em> class where I discovered how
						much I enjoyed working with HTML and CSS. That experience completely
						shifted my path: I realized I was more passionate about building
						websites than designing them.
						<br />
						<br />
						Since then, I’ve been focused on learning full-stack web
						development. I’ve completed online courses like{" "}
						<em>The Complete Full-Stack Web Development Bootcamp</em> and{" "}
						<em>100 Days of Code: The Complete Python Pro Bootcamp</em> by Dr.
						Angela Yu, and I continue to build projects to strengthen my skills.
						<br />
						<br />
						Now, I’m working toward a career in web development, combining my
						design background with my passion for coding to create websites that
						are both functional and visually engaging.
					</p>
					
				</div>
			</div>
		</section>
	);
}
