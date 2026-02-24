import React from 'react';

const Solution: React.FC = () => {
  return (
    <section className="py-20">
      <div className="max-w-[1100px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <div className="uppercase text-xs font-bold tracking-widest text-gold mb-3">How We Help</div>
          <h2 className="font-serif text-[2rem] text-navy mb-5">Stay Longer.<br />Learn More.</h2>
          <p className="text-gray-600 mb-6 text-[1.05rem] leading-loose">
            MLI is more than an English school. We help make long-term study possible. Change of Status (COS) support, flexible classes, fair prices.
          </p>
          
          <ul className="mb-8 space-y-3">
            {[
              "We issue I-20s for Change of Status (COS) to F-1",
              "One price includes lawyer fee + USCIS fee + $600 tuition credit",
              "Staff speaks Spanish, Portuguese, Turkish, Russian, and French"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-base leading-relaxed">
                <span className="text-success font-bold text-lg">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="hidden md:block rounded-2xl overflow-hidden h-[350px] shadow-xl border-4 border-white relative z-0">
            {/* 
              Using a placeholder image from Unsplash that matches the description (man with glasses).
              When hosting the site, you can replace this src with: "/static/image/Patric.jpg" 
              (Ensure the file exists in the public/static/image/ folder)
            */}
            <img 
              src="/static/image/Patric.jpg" 
              alt="Patrick Riley, Academic Director" 
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="bg-white p-6 rounded-xl shadow-xl shadow-black/10 md:absolute md:-bottom-8 md:-left-5 md:-right-10 mt-6 md:mt-0 relative z-10">
            <p className="text-[0.95rem] italic text-gray-800 mb-3 leading-relaxed">
              "When students come for a week or two, they have a good time. But when they come for longer, they really start to learn English -- and it's always amazing to see them make progress and help them along the way. Stop by and talk to us!"
            </p>
            <div className="text-sm text-navy font-bold">— Patrick Riley, Academic Director</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;