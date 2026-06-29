import { technologies } from "../constants/technologies";
import type { Technology } from "../types/technology";

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
      className="w-full min-h-dvh snap-start flex flex-col justify-center px-8 md:px-16 py-12 md:py-20 bg-background-light text-primary-light dark:bg-background-dark"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-24">
        <div className="lg:col-span-5 flex flex-col justify-start">
          <h2 className="text-6xl sm:text-8xl font-heading font-bold leading-[0.9] tracking-tight mb-8 dark:text-primary-dark">
            The
            <br />
            Arsenal.
          </h2>
        </div>

        <div className="lg:col-span-7 flex flex-col gap-8 md:gap-12">
          {LAYERS.filter(({ key }) => grouped[key]?.length).map(
            ({ key, title }) => (
              <TechLayer key={key} title={title} items={grouped[key]!} />
            ),
          )}
        </div>
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
