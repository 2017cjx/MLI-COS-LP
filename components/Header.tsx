import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white py-4 border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-[1100px] mx-auto px-6 flex justify-between items-center">
        <div className="font-serif text-2xl font-bold text-navy">
          Mentor<span className="text-gold">.</span>
        </div>
        <a 
          href="#contact" 
          className="bg-gold text-navy px-6 py-2.5 rounded-md font-semibold text-sm transition-all hover:bg-gold-light hover:-translate-y-px"
        >
          Free Consultation
        </a>
      </div>
    </header>
  );
};

export default Header;