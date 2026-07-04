import { Github, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full h-dvh snap-start flex flex-col justify-center px-8 pt-8 bg-background-dark text-primary-dark dark:bg-background-dark-alt transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto w-full flex flex-col justify-between h-full">
        <div className="flex flex-col gap-6 mt-10 md:mt-8">
          <h2 className="text-6xl sm:text-8xl font-heading font-bold leading-none tracking-tight">
            Let's build.
          </h2>
          <p className="font-body text-xl md:text-2xl text-secondary-dark max-w-2xl leading-relaxed">
            Based in Mandaluyong City, Philippines. Focused on building and
            modernizing scalable web applications using React and Next.js.
          </p>
        </div>

        <div className="flex flex-col min-sm:flex-row md:items-end justify-between border-t border-secondary-dark/30 pt-8 mb-12 gap-12">
          <div className="flex flex-col gap-2">
            <span className="text-sm font-body uppercase tracking-widest text-secondary-dark">
              Direct
            </span>
            <a
              href="mailto:supancj18@gmail.com"
              className="text-2xl font-heading font-semibold hover:text-accent-light underline transition-colors duration-300"
            >
              supancj18@gmail.com
            </a>
          </div>

          <div className="flex flex-col gap-2 md:items-end md:mr-14">
            <span className="text-sm font-body uppercase tracking-widest text-secondary-dark">
              Network
            </span>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/cedrick-john-supan"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 group"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-6 h-6 text-primary-dark group-hover:text-accent-light transition-colors duration-300" />
              </a>

              <a
                href="https://github.com/cjsupan"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 group"
                aria-label="GitHub Profile"
              >
                <Github className="w-6 h-6 text-primary-dark group-hover:text-accent-light transition-colors duration-300" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
