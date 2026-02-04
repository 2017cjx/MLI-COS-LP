import React from 'react';

const CTA: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-navy to-navy-light" id="contact">
      <div className="max-w-[1100px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="text-white">
          <h2 className="font-serif text-[2rem] mb-5">Let's Talk About Your Options</h2>
          <p className="opacity-90 mb-6 text-[1.05rem] leading-relaxed">
            Not sure yet? That's okay. Get a free consultation. No pressure. We answer your questions and explain your options.
          </p>
          <ul className="space-y-2 mb-8">
            {[
              "Free 30-minute talk",
              "Check if you can change visa status",
              "Find the right program for you",
              "Tour our campus (in person or online)"
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 py-1">
                <span className="text-gold font-bold">✓</span> {item}
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <p className="text-[0.95rem] mb-3 opacity-90">We speak your language:</p>
            <div className="flex gap-3 flex-wrap">
              <span className="text-[2rem] hover:scale-125 transition-transform cursor-default" title="Japanese">🇯🇵</span>
              <span className="text-[2rem] hover:scale-125 transition-transform cursor-default" title="Chinese (Simplified)">🇨🇳</span>
              <span className="text-[2rem] hover:scale-125 transition-transform cursor-default" title="Chinese (Traditional)">🇹🇼</span>
              <span className="text-[2rem] hover:scale-125 transition-transform cursor-default" title="Korean">🇰🇷</span>
              <span className="text-[2rem] hover:scale-125 transition-transform cursor-default" title="Arabic">🇸🇦</span>
              <span className="text-[2rem] hover:scale-125 transition-transform cursor-default" title="Russian">🇷🇺</span>
              <span className="text-[2rem] hover:scale-125 transition-transform cursor-default" title="Turkish">🇹🇷</span>
              <span className="text-[2rem] hover:scale-125 transition-transform cursor-default" title="Portuguese">🇧🇷</span>
              <span className="text-[2rem] hover:scale-125 transition-transform cursor-default" title="Spanish">🇪🇸</span>
            </div>
          </div>
        </div>
        
        <form className="bg-white p-10 rounded-2xl shadow-2xl shadow-black/20 text-gray-800">
          <h3 className="font-serif text-[1.5rem] text-navy mb-2 text-center">Free Consultation</h3>
          <p className="text-center text-gray-600 text-sm mb-7">We reply within 24 hours</p>
          
          <div className="mb-5">
            <label className="block text-sm font-medium mb-1.5">Your Name *</label>
            <input type="text" placeholder="John Smith" required className="w-full p-3.5 border-2 border-gray-200 rounded-lg text-base focus:outline-none focus:border-navy transition-colors" />
          </div>
          
          <div className="mb-5">
            <label className="block text-sm font-medium mb-1.5">Email *</label>
            <input type="email" placeholder="john@email.com" required className="w-full p-3.5 border-2 border-gray-200 rounded-lg text-base focus:outline-none focus:border-navy transition-colors" />
          </div>
          
          <div className="mb-5">
            <label className="block text-sm font-medium mb-1.5">Phone or LINE ID</label>
            <input type="text" placeholder="Phone or LINE" className="w-full p-3.5 border-2 border-gray-200 rounded-lg text-base focus:outline-none focus:border-navy transition-colors" />
          </div>
          
          <button type="submit" className="w-full bg-gold text-navy p-4 border-none rounded-lg text-[1.1rem] font-bold cursor-pointer transition-all hover:bg-gold-light hover:-translate-y-0.5 shadow-lg shadow-gold/20">
            Get Free Consultation →
          </button>
          
          <p className="text-center text-xs text-gray-600 mt-4">🔒 We keep your information private.</p>
        </form>
      </div>
    </section>
  );
};

export default CTA;