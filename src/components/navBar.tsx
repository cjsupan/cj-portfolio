import { useEffect, useState } from "react";
import { sections } from "../constants/sections";

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element | null;
      if (
        isMobileMenuOpen &&
        (!target || !target.closest(".mobile-nav-container"))
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    const handleEscape = (event: { key: string }) => {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleScroll = (e: any) => {
    e.preventDefault();
    const id = e.target.innerText.toLowerCase();
    const element = document.getElementById(id);
    const navHeight = document.getElementById("navigation")?.offsetHeight;
    console.log("element", element);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - navHeight!,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <nav
        id="navigation"
        className="@container min-md:backdrop-blur-xs w-full h-14 flex items-center justify-end sticky top-0 z-30 px-4 sm:px-6 dark:bg-background-dark bg-transparent transition duration-500 ease-in-out"
      >
        <div className="@max-md:hidden flex items-center gap-x-8">
          <ul className="flex gap-x-8 text-lg font-semibold">
            {sections.map((section) => (
              <li key={section.id}>
                <button
                  onClick={(e) => {
                    handleScroll(e);
                  }}
                  className="dark:hover:text-gray-300 hover:text-gray-700 dark:text-primary-dark  text-primary-light transition duration-500 ease-in-out"
                >
                  {section.title}
                </button>
              </li>
            ))}
          </ul>

          <ul className="flex gap-x-4 text-secondary">
            <li>
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
                  className="dark:text-primary-dark text-primary-light hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </a>
            </li>
            <li>
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
                  className="dark:text-primary-dark text-primary-light hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </li>
          </ul>
        </div>

        <div className="mobile-nav-container sm:hidden  ">
          <button
            onClick={toggleMobileMenu}
            className="p-2 rounded-md dark:text-primary-dark text-primary-light hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle mobile menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="fixed inset-0 backdrop-blur-xs bg-opacity-50 transition-opacity" />
        </div>
      )}

      <div
        className={`mobile-nav-container fixed top-0 right-0 h-full w-64 bg-white dark:bg-background-dark transform transition-transform duration-500 ease-in-out z-50 md:hidden ${
          isMobileMenuOpen
            ? "translate-x-0 drop-shadow-primary-default drop-shadow-2xl"
            : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-end p-4">
          <button
            onClick={toggleMobileMenu}
            className="p-2 rounded-md dark:text-primary-dark text-primary-light hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Close menu"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="px-4 h-full flex flex-col justify-between pb-20">
          <ul className="space-y-4">
            {sections.map((section) => (
              <li key={section.id}>
                <button
                  onClick={(e) => {
                    handleScroll(e);
                    setIsMobileMenuOpen(false);
                  }}
                  className="block px-4 text-lg font-medium dark:text-primary-dark text-primary-light hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors duration-500"
                >
                  {section.title}
                </button>
              </li>
            ))}
          </ul>

          <div className="mt-8 px-4 dark:border-gray-700 flex flex-col gap-2">
            <p className="text-sm font-medium dark:text-primary-dark text-primary-light">
              Connect
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com/cjsupan"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
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
                  className="dark:text-primary-dark text-primary-light"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/cedrick-john-supan/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
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
                  className="dark:text-primary-dark text-primary-light"
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
    </>
  );
};

export default NavBar;
