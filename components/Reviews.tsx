import React, { useRef, useState, useEffect } from 'react';

const Reviews: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, offsetWidth } = scrollRef.current;
      // Calculate index based on scroll position assuming roughly 3 cards fit or it's mobile 1 card
      // For simplicity in this responsive design, we track the percentage
      const cardWidth = scrollRef.current.firstElementChild?.getBoundingClientRect().width || offsetWidth;
      const index = Math.round(scrollLeft / (cardWidth + 24)); // 24 is gap
      setActiveIndex(Math.min(index, 2));
    }
  };

  const scrollTo = (index: number) => {
    if (scrollRef.current) {
      const card = scrollRef.current.children[index] as HTMLElement;
      if(card) {
          const left = card.offsetLeft;
          scrollRef.current.scrollTo({ left, behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="py-16 bg-white border-b border-gray-200">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-4 bg-white px-7 py-4 rounded-xl shadow-lg shadow-black/5 mb-4 border border-gray-100">
            <div className="text-2xl font-bold flex">
              <span className="text-[#4285f4]">G</span>
              <span className="text-[#ea4335]">o</span>
              <span className="text-[#fbbc05]">o</span>
              <span className="text-[#4285f4]">g</span>
              <span className="text-[#34a853]">l</span>
              <span className="text-[#ea4335]">e</span>
            </div>
            <div className="flex flex-col items-start">
              <div className="text-[#fbbc05] text-xl tracking-widest">★★★★★</div>
              <div className="text-sm text-gray-600 mt-1">
                <span className="font-bold text-gray-800">4.9</span> · #1 Rated in LA
              </div>
            </div>
          </div>
          <p className="text-gray-600 text-base">See what our students say</p>
        </div>

        <div className="relative">
          <div 
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex md:grid md:grid-cols-3 gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 md:pb-0"
          >
            {[1, 2, 3].map((item, i) => (
              <div key={i} className="min-w-[85%] md:min-w-0 snap-center bg-gray-100 p-7 rounded-xl">
                <div className="text-[#fbbc05] text-base mb-3">★★★★★</div>
                <p className="text-[0.95rem] text-gray-800 mb-4 leading-relaxed">
                  {i === 0 && "[✍️ GOOGLE REVIEW #1] Pick a review about: friendly teachers, good atmosphere"}
                  {i === 1 && "[✍️ GOOGLE REVIEW #2] Pick a review about: visa support, flexible schedule"}
                  {i === 2 && "[✍️ GOOGLE REVIEW #3] Pick a review about: English improvement, life in LA"}
                </p>
                <div className="text-sm text-gray-600">
                  <strong className="text-navy">[Name]</strong> · [Country]
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-2 mt-5 md:hidden">
            {[0, 1, 2].map((idx) => (
              <button
                key={idx}
                onClick={() => scrollTo(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  idx === activeIndex ? 'bg-navy' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;