import React, { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

// Custom hook for easy context access
export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  // Try to load from localStorage, fallback to 'light'
  const getInitialTheme = () => {
    if (typeof window !== 'undefined') {
      const storedTheme = localStorage.getItem('appTheme');
      if (storedTheme === 'light' || storedTheme === 'dark') {
        return storedTheme;
      }
      // Prefer system preference if available
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
      }
    }
    return 'light';
  };

  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.body.dataset.theme = theme;
    localStorage.setItem('appTheme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
