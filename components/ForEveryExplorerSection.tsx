import React, { useState, useEffect } from 'react';

const provinces = [
    { name: 'Koshi', icon: '🏞️' },
    { name: 'Madhesh', icon: '🌾' },
    { name: 'Bagmati', icon: '🏛️' },
    { name: 'Gandaki', icon: '🏔️' },
    { name: 'Lumbini', icon: '🕊️' },
    { name: 'Karnali', icon: '🏞️' },
    { name: 'Sudurpashchim', icon: '🌄' },
];

const ForEveryExplorerSection: React.FC = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);

        const interval = setInterval(() => {
            setCurrentSlide(prev => (prev + 1) % provinces.length);
        }, 3000);

        return () => {
            window.removeEventListener('resize', checkMobile);
            clearInterval(interval);
        };
    }, []);

    const ExplorerCard = ({ title, description, delay }: { title: string; description: string; delay: string }) => (
        <div className="border border-amber-400/20 bg-slate-800/20 p-8 rounded-lg text-center backdrop-blur-sm animate-fade-in-up" style={{ animationDelay: delay }}>
            <h3 className="text-2xl font-bold font-playfair text-amber-300 mb-3">{title}</h3>
            <p className="text-slate-300">{description}</p>
        </div>
    );
    
    return (
        <section className="py-20 md:py-32 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1593933349793-dc55b85111a?q=80&w=1974&auto=format&fit=crop')"}}>
            <div className="absolute inset-0 bg-[#0c1426]/80"></div>
            <div className="relative max-w-5xl mx-auto px-4 text-center">
                 <h2 className="text-4xl md:text-5xl font-bold font-devanagari text-amber-400 mb-4 animate-fade-in-up">
                    Built for Every Explorer
                </h2>
                <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-16 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                   Whether you seek thrills, culture, or tranquility, Neptou is your personalized guide.
                </p>

                {isMobile ? (
                    <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                        <h3 className="text-xl font-semibold text-white mb-4">Discover Every Province</h3>
                        <div className="relative h-48">
                            {provinces.map((province, index) => (
                                <div
                                    key={province.name}
                                    className="absolute w-full h-full transition-opacity duration-700 ease-in-out flex flex-col items-center justify-center bg-gradient-to-br from-blue-900/70 to-purple-900/70 border border-white/20 backdrop-blur-md rounded-xl p-4"
                                    style={{ opacity: index === currentSlide ? 1 : 0 }}
                                >
                                    <span className="text-5xl">{province.icon}</span>
                                    <span className="mt-3 text-3xl font-semibold font-playfair text-white">{province.name}</span>
                                </div>
                            ))}
                        </div>
                         <div className="flex justify-center gap-3 mt-6">
                            {provinces.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentSlide(index)}
                                    aria-label={`Go to slide ${index + 1}`}
                                    className={`h-3 rounded-full transition-all duration-300 ease-out ${currentSlide === index ? 'w-8 bg-amber-400' : 'w-3 bg-slate-500 hover:bg-slate-400'}`}
                                />
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <ExplorerCard title="The Culturalist" description="Immerse yourself in living history, vibrant festivals, and ancient traditions." delay="0.4s" />
                        <ExplorerCard title="The Thrill-Seeker" description="Conquer epic treks, raft wild rivers, and fly alongside the giants of the sky." delay="0.6s" />
                        <ExplorerCard title="The Solo Wanderer" description="Find your path, connect with locals, and discover the peace of the Himalayas." delay="0.8s" />
                    </div>
                )}
            </div>
        </section>
    );
};

export default ForEveryExplorerSection;