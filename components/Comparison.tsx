import React from 'react';

const Comparison: React.FC = () => {
  return (
    <section className="py-20 bg-cream">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="text-center mb-12">
          <div className="uppercase text-xs font-bold tracking-widest text-gold mb-3">Compare Your Options</div>
          <h2 className="font-serif text-[2rem] text-navy">Why Choose MLI?</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[950px] mx-auto">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl p-8 px-6 text-center shadow-lg shadow-black/5">
            <h3 className="text-sm mb-2 opacity-80 tracking-wide uppercase">DO IT YOURSELF</h3>
            <div className="font-serif text-[2.5rem] font-bold mb-6">$420+</div>
            <ul className="text-left space-y-3 text-sm">
              <li className="pb-3 border-b border-gray-200 flex items-start gap-2.5"><span className="text-danger font-bold">✕</span> Process is complicated</li>
              <li className="pb-3 border-b border-gray-200 flex items-start gap-2.5"><span className="text-danger font-bold">✕</span> Prepare & submit alone</li>
              <li className="pb-3 border-b border-gray-200 flex items-start gap-2.5"><span className="text-danger font-bold">✕</span> Higher risk of Request for Evidence (RFE)</li>
              <li className="pb-3 border-b border-gray-200 flex items-start gap-2.5"><span className="text-danger font-bold">✕</span> Takes a lot of time</li>
              <li className="flex items-start gap-2.5"><span className="text-danger font-bold">✕</span> No expert help</li>
            </ul>
          </div>
          
          {/* Card 2 - Featured */}
          <div className="bg-navy text-white rounded-2xl p-8 px-6 text-center shadow-xl shadow-navy/30 md:scale-105 transform md:-order-none order-first z-10">
            <h3 className="text-sm mb-2 opacity-80 tracking-wide uppercase text-gold">MLI + LAWYER</h3>
            <div className="font-serif text-[2.5rem] font-bold mb-6 text-gold">$1,885*</div>
            <ul className="text-left space-y-3 text-sm">
              <li className="pb-3 border-b border-white/15 flex items-start gap-2.5"><span className="text-gold font-bold">✓</span> Attorney fee included</li>
              <li className="pb-3 border-b border-white/15 flex items-start gap-2.5"><span className="text-gold font-bold">✓</span> Filing fee ($420) included</li>
              <li className="pb-3 border-b border-white/15 flex items-start gap-2.5"><span className="text-gold font-bold">✓</span> Lawyer is COS expert</li>
              <li className="pb-3 border-b border-white/15 flex items-start gap-2.5"><span className="text-gold font-bold">✓</span> If COS denied: free reapplication prep — you only pay filing fee</li>
              <li className="pb-3 border-b border-white/15 flex items-start gap-2.5"><span className="text-gold font-bold">✓</span> We support you fully</li>
              <li className="flex items-start gap-2.5"><span className="text-gold font-bold">✓</span> $600 tuition credit on approval</li>
            </ul>
          </div>
          
          {/* Card 3 */}
          <div className="bg-white rounded-2xl p-8 px-6 text-center shadow-lg shadow-black/5">
            <h3 className="text-sm mb-2 opacity-80 tracking-wide uppercase">OTHER LAWYERS</h3>
            <div className="font-serif text-[2.5rem] font-bold mb-6">$3,000+</div>
            <ul className="text-left space-y-3 text-sm">
              <li className="pb-3 border-b border-gray-200 flex items-start gap-2.5"><span className="text-danger font-bold">✕</span> Hourly billing</li>
              <li className="pb-3 border-b border-gray-200 flex items-start gap-2.5"><span className="text-danger font-bold">✕</span> Filing fee not included</li>
              <li className="pb-3 border-b border-gray-200 flex items-start gap-2.5"><span className="text-danger font-bold">✕</span> Handles many case types</li>
              <li className="pb-3 border-b border-gray-200 flex items-start gap-2.5"><span className="text-danger font-bold">✕</span> Hard to contact</li>
              <li className="flex items-start gap-2.5"><span className="text-danger font-bold">✕</span> No school benefits</li>
            </ul>
          </div>
        </div>
        
        <p className="text-center text-sm text-gray-600 mt-8">*MLI Registration Fee + SEVIS fee is required. Approval is not guaranteed.</p>
      </div>
    </section>
  );
};

export default Comparison;