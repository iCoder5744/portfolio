'use client'; // ✅ Add this line

import { ThemeProviderWrapper } from './context/ThemeProviderWrapper';
import './globals.css';



export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProviderWrapper>
          {children}
        </ThemeProviderWrapper>
      </body>
    </html>
  );
}
