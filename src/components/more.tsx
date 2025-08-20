import Image from "next/image";

export default function MoreAbout() {
	return (
		<section
			id="more-about"
			className="w-full flex flex-col gap-6 p-6 items-center justify-center"
		>
			<h1 className="text-3xl font-bold">More about me</h1>
			<div className="flex flex-col md:flex-row items-center justify-center w-9/10 gap-8 mb-6">
				<Image
					src="/my-pics/myPicture1.jpg"
					alt="my picture"
					width={200}
					height={100}
					className="rounded-2xl z-20 -hue-rotate-10"
				/>

				<div className="prose text-muted-foreground text-justify">
					<p>
						Hi! I'm Mila, a 25-year-old self-taught web developer based in
						Mexico City. I’m bilingual (Spanish is my first language, and I’ve
						studied English since childhood). I also enjoy learning other
						languages, I can even read and write a little Korean.
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
			<div className="prose text-muted-foreground w-full">
				<h3 className="text-muted-foreground">Some fun facts about me 🤓☝️:</h3>
				<ul>
					<li>
						I like to be called <strong className="text-primary">Mila</strong>{" "}
						rather than my full name 😅
					</li>
					<li>
						My favorite videogame is{" "}
						<strong className="text-primary">
							The legend of Zelda: Breath of the Wild
						</strong>{" "}
						I've never had such a strong obsession before like I could play it
						for HOURS AND HOURS non stop.
					</li>
					<li>I have two schnauzers, they are the love of my life {" <333"}</li>
					<li>
						My current music obsession is the band{" "}
						<strong className="text-primary">Ghost</strong> and I CANNOT wait to
						see them live this september!! My fav songs so far are Lachryma,
						Elizabeth, Square Hammer and Majesty.{" "}
						<em>God picking favorites is soo hard when it comes to ghost...</em>
					</li>
					<li>
						My favorite movie is{" "}
						<strong className="text-primary">
							The Hunchback of Notre Dame.
						</strong>{" "}
						It's genuinely the best musical disney has ever done. Like this is
						litteraly their peak and they will never reach this height again
						imo.
					</li>
					<li>
						I'm bilingual; english and spanish. Spanish is my first language,
						and I studied english from ages 5 to 18. I also can read and write
						some korean.
					</li>
				</ul>
			</div>
		</section>
	);
}
