
import React from 'react';
import { useScrollAnimation } from './ui/Card';

const StatItem: React.FC<{ value: string; label: string }> = ({ value, label }) => (
  <div className="text-center">
    <p className="text-4xl font-bold text-sky-400">{value}</p>
    <p className="text-gray-400">{label}</p>
  </div>
);

const stats = [
  { value: "10+", label: "Years Industry Experience" },
  { value: "100%", label: "Client Satisfaction" },
  { value: "5+", label: "5 Star Reviews (More to come)" },
  { value: "20+", label: "Websites Launched" },

];

const About: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.25 });

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-slate-800 section-bordered">
      <div className="container mx-auto px-10 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className={`lg:w-1/2 scroll-animate ${isVisible ? 'is-visible' : ''}`}>
            <img 
              src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop" 
              alt="Code on a screen" 
              className="rounded-lg shadow-2xl object-cover w-full h-full aspect-[4/3]"
            />
          </div>
          <div className={`lg:w-1/2 text-left scroll-animate ${isVisible ? 'is-visible' : ''}`} style={{ transitionDelay: '200ms' }}>
            <h2 className="text-4xl font-bold text-white mb-4">Our Service in Numbers</h2>
            <p className="text-lg text-gray-300 mb-6">
              While still relatively new on the scene, we're also very selective on who we work with and tend to favour long term projects over short term romances.<br/><br/> When you're committed to us, we're committed to you. We won't fish for your competitors or bite off more than we can chew. Quality over quantity is one of our core values and we like to work with companies of the same ilk, but sure here's a few short numbers.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-8">
              {stats.map((stat, index) => (
                <div key={stat.label} className={`scroll-animate ${isVisible ? 'is-visible' : ''}`} style={{ transitionDelay: `${400 + index * 100}ms` }}>
                    <StatItem value={stat.value} label={stat.label} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;