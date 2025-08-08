interface NavbarLink {
	id: string;
	href: string;
	label: string;
}

interface NavbarDict {
  links: NavbarLink[]
}

interface HeroSection {
	description: string;
	badges: string[];
}

interface Footer {
  madeWith: string
}

export interface Dictionary {
	navbar: NavbarDict;
	hero: HeroSection;
  footer: Footer;
}
