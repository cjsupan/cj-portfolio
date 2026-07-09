import { motion } from "motion/react";
import { technologies } from "../constants/technologies";
import type { Technology } from "../types/technology";
import {
  fadeInLeft,
  fadeInRight,
  stagger,
  viewport,
} from "../utils/animations";

type Category = Technology["category"];

const LAYERS: { key: Category; title: string }[] = [
  { key: "client", title: "Client & Presentation" },
  { key: "server", title: "Server & Infrastructure" },
  { key: "data", title: "Data & State" },
  { key: "tooling", title: "Tooling" },
];

const Technologies = () => {
  const grouped = technologies.reduce<Partial<Record<Category, string[]>>>(
    (acc, tech) => {
      (acc[tech.category] ??= []).push(tech.name);
      return acc;
    },
    {},
  );

  return (
    <section
      id="technologies"
      className="w-full min-h-dvh snap-start flex flex-col justify-center px-8 md:px-16 py-12 md:py-20 bg-background-light text-primary-light dark:bg-background-dark dark:text-primary-dark lg:transition-colors lg:duration-500"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-24">
        {/* Changed wrapper to use stagger */}
        <motion.div
          className="lg:col-span-5 flex flex-col justify-start"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {/* Changed to motion.h2 and added fadeInLeft */}
          <motion.h2
            variants={fadeInLeft}
            className="text-6xl sm:text-8xl font-heading font-bold leading-[0.9] tracking-tight mb-8 dark:text-primary-dark"
          >
            The
            <br />
            Arsenal.
          </motion.h2>

          <motion.p
            variants={fadeInLeft}
            className="text-xl md:text-2xl text-secondary-light dark:text-secondary-dark leading-relaxed max-w-md"
          >
            Built for speed, scaled for production. The core technologies
            driving my current workflows.
          </motion.p>
        </motion.div>

        <motion.div
          className="lg:col-span-7 flex flex-col gap-8 md:gap-12"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {LAYERS.filter(({ key }) => grouped[key]?.length).map(
            ({ key, title }) => (
              <motion.div key={key} variants={fadeInRight}>
                <TechLayer title={title} items={grouped[key]!} />
              </motion.div>
            ),
          )}
        </motion.div>
      </div>
    </section>
  );
};

const TechLayer = ({ title, items }: { title: string; items: string[] }) => (
  <div className="flex flex-col border-b border-secondary-light/30 dark:border-secondary-dark/30 pb-6 md:pb-8">
    <h3 className="text-xs md:text-sm font-medium uppercase tracking-widest text-primary-light dark:text-secondary-dark mb-2 md:mb-4">
      {title}
    </h3>
    <p className="text-[clamp(1.5rem,5vw,3rem)] font-heading font-semibold text-primary-light dark:text-primary-dark leading-tight">
      {items.join(", ")}
    </p>
  </div>
);

export default Technologies;
