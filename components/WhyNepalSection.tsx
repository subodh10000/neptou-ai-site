import React from 'react';

const WhyNepalSection: React.FC = () => {
  return (
    <section className="py-20 md:py-32 bg-[#0c1426] relative overflow-hidden">
       <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-t from-transparent to-[#0c1426]/50 -mt-32"></div>

      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold font-devanagari text-amber-400 mb-4 animate-fade-in-up">
          Why Nepal?
        </h2>
        <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-16 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          A tapestry of snow-capped giants, ancient kingdoms, and vibrant spirituality. Every path leads to a new discovery.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          <div className="bg-white/5 p-8 rounded-lg border border-white/10 backdrop-blur-sm animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-2xl font-bold text-white font-playfair mb-3">Majestic Peaks</h3>
            <p className="text-slate-300">Home to eight of the world's ten highest mountains, offering breathtaking vistas and unparalleled trekking adventures.</p>
          </div>
          <div className="bg-white/5 p-8 rounded-lg border border-white/10 backdrop-blur-sm animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <h3 className="text-2xl font-bold text-white font-playfair mb-3">Ancient Cities</h3>
            <p className="text-slate-300">Wander through medieval squares, marvel at intricate woodwork, and feel the history in living World Heritage Sites.</p>
          </div>
          <div className="bg-white/5 p-8 rounded-lg border border-white/10 backdrop-blur-sm animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <h3 className="text-2xl font-bold text-white font-playfair mb-3">Spiritual Soul</h3>
            <p className="text-slate-300">Discover a harmony of faiths, from sacred stupas to bustling temples, where every corner holds a sense of the divine.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyNepalSection;