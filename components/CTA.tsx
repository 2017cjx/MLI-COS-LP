import React from 'react';
import Flag from './Flag';

const CTA: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-navy to-navy-light scroll-mt-32">
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
            <div className="flex gap-2 flex-wrap">
              <span className="hover:scale-110 transition-transform cursor-default" title="Japanese"><Flag code="jp" size="sm" /></span>
              <span className="hover:scale-110 transition-transform cursor-default" title="Chinese (Simplified)"><Flag code="cn" size="sm" /></span>
              <span className="hover:scale-110 transition-transform cursor-default" title="Chinese (Traditional)"><Flag code="tw" size="sm" /></span>
              <span className="hover:scale-110 transition-transform cursor-default" title="Korean"><Flag code="kr" size="sm" /></span>
              <span className="hover:scale-110 transition-transform cursor-default" title="Arabic"><Flag code="sa" size="sm" /></span>
              <span className="hover:scale-110 transition-transform cursor-default" title="Russian"><Flag code="ru" size="sm" /></span>
              <span className="hover:scale-110 transition-transform cursor-default" title="Turkish"><Flag code="tr" size="sm" /></span>
              <span className="hover:scale-110 transition-transform cursor-default" title="Portuguese"><Flag code="br" size="sm" /></span>
              <span className="hover:scale-110 transition-transform cursor-default" title="Spanish"><Flag code="es" size="sm" /></span>
            </div>
          </div>
        </div>
        
        <form className="bg-white p-8 rounded-2xl shadow-2xl shadow-black/20 text-gray-800">
          <h3 className="font-serif text-[1.5rem] text-navy mb-2 text-center">Free Consultation</h3>
          <p className="text-center text-gray-600 text-sm mb-6">We reply within 24 hours</p>
          
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1.5">Your Name *</label>
            <input type="text" placeholder="John Smith" required className="w-full p-3 border-2 border-gray-200 rounded-lg text-base focus:outline-none focus:border-navy transition-colors bg-white" />
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1.5">Your Email *</label>
            <input type="email" placeholder="john@email.com" required className="w-full p-3 border-2 border-gray-200 rounded-lg text-base focus:outline-none focus:border-navy transition-colors bg-white" />
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1.5">Phone Number *</label>
            <input type="tel" placeholder="1234567890" required className="w-full p-3 border-2 border-gray-200 rounded-lg text-base focus:outline-none focus:border-navy transition-colors bg-white" />
            <p className="text-xs text-gray-500 mt-1">Do not use a hyphen "-" or "+" when typing your phone number</p>
          </div>
          
          <div className="mb-4">
            <label className="flex items-center gap-2 text-sm cursor-pointer">
              <input type="checkbox" className="w-4 h-4 accent-navy bg-white border-2 border-gray-300 rounded" />
              <span>I do not want to receive a call from MLI</span>
            </label>
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1.5">Campus Preference *</label>
            <select required className="w-full p-3 border-2 border-gray-200 rounded-lg text-base focus:outline-none focus:border-navy transition-colors bg-white">
              <option value="">Select a campus</option>
              <option value="westwood">Westwood</option>
              <option value="hollywood">Hollywood</option>
              <option value="no-preference">No Preference</option>
            </select>
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1.5">Approximately how soon do you plan on starting your program in the U.S.? *</label>
            <select required className="w-full p-3 border-2 border-gray-200 rounded-lg text-base focus:outline-none focus:border-navy transition-colors bg-white">
              <option value="">Select timeframe</option>
              <option value="immediately">Immediately</option>
              <option value="1-3-months">1-3 months</option>
              <option value="3-6-months">3-6 months</option>
              <option value="6-12-months">6-12 months</option>
              <option value="not-sure">Not sure yet</option>
            </select>
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1.5">How did you hear about MLI? *</label>
            <select required className="w-full p-3 border-2 border-gray-200 rounded-lg text-base focus:outline-none focus:border-navy transition-colors bg-white">
              <option value="">Select an option</option>
              <option value="google">Google Search</option>
              <option value="instagram">Instagram</option>
              <option value="youtube">YouTube</option>
              <option value="facebook">Facebook</option>
              <option value="friend">Friend / Family</option>
              <option value="agent">Education Agent</option>
              <option value="other">Other</option>
            </select>
          </div>
          
          <div className="mb-5">
            <label className="block text-sm font-medium mb-1.5">Your Message</label>
            <textarea placeholder="Tell us about your goals..." rows={3} className="w-full p-3 border-2 border-gray-200 rounded-lg text-base focus:outline-none focus:border-navy transition-colors resize-none bg-white"></textarea>
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