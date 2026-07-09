import type { ProjectCardProps } from "../types/projectCard";

export function ProjectCard({ project, index }: ProjectCardProps) {
  const hasLink = !!project.link;
  const isNDA = project.id === "nda-placeholder";

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
      {isNDA && (
        <div className="absolute top-8 right-8 text-secondary-light/30 dark:text-secondary-dark/30">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
          </svg>
        </div>
      )}

      <div className="absolute top-8 right-8 flex items-center justify-center">
        {!isNDA && (
          <span className="text-sm font-heading font-bold opacity-40 group-hover:opacity-100 transition-opacity duration-300">
            0{index + 1}
          </span>
        )}
      </div>

      <div className="flex flex-col gap-6 mt-4">
        <h3 className="text-2xl sm:text-4xl font-heading font-bold leading-none tracking-tight">
          {project.title}
        </h3>
        <p className="text-sm sm:text-lg font-body font-medium opacity-80">
          {project.description}
        </p>
      </div>

      <div className="flex flex-col gap-4 border-t border-secondary-light/20 dark:border-secondary-dark/30 pt-6 group-hover:border-accent-dark/40 dark:group-hover:border-accent-light/40 lg:transition-colors lg:duration-300">
        <div className="flex items-center justify-between">
          <span className="text-xs font-body uppercase tracking-widest opacity-60">
            {isNDA ? "Status" : "Stack"}
          </span>
          {hasLink && (
            <span className="text-xs font-body uppercase tracking-widest text-accent-dark dark:text-accent-light -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
              Visit ↗
            </span>
          )}
        </div>

        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className={`px-2 py-1 text-[10px] uppercase tracking-wider border rounded-sm lg:transition-colors lg:duration-500 
                         ${
                           isNDA
                             ? "border-secondary-light/10 text-secondary-light/50"
                             : "border-secondary-light/20 dark:border-secondary-dark/20 text-secondary-light dark:text-secondary-dark group-hover:border-accent-dark dark:group-hover:border-accent-light group-hover:text-accent-dark dark:group-hover:text-accent-light"
                         }`}
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
