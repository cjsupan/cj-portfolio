import { projects } from "../constants/projects";
import { ProjectCard } from "../components/projectCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { ArrowLeft, ArrowRight } from "lucide-react"; // Using sharper arrows
import { useRef } from "react";

const Projects = () => {
  const swiperRef = useRef<any>(null);

  return (
    <section
      id="projects"
      className="w-full min-h-dvh flex flex-col justify-center py-12 md:py-20 bg-background-dark text-primary-dark dark:bg-accent-dark/10 dark:text-primary-dark relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full px-8 sm:px-16 mb-12 flex flex-col md:flex-row md:items-end sm:justify-between items-center gap-8">
        {/* The Heavy Header */}
        <div className="flex flex-col gap-4">
          <h2 className="text-6xl sm:text-8xl font-heading font-bold leading-none tracking-tight">
            Shipped.
          </h2>
          <p className="text-xl md:text-2xl ">
            Architectures, integrations, and production platforms.
          </p>
        </div>

        {/* Minimalist Custom Navigation */}
        <div className="max-md:w-full flex flex-row md:gap-4 gap-8 justify-between z-20">
          <button
            className="p-4 border border-primary-dark hover:bg-primary-dark hover:text-primary-light dark:border-primary-dark dark:hover:border-primary-default dark:hover:bg-primary-default dark:hover:text-primary-dark transition-colors duration-200"
            onClick={() => swiperRef.current?.slidePrev()}
            aria-label="Previous Project"
          >
            <ArrowLeft className="w-6 h-6" strokeWidth={1.5} />
          </button>
          <button
            className="p-4 border border-primary-dark hover:bg-primary-dark hover:text-primary-light dark:border-primary-dark dark:hover:border-primary-default dark:hover:bg-primary-default dark:hover:text-primary-dark transition-colors duration-200"
            onClick={() => swiperRef.current?.slideNext()}
            aria-label="Next Project"
          >
            <ArrowRight className="w-6 h-6" strokeWidth={1.5} />
          </button>
        </div>
      </div>

      {/* The Swiper Track */}
      <div className="w-full pl-8 md:pl-16">
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          direction={"horizontal"}
          slidesPerView={1.1} // Shows a peek of the next card to imply scrolling
          spaceBetween={32}
          breakpoints={{
            640: { slidesPerView: 1.5, spaceBetween: 32 },
            1024: { slidesPerView: 2.5, spaceBetween: 48 },
            1536: { slidesPerView: 3.5, spaceBetween: 48 },
          }}
          modules={[Pagination, Navigation]}
          className="w-full !overflow-visible" /* Allows cards to bleed off the right edge */
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index} className="h-auto">
              <ProjectCard project={project} index={index} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Projects;
