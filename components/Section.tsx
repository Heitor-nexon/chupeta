import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  dark?: boolean;
}

const Section: React.FC<SectionProps> = ({ children, className = '', id, dark = false }) => {
  return (
    <section 
      id={id} 
      className={`py-16 md:py-24 px-4 md:px-8 ${dark ? 'bg-nexon-black' : 'bg-nexon-dark'} ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  );
};

export default Section;