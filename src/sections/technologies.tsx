const Technologies = () => {
  return (
    <section
      id="technologies"
      /* 1. Change h-dvh to min-h-dvh so it grows if content overflows */
      /* 2. Reduce py-20 to py-12 on mobile to save vertical space */
      className="w-full min-h-dvh snap-start flex flex-col justify-center px-8 md:px-16 py-12 md:py-20 bg-background-light text-primary-light dark:bg-background-dark"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-24">
        {/* Left: The Hook */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <h2 className="text-[clamp(3rem,10vw,8rem)] font-heading font-bold leading-[0.9] tracking-tight mb-8 dark:text-primary-dark">
            The
            <br />
            Arsenal.
          </h2>
        </div>

        {/* Right: The Typographic Stack */}
        <div className="lg:col-span-7 flex flex-col gap-8 md:gap-12">
          {/* Use consistent component structure for each layer */}
          <TechLayer
            title="Client & Presentation"
            items="React, Next.js, TypeScript, TailwindCSS, Flutter"
          />
          <TechLayer
            title="Server & Infrastructure"
            items="Node.js, Express, FastAPI, GCP, Docker"
          />
          <TechLayer
            title="Data & State"
            items="GraphQL, React Query, Firebase, MongoDB, MySQL"
          />
        </div>
      </div>
    </section>
  );
};

// Helper component to keep the code clean and responsive
const TechLayer = ({ title, items }: { title: string; items: string }) => (
  <div className="flex flex-col border-b border-secondary-light/30 dark:border-secondary-dark/30 pb-6 md:pb-8">
    <h3 className="text-xs md:text-sm font-medium uppercase tracking-widest text-primary-light dark:text-secondary-dark mb-2 md:mb-4">
      {title}
    </h3>
    {/* Clamp allows the font size to scale down automatically */}
    <p className="text-[clamp(1.5rem,5vw,3rem)] font-heading font-semibold text-primary-light dark:text-primary-dark leading-tight">
      {items}
    </p>
  </div>
);

export default Technologies;
