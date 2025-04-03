
import React from 'react';
import { ExternalLink, Github, Code, Palette } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
  delay?: number;
  icon: React.ReactNode;
}

const ProjectCard = ({ title, description, tech, github, live, delay = 0, icon }: ProjectCardProps) => {
  return (
    <div 
      className="project-card animate-fadeIn" 
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="text-teal mb-4">
        {icon}
      </div>
      <h3 className="text-lightestSlate text-xl font-semibold mb-2">{title}</h3>
      <p className="text-slate mb-4 flex-grow">{description}</p>
      
      <div className="mt-auto">
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((item, index) => (
            <span key={index} className="text-xs font-mono text-teal bg-navy px-2 py-1 rounded">
              {item}
            </span>
          ))}
        </div>
        
        <div className="flex gap-4">
          {github && (
            <a 
              href={github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-lightestSlate hover:text-teal transition-colors"
              aria-label={`GitHub repository for ${title}`}
            >
              <Github size={20} />
            </a>
          )}
          {live && (
            <a 
              href={live} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-lightestSlate hover:text-teal transition-colors"
              aria-label={`Live demo for ${title}`}
            >
              <ExternalLink size={20} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">
          <span className="section-number">03.</span> Projects
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <ProjectCard 
            title="Currency Converter in Java"
            description="Developed a currency converter application using Java with a user-friendly interface and accurate conversion logic. Implements real-time exchange rates and supports multiple currencies."
            tech={["Java", "Swing", "API Integration"]}
            github="https://github.com/Acegenius20/JavaMiniproject"
            icon={<Code size={30} />}
            delay={0}
          />
          
          <ProjectCard 
            title="Artwork & Antique Collection Website"
            description="Created a platform for displaying and selling artwork and antiques using AI-generated prompts. Features responsive design, product gallery, and inquiry system."
            tech={["HTML/CSS", "JavaScript", "AI Integration"]}
            live="https://antique-vista-explorer.lovable.app/"
            icon={<Palette size={30} />}
            delay={200}
          />
        </div>
        
        <div className="text-center mt-12">
          <p className="text-slate mb-6">
            More projects coming soon! I'm constantly working on new ideas and expanding my portfolio.
          </p>
          <a href="https://github.com/Acegenius20" target="_blank" rel="noopener noreferrer" className="button-primary">
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
