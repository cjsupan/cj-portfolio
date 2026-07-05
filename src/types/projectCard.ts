export interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    tech: string[];
    link: string;
    id: string;
  };
  index: number;
}
