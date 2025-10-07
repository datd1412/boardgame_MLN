
import React from 'react';

interface SectionWrapperProps {
  title: string;
  children: React.ReactNode;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ title, children }) => {
  return (
    <section className="bg-white p-6 sm:p-8 rounded-lg shadow-lg animate-fade-in">
      <h2 className="text-3xl font-bold text-slate-800 border-b-2 border-slate-200 pb-3 mb-6">
        {title}
      </h2>
      <div className="space-y-4 text-lg leading-relaxed text-gray-700">
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
