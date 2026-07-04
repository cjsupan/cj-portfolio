interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    tech: string[];
    link: string;
    id: string;
  };
}

export function ProjectCard({ project }: ProjectCardProps) {
  const hasLink = !!project.link;

  const content = (
    <div
      className={`w-full max-w-[400px] h-[500px] flex flex-col justify-between p-8 
                 bg-background-light text-primary-light
                 dark:bg-background-dark dark:text-primary-dark
                 border border-transparent dark:border-secondary-dark/10
                 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/20 dark:hover:border-accent-light/50
                 transition-all duration-300 group rounded-xl transform-gpu
                 ${hasLink ? "cursor-pointer" : "cursor-default"}
                `}
    >
      {/* Top: Title & Description */}
      <div className="flex flex-col gap-6">
        <h3 className="text-2xl sm:text-4xl font-heading font-bold leading-none tracking-tight dark:group-hover:text-accent-light transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-sm sm:text-lg font-body font-medium opacity-80 group-hover:opacity-100 transition-opacity duration-300">
          {project.description}
        </p>
      </div>

      {/* Bottom: Stack + Link status */}
      <div className="flex flex-col gap-4 border-t border-secondary-light/20 dark:border-secondary-dark/30 pt-6 group-hover:border-accent-dark/40 dark:group-hover:border-accent-light/40 transition-colors duration-300">
        <div className="flex items-center justify-between">
          <span className="text-xs font-body uppercase tracking-widest opacity-60">
            Stack
          </span>
          {hasLink ? (
            <span className="text-xs font-body uppercase tracking-widest text-accent-dark dark:text-accent-light -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
              Visit ↗
            </span>
          ) : (
            <span className="text-xs font-body uppercase tracking-widest opacity-40">
              Internal
            </span>
          )}
        </div>
        {/* <p className="text-sm font-body leading-relaxed text-secondary-light dark:text-secondary-dark group-hover:text-primary-light dark:group-hover:text-primary-dark transition-colors duration-300">
          {project.tech.join(", ")}
        </p> */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-2 py-1 text-[10px] uppercase tracking-wider border border-secondary-light/20 dark:border-secondary-dark/20 rounded-sm text-secondary-light dark:text-secondary-dark group-hover:border-accent-dark dark:group-hover:border-accent-light group-hover:text-accent-dark dark:group-hover:text-accent-light transition-colors duration-500"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  if (hasLink) {
    return (
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`View project: ${project.title}`}
        className="block"
      >
        {content}
      </a>
    );
  }

  return content;
}
