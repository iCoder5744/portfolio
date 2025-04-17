
// This is the main layout file (no 'use client' directive)
import { ThemeProviderWrapper } from './context/ThemeProviderWrapper';
import './globals.css';

export const metadata = {
  title: 'Portfolio - Shivam Yadav',
  description: 'Shivam Yadav Portfolio',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-300">
        <ThemeProviderWrapper>
          {children}
        </ThemeProviderWrapper>
      </body>
    </html>
  );
}