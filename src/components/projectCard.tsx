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
  const hasLink = !!project.link;

  const content = (
    <div
      className={`w-full max-w-[400px] h-[450px] flex flex-col justify-between p-8 
                 bg-background-light text-primary-light
                 hover:bg-primary-light hover:text-primary-dark
                 dark:bg-background-dark dark:text-primary-dark
                 dark:hover:bg-accent-light dark:hover:text-primary-light
                 transition-all duration-500 group rounded-xl
                 scale-95 hover:scale-100 transform-gpu
                 ${hasLink ? "cursor-pointer" : "cursor-default"}
                `}
    >
      {/* Top: Title & Description */}
      <div className="flex flex-col gap-6">
        <h3 className="text-2xl sm:text-4xl font-heading font-bold leading-none tracking-tight">
          {project.title}
        </h3>
        <p className="text-sm sm:text-lg font-body font-medium opacity-80 group-hover:opacity-100 transition-opacity duration-500">
          {project.description}
        </p>
      </div>

      {/* Bottom: Stack + Link status */}
      <div className="flex flex-col gap-4 border-t border-secondary-dark/30 pt-6 group-hover:border-background-default/30 transition-colors duration-500">
        <div className="flex items-center justify-between">
          <span className="text-xs font-body uppercase tracking-widest opacity-60">
            Stack
          </span>
          {hasLink ? (
            <span className="text-xs font-body uppercase tracking-widest opacity-60 group-hover:opacity-100 transition-opacity duration-500">
              Visit ↗
            </span>
          ) : (
            <span className="text-xs font-body uppercase tracking-widest opacity-40">
              Internal
            </span>
          )}
        </div>
        <p className="text-sm font-body leading-relaxed">
          {project.tech.join(", ")}
        </p>
      </div>
    </div>
  );

  if (hasLink) {
    return (
      <a href={project.link} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return content;
}
