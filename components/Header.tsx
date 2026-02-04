import React, { useState } from 'react';

const Header: React.FC = () => {
  const [langOpen, setLangOpen] = useState(false);

  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm">
      {/* Top Row */}
      <div className="max-w-[1100px] mx-auto px-6 py-4 flex flex-wrap justify-between items-center gap-4">
        {/* Logo */}
        <a href="#" className="flex-shrink-0">
          <img 
            src="/static/image/mli-logo.png" 
            alt="Mentor Language Institute" 
            className="h-14 w-auto"
          />
        </a>

        {/* Right Side Actions */}
        <div className="flex items-center gap-3 flex-wrap">
          {/* Campus Phone Buttons */}
          <a 
            href="tel:+13108870777"
            className="flex items-center gap-2 bg-gradient-to-b from-[#c5893a] to-[#9a6a2a] text-white px-4 py-2.5 rounded-md text-sm font-semibold shadow-md hover:brightness-110 transition-all"
          >
            <span className="font-bold">WESTWOOD</span>
            <span className="flex items-center gap-1">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
              (310) 887-0777
            </span>
          </a>

          <a 
            href="tel:+13238707102"
            className="flex items-center gap-2 bg-gradient-to-b from-[#4a8bb5] to-[#376a8a] text-white px-4 py-2.5 rounded-md text-sm font-semibold shadow-md hover:brightness-110 transition-all"
          >
            <span className="font-bold">HOLLYWOOD</span>
            <span className="flex items-center gap-1">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
              (323) 870-7102
            </span>
          </a>

          {/* Language Dropdown */}
          <div className="relative">
            <button 
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-50 transition-colors"
            >
              <span className="text-lg">🇺🇸</span>
              <span>English</span>
              <svg className={`w-4 h-4 transition-transform ${langOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {langOpen && (
              <div className="absolute top-full right-0 mt-1 bg-white border border-gray-200 rounded-md shadow-lg py-1 min-w-[140px] z-50">
                <button className="w-full flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 text-left">
                  <span>🇺🇸</span> English
                </button>
                <button className="w-full flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 text-left">
                  <span>🇯🇵</span> 日本語
                </button>
                <button className="w-full flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 text-left">
                  <span>🇨🇳</span> 中文
                </button>
                <button className="w-full flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 text-left">
                  <span>🇰🇷</span> 한국어
                </button>
              </div>
            )}
          </div>

          {/* CTA Button */}
          <a 
            href="#contact" 
            className="bg-gradient-to-b from-[#c5d43a] to-[#a5b32a] text-[#2a4a30] px-6 py-2.5 rounded-md font-bold text-sm shadow-md hover:brightness-110 transition-all"
          >
            Free Consultation
          </a>
        </div>
      </div>

      {/* Navigation Row */}
      <nav className="border-t border-gray-200 bg-white">
        <div className="max-w-[1100px] mx-auto px-6">
          <ul className="flex flex-wrap justify-center gap-1 py-3">
            {[
              { label: 'Change of Status', href: '#process' },
              { label: 'Programs', href: '#programs' },
              { label: 'Locations', href: '#locations' },
              { label: 'FAQ', href: '#faq' },
              { label: 'Contact', href: '#contact' },
            ].map((item) => (
              <li key={item.label}>
                <a 
                  href={item.href}
                  className="px-4 py-2 text-[#1e4a6d] text-sm font-medium hover:text-[#c5893a] transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
