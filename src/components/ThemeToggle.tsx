import { Sun, Moon } from "lucide-react";
import { useTheme } from "../provider";

const ThemeToggle = () => {
  const { setTheme, isDark } = useTheme(); // <-- use isDark

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark"); // <-- toggle based on actual applied theme
  };

  return (
    <button
      onClick={toggleTheme}
      className="bg-primary-light z-50 text-white dark:text-primary-light dark:bg-primary-dark w-10 h-10 flex items-center justify-center rounded-full fixed bottom-8 right-8"
      aria-label="Toggle theme"
    >
      {isDark ? <Sun /> : <Moon />} {/* <-- use isDark */}
    </button>
  );
};

export default ThemeToggle;
