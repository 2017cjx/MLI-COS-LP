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
          {/* Program 1 */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg shadow-black/5 flex flex-col h-full">
            <div className="h-[200px] bg-gray-200 relative">
              <img 
                src="/static/image/ESL-and-TOEFL.jpg" 
                alt="Students studying in class" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-7 flex-1 flex flex-col">
              <div className="mb-auto">
                <div className="inline-block bg-cream text-gold px-3.5 py-1.5 rounded-full text-xs font-bold mb-3">☀️ Morning 9AM-1:15PM</div>
                <h3 className="font-serif text-[1.3rem] text-navy mb-2.5">ESL & TOEFL</h3>
                <p className="text-gray-600 text-[0.9rem] mb-4 leading-relaxed">Serious English study. Grammar, reading, writing, listening.</p>
                <ul className="space-y-1.5">
                  <li className="text-[0.85rem] text-gray-800 flex items-center gap-2"><span className="text-success font-bold">✓</span> 4 levels: beginner to advanced</li>
                  <li className="text-[0.85rem] text-gray-800 flex items-center gap-2"><span className="text-success font-bold">✓</span> TOEFL test prep available</li>
                  <li className="text-[0.85rem] text-gray-800 flex items-center gap-2"><span className="text-success font-bold">✓</span> Monday to Thursday</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Program 2 */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg shadow-black/5 flex flex-col h-full">
            <div className="h-[200px] bg-gray-200 relative">
              <img 
                src="/static/image/Conversation.jpg" 
                alt="Group of friends talking" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-7 flex-1 flex flex-col">
              <div className="mb-auto">
                <div className="inline-block bg-cream text-gold px-3.5 py-1.5 rounded-full text-xs font-bold mb-3">🌅 Afternoon & 🌙 Evening</div>
                <h3 className="font-serif text-[1.3rem] text-navy mb-2.5">Conversation</h3>
                <p className="text-gray-600 text-[0.9rem] mb-4 leading-relaxed">Build speaking confidence. Practice real English.</p>
                <ul className="space-y-1.5">
                  <li className="text-[0.85rem] text-gray-800 flex items-center gap-2"><span className="text-success font-bold">✓</span> Choose 2, 3, or 4 days/week</li>
                  <li className="text-[0.85rem] text-gray-800 flex items-center gap-2"><span className="text-success font-bold">✓</span> Small class sizes</li>
                  <li className="text-[0.85rem] text-gray-800 flex items-center gap-2"><span className="text-success font-bold">✓</span> Good if you work daytime</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Program 3 */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg shadow-black/5 flex flex-col h-full">
            <div className="h-[200px] bg-gray-200 relative">
              <img 
                src="/static/image/Private-lesson.jpg" 
                alt="One on one tutoring" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-7 flex-1 flex flex-col">
              <div className="mb-auto">
                <div className="inline-block bg-cream text-gold px-3.5 py-1.5 rounded-full text-xs font-bold mb-3">📅 Your Schedule</div>
                <h3 className="font-serif text-[1.3rem] text-navy mb-2.5">Private Lessons</h3>
                <p className="text-gray-600 text-[0.9rem] mb-4 leading-relaxed">One-on-one attention. Learn at your own pace.</p>
                <ul className="space-y-1.5">
                  <li className="text-[0.85rem] text-gray-800 flex items-center gap-2"><span className="text-success font-bold">✓</span> From $80/hour</li>
                  <li className="text-[0.85rem] text-gray-800 flex items-center gap-2"><span className="text-success font-bold">✓</span> Flexible timing</li>
                  <li className="text-[0.85rem] text-gray-800 flex items-center gap-2"><span className="text-success font-bold">✓</span> Custom lessons for you</li>
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