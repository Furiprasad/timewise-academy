
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Courses from '@/components/Courses';
import Stats from '@/components/Stats';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import CTABanner from '@/components/CTABanner';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Courses />
        <Stats />
        <About />
        <Testimonials />
        <CTABanner />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
