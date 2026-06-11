interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    tech: string[];
    link: string;
    id: string;
  };
  index: number;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div
      className="w-full max-w-[400px] h-[450px] flex flex-col justify-between p-8 
                 bg-background-light text-primary-light
                 hover:bg-primary-light hover:text-primary-dark
                 dark:bg-background-dark dark:text-primary-dark
                 dark:hover:bg-accent-light dark:hover:text-primary-light
                 transition-colors duration-500 cursor-pointer group rounded-xl"
    >
      {/* Top: Massive Title & Description */}
      <div className="flex flex-col gap-6">
        <h3 className="text-4xl font-heading font-bold leading-none tracking-tight">
          {project.title}
        </h3>
        <p className="text-lg font-body font-medium opacity-80 group-hover:opacity-100 transition-opacity duration-500">
          {project.description}
        </p>
      </div>

      {/* Bottom: Stark Tech Typography (No Pills) */}
      <div className="flex flex-col gap-4 border-t border-secondary-dark/30 pt-6 group-hover:border-background-default/30 transition-colors duration-500">
        <span className="text-xs font-body uppercase tracking-widest opacity-60">
          Stack
        </span>
        <p className="text-sm font-body leading-relaxed">
          {/* Join the array into a clean, comma-separated string */}
          {project.tech.join(", ")}
        </p>
      </div>
    </div>
  );
}
