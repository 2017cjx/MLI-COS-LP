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
          {/* Program 1: ESL + Conversation */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg shadow-black/5 flex flex-col h-full">
            <div className="h-[200px] bg-gray-200 relative">
              <img 
                src="/static/image/Conversation.jpg" 
                alt="ESL and Conversation class" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-7 flex-1 flex flex-col">
              <div className="mb-auto">
                <div className="inline-block bg-cream text-gold px-3.5 py-1.5 rounded-full text-xs font-bold mb-3">Beginner to Advanced</div>
                <h3 className="font-serif text-[1.3rem] text-navy mb-2.5">ESL + Conversation</h3>
                <p className="text-gray-600 text-[0.9rem] mb-4 leading-relaxed">Build confidence in everyday English.</p>
                <ul className="space-y-1.5">
                  <li className="text-[0.85rem] text-gray-800 flex items-center gap-2"><span className="text-success font-bold">✓</span> Beginner to Advanced</li>
                  <li className="text-[0.85rem] text-gray-800 flex items-center gap-2"><span className="text-success font-bold">✓</span> Morning or Afternoon/Evening</li>
                  <li className="text-[0.85rem] text-gray-800 flex items-center gap-2"><span className="text-success font-bold">✓</span> Build confidence in everyday English</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Program 2: Test Preparation */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg shadow-black/5 flex flex-col h-full">
            <div className="h-[200px] bg-gray-200 relative">
              <img 
                src="/static/image/ESL-and-TOEFL.jpg" 
                alt="Test preparation class" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-7 flex-1 flex flex-col">
              <div className="mb-auto">
                <div className="inline-block bg-cream text-gold px-3.5 py-1.5 rounded-full text-xs font-bold mb-3">TOEFL • IELTS • TOEIC</div>
                <h3 className="font-serif text-[1.3rem] text-navy mb-2.5">Test Preparation</h3>
                <p className="text-gray-600 text-[0.9rem] mb-4 leading-relaxed">Strategies for high scores.</p>
                <ul className="space-y-1.5">
                  <li className="text-[0.85rem] text-gray-800 flex items-center gap-2"><span className="text-success font-bold">✓</span> TOEFL • IELTS • TOEIC</li>
                  <li className="text-[0.85rem] text-gray-800 flex items-center gap-2"><span className="text-success font-bold">✓</span> Morning sessions</li>
                  <li className="text-[0.85rem] text-gray-800 flex items-center gap-2"><span className="text-success font-bold">✓</span> Strategies for high scores</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Program 3: Private Lessons */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg shadow-black/5 flex flex-col h-full">
            <div className="h-[200px] bg-gray-200 relative">
              <img 
                src="/static/image/Private-lesson.jpg" 
                alt="Private one on one tutoring" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-7 flex-1 flex flex-col">
              <div className="mb-auto">
                <div className="inline-block bg-cream text-gold px-3.5 py-1.5 rounded-full text-xs font-bold mb-3">Your schedule, your goals</div>
                <h3 className="font-serif text-[1.3rem] text-navy mb-2.5">Private Lessons</h3>
                <p className="text-gray-600 text-[0.9rem] mb-4 leading-relaxed">1-on-1 or small groups.</p>
                <ul className="space-y-1.5">
                  <li className="text-[0.85rem] text-gray-800 flex items-center gap-2"><span className="text-success font-bold">✓</span> Your schedule, your goals</li>
                  <li className="text-[0.85rem] text-gray-800 flex items-center gap-2"><span className="text-success font-bold">✓</span> From $80/hour</li>
                  <li className="text-[0.85rem] text-gray-800 flex items-center gap-2"><span className="text-success font-bold">✓</span> 1-on-1 or small groups</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;