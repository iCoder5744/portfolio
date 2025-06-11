
import Hero from '../components/Hero';
import About from '../components/About';

export const metadata = {
  title: 'Portfolio - Shivam Yadav',
  description: 'Shivam Yadav Portfolio',
};

export default function Home() {
  return (
    <main className="min-h-screen w-full transition-colors duration-300">
      
      <Hero />
      <About />
    </main>
  );
}