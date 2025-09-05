interface NavbarLink {
	id: string;
	href: string;
	label: string;
}

interface BadgeType {
	id: string;
	name: string;
	value: string;
	emoji: string;
}

interface NavbarDict {
	links: NavbarLink[];
}

interface HeroSection {
	tagline: string;
	description: string;
	badges: BadgeType[];
}

export interface Project {
	id: string;
	name: string;
	description: string;
	tools: string[];
	githubLink: string;
	siteLink: string;
	imgPath: string;
	tagline: string;
}

type ProjectsDict = Project[];

export type Skill = {
	id: string;
	label: string;
	categories: string[];
	color: string;
	styles: string;
	level: string;
	tagline: string;
};

export interface Dictionary {
	navbar: NavbarDict;
	hero: HeroSection;
	skills: Skill[];
	projects: ProjectsDict;
	"more-section": string;
}
