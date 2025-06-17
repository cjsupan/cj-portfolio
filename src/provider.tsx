import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type Theme = "light" | "dark" | "system";

export interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  isDark: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
  defaultTheme?: Theme;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  defaultTheme = "system",
}) => {
  const [theme, setThemeState] = useState<Theme>(defaultTheme);
  const [systemPrefersDark, setSystemPrefersDark] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  const isDark = useMemo(() => {
    return theme === "dark" || (theme === "system" && systemPrefersDark);
  }, [theme, systemPrefersDark]);

  useEffect(() => {
    const root = document.documentElement;

    const appliedTheme =
      theme === "system" ? (systemPrefersDark ? "dark" : "light") : theme;

    root.setAttribute("data-theme", appliedTheme);
  }, [theme, systemPrefersDark]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (event: MediaQueryListEvent) => {
      setSystemPrefersDark(event.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    try {
      const savedTheme = localStorage.getItem("theme") as Theme;
      if (savedTheme) {
        setThemeState(savedTheme);
      } else {
        setThemeState(defaultTheme);
      }
    } catch {
      setThemeState(defaultTheme);
    }
  }, []);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    try {
      if (newTheme === "system") {
        localStorage.removeItem("theme");
      } else {
        localStorage.setItem("theme", newTheme);
      }
    } catch {
      localStorage.removeItem("theme");
    }
  };

  const value: ThemeContextType = {
    theme,
    setTheme,
    isDark,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
