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

				<div className="prose text-muted-foreground">
					<p>
						Up until a year ago I was studying graphic design, but at one point
						I realized that even though I like the arts I'd rather leave that as
						a hobby. At one point in college I took a class called "Web Page
						Design" and ever since then I haven't stopped learning about web
						development and programming in general.
						<br />
						<br />
						And well here i am, building up some prejects little by little. This
						is the career I actually want to persue.
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
