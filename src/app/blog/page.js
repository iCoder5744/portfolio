// app/blog/page.js 
import Blog from '@/components/Blog';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

export const metadata = {
  title: 'Programming Blog | Your Name',
  description: 'Learn modern web development with our comprehensive tutorials',
};

export default function BlogPage() {
  return (
    <div className=" shadow-x max-w-[1200px] border mx-2 sm:mx-4 md:mx-6 lg:mx-auto 
          bg-black transition-all duration-300">
      <div className='border-b border-white'>
        <Header />
      </div>
      <Blog />
      <Contact />
      <div className='border-t border-white'>
        <Footer />
      </div>
    </div>
  )
}
