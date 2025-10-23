
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeftIcon } from '../ui/Icons';

interface ColinMaherProps {
  onBack: () => void;
}

const MetricCard: React.FC<{ value: string, label: string }> = ({ value, label }) => (
    <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-lg text-center">
        <p className="text-4xl lg:text-5xl font-bold text-sky-400">{value}</p>
        <p className="text-sm text-gray-300 mt-2">{label}</p>
    </div>
);

const ColinMaher
: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-slate-900 text-white animate-fade-in">
        <style>{`
            @keyframes fade-in {
                from { opacity: 0; }
                to { opacity: 1; }
            }
            .animate-fade-in {
                animation: fade-in 0.5s ease-in-out;
            }
        `}</style>
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center text-center">
        <div className="absolute inset-0">
          <img 
            src="../assets/cmd.webp"
            alt="Modern corporate office with computers"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-transparent"></div>
        </div>
        <div className="relative z-10 px-6 container mx-auto h-full grid content-center">
            
            <p className="text-sky-400 font-bold uppercase tracking-widest">Website & Marketing</p>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mt-4 mb-4 tracking-tighter">
                Colin Maher Design
            </h1>
            <button onClick={() => navigate('/')} className="justify-center mt-12 flex items-center gap-2 text-gray-300 hover:text-white transition-colors text-lg font-semibold">
                <ArrowLeftIcon className="w-6 h-6" />
                Back to Homepage
            </button>
        </div>
      </section>

      <main className="container mx-auto px-6 py-16 lg:py-24">
        {/* Metrics Section */}
        <section className="-mt-32 lg:-mt-40 relative z-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                <MetricCard value="99/100" label="Lighthouse Score" />
                <MetricCard value="+500%" label="Appliance Sales" />
            </div>
        </section>

        {/* Project Details */}
        <section className="mt-16 lg:mt-24 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div className="md:col-span-1">
                    <h2 className="text-2xl font-bold text-sky-400 mb-4">Project Overview</h2>
                    <ul className="space-y-3 text-gray-300">
                        <li><strong>Client:</strong> Colin Maher Design</li>
                        <li><strong>Date:</strong> August 2025</li>
                        <li><strong>Industry:</strong> Bespoke Kitchens & Furniture</li>
                        <li><strong>Initial Timeline:</strong> 3 Months</li>
                        <li><strong>Key Services:</strong>
                            <ul className="grid gap-2 list-disc list-inside ml-4 mt-4 text-gray-400">
                                <li>Web Design & Development</li>
                                <li>Bespoke CMS</li>
                                <li>SEO Optimisation</li>
                                <li>Google Ads</li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className="md:col-span-2">
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-3">The Challenge</h3>
                        <p className="text-gray-400 leading-relaxed">
                            Colin Maher Design came to us with a thriving kitchen fitting business, however they were now looking to shift focus to appliance sales to help increase profit margins. They also wanted some more granular data around where the best avenue to run their marketing campaigns would be and an updated website to maximise the user experience and increase lead generation.
                        </p>
                    </div>
                    <div className="mt-8">
                        <h3 className="text-2xl font-bold text-white mb-3">Our Solution</h3>
                        <p className="text-gray-400 leading-relaxed">
                            We started with the new website and like most of our projects we included a bespoke CMS for maximum staff customisation. We restructured the site to focus on getting more form submissions and be as transparent up front with the user about their process. We added a new apliances section that allowed for seasonal promo content to correspond with Google Ads. We targeted Google Ads and Meta initially for appliance sales which were boosted massively in the process and then fine tuned it to solely Google Ads as Meta converted significantly less vs spend. This was mainly due to the higher user intent in Google Searches leading to significantly better conversions.
                        </p>
                    </div>
                     <div className="mt-8">
                        <h3 className="text-2xl font-bold text-white mb-3">Live Website</h3>
                       <a href="https://colinmaher.ie?utm_source=irishwebdev" target="_blank" className="text-sky-400 hover:underline">https://colinmaher.ie</a>
                    </div>
                </div>
            </div>
        </section>
      </main>
    </div>
  );
};

export default ColinMaher
;