const Contact = () => {
  return (
    <div
      id="contact"
      className="w-full flex flex-col justify-evenly xxs:gap-2 lg:gap-4 mb-20"
    >
      <div className="@container w-full flex max-md:gap-8 max-md:pt-4 flex-col min-md:justify-between items-center px-8 min-h-36">
        <h2
          className={`text-center font-bold @max-md:text-5xl @min-md:text-6xl bg-linear-65 from-[#13B0F5] to-[#E70FAA] dark:bg-linear-65 dark:from-[#E70FAA] dark:to-[#13B0F5] transition duration-1000 ease-in-out inline-block text-transparent bg-clip-text`}
        >
          Get in Touch
        </h2>
        <div className="flex @min-md:flex-row @max-md:flex-col gap-4 justify-end">
          <a
            className={`dark:text-white text-primary-light font-semibold text-lg `}
            href="mailto:supancj18@gmail.com"
            target="_top"
          >
            supancj18@gmail.com
          </a>
          <div className="flex max-md:flex-row justify-center justify-self-end  gap-6">
            <a
              href="https://github.com/cjsupan"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="dark:text-white text-primary-light hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/in/cedrick-john-supan/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="dark:text-white text-primary-light hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
