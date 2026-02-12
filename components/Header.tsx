import React, { useState, useRef, useEffect } from 'react';
import Flag from './Flag';

const Header: React.FC = () => {
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  const languages = [
    { code: 'tw' as const, label: '繁體中文', name: 'Chinese (Traditional)' },
    { code: 'cn' as const, label: '简体中文', name: 'Chinese (Simplified)' },
    { code: 'br' as const, label: 'Português', name: 'Portuguese' },
    { code: 'es' as const, label: 'Español', name: 'Spanish' },
    { code: 'tr' as const, label: 'Türkçe', name: 'Turkish' },
    { code: 'ru' as const, label: 'Русский', name: 'Russian' },
    { code: 'sa' as const, label: 'العربية', name: 'Arabic' },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(event.target as Node)) {
        setLangOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

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
        <div className="flex items-center gap-2 flex-wrap">
          {/* Language Selector */}
          <div className="relative" ref={langRef}>
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-2 text-gray-700 px-3 py-2 text-sm hover:text-gold transition-colors border border-gray-200 rounded-md"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
              <span>Language</span>
              <svg className={`w-3 h-3 transition-transform ${langOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {langOpen && (
              <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                <div className="py-2">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                      onClick={() => {
                        // Language selection logic can be added here
                        setLangOpen(false);
                      }}
                    >
                      <Flag code={lang.code} size="sm" />
                      <span>{lang.label}</span>
                      <span className="text-gray-400 text-xs ml-auto">{lang.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Campus Phone Links */}
          <a 
            href="tel:+13108870777"
            className="flex items-center gap-1.5 text-gray-700 px-3 py-2 text-sm hover:text-gold transition-colors"
          >
            <span className="font-semibold">Westwood</span>
            <span>(310) 887-0777</span>
          </a>

          <span className="text-gray-300">|</span>

          <a 
            href="tel:+13238707102"
            className="flex items-center gap-1.5 text-gray-700 px-3 py-2 text-sm hover:text-gold transition-colors"
          >
            <span className="font-semibold">Hollywood</span>
            <span>(323) 870-7102</span>
          </a>

          {/* CTA Buttons */}
          <a 
            href="https://mliesl.edu/admission/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-navy text-white px-5 py-2 rounded-md font-semibold text-sm hover:bg-navy-light transition-colors"
          >
            Online Application
          </a>
          <a 
            href="#contact" 
            className="bg-gold text-navy px-5 py-2 rounded-md font-semibold text-sm hover:bg-gold-light transition-colors"
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
              { label: 'How We Help', href: '#process' },
              { label: 'Common Questions', href: '#faq' },
              { label: 'Our Programs', href: '#programs' },
              { label: 'Locations', href: '#locations' },
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
