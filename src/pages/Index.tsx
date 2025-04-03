
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Interests from '../components/Interests';
import Languages from '../components/Languages';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  useEffect(() => {
    // Scroll to the top on initial load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-navy text-lightSlate relative">
      {/* Background overlay */}
      <div className="fixed inset-0 z-[-1]">
        <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy/95 to-navy z-10"></div>
        <div className="absolute inset-0 bg-[url('/background.jpg')] bg-cover bg-center bg-no-repeat blur-sm opacity-20 z-0"></div>
      </div>
      
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Interests />
      <Languages />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
