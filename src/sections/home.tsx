const Home = () => {
  return (
    <div id="home" className="w-full @container">
      <div className="@container w-full flex @min-md:flex-row flex-col-reverse gap-8 @min-lg:gap-2 @max-md:gap-16 mb-20 items-center @md:p-8 @lg:mt-16 @xl:p-16 @lg:justify-evenly">
        <div className="text-center font-semibold text-primary-light dark:text-primary-dark">
          <span className="lg:text-5xl max-md:text-4xl">Hi 👋, My name is</span>
          <br />
          <span className="font-bold inline-block text-transparent bg-clip-text lg:text-7xl max-md:text-5xl bg-linear-65 from-[#13B0F5] to-[#E70FAA] dark:bg-linear-65 dark:from-[#E70FAA] dark:to-[#13B0F5] transition duration-1000 ease-in-out">
            Cedrick
          </span>
          <br />
          <span className="lg:text-5xl max-md:text-4xl">
            I build things for web
          </span>
        </div>

        <div className=" rounded-full relative overflow-hidden @max-lg:size-52 @min-lg:size-72 flex-shrink-0 bg-linear-65 from-[#13B0F5] to-[#E70FAA] dark:bg-linear-65 dark:from-[#E70FAA] dark:to-[#13B0F5] transition duration-1000 ease-in-out">
          <img
            src="/profile.png"
            alt="Cedrick John Supan"
            className="w-full h-full rounded-full object-cover bg-transparent"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
