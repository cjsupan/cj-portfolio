export interface Project {
  name: string;
  description: string[];
}

export interface About {
  title: string;
  company: string;
  date: string;
  type: string;
  overview: string;
  projects: Project[];
  technologies: string[];
}
