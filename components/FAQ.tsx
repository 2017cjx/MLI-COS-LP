import React, { useState } from "react";
import { STAFF_LANGUAGES_TEXT } from "../constants/languages";

const FAQ: React.FC = () => {
  const [openIndices, setOpenIndices] = useState<Set<number>>(new Set());

  const items = [
    {
      q: "How long does it take?",
      a: "Typically 3–6 months. You can stay legally while you wait.",
    },
    {
      q: "When is the best time to apply for a Change of Status (COS) to F-1?",
      a: [
        "A Change of Status (COS) application should generally be filed while the applicant is still maintaining valid nonimmigrant status in the United States.",
        "USCIS requires that Form I-539 be submitted before the applicant's current status expires. Because processing times can vary, it is important to plan carefully to avoid any gap in lawful status.",
        "The appropriate timing depends on each individual's current visa category, expiration date, and intended program start date.",
        "Students are strongly encouraged to consult with our designated Immigration Attorney before filing a Change of Status application to ensure proper timing and compliance with U.S. immigration regulations.",
      ],
    },
    {
      q: "How far in advance should I begin preparing my Change of Status (COS) application before my current status expires?",
      a: [
        "Students should begin preparing their Change of Status (COS) application well in advance of their current status expiration date.",
        "USCIS requires that Form I-539 be properly filed before the applicant's current status expires. Because document preparation, school processing, and USCIS processing times can vary, students are encouraged to start planning early to avoid any gap in lawful status.",
        "The appropriate timeline depends on the individual's visa category, expiration date, and intended program start date.",
        "Students should consult with our designated Immigration Attorney as early as possible to determine the proper filing strategy and timing.",
      ],
    },
    {
      q: "Do you have multilingual staff?",
      a: `Yes! We speak ${STAFF_LANGUAGES_TEXT}.`,
    },
    {
      q: "Can I apply for change of status from a visa other than B1 or B2?",
      a: [
        "Yes, in some cases it is possible to apply for a Change of Status (COS) to F-1 from another nonimmigrant status. However, eligibility depends on the individual's current visa category and immigration history. Certain visa categories may have restrictions or may not be eligible for a Change of Status.",
        "For example, J-1 or J-2 visa holders who are subject to the two-year home residency requirement (INA 212(e)) are generally not eligible to change status to F-1 unless they first obtain a waiver of that requirement.",
        "We strongly recommend that students consult with us and our immigration attorney.",
      ],
    },
    {
      q: "Can I travel overseas with my change of status approval?",
      a: [
        "If you depart the United States after your Change of Status (COS) to F-1 is approved, you will need to apply for and obtain an F-1 student visa at a U.S. embassy or consulate abroad before returning to the United States.",
        "Please note that a Change of Status approval only changes your immigration status within the United States. It does not issue an F-1 visa. If you leave the U.S. without first obtaining an F-1 visa, you cannot reenter in F-1 status until you obtain one.",
        "Before making travel plans, students should consult with our Designated School Official (DSO).",
      ],
    },
  ];

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

        <div className="flex flex-col gap-4 max-w-[700px] mx-auto">
          {items.map((item, i) => {
            const isOpen = openIndices.has(i);
            const toggle = () => {
              setOpenIndices((prev) => {
                const next = new Set(prev);
                if (next.has(i)) next.delete(i);
                else next.add(i);
                return next;
              });
            };
            return (
              <div
                key={i}
                className="bg-gray-100 rounded-xl overflow-hidden"
              >
                <button
                  type="button"
                  onClick={toggle}
                  className="w-full p-7 text-left flex items-start justify-between gap-4 hover:bg-gray-200/50 transition-colors"
                  aria-expanded={isOpen}
                >
                  <h4 className="text-base text-navy font-bold leading-snug">
                    {item.q}
                  </h4>
                  <span
                    className={`shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-navy text-sm font-bold transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    aria-hidden
                  >
                    ▼
                  </span>
                </button>
                {isOpen && (
                  <div className="px-7 pb-7 pt-0">
                    {Array.isArray(item.a) ? (
                      <div className="flex flex-col gap-3">
                        {item.a.map((para, j) => (
                          <p
                            key={j}
                            className="text-[0.9rem] text-gray-600 leading-relaxed"
                          >
                            {para}
                          </p>
                        ))}
                      </div>
                    ) : (
                      <p className="text-[0.9rem] text-gray-600 leading-relaxed">
                        {item.a}
                      </p>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
