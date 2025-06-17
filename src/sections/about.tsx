import { Briefcase } from "lucide-react";
import { workExperience } from "../constants/about";

const About = () => {
  return (
    <>
      <div
        id="about"
        className="w-full flex flex-col gap-8 @max-md:p-8 @min-md:p-14 @container"
      >
        <h2
          className={`text-center font-bold  @max-md:text-5xl @min-md:text-6xl bg-linear-65 from-[#13B0F5] to-[#E70FAA] dark:bg-linear-65 dark:from-[#E70FAA] dark:to-[#13B0F5] transition duration-1000 ease-in-out inline-block text-transparent bg-clip-text`}
        >
          About Me
        </h2>

        <div className="flex flex-col gap-8 @container">
          <p className="text-primary-light dark:text-primary-dark font-semibold text-left max-md:text-lg @min-lg:text-xl">
            A skilled front-end developer with 4 years of experience in building
            websites and web applications. Well-versed in Agile methodology and
            responsive UI design. Possesses strong problems-solving abilities
            and a keen interest in staying current with industry trends.
          </p>
          <div className="w-full flex lg:flex-row max-md:flex-col @max-xl:gap-2 gap-8 justify-between">
            <div className="w-full flex flex-col gap-4">
              <h3 className="text-left text-3xl xxs:text-2xl xl:text-3xl text-primary font-semibold text-primary-default dark:text-primary-dark">
                Work Experience
              </h3>
              {workExperience.map((work, index) => (
                <div
                  key={index}
                  className=" flex flex-col gap-4 border-b-2 border-secondary pb-4"
                >
                  <div className="flex flex-col gap-2">
                    <div className=" flex justify-between items-center">
                      <h4 className="text-left @max-md:text-md @min-lg:text-lg">
                        {work.title}
                      </h4>
                      <div
                        className={`bg-primary-dark dark:bg-primary-light rounded-full px-4 flex items-center`}
                      >
                        <p
                          className={`text-primary-light dark:text-primary-dark @max-md:text-sm @min-lg:text-md leading-6 font-semibold`}
                        >
                          {work.type}
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-between @max-md:text-sm @min-lg:text-lg">
                      <p className="text-left  flex gap-2 items-center">
                        <Briefcase size={16} />
                        {work.company}
                      </p>
                      <p className="text-left">{work.date}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className=" lg:border border-secondary" />
            <div className="w-full flex flex-col gap-4">
              <h3 className="text-left text-3xl xxs:text-2xl xl:text-3xl text-primary font-semibold text-primary-default dark:text-primary-dark">
                Education
              </h3>
              <div className=" flex flex-col gap-4 border-b-2 border-secondary pb-4">
                <div className="flex flex-col gap-2">
                  <div className=" flex justify-between items-center">
                    <h4 className="text-left @max-md:text-sm @min-lg:text-md ">
                      Bachelor in Information Technology
                    </h4>
                    <div className="bg-primary-dark dark:bg-primary-light rounded-full px-4 flex items-center">
                      <p className="text-primary-light dark:text-primary-dark @max-md:text-sm @min-lg:text-md leading-6 font-semibold">
                        Graduated
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-left flex gap-2 items-center @max-md:text-sm @min-lg:text-md">
                      <Briefcase size={16} />
                      Saint Louis College - San Fernando City, La Union
                    </p>
                    <p className="text-left max-md:text-sm min-lg:text-md">
                      June 2015 - July 2022
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
