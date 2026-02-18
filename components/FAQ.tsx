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
              q: "How long does it take?",
              a: "Typically 3–6 months. You can stay legally while you wait.",
            },
            {
              q: "Do you have multilingual staff?",
              a: `Yes! We speak ${STAFF_LANGUAGES_TEXT}.`,
            },
            {
              q: "Can a student apply for change of status from a visa other than B1 or B2?",
              a: "Yes. Valid status, I-20, and I-539. Don't enroll until approved.",
            },
            {
              q: "Can I travel overseas with my change of status approval?",
              a: "Generally no—leaving can abandon your application. Ask an attorney if you must travel.",
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
