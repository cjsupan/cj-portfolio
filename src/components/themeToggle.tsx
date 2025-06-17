import { Sun, Moon } from "lucide-react";
import { useTheme } from "../provider";

const ThemeToggle = () => {
  const { setTheme, theme } = useTheme();

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className="bg-primary-light z-40 text-white dark:text-primary-light dark:bg-primary-dark w-10 h-10 flex items-center justify-center rounded-full fixed bottom-8 right-8"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? <Sun /> : <Moon />}
    </button>
  );
};

export default ThemeToggle;
