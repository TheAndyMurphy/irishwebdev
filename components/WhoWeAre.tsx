
import React from 'react';
import { useScrollAnimation } from './ui/Card';

interface WhoWeAreProps {
  onViewWorkClick: () => void;
}

const WhoWeAre: React.FC<WhoWeAreProps> = ({ onViewWorkClick }) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.25 });

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-slate-800 section-bordered">
      <div className="container mx-auto px-10 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text Content */}
          <div className={`lg:w-1/2 text-left scroll-animate ${isVisible ? 'is-visible' : ''}`} style={{ transitionDelay: '100ms' }}>
            <p className="text-sm font-bold uppercase tracking-widest text-sky-400 mb-4">Who We Are</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Professional Web Development & Digital Marketing Experts</h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              [Insert AI copy here]. AI has taken over and the web is full of AI slop. It's actually quite easy to stand out amongst it, as people want an experience all the more human. We focus on creating authentic marketing material and well thought out websites focused on user interaction and customer conversion.<br/><br/> Clicks don't mean much if they don't convert to leads and leads mean nothing if they don't convert to sales. Let's focus on the stuff that matters.
            </p>
            <div className={`scroll-animate ${isVisible ? 'is-visible' : ''}`} style={{ transitionDelay: '200ms' }}>
                <button
                onClick={onViewWorkClick}
                className="bg-slate-700 hover:bg-slate-600 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 text-lg mb-12"
                >
                View Our Projects
                </button>
            </div>
          </div>
          {/* Image */}
          <div className={`lg:w-1/2 scroll-animate ${isVisible ? 'is-visible' : ''}`} style={{ transitionDelay: '300ms' }}>
            
            <figure className="grid gap-6"><img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
              alt="A creative team collaborating in a modern office" 
              className="rounded-lg shadow-2xl object-cover w-full h-full aspect-[4/3]"
            />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
