import React from 'react';

const Process: React.FC = () => {
  return (
    <section id="process" className="py-20 bg-navy text-white scroll-mt-32">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="text-center mb-16">
          <div className="uppercase text-xs font-bold tracking-widest text-gold mb-3">Easy Process</div>
          <h2 className="font-serif text-[2rem] text-white">How It Works</h2>
          <div className="inline-flex items-center gap-4 mt-6 bg-white/10 px-8 py-4 rounded-full flex-col md:flex-row">
            <span className="bg-gold text-navy px-5 py-2 rounded-md font-bold text-base">B1/B2 VISA</span>
            <span className="text-2xl rotate-90 md:rotate-0">→</span>
            <span className="bg-white text-navy px-5 py-2 rounded-md font-bold text-base">F1 VISA</span>
          </div>
        </div>
        
        <div className="relative grid grid-cols-2 md:grid-cols-6 gap-y-10 gap-x-5">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-10 left-[8%] right-[8%] h-[3px] bg-gradient-to-r from-gold to-white/30 z-0"></div>

          {[
            { num: 1, title: "Enroll at MLI", desc: "Request your I-20" },
            { num: 2, title: "Pay Fees", desc: "Registration + SEVIS fees" },
            { num: 3, title: "Gather Documents", desc: "Passport, current visa, I-94, financial proof" },
            { num: 4, title: "Prepare with Lawyer", desc: "Our lawyer prepares your application" },
            { num: 5, title: "Submit to USCIS", desc: "We submit your case for you" },
            { num: 6, title: "Get Response", desc: "Approximately 3-6 months" },
          ].map((step, i) => (
            <div key={i} className="text-center relative z-10">
              <div className="w-20 h-20 bg-gold text-navy rounded-full flex items-center justify-center font-serif text-2xl font-bold mx-auto mb-5 shadow-lg shadow-gold/40">
                {step.num}
              </div>
              <h4 className="text-[0.9rem] mb-2 font-bold">{step.title}</h4>
              <p className="text-xs opacity-80 leading-snug px-1">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;