import React, { useState, useRef, useEffect } from 'react';
import Flag from './Flag';

const NAV_ITEMS = [
  { label: 'How We Help', href: '#process' },
  { label: 'Common Questions', href: '#faq' },
  { label: 'Our Programs', href: '#programs' },
  { label: 'Locations', href: '#locations' },
  { label: 'Contact', href: '#contact' },
];

const Header: React.FC = () => {
  const [langOpen, setLangOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);
  const mobileLangRef = useRef<HTMLDivElement>(null);

  const languages = [
    { code: 'tw' as const, label: '繁體中文', name: 'Chinese (Traditional)' },
    { code: 'cn' as const, label: '简体中文', name: 'Chinese (Simplified)' },
    { code: 'br' as const, label: 'Português', name: 'Portuguese' },
    { code: 'es' as const, label: 'Español', name: 'Spanish' },
    { code: 'tr' as const, label: 'Türkçe', name: 'Turkish' },
    { code: 'ru' as const, label: 'Русский', name: 'Russian' },
    { code: 'sa' as const, label: 'العربية', name: 'Arabic' },
    { code: 'kr' as const, label: '한국어', name: 'Korean' },
  ];

  // Close language dropdown when clicking outside (desktop or mobile panel)
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      const inDesktop = langRef.current?.contains(target);
      const inMobile = mobileLangRef.current?.contains(target);
      if (!inDesktop && !inMobile) setLangOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm">
      {/* Top Row */}
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center gap-4">
        {/* Logo */}
        <a href="#" className="flex-shrink-0">
          <img
            src="/static/image/mli-logo.png"
            alt="Mentor Language Institute"
            className="h-10 sm:h-14 w-auto"
          />
        </a>

        {/* Desktop: Right Side Actions */}
        <div className="hidden md:flex items-center gap-2 flex-wrap justify-end">
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
          <a href="tel:+13108870777" className="flex items-center gap-1.5 text-gray-700 px-3 py-2 text-sm hover:text-gold transition-colors">
            <span className="font-semibold">Westwood</span>
            <span>(310) 887-0777</span>
          </a>
          <span className="text-gray-300">|</span>
          <a href="tel:+13238707102" className="flex items-center gap-1.5 text-gray-700 px-3 py-2 text-sm hover:text-gold transition-colors">
            <span className="font-semibold">Hollywood</span>
            <span>(323) 870-7102</span>
          </a>
          <a href="https://mliesl.edu/admission/" target="_blank" rel="noopener noreferrer" className="bg-navy text-white px-5 py-2 rounded-md font-semibold text-sm hover:bg-navy-light transition-colors">
            Online Application
          </a>
          <a href="#contact" className="bg-gold text-navy px-5 py-2 rounded-md font-semibold text-sm hover:bg-gold-light transition-colors">
            Free Consultation
          </a>
        </div>

        {/* Mobile: Hamburger button */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-md text-navy hover:bg-gray-100 transition-colors"
        >
          <span className={`block w-5 h-0.5 bg-current rounded-full transition-all duration-200 ${mobileMenuOpen ? 'rotate-45 translate-y-1' : ''}`} />
          <span className={`block w-5 h-0.5 bg-current rounded-full my-1 transition-all duration-200 ${mobileMenuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-0.5 bg-current rounded-full transition-all duration-200 ${mobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
        </button>
      </div>

      {/* Desktop Navigation Row */}
      <nav className="hidden md:block border-t border-gray-200 bg-white">
        <div className="max-w-[1100px] mx-auto px-6">
          <ul className="flex flex-wrap justify-center gap-1 py-3">
            {NAV_ITEMS.map((item) => (
              <li key={item.label}>
                <a href={item.href} className="px-4 py-2 text-[#1e4a6d] text-sm font-medium hover:text-[#c5893a] transition-colors">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile menu overlay + panel */}
      <div
        className={`md:hidden fixed inset-0 z-40 transition-opacity duration-200 ${mobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        aria-hidden={!mobileMenuOpen}
      >
        <div
          className="absolute inset-0 bg-black/40"
          onClick={closeMobileMenu}
          aria-hidden="true"
        />
        <div
          className={`absolute top-0 right-0 h-full w-full max-w-[320px] bg-white shadow-xl flex flex-col transition-transform duration-200 ease-out ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          <div className="flex items-center justify-between px-4 py-4 border-b border-gray-200">
            <span className="text-sm font-semibold text-navy">Menu</span>
            <button type="button" aria-label="Close menu" onClick={closeMobileMenu} className="p-2 rounded-md hover:bg-gray-100 text-gray-600">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flex-1 overflow-y-auto py-4 px-4">
            <ul className="space-y-1">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={closeMobileMenu}
                    className="block px-4 py-3 text-[#1e4a6d] font-medium rounded-md hover:bg-gray-50 hover:text-[#c5893a] transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-4 border-t border-gray-200 space-y-3">
              <div className="relative" ref={mobileLangRef}>
                <button
                  onClick={() => setLangOpen(!langOpen)}
                  className="w-full flex items-center justify-between gap-2 text-gray-700 px-4 py-3 text-sm hover:bg-gray-50 rounded-md border border-gray-200"
                >
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                    Language
                  </span>
                  <svg className={`w-4 h-4 transition-transform ${langOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {langOpen && (
                  <div className="mt-2 rounded-lg border border-gray-200 bg-gray-50 overflow-hidden">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                        onClick={() => setLangOpen(false)}
                      >
                        <Flag code={lang.code} size="sm" />
                        <span>{lang.label}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <a href="tel:+13108870777" onClick={closeMobileMenu} className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 rounded-md">
                <span className="font-semibold">Westwood</span> (310) 887-0777
              </a>
              <a href="tel:+13238707102" onClick={closeMobileMenu} className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 rounded-md">
                <span className="font-semibold">Hollywood</span> (323) 870-7102
              </a>
              <a
                href="https://mliesl.edu/admission/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMobileMenu}
                className="block text-center bg-navy text-white px-4 py-3 rounded-md font-semibold text-sm hover:bg-navy-light transition-colors"
              >
                Online Application
              </a>
              <a
                href="#contact"
                onClick={closeMobileMenu}
                className="block text-center bg-gold text-navy px-4 py-3 rounded-md font-semibold text-sm hover:bg-gold-light transition-colors"
              >
                Free Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
