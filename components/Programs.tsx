import React from 'react';

const Programs: React.FC = () => {
  return (
    <section id="programs" className="py-20 bg-gray-100 scroll-mt-32">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="text-center mb-12">
          <div className="uppercase text-xs font-bold tracking-widest text-gold mb-3">Our Programs</div>
          <h2 className="font-serif text-[2rem] text-navy">Choose What Fits Your Life</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Group Lessons — Morning */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg shadow-black/5 flex flex-col h-full">
            <div className="h-[200px] bg-gray-200 relative">
              <img
                src="/static/image/ESL-and-TOEFL.jpg"
                alt="ESL and TOEFL class"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-7 flex-1 flex flex-col">
              <h3 className="font-serif text-[1.3rem] text-navy mb-2.5">Morning</h3>
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="inline-flex items-center rounded-full bg-gold/10 text-navy text-xs font-medium px-2.5 py-1">4 days/week</span>
                <span className="inline-flex items-center rounded-full bg-gold/10 text-navy text-xs font-medium px-2.5 py-1">Group Lessons</span>
              </div>
              <ul className="space-y-1.5 text-[0.9rem] text-gray-700 list-none pl-0">
                <li className="flex items-center gap-2"><span className="text-success">✓</span> ESL (Beginner to Advanced)</li>
                <li className="flex items-center gap-2"><span className="text-success">✓</span> TOEFL</li>
              </ul>
            </div>
          </div>

          {/* Card 2: Group Lessons — Afternoon/Evening */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg shadow-black/5 flex flex-col h-full">
            <div className="h-[200px] bg-gray-200 relative">
              <img
                src="/static/image/Conversation.jpg"
                alt="Conversation and Business class"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-7 flex-1 flex flex-col">
              <h3 className="font-serif text-[1.3rem] text-navy mb-2.5">Afternoon/Evening</h3>
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="inline-flex items-center rounded-full bg-gold/10 text-navy text-xs font-medium px-2.5 py-1">2, 3 or 4 days/week</span>
                <span className="inline-flex items-center rounded-full bg-gold/10 text-navy text-xs font-medium px-2.5 py-1">Group Lessons</span>
              </div>
              <ul className="space-y-1.5 text-[0.9rem] text-gray-700 list-none pl-0">
                <li className="flex items-center gap-2"><span className="text-success">✓</span> Conversation</li>
                <li className="flex items-center gap-2"><span className="text-success">✓</span> Business + TOEIC</li>
              </ul>
            </div>
          </div>

          {/* Card 3: Private Lessons */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg shadow-black/5 flex flex-col h-full">
            <div className="h-[200px] bg-gray-200 relative">
              <img
                src="/static/image/Private-lesson.jpg"
                alt="Private one on one tutoring"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-7 flex-1 flex flex-col">
              <h3 className="font-serif text-[1.3rem] text-navy mb-2.5">Private Lessons</h3>
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="inline-flex items-center rounded-full bg-gold/10 text-navy text-xs font-medium px-2.5 py-1">Flexible timing</span>
              </div>
              <ul className="space-y-2 text-[0.9rem] text-gray-700 list-none pl-0">
                <li className="flex items-center gap-2"><span className="text-success">✓</span> Lessons customized for you</li>
                <li className="flex items-center gap-2"><span className="text-success">✓</span> From $56/hour</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;