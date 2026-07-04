import { projects } from "../constants/projects";
import { ProjectCard } from "../components/ProjectCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRef } from "react";

const Projects = () => {
  const swiperRef = useRef<any>(null);

  return (
    <section
      id="projects"
      className="w-full min-h-dvh flex flex-col justify-center py-12 md:py-20 bg-background-dark text-primary-dark dark:bg-background-dark-alt relative overflow-hidden transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto w-full px-8 sm:px-8 mb-12 flex flex-col md:flex-row md:items-end sm:justify-between items-center gap-8">
        <div className="flex flex-col gap-4 max-md:w-full">
          <h2 className="text-6xl sm:text-8xl font-heading font-bold leading-none tracking-tight">
            Shipped.
          </h2>
          <p className="text-xl md:text-2xl text-secondary-dark">
            Architectures, integrations, and production platforms.
          </p>
        </div>

        <div className="max-md:w-full flex flex-row md:gap-4 gap-8 justify-between z-20">
          <button
            className="p-4 text-primary-dark hover:text-accent-light hover:cursor-pointer transition-colors duration-200"
            onClick={() => swiperRef.current?.slidePrev()}
            aria-label="Previous Project"
          >
            <ArrowLeft className="w-6 h-6" strokeWidth={1.5} />
          </button>
          <button
            className="p-4 text-primary-dark hover:text-accent-light hover:cursor-pointer transition-colors duration-200"
            onClick={() => swiperRef.current?.slideNext()}
            aria-label="Next Project"
          >
            <ArrowRight className="w-6 h-6" strokeWidth={1.5} />
          </button>
        </div>
      </div>

      <div className="w-full pl-8 md:pl-16">
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          direction={"horizontal"}
          slidesPerView={1.1}
          spaceBetween={32}
          allowTouchMove
          grabCursor
          breakpoints={{
            640: { slidesPerView: 1.5, spaceBetween: 32 },
            1024: { slidesPerView: 2.5, spaceBetween: 48 },
            1536: { slidesPerView: 3.5, spaceBetween: 48 },
          }}
          modules={[Pagination, Navigation]}
          className="w-full !overflow-visible"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index} className="h-auto">
              <ProjectCard project={project} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Projects;
