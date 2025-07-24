import React from 'react';

const BirdSVG = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 20" className={`w-16 h-auto text-slate-300 ${className}`}>
    <path fill="currentColor" d="M99.3,3.2c-0.4-0.1-0.9-0.1-1.3,0.1c-1,0.5-2.2,0.5-3.2-0.1c-0.6-0.4-1.4-0.5-2.2-0.3c-0.8,0.2-1.5,0.7-1.9,1.4   c-0.5,0.8-0.6,1.7-0.4,2.6c0.2,0.9,0.8,1.7,1.6,2.1c0.8,0.4,1.8,0.5,2.7,0.2c0.5-0.1,1-0.4,1.4-0.8c-0.1,0.1-0.2,0.2-0.2,0.3   c-1.1,1.3-2.6,2.2-4.3,2.5c-1.7,0.3-3.4-0.1-4.9-1c-1.4-0.9-2.5-2.2-3-3.7c-0.5-1.5-0.5-3.2,0.1-4.7c0.5-1.5,1.6-2.8,3-3.7   c1.4-0.9,3.1-1.3,4.7-1.2c1.6,0.1,3.2,0.8,4.3,1.9C97.5,1.2,98.5,2,99.3,3.2z" />
    <path fill="currentColor" d="M50.4,8.2C49,7.3,47.3,6.9,45.7,7c-1.6,0.1-3.2,0.8-4.3,1.9c-1.1,1.1-1.8,2.6-1.9,4.3c-0.1,1.6,0.4,3.3,1.3,4.7   c0.9,1.4,2.2,2.5,3.7,3c1.5,0.5,3.2,0.5,4.7-0.1c1.5-0.5,2.8-1.6,3.7-3c0.9-1.4,1.3-3.1,1.2-4.7c-0.1-1.6-0.8-3.2-1.9-4.3   C51.6,9.3,51.1,8.7,50.4,8.2z" />
    <path fill="currentColor" d="M1.3,15.8c1.4,0.9,3.1,1.3,4.7,1.2c1.6-0.1,3.2-0.8,4.3-1.9c1.1-1.1,1.8-2.6,1.9-4.3c0.1-1.6-0.4-3.3-1.3-4.7   c-0.9-1.4-2.2-2.5-3.7-3C5.7,2.6,4,2.6,2.5,3.2C1,3.7,0,5.1-0.5,6.6c-0.5,1.5-0.5-3.2,0.1,4.7c0.3,0.8,0.8,1.5,1.4,2.1   c0.1-0.1,0.2-0.2,0.3-0.2c-0.4-0.4-0.7-0.9-0.8-1.4c-0.2-0.9-0.1-1.8,0.2-2.7c0.4-0.8,1-1.4,1.8-1.7c0.8-0.3,1.7-0.2,2.4,0.2   c1.1,0.6,2.3,0.5,3.3-0.1c0.4-0.2,0.7-0.5,1-0.9C9,6.5,8.9,5.6,8.4,4.8C8,4.1,7.3,3.6,6.5,3.4C5.7,3.2,4.8,3.3,4.2,3.7   C3.2,4.2,2,4.2,1,3.7C0.6,3.5,0.1,3.4,0,3.5c0,0,0,0,0,0C0.4,3.7,0.9,3.8,1.3,15.8z" />
  </svg>
);

const SoundToggle = ({ isMuted, toggleSound }: { isMuted: boolean; toggleSound: () => void; }) => (
    <button onClick={toggleSound} className="absolute top-6 right-6 z-50 p-2 rounded-full bg-black/30 hover:bg-black/50 transition-colors" aria-label="Toggle sound">
        {isMuted ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" /></svg>
        ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15zM17 14l4-4m0 0l-4-4m4 4H7" /></svg>
        )}
    </button>
);

const AppScreenFeature: React.FC<{ label: string; children: React.ReactNode }> = ({ label, children }) => (
    <div className="app-category">
        <div className="app-category-icon">
            {children}
        </div>
        <span className="app-category-label">{label}</span>
    </div>
);

const HeroSection: React.FC<{ isMuted: boolean; toggleSound: () => void; }> = ({ isMuted, toggleSound }) => {
  return (
    <section className="min-h-screen flex items-center justify-center p-4 relative">
      {/* Background Layers */}
      <div className="absolute inset-0 z-0">
        <img src="https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?q=80&w=2070&auto=format&fit=crop" alt="Mount Machhapuchchhre at sunrise" className="w-full h-full object-cover"/>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c1426] via-[#0c1426]/50 to-transparent"></div>
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Bird Animations */}
      <div className="absolute top-0 left-0 w-full h-full z-10 pointer-events-none">
        <BirdSVG className="absolute top-[20%] animate-glide-1 opacity-70" />
        <BirdSVG className="absolute top-[30%] animate-glide-2 opacity-50" />
        <BirdSVG className="absolute top-[40%] animate-glide-3 opacity-60" />
      </div>

      <SoundToggle isMuted={isMuted} toggleSound={toggleSound} />

      <div className="w-full max-w-6xl mx-auto relative z-20">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
                {/* Text Content */}
                <div className="text-center lg:text-left">
                    <h1 className="text-6xl sm:text-7xl lg:text-9xl font-bold text-white font-playfair drop-shadow-2xl animate-fade-in-legend">
                      Neptou
                    </h1>
                    <p className="mt-4 text-lg md:text-2xl text-slate-200 tracking-wider animate-fade-in-up" style={{ animationDelay: '1s' }}>
                      Awaken Your Inner Explorer. Neptou Is Almost Here.
                    </p>
                    <button className="mt-10 px-10 py-4 rounded-full bg-amber-500 text-slate-900 font-semibold text-lg hover:bg-amber-400 transform transition-all duration-300 shadow-lg animate-heartbeat animate-fade-in-up" style={{ animationDelay: '1.5s' }}>
                      Notify Me
                    </button>
                </div>

                {/* 3D Phone Mockup Area */}
                <div className="hidden lg:flex justify-center items-center">
                    <div className="phone-container">
                        <div className="phone-mockup">
                            <div className="phone-frame">
                                <div className="phone-screen">
                                    <div className="dynamic-island"></div>
                                    <div className="phone-content">
                                        {/* App UI Content */}
                                        <div className="text-center">
                                            <h2 className="text-4xl font-playfair text-white drop-shadow-md">Neptou</h2>
                                            <p className="text-sm text-amber-200 opacity-80 mt-1">Discover Your Himalaya</p>
                                        </div>

                                        <div className="app-search-bar">
                                            Search for trails, temples...
                                        </div>

                                        <div className="app-categories">
                                            <AppScreenFeature label="Trekking">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402a3.75 3.75 0 00-5.304-5.304L4.098 14.6z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12.75l-6.402-6.402a3.75 3.75 0 00-5.304 5.304L14.25 19.5" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.875 5.625L18.375 4.125" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l1.5-1.5" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.375 17.625l-1.5 1.5" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 15l-1.5 1.5" />
                                                </svg>
                                            </AppScreenFeature>
                                            <AppScreenFeature label="Culture">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.536L16.732 3.732z" />
                                                </svg>
                                            </AppScreenFeature>
                                            <AppScreenFeature label="Food">
                                                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 15.75l-.813.154-1.858.35a1.875 1.875 0 01-1.95-2.288l.21-1.049a.625.625 0 00-.285-.69l-1.05-1.05a.625.625 0 01.442-1.062l1.048-.21a.625.625 0 00.57-.28l.443-1.05a.625.625 0 011.062-.442l1.05 1.05a.625.625 0 00.69.285l1.048.21a.625.625 0 01.442 1.062l-1.05 1.05a.625.625 0 00-.28.57l-.21 1.048a1.875 1.875 0 01-1.95 2.288zM12.75 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                            </AppScreenFeature>
                                            <AppScreenFeature label="Spiritual">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v11.494m-9-5.747h18M5.47 7.72l.53 1.06A8.002 8.002 0 0012 21a8.002 8.002 0 005.99-12.218l.53-1.061M12 3c-3.866 0-7 1.79-7 4s3.134 4 7 4 7-1.79 7-4-3.134-4-7-4z" />
                                                </svg>
                                            </AppScreenFeature>
                                        </div>
                                    </div>
                                    <div className="phone-home-bar-container">
                                        <div className="phone-home-bar"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


      {/* Prayer Flags moved to the bottom as a foreground element */}
      <div className="absolute -bottom-8 left-0 w-full flex justify-center transform-gpu" style={{ transform: 'rotate(-4deg) translateX(-10%) scale(1.2)' }}>
        <div className="flex -space-x-1">
          {['bg-blue-500', 'bg-white', 'bg-red-600', 'bg-green-500', 'bg-yellow-400', 'bg-blue-500', 'bg-white', 'bg-red-600', 'bg-green-500', 'bg-yellow-400'].map((color, index) => (
            <div
              key={index}
              className={`w-12 h-16 ${color} shadow-lg animate-flutter opacity-80`}
              style={{ animationDelay: `${index * 0.15}s` }}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;