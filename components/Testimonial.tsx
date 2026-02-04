import React from 'react';

const Testimonial: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[800px] mx-auto text-center px-6">
        <div className="uppercase text-xs font-bold tracking-widest text-gold mb-3">Student Story</div>
        <div className="font-serif text-2xl text-navy leading-relaxed mb-8 relative">
          <span className="absolute -top-5 -left-8 text-[4rem] text-gold opacity-30 select-none">"</span>
          After a few months, things changed, I started speaking more, I gained confidence, and I realized I could do things on my own outside.
        </div>
        <div className="flex items-center justify-center gap-4">
          <img 
            src="/static/image/student testimonial.jpeg" 
            alt="Merve from Türkiye"
            className="w-[60px] h-[60px] rounded-full object-cover"
          />
          <div className="text-left">
            <div className="font-semibold text-navy">Merve</div>
            <div className="text-[0.85rem] text-gray-600">Türkiye</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;