import React, { useState } from 'react';

const quotes = [
    "The journey of a thousand miles begins with a single step.",
    "Travel is to live.",
    "Once a year, go someplace you’ve never been before.",
    "He who is not courageous enough to take risks will accomplish nothing in life.",
    "The world is a book and those who do not travel read only one page."
];

const CtaSection: React.FC = () => {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [blessing, setBlessing] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (email) {
            console.log('Email submitted:', email);
            setSubmitted(true);
        }
    };
    
    const showBlessing = () => {
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        setBlessing(randomQuote);
        setTimeout(() => setBlessing(''), 4000);
    };

    return (
        <section className="py-20 md:py-32 relative bg-[#0c1426] overflow-hidden">
            {/* Floating butter lamps */}
            <div className="absolute top-10 left-[10%] w-8 h-10 bg-yellow-400/50 rounded-full blur-xl animate-float" style={{ animationDelay: '0s' }}></div>
            <div className="absolute top-1/2 right-[15%] w-12 h-16 bg-amber-400/50 rounded-full blur-2xl animate-float" style={{ animationDelay: '-2s' }}></div>
            <div className="absolute bottom-10 left-[25%] w-6 h-8 bg-orange-400/50 rounded-full blur-xl animate-float" style={{ animationDelay: '-5s' }}></div>
            
            <div className="max-w-2xl mx-auto text-center relative z-10 px-4">
                {submitted ? (
                    <div className="animate-fade-in-up">
                        <h2 className="text-4xl md:text-5xl font-bold text-amber-300 mb-4 font-devanagari">Namaste 🙏</h2>
                        <p className="text-slate-300 text-xl">
                            You'll be the first to know. Your adventure is about to begin.
                        </p>
                    </div>
                ) : (
                    <>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 animate-fade-in-up">
                            The Soul of Nepal, in Your Pocket
                        </h2>
                        <p className="text-slate-300 mb-8 text-lg animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                            Be the first to embark on this journey. Sign up for exclusive launch news.
                        </p>
                        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                required
                                className="flex-grow px-5 py-3 rounded-md bg-slate-800/50 text-white border border-slate-600 focus:ring-2 focus:ring-amber-400 focus:outline-none transition-all duration-300"
                            />
                            <button
                                type="submit"
                                className="px-8 py-3 rounded-md bg-red-600 text-white font-semibold hover:bg-red-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
                            >
                                Notify Me
                            </button>
                        </form>
                    </>
                )}
                 {/* Mandala Easter Egg */}
                 <div className="mt-16 flex flex-col items-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                     <button onClick={showBlessing} className="group" aria-label="Get a virtual blessing">
                         <svg width="60" height="60" viewBox="0 0 100 100" className="text-amber-500/50 group-hover:text-amber-400 transition-colors duration-500 transform group-hover:rotate-90">
                             <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="2"/>
                             <path d="M50,10 V30 M90,50 H70 M50,90 V70 M10,50 H30" stroke="currentColor" strokeWidth="2"/>
                             <path d="M29.29,29.29 L43.43,43.43 M70.71,29.29 L56.57,43.43 M70.71,70.71 L56.57,56.57 M29.29,70.71 L43.43,56.57" stroke="currentColor" strokeWidth="2"/>
                             <circle cx="50" cy="50" r="20" fill="currentColor" className="text-amber-500/20 group-hover:text-amber-400/30"/>
                         </svg>
                     </button>
                     <p className="mt-2 text-slate-500 text-sm">Tap the mandala for a virtual blessing</p>
                     {blessing && (
                        <div className="mt-4 p-4 bg-slate-800/50 border border-slate-700 rounded-lg shadow-xl">
                            <p className="text-amber-200 italic">"{blessing}"</p>
                        </div>
                     )}
                 </div>
            </div>
        </section>
    );
};

export default CtaSection;
