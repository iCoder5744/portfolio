// app/blog/page.js 
import Blog from '@/components/Blog';
import Contact from '@/components/Contact';
import FloatingBackground from '@/components/FloatingBackground';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

export const metadata = {
  title: 'Programming Blog | Your Name',
  description: 'Learn modern web development with our comprehensive tutorials',
};

export default function BlogPage() {
  return (
    <div className="relative min-h-screen shadow-x max-w-[1200px] mx-0 sm:mx-3 md:mx-6 lg:mx-auto  bg-transparent transition-all duration-300">

      <FloatingBackground />

      <div className='border-b border-gray-600'>
        <Header />
      </div>
      <Blog />
      <Contact />
      <div className='border-t border-gray-600'>
        <Footer />
      </div>

    </div>
  )
}
