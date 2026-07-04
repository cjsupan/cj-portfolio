const Home = () => {
  return (
    <div
      id="home"
      className="w-full h-dvh @container text-primary-default bg-background-light dark:text-primary-dark dark:bg-background-dark px-6 md:px-16 flex flex-col items-start pt-36 sm:pt-36 transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto w-full text-left flex flex-col items-start">
        <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium">
          I'm
        </span>
        <h1
          className="font-display font-bold leading-[0.8] tracking-tight mt-2
                     text-[20vw] sm:text-[18vw] md:text-[16vw] lg:text-[12vw] 2xl:text-[90px]"
        >
          Cedrick.
        </h1>
      </div>

      <div className="max-w-7xl mx-auto w-full flex flex-col items-start text-start mt-12">
        <p className="text-lg sm:text-xl font-medium max-w-md tracking-wide">
          I turn complex problems into simple, reliable web and mobile
          experiences.
        </p>
        <p className="text-md sm:text-md mt-4 max-w-xs text-primary-light dark:text-accent-light">
          Full-Stack Developer specializing in React, Next.js, and TypeScript.
        </p>
        <br />

        <a
          href="/Cedrick John Supan - Resume.pdf"
          download="Cedrick John Supan - Resume.pdf"
          className="text-primary-default dark:text-primary-dark font-heading 
             transition-all duration-300 flex items-center gap-2 underline"
        >
          <span className="text-md">Hire Me</span>
        </a>
      </div>
    </div>
  );
};

export default Home;
