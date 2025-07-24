import React, { useState, useRef, useEffect } from 'react';
import HeroSection from './components/HeroSection';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';
import WhyNepalSection from './components/WhyNepalSection';
import HiddenGemsSection from './components/HiddenGemsSection';
import ForEveryExplorerSection from './components/ForEveryExplorerSection';

const App: React.FC = () => {
  const [isMuted, setIsMuted] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Associate the ref with the audio element in the DOM
    audioRef.current = document.getElementById('ambient-sound') as HTMLAudioElement;
  }, []);

  const toggleSound = () => {
    if (audioRef.current) {
      if (isMuted) {
        audioRef.current.play().catch(error => console.log("Audio autoplay was prevented:", error));
        audioRef.current.muted = false;
      } else {
        audioRef.current.pause();
        audioRef.current.muted = true;
      }
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="bg-[#0c1426] text-[#f0e6d2] font-sans min-h-screen overflow-x-hidden">
      <main>
        <HeroSection isMuted={isMuted} toggleSound={toggleSound} />
        <WhyNepalSection />
        <HiddenGemsSection />
        <ForEveryExplorerSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
