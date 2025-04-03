
import React from 'react';
import AnimatedText from './AnimatedText';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative pt-20">
      <div className="animated-bg"></div>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <p className="text-teal font-mono mb-5 text-lg animate-fadeIn">Hi, my name is</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-lightestSlate animate-slideRight">
            Shobith S M.
          </h1>
          
          <div className="h-20 md:h-16">
            <AnimatedText 
              texts={[
                "Aspiring Engineer",
                "Video Editor",
                "AI Enthusiast",
                "Backend Developer",
              ]}
              className="text-2xl md:text-3xl text-slate"
            />
          </div>
          
          <p className="text-slate text-lg md:text-xl mt-5 max-w-xl animate-fadeIn" style={{ animationDelay: "0.3s" }}>
            I'm a passionate Information Science student at RV Institute of Technology and Management,
            specializing in backend development and building digital experiences.
          </p>
          
          <div className="mt-10 animate-fadeIn" style={{ animationDelay: "0.6s" }}>
            <a href="#projects" className="button-primary">
              Explore My Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
