
import React, { useState } from 'react';
import Header from './components/Header';
import Tabs from './components/Tabs';
import SectionReason from './components/sections/SectionReason';
import SectionProduct from './components/sections/SectionProduct';
import SectionAI from './components/sections/SectionAI';
import SectionAppeal from './components/sections/SectionAppeal';
import SectionPlaytest from './components/sections/SectionPlaytest';
import type { Section } from './types';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<Section>('product');

  const renderSection = () => {
    switch (activeSection) {
      case 'reason':
        return <SectionReason />;
      case 'product':
        return <SectionProduct />;
      case 'ai':
        return <SectionAI />;
      case 'appeal':
        return <SectionAppeal />;
      case 'playtest':
        return <SectionPlaytest />;
      default:
        return <SectionReason />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <Tabs activeSection={activeSection} setActiveSection={setActiveSection} />
        <div className="mt-8">
          {renderSection()}
        </div>
      </main>
      <footer className="text-center py-4 text-gray-500 text-sm">
        <p>Sản phẩm sáng tạo dựa trên triết học Mác-Lênin</p>
      </footer>
    </div>
  );
};

export default App;