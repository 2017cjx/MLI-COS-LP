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
        <div className="flex items-center gap-2 flex-wrap">
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
