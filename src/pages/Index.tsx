
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
    <div className="min-h-screen bg-navy text-lightSlate">
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
