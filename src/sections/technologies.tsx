import { technologies } from "../constants/technologies";

const Tecnologies = () => {
  return (
    <div
      id="technologies"
      className="w-10/12 flex flex-col gap-8 max-md:mb-16 min-md:mb-24 @container"
    >
      <div className="flex flex-col @max-md:gap-4 @min-md:gap-8 items-center">
        <h2
          className={`text-center font-bold @max-md:text-5xl @min-md:text-6xl max-xs:text-4xl bg-linear-65 from-[#13B0F5] to-[#E70FAA] dark:bg-linear-65 dark:from-[#E70FAA] dark:to-[#13B0F5] transition duration-1000 ease-in-out inline-block text-transparent bg-clip-text`}
        >
          My Tech Stack
        </h2>
        <h4 className="text-center lg:text-4xl md:text-2xl xxs:text-md text-primary-light dark:text-primary-dark font-semibold">
          Technologies I&apos;ve been working with recently
        </h4>
      </div>
      <div className=" flex items-center justify-center">
        <div className=" grid max-md:grid-cols-4 md:grid-cols-5 max-md:gap-12 md:gap-16">
          {technologies.map((logo, index) => (
            <div key={index} className="max-sm:size-12 md:size-24 relative">
              <img
                src={logo.logo}
                alt={logo.name}
                className="w-full h-full object-contain"
                loading="lazy"
              />
              <div className="flex justify-center items-center mt-2">
                <p className="text-primary-light dark:text-primary-dark font-semibold text-sm">
                  {logo.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tecnologies;
