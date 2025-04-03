
import React from 'react';

interface LanguageProps {
  name: string;
  code: string;
  proficiency: string;
  delay?: number;
}

const Language = ({ name, code, proficiency, delay = 0 }: LanguageProps) => {
  return (
    <div 
      className="flex items-center space-x-4 animate-fadeIn" 
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-lightNavy text-2xl">
        {code}
      </div>
      <div>
        <h3 className="text-lightestSlate font-medium">{name}</h3>
        <p className="text-slate text-sm">{proficiency}</p>
      </div>
    </div>
  );
};

const Languages = () => {
  return (
    <section className="py-12 relative">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">
          <span className="section-number">05.</span> Languages
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Language 
            name="English" 
            code="🇬🇧" 
            proficiency="Professional Proficiency"
            delay={0}
          />
          <Language 
            name="Kannada" 
            code="🇮🇳" 
            proficiency="Native Proficiency"
            delay={200}
          />
          <Language 
            name="Hindi" 
            code="🇮🇳" 
            proficiency="Conversational Proficiency"
            delay={400}
          />
        </div>
      </div>
    </section>
  );
};

export default Languages;
