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

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  environment: string;
  methodology: string;
  responsibilities: string[];
}

export interface Dictionary {
  navbar: NavbarDict;
  hero: HeroSection;
  experience: Experience[];
  skills: Skill[];
  projects: ProjectsDict;
  "more-section": string;
}

export type Locale = "en" | "es";
