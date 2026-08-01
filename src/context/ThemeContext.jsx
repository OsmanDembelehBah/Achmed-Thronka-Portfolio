import { createContext, useState, useContext, useCallback, useMemo, useEffect } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Set dark mode to FALSE by default
  const [dark, setDark] = useState(false);

  const toggleDark = useCallback(() => {
    setDark((prev) => {
      const newDark = !prev;
      localStorage.setItem("theme", newDark ? "dark" : "light");
      return newDark;
    });
  }, []);

  useEffect(() => {
    // Check localStorage but default to light mode
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDark(true);
    } else {
      setDark(false); // Force light mode
    }
  }, []);

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
