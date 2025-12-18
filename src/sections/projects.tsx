import { projects } from "../constants/projects";
import { ProjectCard } from "../components/projectCard";
import { useEffect, useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { useMotionValue } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Projects = () => {
  const [constraints, setConstraints] = useState({ left: 0, right: 0 });
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const x = useMotionValue(0);

  const centerCard = useCallback(
    (index: number) => {
      if (!containerRef.current || !contentRef.current) return;
      const containerWidth = containerRef.current.offsetWidth;
      const card = cardRefs.current[index];
      if (!card) return;

      const cardCenter = card.offsetLeft + card.offsetWidth / 2;
      const containerCenter = containerWidth / 2;
      let newX = -(cardCenter - containerCenter);

      // Clamp to constraints
      newX = Math.max(constraints.left, Math.min(constraints.right, newX));

      x.set(newX);
      setActiveIndex(index);
    },
    [constraints, x]
  );

  const handleDragEnd = useCallback(() => {
    if (!containerRef.current || !contentRef.current) return;
    const containerWidth = containerRef.current.offsetWidth;
    const currentX = x.get();

    let minDist = Infinity;
    let closestIdx = 0;
    cardRefs.current.forEach((card, idx) => {
      if (!card) return;
      const cardCenter = card.offsetLeft + card.offsetWidth / 2;
      const containerCenter = containerWidth / 2 - currentX;
      const dist = Math.abs(cardCenter - containerCenter);
      if (dist < minDist) {
        minDist = dist;
        closestIdx = idx;
      }
    });
    centerCard(closestIdx);
  }, [centerCard, x]);

  const updateConstraints = useCallback(() => {
    if (containerRef.current && contentRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      const contentWidth = contentRef.current.scrollWidth;
      const maxDrag = Math.max(0, contentWidth - containerWidth);

      const newConstraints = {
        left: -maxDrag,
        right: 0,
      };

      setConstraints(newConstraints);
    }
  }, []);

  const updateArrowVisibility = useCallback(
    (currentX: number) => {
      if (constraints.left === 0 && constraints.right === 0) return;

      const threshold = 10;
      const newShowLeft = currentX < -threshold;
      const newShowRight = currentX > constraints.left + threshold;

      setShowLeftArrow(newShowLeft);
      setShowRightArrow(newShowRight);
    },
    [constraints]
  );

  useEffect(() => {
    const unsubscribe = x.on("change", updateArrowVisibility);
    return unsubscribe;
  }, [x, updateArrowVisibility]);

  useEffect(() => {
    updateConstraints();
    window.addEventListener("resize", updateConstraints);
    return () => window.removeEventListener("resize", updateConstraints);
  }, [updateConstraints]);

  useEffect(() => {
    // Initialize first card centered
    setTimeout(() => centerCard(0), 100);
  }, []);

  useEffect(() => {
    // Recenter when constraints change
    if (constraints.left !== 0 || constraints.right !== 0) {
      centerCard(activeIndex);
    }
  }, [constraints.left, constraints.right]);

  const scrollLeft = () => {
    if (activeIndex > 0) {
      centerCard(activeIndex - 1);
    }
  };

  const scrollRight = () => {
    if (activeIndex < projects.length - 1) {
      centerCard(activeIndex + 1);
    }
  };

  return (
    <div
      id="projects"
      className="w-full flex flex-col gap-8 @max-md:p-8 @min-md:p-14"
    >
      <div id="projects" className="w-full flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <h2 className="text-center font-bold text-4xl sm:text-5xl md:text-6xl bg-gradient-to-r from-blue-500 to-pink-500 dark:from-pink-500 dark:to-blue-500 inline-block text-transparent bg-clip-text mx-auto">
            Projects
          </h2>
          <h4 className="font-semibold text-center text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300">
            Things I've worked with recently
          </h4>
        </div>

        <div className="relative">
          {/* Left Gradient */}
          <motion.div
            className="absolute left-0 top-0 bottom-0 w-8 sm:w-12 md:w-16 bg-gradient-to-r  z-10 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: showLeftArrow ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          />

          {/* Right Gradient */}
          <motion.div
            className="absolute right-0 top-0 bottom-0 w-8 sm:w-12 md:w-16 bg-gradient-to-l  z-10 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: showRightArrow ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          />

          {/* Left Arrow */}
          <motion.button
            className="absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 z-20 bg-white/95 hover:bg-white dark:bg-gray-800/95 dark:hover:bg-gray-800 shadow-lg rounded-full p-1.5 sm:p-2 transition-all duration-200 backdrop-blur-sm border border-gray-200 dark:border-gray-700"
            onClick={scrollLeft}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: showLeftArrow ? 1 : 0,
              scale: showLeftArrow ? 1 : 0.8,
              pointerEvents: showLeftArrow ? "auto" : "none",
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700 dark:text-gray-300" />
          </motion.button>

          {/* Right Arrow */}
          <motion.button
            className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 z-20 bg-white/95 hover:bg-white dark:bg-gray-800/95 dark:hover:bg-gray-800 shadow-lg rounded-full p-1.5 sm:p-2 transition-all duration-200 backdrop-blur-sm border border-gray-200 dark:border-gray-700"
            onClick={scrollRight}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: showRightArrow ? 1 : 0,
              scale: showRightArrow ? 1 : 0.8,
              pointerEvents: showRightArrow ? "auto" : "none",
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            aria-label="Scroll right"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700 dark:text-gray-300" />
          </motion.button>

          {/* Cards Container */}
          <div ref={containerRef} className="w-full overflow-hidden rounded-lg">
            <motion.div
              ref={contentRef}
              className="flex gap-4 sm:gap-6 md:gap-8 px-2 sm:px-4 py-4 w-max cursor-grab active:cursor-grabbing select-none"
              drag="x"
              dragConstraints={constraints}
              dragElastic={0.1}
              dragMomentum={false}
              dragTransition={{ bounceStiffness: 300, bounceDamping: 30 }}
              whileDrag={{ cursor: "grabbing" }}
              style={{ x }}
              onDragEnd={handleDragEnd}
            >
              {projects.map((project, index) => (
                <div
                  key={project.id || index}
                  className="shrink-0 pointer-events-auto"
                  ref={(el) => {
                    cardRefs.current[index] = el;
                  }}
                >
                  <ProjectCard project={project} index={index} />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Indicator Dots */}
          <div className="flex justify-center mt-4 gap-2">
            {projects.map((_, index) => (
              <motion.div
                key={index}
                className="w-2 h-2 rounded-full cursor-pointer"
                animate={{
                  backgroundColor:
                    activeIndex === index ? "#3B82F6" : "#D1D5DB",
                  scale: activeIndex === index ? 1.2 : 1,
                }}
                onClick={() => centerCard(index)}
                whileHover={{ scale: 1.3 }}
                transition={{ duration: 0.2 }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
