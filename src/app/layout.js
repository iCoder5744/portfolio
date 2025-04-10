import './globals.css';
import { ThemeProvider } from './context/ThemeContext';

export const metadata = {
  title: 'Portfolio - Shivam Yadav',
  description: 'Shivam Yadav Portfolio',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
