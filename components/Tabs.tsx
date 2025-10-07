
import React from 'react';
import type { TabProps, Section } from '../types';

const TABS: { id: Section; name: string }[] = [
  { id: 'reason', name: '1. Lý do chọn sản phẩm' },
  { id: 'product', name: '2. Trình bày sản phẩm' },
  { id: 'ai', name: '3. Ứng dụng AI' },
  { id: 'appeal', name: '4. Tính ứng dụng & Thu hút' },
  { id: 'playtest', name: '5. Chơi thử Board Game' },
];

const Tabs: React.FC<TabProps> = ({ activeSection, setActiveSection }) => {
  return (
    <nav className="flex flex-wrap justify-center gap-2" aria-label="Tabs">
      {TABS.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveSection(tab.id)}
          className={`
            px-4 py-2 text-sm font-medium rounded-md transition-all duration-200
            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500
            ${
              activeSection === tab.id
                ? 'bg-slate-800 text-white shadow-md'
                : 'bg-white text-slate-600 hover:bg-slate-100'
            }
          `}
        >
          {tab.name}
        </button>
      ))}
    </nav>
  );
};

export default Tabs;