import React from "react";
import { STAFF_LANGUAGES_TEXT } from "../constants/languages";

const FAQ: React.FC = () => {
  return (
    <section id="faq" className="py-20 bg-white scroll-mt-32">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="text-center mb-12">
          <div className="uppercase text-xs font-bold tracking-widest text-gold mb-3">
            Common Questions
          </div>
          <h2 className="font-serif text-[2rem] text-navy">
            You Might Be Wondering...
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[900px] mx-auto">
          {[
            {
              q: "Can I change status if my visa expired?",
              a: "Yes, usually you can. If you haven't overstayed too long, our lawyer can check if you qualify. Ask us in a free consultation.",
            },
            {
              q: "How long does it take?",
              a: "USCIS usually responds in 3-6 months. You can stay in the U.S. legally while you wait.",
            },
            {
              q: "Can I work while studying?",
              a: "Yes. F1 students can work on campus up to 20 hours per week. During breaks, you can work full-time.",
            },
            {
              q: "Do you have multilingual staff?",
              a: `Yes! We speak ${STAFF_LANGUAGES_TEXT}. We'll help you in your language.`,
            },
          ].map((item, i) => (
            <div key={i} className="bg-gray-100 p-7 rounded-xl">
              <h4 className="text-base text-navy font-bold mb-3 leading-snug">
                {item.q}
              </h4>
              <p className="text-[0.9rem] text-gray-600 leading-relaxed">
                {item.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
