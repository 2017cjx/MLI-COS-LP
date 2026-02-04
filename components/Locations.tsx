import React from 'react';

const Locations: React.FC = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="text-center mb-12">
          <div className="uppercase text-xs font-bold tracking-widest text-gold mb-3">Two Campuses</div>
          <h2 className="font-serif text-[2rem] text-navy">Great Locations in L.A.</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Westwood Campus */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg shadow-black/5 flex flex-col">
            <div className="h-[250px] bg-gray-200 relative group overflow-hidden">
               <img 
                src="/static/image/westwood.jpg"
                alt="Westwood Campus area"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
               />
               <div className="absolute inset-0 bg-navy/10 group-hover:bg-transparent transition-colors duration-300"></div>
            </div>
            <div className="p-7 flex-1 flex flex-col">
              <h3 className="text-[1.3rem] text-navy mb-3 font-bold font-serif">Westwood</h3>
              <p className="text-[0.95rem] text-gray-600 mb-6 leading-relaxed flex-1">
                Near UCLA. 10 min to Beverly Hills. 15 min to Santa Monica. Safe, academic environment with a bus stop right outside.
              </p>
              <div className="flex flex-col gap-3 mt-auto">
                <div className="flex items-center gap-2 text-navy font-bold text-lg">
                  📞 (310) 887-0777
                </div>
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Mentor+Language+Institute+Westwood" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 border-2 border-navy text-navy px-4 py-3 rounded-lg font-bold text-sm hover:bg-navy hover:text-white transition-all hover:-translate-y-0.5"
                >
                  📍 See on Google Map
                </a>
              </div>
            </div>
          </div>
          
          {/* Hollywood Campus */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg shadow-black/5 flex flex-col">
            <div className="h-[250px] bg-gray-200 relative group overflow-hidden">
              <img 
                src="/static/image/hollywood.jpg"
                alt="Hollywood Campus area"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-navy/10 group-hover:bg-transparent transition-colors duration-300"></div>
            </div>
            <div className="p-7 flex-1 flex flex-col">
              <h3 className="text-[1.3rem] text-navy mb-3 font-bold font-serif">Hollywood</h3>
              <p className="text-[0.95rem] text-gray-600 mb-6 leading-relaxed flex-1">
                Walk to the Walk of Fame. Near Chinese Theater. Restaurants, shops, and entertainment everywhere.
              </p>
              <div className="flex flex-col gap-3 mt-auto">
                <div className="flex items-center gap-2 text-navy font-bold text-lg">
                  📞 (323) 870-7102
                </div>
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Mentor+Language+Institute+Hollywood" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 border-2 border-navy text-navy px-4 py-3 rounded-lg font-bold text-sm hover:bg-navy hover:text-white transition-all hover:-translate-y-0.5"
                >
                  📍 See on Google Map
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Locations;