import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[480px] sm:min-h-[580px] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy to-navy-light z-0"></div>
      <div className="absolute inset-0 bg-center bg-cover opacity-30 z-0" style={{backgroundImage: "url('/static/image/Background.jpg')"}}></div>

      <div className="relative z-10 max-w-[1100px] mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center py-12 sm:py-20">
        <div className="text-white">
          <div className="inline-block bg-white/15 px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm mb-4 sm:mb-6 border border-white/20">
            English School in LA · Since 2002
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-[2.8rem] font-bold mb-4 sm:mb-5 leading-tight">
            Already in L.A.?<br />
            <span className="text-gold">Turn Your Visit</span> into Real Fluency.
          </h1>
          <p className="text-lg opacity-90 mb-8 leading-relaxed">
            A short trip won't make you fluent. But a few months of real study can change everything. We help you stay and learn.
          </p>
          
          <div className="flex flex-col gap-3 mb-8">
            <div className="flex items-center gap-3 text-base">
              <div className="w-6 h-6 bg-gold rounded-full flex items-center justify-center text-navy text-xs font-bold">✓</div>
              <span>Study 2, 3, or 4 days a week</span>
            </div>
            <div className="flex items-center gap-3 text-base">
              <div className="w-6 h-6 bg-gold rounded-full flex items-center justify-center text-navy text-xs font-bold">✓</div>
              <span>Change of Status (COS) support</span>
            </div>
            <div className="flex items-center gap-3 text-base">
              <div className="w-6 h-6 bg-gold rounded-full flex items-center justify-center text-navy text-xs font-bold">✓</div>
              <span>Westwood & Hollywood campuses</span>
            </div>
          </div>

          <a 
            href="#contact" 
            className="inline-block bg-gold text-navy px-8 py-4 rounded-lg font-bold text-base transition-all hover:bg-gold-light hover:-translate-y-0.5 hover:shadow-lg shadow-gold/40"
          >
            Get Free Consultation →
          </a>
        </div>

        <div className="hidden md:block">
          <img 
            src="/static/image/hero.jpg" 
            alt="Students enjoying LA life" 
            className="rounded-2xl w-full h-[400px] object-cover shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;