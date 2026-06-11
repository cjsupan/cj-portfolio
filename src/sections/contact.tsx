import { Github, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full h-dvh snap-start flex flex-col justify-center px-8 md:px-16 pt-20 bg-background-light text-primary-light dark:bg-background-dark dark:text-primary-dark"
    >
      <div className="max-w-7xl mx-auto w-full flex flex-col justify-between h-full">
        {/* Top: The Final Hook */}
        <div className="flex flex-col gap-6 mt-12 md:mt-24">
          <h2 className="text-6xl md:text-[10rem] font-heading font-bold leading-none ">
            Let's build.
          </h2>
          <p className="font-body text-xl md:text-2xl text-primary-light dark:text-primary-dark max-w-2xl leading-relaxed">
            Based in Mandaluyong City, Philippines. Focused on building and
            modernizing scalable web applications using React and Next.js.
          </p>
        </div>

        {/* Bottom: The Links (Clean, No Form) */}
        <div className="flex flex-col min-sm:flex-row md:items-end justify-between border-t border-color-secondary-dark/30 pt-8 mb-12 gap-12">
          <div className="flex flex-col gap-2">
            <span className="text-sm font-body uppercase tracking-widest text-primary-light dark:text-primary-dark">
              Direct
            </span>
            <a
              href="mailto:supancj18@gmail.com"
              className="text-2xl font-heading font-semibold hover:text-accent-dark underline transition-colors duration-300"
            >
              supancj18@gmail.com
            </a>
          </div>

          <div className="flex flex-col gap-2 md:items-end">
            <span className="text-sm font-body uppercase tracking-widest text-primary-light dark:text-primary-dark">
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
                <Linkedin className="w-6 h-6 text-primary-light group-hover:text-accent-dark dark:text-primary-dark transition-colors duration-300" />
                {/* <span className="text-lg font-heading font-semibold hidden md:block group-hover:text-primary-light transition-colors duration-300">
                  LinkedIn
                </span> */}
              </a>

              <a
                href="https://github.com/your-github-username" // <-- Add your GitHub here
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 group"
                aria-label="GitHub Profile"
              >
                <Github className="w-6 h-6 text-primary group-hover:text-accent-dark transition-colors duration-300" />
                {/* <span className="text-lg font-heading font-semibold hidden md:block group-hover:text-primary-light transition-colors duration-300">
                  GitHub
                </span> */}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
