
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">
          <span className="section-number">01.</span> About Me
        </h2>
        
        <div className="grid md:grid-cols-5 gap-10">
          <div className="md:col-span-3 animate-fadeIn">
            <p className="mb-4">
              Hi there! I'm Shobith, an Information Science student with a passion for solving problems through code. 
              Currently pursuing my B.E. at RV Institute of Technology and Management in Bangalore, 
              I'm on a journey to expand my skills in software development and artificial intelligence.
            </p>
            
            <div className="my-6">
              <h3 className="text-lightestSlate text-xl font-semibold mb-2">Objective</h3>
              <p className="border-l-2 border-teal pl-4 py-2 bg-lightNavy/30 rounded">
                Aspiring to grow in my career through continuous learning and problem-solving.
              </p>
            </div>
            
            <div className="my-6">
              <h3 className="text-lightestSlate text-xl font-semibold mb-2">Education</h3>
              <div className="bg-lightNavy/30 rounded p-4 border-l-2 border-teal">
                <h4 className="text-lightestSlate font-medium">B.E. in Information Science</h4>
                <p className="text-teal font-mono text-sm">RV Institute of Technology and Management, Bangalore</p>
                <p className="text-sm mt-1">Expected Graduation: 2027</p>
                <div className="mt-3">
                  <p className="text-sm font-medium text-lightestSlate">Relevant Coursework:</p>
                  <ul className="list-disc pl-5 text-sm mt-1">
                    <li>IBM AI Course</li>
                    <li>Infosys JAVA Course</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <p className="mb-4">
              Outside of academics, I enjoy working on personal projects that challenge me and allow me to apply 
              what I've learned. I'm particularly interested in backend development and video editing, 
              where I can combine technical skills with creativity.
            </p>
          </div>
          
          <div className="md:col-span-2 flex justify-center animate-fadeIn" style={{ animationDelay: "0.3s" }}>
            <div className="relative w-60 h-60 md:w-80 md:h-80 group">
              <div className="absolute inset-0 rounded-md overflow-hidden border-2 border-teal group-hover:border-4 transition-all duration-300">
                <div className="absolute inset-0 bg-teal/20 group-hover:bg-transparent transition-all duration-300 z-10"></div>
                <img 
                  src="/lovable-uploads/d2aea67e-b6dd-4d84-a502-962358509fae.png" 
                  alt="Shobith S M" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-teal rounded-md group-hover:bottom-2 group-hover:right-2 transition-all duration-300"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
