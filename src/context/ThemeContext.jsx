import { createContext, useState, useContext, useCallback, useMemo, useEffect } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [dark, setDark] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") === "dark";
    }
    return false;
  });

  const toggleDark = useCallback(() => {
    setDark((prev) => !prev);
  }, []);

  useEffect(() => {
    const theme = dark ? "dark" : "light";
    localStorage.setItem("theme", theme);
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  const value = useMemo(() => ({ dark, toggleDark, isDark: dark }), [dark, toggleDark]);

  return (
    <ThemeContext.Provider value={value}>
      <div className={`${dark ? "dark" : ""} min-h-screen transition-colors duration-300`}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
