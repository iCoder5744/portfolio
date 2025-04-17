'use client';

import { ThemeProvider } from "./ThemeContext";


export function ThemeProviderWrapper({ children }) {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  );
}