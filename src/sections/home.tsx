const Home = () => {
  return (
    <div
      id="home"
      className="w-full h-dvh @container text-primary-default dark:text-primary-dark px-6 md:px-16 flex flex-col items-start justify-center md:flex-row md:items-center md:justify-between"
    >
      {/* Left: The Heavy Hook */}
      <div className="w-full text-center md:text-left flex flex-col items-start md:items-start">
        <span className="text-3xl md:text-5xl font-medium">I'm</span>
        <h1 className="text-[clamp(4rem,15vw,12rem)] font-display font-bold leading-[0.8] tracking-tight mt-2">
          Cedrick.
        </h1>
        {/* <button className="p-2 mt-8 md:bg-primary-default dark:md:bg-primary-dark md:rounded-md md:text-primary-dark dark:md:text-primary-default text-primary-default dark:text-primary-dark underline md:text-sm text-xs">
          Hire Me
        </button> */}
      </div>

      {/* Right: The Grounded Anchor */}
      {/* Centered on mobile, aligned to the right on desktop */}
      <div className="w-full flex flex-col items-start md:items-end text-start md:text-right mt-12 md:mt-0">
        <p className="text-xl md:text-2xl font-medium max-w-sm">
          I turn complex problems into simple, reliable web and mobile
          experiences.
        </p>
        <p className="text-base md:text-lg mt-4 max-w-xs text-accent-dark dark:text-accent-light">
          Full-Stack Developer specializing in React, Next.js, and TypeScript.
        </p>
        <br />

        <a
          href="/Cedrick John Supan - Resume.pdf" // Ensure the file is in your /public folder
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
