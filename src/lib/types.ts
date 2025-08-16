interface NavbarLink {
	id: string;
	href: string;
	label: string;
}

interface Skill {
	id: string;
	label: string;
	href: string;
	level: string;
	color: string;
}

interface SkillType {
	name: string;
	content: Skill[];
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
}

type ProjectsDict = Project[];

export interface Dictionary {
	navbar: NavbarDict;
	hero: HeroSection;
	skills: { types: SkillType[] };
	projects: ProjectsDict;
}
