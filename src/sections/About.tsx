import { workExperience } from "../constants/about";

const About = () => {
  return (
    <section
      id="about"
      className="w-full min-h-dvh flex flex-col justify-center px-8 md:px-16 py-20 bg-background-dark text-primary-dark dark:bg-background-dark-alt transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
        <div className="lg:col-span-5 flex flex-col justify-start">
          <h2 className="text-6xl md:text-8xl font-heading font-bold leading-none tracking-tight mb-8">
            System
            <br />
            Specs.
          </h2>
          <p className="text-xl md:text-2xl text-secondary-dark leading-relaxed">
            I don't just build interfaces; I engineer systems. Over the last
            four years, I've designed multi-tenant architectures, integrated
            biometric KYC flows, and tuned frontend performance until it snaps.
          </p>
        </div>

        <div className="lg:col-span-7 flex flex-col gap-16 lg:mt-4">
          <div>
            <h3 className="text-sm font-medium uppercase tracking-widest text-secondary-dark mb-8 border-b border-secondary-dark/30 pb-4">
              Work Experience
            </h3>
            <div className="flex flex-col gap-8">
              {workExperience.map((work, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row md:items-baseline justify-between gap-2 group"
                >
                  <div className="flex flex-col">
                    <h4 className="text-2xl font-heading font-semibold transition-colors">
                      {work.title}
                    </h4>
                    <span className="text-lg text-accent-light">
                      {work.company}
                    </span>
                  </div>
                  <div className="flex flex-col items-start md:items-end text-left md:text-right">
                    <span className="text-md text-accent-light font-medium">
                      {work.type}
                    </span>
                    <span className="text-sm text-secondary-dark">
                      {work.date}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm uppercase tracking-widest text-secondary-dark mb-8 border-b border-secondary-dark/30 pb-4">
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
                <span className="text-sm text-accent-light">2015 — 2022</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
