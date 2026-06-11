const Technologies = () => {
  return (
    <section
      id="technologies"
      className="w-full h-dvh snap-start flex flex-col justify-center px-8 md:px-16 py-20 bg-background-dark text-primary-dark"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
        {/* Left: The Hook */}
        <div className="lg:col-span-5 pt-16 flex flex-col justify-start">
          <h2 className="text-6xl md:text-8xl font-heading font-bold leading-none tracking-tight mb-8">
            The
            <br />
            Arsenal.
          </h2>
        </div>

        {/* Right: The Typographic Stack */}
        <div className="lg:col-span-7 flex flex-col gap-12 lg:mt-4">
          {/* Layer: Client */}
          <div className="flex flex-col border-b border-secondary-dark/30 pb-8">
            <h3 className="text-sm font-medium uppercase tracking-widest text-secondary-dark mb-4">
              Client & Presentation
            </h3>
            <p className="text-3xl md:text-5xl font-heading font-semibold text-primary-dark leading-snug">
              React, Next.js, TypeScript, TailwindCSS, Flutter
            </p>
          </div>

          {/* Layer: Server */}
          <div className="flex flex-col border-b border-secondary-dark/30 pb-8">
            <h3 className="text-sm font-medium uppercase tracking-widest text-secondary-dark mb-4">
              Server & Infrastructure
            </h3>
            <p className="text-3xl md:text-5xl font-heading font-semibold text-primary-dark leading-snug">
              Node.js, Express, FastAPI, GCP, Docker
            </p>
          </div>

          {/* Layer: Data */}
          <div className="flex flex-col pb-8">
            <h3 className="text-sm font-medium uppercase tracking-widest text-secondary-dark mb-4">
              Data & State
            </h3>
            <p className="text-3xl md:text-5xl font-heading font-semibold text-primary-dark leading-snug">
              GraphQL, React Query, Firebase, MongoDB, MySQL
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
