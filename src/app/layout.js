// app/layout.js
import './globals.css';
import { ThemeProviderWrapper } from './context/ThemeProviderWrapper';
import { LoaderProvider } from '@/lib/LoaderContext';
import TopLoaderWrapper from '@/components/TopLoaderWrapper'; // ✅ Import this

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProviderWrapper>
          <LoaderProvider>
            <TopLoaderWrapper /> {/* ✅ Now safely uses client hook */}
            {children}
          </LoaderProvider>
        </ThemeProviderWrapper>
      </body>
    </html>
  );
}
