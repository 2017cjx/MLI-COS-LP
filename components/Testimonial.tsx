import React from 'react';

const Testimonial: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[800px] mx-auto text-center px-6">
        <div className="uppercase text-xs font-bold tracking-widest text-gold mb-3">Student Story</div>
        <div className="font-serif text-2xl text-navy leading-relaxed mb-8 relative">
          <span className="absolute -top-5 -left-8 text-[4rem] text-gold opacity-30 select-none">"</span>
          [✍️ STUDENT TESTIMONIAL NEEDED]<br/><br/>
          Real student who came as tourist, changed status, achieved their goal.<br/>
          Focus on how life changed. 2-3 sentences. Emotional but simple.
        </div>
        <div className="flex items-center justify-center gap-4">
          <div className="w-[60px] h-[60px] rounded-full bg-gray-200 flex items-center justify-center text-[0.6rem] text-gray-600">
            📸
          </div>
          <div className="text-left">
            <div className="font-semibold text-navy">[Student Name]</div>
            <div className="text-[0.85rem] text-gray-600">[Country] · Student since [Year]</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;