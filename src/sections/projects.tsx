import { projects } from "../constants/projects";
import { ProjectCard } from "../components/projectCard";
import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination } from "swiper/modules";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

const Projects = () => {
  const swiperRef = useRef<any>(null);

  return (
    <div
      id="projects"
      className="w-full flex flex-col gap-8 @max-md:p-4 @min-md:p-14"
    >
      <div className="flex flex-col gap-2">
        <h2 className="text-center font-bold text-4xl sm:text-5xl md:text-6xl bg-gradient-to-r from-blue-500 to-pink-500 dark:from-pink-500 dark:to-blue-500 inline-block text-transparent bg-clip-text mx-auto">
          Projects
        </h2>
        <h4 className="font-semibold text-center text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300">
          Things I've worked with recently
        </h4>
      </div>

      <div className="relative w-full">
        <button
          className="absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 z-20 bg-white/95 hover:bg-white dark:bg-gray-800/95 dark:hover:bg-gray-800 shadow-lg rounded-full p-1.5 sm:p-2 transition-all duration-200 backdrop-blur-sm border border-gray-200 dark:border-gray-700"
          onClick={() => swiperRef.current?.slidePrev()}
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700 dark:text-gray-300" />
        </button>
        {/* Right Arrow */}
        <button
          className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 z-20 bg-white/95 hover:bg-white dark:bg-gray-800/95 dark:hover:bg-gray-800 shadow-lg rounded-full p-1.5 sm:p-2 transition-all duration-200 backdrop-blur-sm border border-gray-200 dark:border-gray-700"
          onClick={() => swiperRef.current?.slideNext()}
          aria-label="Scroll right"
        >
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700 dark:text-gray-300" />
        </button>

        {/* Swiper */}
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          direction={"horizontal"}
          slidesPerView={1} // start with 1 for mobile
          spaceBetween={100}
          effect="slide"
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 2 },
            1280: { slidesPerView: 4 },
            1536: { slidesPerView: 6 },
          }}
          centeredSlides={false}
          modules={[Pagination]}
          pagination={{ clickable: true }}
          className="w-full"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index} className="flex justify-center p-4 pb-8">
              <ProjectCard project={project} index={index} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Projects;
