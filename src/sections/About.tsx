import { useState } from "react";
import { motion } from "motion/react";
import { workExperience } from "../constants/about";
import type { About as AboutType } from "../types/about";
import CompanyModal from "../components/CompanyModal";
import {
  fadeInLeft,
  fadeInRight,
  stagger,
  viewport,
} from "../utils/animations";

const About = () => {
  const [selectedCompany, setSelectedCompany] = useState<AboutType | null>(
    null,
  );

  return (
    <section
      id="about"
      className="w-full min-h-dvh flex flex-col justify-center px-8 md:px-16 py-20 bg-background-dark text-primary-dark dark:bg-background-dark-alt lg:transition-colors lg:duration-500"
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
            className="text-6xl sm:text-8xl font-heading font-bold leading-[0.9] tracking-tight mb-8 lg:mb-2"
          >
            System
            <br />
            Specs.
          </motion.h2>

          <motion.p
            variants={fadeInLeft}
            className="text-xl md:text-2xl text-secondary-dark leading-relaxed"
          >
            The roles, projects, and experiences that shaped how I build
            software today.
          </motion.p>
        </motion.div>

        <motion.div
          className="lg:col-span-7 flex flex-col gap-8 lg:mt-4"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <motion.div variants={fadeInRight}>
            <h3 className="text-sm md:text-sm font-medium uppercase tracking-widest border-b border-secondary-dark/30 text-secondary-dark lg:mx-2 mb-2 pb-2">
              Work Experience
            </h3>

            <div className="flex flex-col gap-2">
              {workExperience.map((work, index) => (
                <motion.button
                  key={index}
                  variants={fadeInRight}
                  onClick={() => setSelectedCompany(work)}
                  className="group w-full flex flex-col sm:flex-row sm:items-center justify-between lg:py-3 lg:px-3 mb-4 
                 rounded-lg border border-transparent 
                 lg:transition-all lg:duration-300 
                 hover:border-secondary-dark/30 
                 hover:-translate-y-1 
                 text-left lg:transform-gpu cursor-pointer"
                >
                  <div className="flex flex-col">
                    <div className="flex items-center max-sm:justify-between gap-3">
                      <h4 className="text-2xl font-heading font-semibold">
                        {work.title}
                      </h4>
                      <span
                        className="text-xl text-accent-light transition-all duration-300 
                       opacity-100 lg:opacity-0 
                       translate-x-0 lg:-translate-x-2 
                       lg:group-hover:opacity-100 lg:group-hover:translate-x-0"
                      >
                        →
                      </span>
                    </div>
                    <span className="text-lg text-accent-light mt-1">
                      {work.company}
                    </span>
                  </div>

                  <div className="flex flex-col items-start sm:items-end text-left sm:text-right mt-2 sm:mt-0">
                    <span className="text-md text-accent-light font-medium uppercase tracking-wider text-xs">
                      {work.type}
                    </span>
                    <span className="text-sm text-secondary-dark mt-1">
                      {work.date}
                    </span>
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>

          <motion.div variants={fadeInRight}>
            <h3 className="text-sm md:text-sm font-medium uppercase tracking-widest border-b border-secondary-dark/30 text-secondary-dark pb-2 mb-4">
              Education
            </h3>

            <div className="flex flex-col sm:flex-row md:items-baseline justify-between gap-2">
              <div className="flex flex-col">
                <h4 className="text-2xl font-heading font-semibold">
                  BS Information Technology
                </h4>

                <span className="text-lg text-accent-light">
                  Saint Louis College - San Fernando City, La Union
                </span>
              </div>

              <div className="flex flex-col md:items-end text-left md:text-right">
                <span className="text-md text-primary-dark font-medium">
                  Graduated
                </span>

                <span className="text-sm text-accent-light">2022</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <CompanyModal
        company={selectedCompany}
        onClose={() => setSelectedCompany(null)}
      />
    </section>
  );
};

export default About;
