export interface IProject {
  title: string;
  image: string;
  technologies: string[];
  description: string;
  demo: string;
  liveLink: string;
  githubLink: string;
}

export interface ITechnologies {
  name: string;
  icon: string;
}

export interface NavBarProps {
  scrollToSection: (sectionId: string) => void;
  isDarkMode: boolean;
}

export interface DarkModeProps {
  isDarkMode: boolean;
}