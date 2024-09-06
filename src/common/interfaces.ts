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

export interface IContactFormData {
  firstName?: string;
  lastName?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export interface NavBarProps {
  scrollToSection?: (
    sectionId: string,
    offset: number,
    duration?: number
  ) => void;
  isDarkMode?: boolean;
  toggleMenu?: () => void;
}

export interface DarkModeProps {
  isDarkMode: boolean;
}
