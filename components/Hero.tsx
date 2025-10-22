import React, { useState } from 'react';
import ParticleBackground from './ui/ParticleBackground';
import CursorFollower from './ui/CursorFollower';

interface HeroProps {
  onContactClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onContactClick }) => {
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
  };

  return (
    <>
      <CursorFollower x={cursorPos.x} y={cursorPos.y} isVisible={isHovering} />
      <section 
        className={`w-full overflow-hidden relative h-screen flex items-center justify-center text-left md:text-center section-bordered ${isHovering ? 'cursor-none' : ''}`}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900 to-sky-900 opacity-90"></div>
        <ParticleBackground />
        <div className="absolute inset-0 -z-10">
           <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sky-500 rounded-lg mix-blend-screen filter blur-3xl opacity-20 animate-blob"></div>
           <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-blue-500 rounded-lg mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
           <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-purple-500 rounded-lg mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>
        <div className="relative z-10 px-10">
          <h1 className="text-4xl md:text-7xl font-extrabold text-white leading-tight mb-4 tracking-tighter">
            Build Your Brand <br/> 
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-blue-500">With Data-Driven Results</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Learn your customers, optimize your marketing, style your brand and grow your business or... let us do it for you!
          </p>
          <button
            onClick={onContactClick}
            className="bg-sky-500 hover:bg-sky-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 text-lg shadow-lg shadow-sky-500/30"
          >
            Start Your Project
          </button>
        </div>
         <style>
          {`
          @keyframes blob {
              0% { transform: translate(0px, 0px) scale(1); }
              33% { transform: translate(30px, -50px) scale(1.1); }
              66% { transform: translate(-20px, 20px) scale(0.9); }
              100% { transform: translate(0px, 0px) scale(1); }
          }
          .animation-delay-2000 { animation-delay: 2s; }
          .animation-delay-4000 { animation-delay: 4s; }
          .animate-blob { animation: blob 7s infinite; }
          `}
        </style>
      </section>
    </>
  );
};

export default Hero;