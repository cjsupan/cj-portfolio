import { motion } from "motion/react";
import { recommendations } from "../constants/recommendations";
import { ArrowUpRight } from "lucide-react";
import {
  fadeInLeft,
  fadeInRight,
  stagger,
  viewport,
} from "../utils/animations";

const Recommendations = () => {
  return (
    <section
      id="recommendations"
      className="w-full min-h-dvh snap-start flex flex-col justify-center px-8 md:px-16 py-12 md:py-20 bg-background-light text-primary-light dark:bg-background-dark transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
        <motion.div
          className="lg:col-span-5 flex flex-col justify-start"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <motion.h2
            variants={fadeInLeft}
            className="text-6xl md:text-8xl font-heading font-bold leading-[0.9] tracking-tight mb-8 dark:text-primary-dark"
          >
            The
            <br />
            Verdict.
          </motion.h2>
          <motion.p
            variants={fadeInLeft}
            className="text-xl md:text-2xl text-secondary-light dark:text-secondary-dark leading-relaxed max-w-md mb-8"
          >
            Social proof from the managers and engineers I've shipped production
            systems with.
          </motion.p>

          <motion.div variants={fadeInLeft} className="pt-2">
            <a
              href="https://www.linkedin.com/in/cedrick-john-supan/details/recommendations/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-lg md:text-xl font-heading font-semibold text-primary-light dark:text-primary-dark hover:text-accent-dark dark:hover:text-accent-light underline underline-offset-8 transition-colors duration-300 group"
            >
              <span>Verify on LinkedIn</span>
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="lg:col-span-7 flex flex-col gap-12 lg:mt-4"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {recommendations.map((rec, index) => (
            <motion.div
              key={rec.id}
              variants={fadeInRight}
              className={`flex flex-col pb-10 ${
                index !== recommendations.length - 1
                  ? "border-b border-secondary-light/30 dark:border-secondary-dark/30"
                  : ""
              }`}
            >
              <div className="flex flex-col sm:flex-row md:items-baseline justify-between gap-2 mb-6">
                <div className="flex flex-col">
                  <h4 className="text-2xl font-heading font-semibold dark:text-primary-dark">
                    {rec.name}
                  </h4>

                  <div className="flex flex-col sm:flex-row sm:items-baseline text-lg text-secondary-light dark:text-secondary-dark mt-1">
                    <span>{rec.position}</span>

                    <div className="flex items-baseline sm:ml-1.5 mt-0.5 sm:mt-0">
                      <span className="text-secondary-light/50 dark:text-secondary-dark/50 mr-1.5">
                        @
                      </span>
                      <span className="font-medium text-primary-light/80 dark:text-primary-dark/80">
                        {rec.company}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:items-end text-left sm:text-right mt-2 sm:mt-0">
                  <span className="text-sm font-medium uppercase tracking-widest text-primary-light dark:text-secondary-dark">
                    {rec.date}
                  </span>
                </div>
              </div>

              <blockquote className="text-lg sm:text-xl font-body leading-relaxed text-primary-light/90 dark:text-primary-dark">
                "{rec.content}"
              </blockquote>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Recommendations;
