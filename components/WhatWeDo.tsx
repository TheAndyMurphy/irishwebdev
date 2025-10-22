
import React from 'react';
import { useScrollAnimation } from './ui/Card';
import { CheckIcon } from './ui/Icons';

interface WhatWeDoProps {
  onLearnMoreClick: () => void;
}

const serviceHighlights = [
  'SEO Optimization',
  'Digital Marketing',
  'Brand Strategy',
  'Content Creation',
  'Photography and Videography',
  'PPC Campaigns',
  'Data & Analytics',
  'Web Design & Development',
];

const WhatWeDo: React.FC<WhatWeDoProps> = ({ onLearnMoreClick }) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-slate-900 section-bordered">
      <div className="container mx-auto px-10">
        <div className="max-w-4xl mx-auto text-left md:text-center">
          
          <div className={`scroll-animate ${isVisible ? 'is-visible' : ''}`}>
            <p className="text-sm font-bold uppercase tracking-widest text-sky-400 mb-4">What can we do for you</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Build Your Brand & Grow Your Sales</h2>
            <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
              As mentioned above we focus on growing your business. Focusing on brand awareness alone, clicks or leads always leads to a bottle neck. What's the point in 50 leads if your sales team can't convert them. We'll help you and your team to get the most out of the service we provide with strategic planning, data-driven analysis with support along the way.
            </p>
          </div>

          
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 text-left max-w-3xl mx-auto">
            {serviceHighlights.map((service, index) => (
              <div
                key={index}
                className={`flex items-center p-2 scroll-animate ${isVisible ? 'is-visible' : ''}`}
                style={{ transitionDelay: `${200 + index * 50}ms` }}
              >
                <CheckIcon className="h-6 w-6 text-green-400 mr-4 flex-shrink-0" />
                <span className="text-gray-200">{service}</span>
              </div>
            ))}
          </div>

          
          <div className={`mt-12 scroll-animate ${isVisible ? 'is-visible' : ''}`} style={{ transitionDelay: '600ms' }}>
            <button
              onClick={onLearnMoreClick}
              className="bg-slate-700 hover:bg-slate-600 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 text-lg"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;