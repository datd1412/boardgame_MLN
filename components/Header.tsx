
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-slate-900 to-slate-700 text-white shadow-lg">
      <div className="container mx-auto px-4 py-6 text-center">
        <h1 className="text-4xl font-bold tracking-tight">
          Board Game Triết Học: Hành Trình Vật Chất
        </h1>
        <p className="mt-2 text-lg text-slate-300">
          Khám phá Vật chất và các hình thức tồn tại qua một trải nghiệm tương tác
        </p>
      </div>
    </header>
  );
};

export default Header;
