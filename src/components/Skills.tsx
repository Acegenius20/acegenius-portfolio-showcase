
import React, { useEffect, useRef, useState } from 'react';
import { Code, Video, Lightbulb } from 'lucide-react';

const SkillBar = ({ name, percentage, delay = 0 }: { name: string, percentage: number, delay?: number }) => {
  const [width, setWidth] = useState(0);
  const skillRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setTimeout(() => {
            setWidth(percentage);
          }, delay);
        }
      },
      { threshold: 0.1 }
    );

    if (skillRef.current) {
      observer.observe(skillRef.current);
    }

    return () => {
      if (skillRef.current) {
        observer.unobserve(skillRef.current);
      }
    };
  }, [percentage, delay]);

  return (
    <div ref={skillRef}>
      <div className="flex justify-between mb-1">
        <span className="text-lightestSlate font-medium">{name}</span>
        <span className="text-teal font-mono">{percentage}%</span>
      </div>
      <div className="skill-bar">
        <div className="skill-progress" style={{ width: `${width}%` }}></div>
      </div>
    </div>
  );
};

const CertificationCard = ({ title, issuer, year, children }: { title: string, issuer: string, year: string, children?: React.ReactNode }) => {
  return (
    <div className="bg-lightNavy p-4 rounded-lg border-l-2 border-teal hover:translate-x-1 transition-transform duration-300">
      <h4 className="text-lightestSlate font-semibold">{title}</h4>
      <p className="text-teal font-mono text-sm">{issuer} • {year}</p>
      {children && <div className="mt-2 text-sm">{children}</div>}
    </div>
  );
};

const Skills = () => {
  const programmingSkills = [
    { name: "JAVA", percentage: 85 },
    { name: "C", percentage: 75 },
    { name: "Python", percentage: 70 },
  ];

  const otherSkills = [
    { name: "Video Editing", percentage: 90 },
    { name: "Prompt Engineering", percentage: 80 },
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">
          <span className="section-number">02.</span> Skills & Certifications
        </h2>
        
        <div className="grid md:grid-cols-2 gap-10">
          <div className="animate-fadeIn">
            <h3 className="flex items-center text-lightestSlate text-xl font-semibold mb-6">
              <Code size={20} className="text-teal mr-2" /> Programming Skills
            </h3>
            <div className="space-y-6">
              {programmingSkills.map((skill, index) => (
                <SkillBar 
                  key={skill.name} 
                  name={skill.name} 
                  percentage={skill.percentage} 
                  delay={index * 200}
                />
              ))}
            </div>

            <h3 className="flex items-center text-lightestSlate text-xl font-semibold mb-6 mt-10">
              <Video size={20} className="text-teal mr-2" /> Other Skills
            </h3>
            <div className="space-y-6">
              {otherSkills.map((skill, index) => (
                <SkillBar 
                  key={skill.name} 
                  name={skill.name} 
                  percentage={skill.percentage} 
                  delay={index * 200 + 600}
                />
              ))}
            </div>
          </div>

          <div className="animate-fadeIn" style={{ animationDelay: "0.3s" }}>
            <h3 className="flex items-center text-lightestSlate text-xl font-semibold mb-6">
              <Lightbulb size={20} className="text-teal mr-2" /> Certifications & Training
            </h3>
            <div className="space-y-4">
              <CertificationCard 
                title="Artificial Intelligence" 
                issuer="IBM" 
                year="2024"
              >
                <p>Comprehensive training in AI concepts, machine learning models, and application development.</p>
              </CertificationCard>
              
              <CertificationCard 
                title="JAVA Programming" 
                issuer="Infosys" 
                year="2023"
              >
                <p>Intensive course covering Java fundamentals, OOP concepts, and application development.</p>
              </CertificationCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
