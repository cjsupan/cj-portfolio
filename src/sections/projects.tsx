import { projects } from "../constants/projects";
import { ProjectCard } from "../components/projectCard";
import { useEffect, useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { useMotionValue } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Projects = () => {
  const [constraints, setConstraints] = useState<{
    left: number;
    right: number;
  }>({
    left: 0,
    right: 0,
  });
  const [showLeftArrow, setShowLeftArrow] = useState<boolean>(false);
  const [showRightArrow, setShowRightArrow] = useState<boolean>(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);

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
      setShowRightArrow(maxDrag > 0);
    }
  }, []);

  const updateArrowVisibility = useCallback(
    (currentX: number) => {
      if (constraints.left === 0 && constraints.right === 0) return;

      const threshold = 10;

      setShowLeftArrow(currentX < -threshold);
      setShowRightArrow(currentX > constraints.left + threshold);
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
    centerCard(activeIndex);
  }, [constraints.left, constraints.right]);

  const scrollToStart = () => {
    centerCard(0);
  };

  const scrollToEnd = () => {
    centerCard(projects.length - 1);
  };

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
      <div className="flex flex-col gap-3 xxs:gap-0">
        <h2
          className={`text-center font-bold  @max-md:text-5xl @min-md:text-6xl bg-linear-65 from-[#13B0F5] to-[#E70FAA] dark:bg-linear-65 dark:from-[#E70FAA] dark:to-[#13B0F5] transition duration-1000 ease-in-out inline-block text-transparent bg-clip-text`}
        >
          Projects
        </h2>
        <h4 className="font-semibold text-center max-md:text-lg @min-lg:text-xl">
          Things I&apos;ve worked with recently
        </h4>
      </div>
      <div className="relative group">
        <motion.div
          className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-white via-white/30 dark:from-background-dark dark:via-background-dark/15  to-transparent z-20 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: showLeftArrow ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />

        <motion.div
          className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white via-white/30 dark:from-background-dark dark:via-background-dark/15 to-transparent z-20 pointer-events-none transition duration-75"
          initial={{ opacity: 0 }}
          animate={{ opacity: showRightArrow ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />

        <motion.button
          className="absolute left-2 top-1/2 -translate-y-1/2 z-30 bg-white/90 hover:bg-white shadow-lg rounded-full p-2 transition-all duration-200 backdrop-blur-sm border border-gray-200"
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
          <ChevronLeft className="w-5 h-5 text-gray-700" />
        </motion.button>

        <motion.button
          className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white shadow-lg rounded-full p-2 transition-all duration-200 backdrop-blur-sm border border-gray-200"
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
          <ChevronRight className="w-5 h-5 text-gray-700" />
        </motion.button>

        <div
          ref={containerRef}
          className="w-full overflow-hidden rounded-lg relative"
        >
          <motion.div
            ref={contentRef}
            className="flex gap-8 px-4 py-4 w-max cursor-grab active:cursor-grabbing select-none"
            drag="x"
            dragConstraints={constraints}
            dragElastic={0.1}
            dragMomentum={false}
            whileDrag={{ cursor: "grabbing" }}
            style={{ x }}
            onDragEnd={handleDragEnd}
          >
            {projects.map((project, index) => (
              <div
                key={project.id || index}
                className="snap-start shrink-0 pointer-events-auto"
                ref={(el) => {
                  cardRefs.current[index] = el;
                }}
              >
                <ProjectCard project={project} index={index} />
              </div>
            ))}
          </motion.div>
        </div>

        <div className="flex justify-center mt-2 gap-1">
          {projects.length > 3 && (
            <>
              <motion.div
                className="w-2 h-2 rounded-full bg-gray-300 cursor-pointer"
                animate={{
                  backgroundColor: showLeftArrow ? "#9CA3AF" : "#3B82F6",
                }}
                onClick={scrollToStart}
                whileHover={{ scale: 1.2 }}
              />
              <motion.div
                className="w-2 h-2 rounded-full bg-gray-300 cursor-pointer"
                animate={{
                  backgroundColor: showRightArrow ? "#9CA3AF" : "#3B82F6",
                }}
                onClick={scrollToEnd}
                whileHover={{ scale: 1.2 }}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
