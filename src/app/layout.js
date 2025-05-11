import { ThemeProviderWrapper } from './context/ThemeProviderWrapper';
import './globals.css';

export const metadata = {
  title: 'Portfolio - Shivam Yadav',
  description: 'Shivam Yadav Portfolio',
};

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
