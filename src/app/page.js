
import Hero from '../components/Hero';
import About from '../components/About';

export const metadata = {
  title: 'Portfolio - Shivam Yadav',
  description: 'Shivam Yadav Portfolio',
};

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-[#0f0f23] overflow-x-hidden">
      
      <Hero />
      <About />
    </main>
  );
}