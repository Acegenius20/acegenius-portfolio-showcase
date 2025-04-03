
import React from 'react';
import { Video, Code } from 'lucide-react';

interface InterestCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

const InterestCard = ({ icon, title, description, delay = 0 }: InterestCardProps) => {
  return (
    <div 
      className="bg-lightNavy p-6 rounded-lg border-l-2 border-teal animate-fadeIn hover:translate-y-[-5px] transition-transform duration-300" 
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="text-teal mb-4">
        {icon}
      </div>
      <h3 className="text-lightestSlate text-xl font-semibold mb-2">{title}</h3>
      <p className="text-slate">{description}</p>
    </div>
  );
};

const Interests = () => {
  return (
    <section id="interests" className="py-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">
          <span className="section-number">04.</span> Interests
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <InterestCard 
            icon={<Video size={30} />}
            title="Video Editing"
            description="I enjoy creating and editing videos, experimenting with different effects, transitions, and storytelling techniques to create engaging visual content."
            delay={0}
          />
          
          <InterestCard 
            icon={<Code size={30} />}
            title="Backend Coding"
            description="I'm passionate about building robust backend systems and APIs. I enjoy working with databases, server logic, and creating efficient algorithms to solve complex problems."
            delay={200}
          />
        </div>
      </div>
    </section>
  );
};

export default Interests;
