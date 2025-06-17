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

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <div
      key={index}
      className="w-[250px] h-[350px] bg-[rgba(217,217,217,0.58)] dark:bg-gray-800
               shadow-md drop-shadow-lg border-2 border-primary-light dark:border-secondary-dark
               rounded-[17px] text-center cursor-pointer transition-all duration-300 
               flex items-center justify-center select-none font-bold text-black 
               hover:border-primary-default dark:hover:border-primary-dark hover:scale-105 active:scale-105 flex-shrink-0 snap-center p-4"
    >
      <div className="w-full h-full flex flex-col text-left">
        <div className="flex flex-col gap-4 flex-grow">
          <h3 className="text-lg text-primary-light font-semibold dark:text-primary-dark min-h-12">
            {project.title}
          </h3>
          <p className="text-md text-secondary-light font-semibold dark:text-secondary-dark overflow-hidden text-ellipsis">
            {project.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="bg-primary-light text-white px-2 py-1 rounded-full text-xs dark:bg-primary-dark dark:text-primary-light"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
