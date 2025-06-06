
'use client';
import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Default to 'light' theme
  const [theme, setTheme] = useState('light');
  const [mounted, setMounted] = useState(false);

  // Use effect to handle initial theme detection and setup
useEffect(() => {
  setMounted(true);

  // Try to get theme from sessionStorage (for refresh)
  const sessionTheme = sessionStorage.getItem('theme');

  if (sessionTheme) {
    setTheme(sessionTheme);
    if (sessionTheme === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    }
  } else {
    // If no theme in sessionStorage => default to dark (first load or tab reopen)
    setTheme('dark');
    sessionStorage.setItem('theme', 'dark');
    document.documentElement.classList.add('dark');
    document.documentElement.classList.remove('light');
  }
}, []);




  // Effect to update DOM when theme changes
 useEffect(() => {
  if (!mounted) return;

  // Save current theme only in sessionStorage (not localStorage)
  sessionStorage.setItem('theme', theme);

  if (theme === 'dark') {
    document.documentElement.classList.add('dark');
    document.documentElement.classList.remove('light');
  } else {
    document.documentElement.classList.add('light');
    document.documentElement.classList.remove('dark');
  }
}, [theme, mounted]);


  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  // Provide value to avoid hydration mismatch
  const value = {
    theme,
    toggleTheme,
    mounted
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
