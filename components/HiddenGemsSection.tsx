import React from 'react';

const GemIcon = ({ children }: { children: React.ReactNode }) => (
    <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-400 transition-all duration-300 group-hover:bg-amber-400/20 group-hover:scale-110">
        {children}
    </div>
);

const HiddenGemsSection: React.FC = () => {
    return (
        <section className="py-20 md:py-32 bg-[#0c1426] relative">
            <div className="max-w-6xl mx-auto px-4 text-center">
                <h2 className="text-4xl md:text-5xl font-bold font-devanagari text-amber-400 mb-4 animate-fade-in-up">
                    Your Guide to Hidden Gems
                </h2>
                <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-16 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                    Go beyond the guidebook. Discover experiences that connect you to the soul of Nepal.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div className="group animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                        <GemIcon>
                            {/* Artisan Icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.536L16.732 3.732z" /></svg>
                        </GemIcon>
                        <h3 className="text-2xl font-bold text-white font-playfair mb-2">Meet Artisans</h3>
                        <p className="text-slate-400">Watch master craftsmen at work in the ancient city of Patan.</p>
                    </div>
                    <div className="group animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                        <GemIcon>
                            {/* Monk Icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v11.494m-9-5.747h18M5.47 7.72l.53 1.06A8.002 8.002 0 0012 21a8.002 8.002 0 005.99-12.218l.53-1.061M12 3c-3.866 0-7 1.79-7 4s3.134 4 7 4 7-1.79 7-4-3.134-4-7-4z" /></svg>
                        </GemIcon>
                        <h3 className="text-2xl font-bold text-white font-playfair mb-2">Walk with Monks</h3>
                        <p className="text-slate-400">Find tranquility in a morning walk around the great Boudhanath Stupa.</p>
                    </div>
                    <div className="group animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
                        <GemIcon>
                           {/* Stars Icon */}
                           <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402a3.75 3.75 0 00-5.304-5.304L4.098 14.6z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 12.75l-6.402-6.402a3.75 3.75 0 00-5.304 5.304L14.25 19.5" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16.875 5.625L18.375 4.125" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 8.25l1.5-1.5" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6.375 17.625l-1.5 1.5" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 15l-1.5 1.5" /></svg>
                        </GemIcon>
                        <h3 className="text-2xl font-bold text-white font-playfair mb-2">Camp Under Stars</h3>
                        <p className="text-slate-400">Experience the Himalayan night sky from a campsite in Poon Hill.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HiddenGemsSection;
