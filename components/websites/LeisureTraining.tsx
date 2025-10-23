
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeftIcon } from '../ui/Icons';

interface LeisureTrainingProps {
  onBack: () => void;
}

const MetricCard: React.FC<{ value: string, label: string }> = ({ value, label }) => (
    <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-lg text-center">
        <p className="text-4xl lg:text-5xl font-bold text-sky-400">{value}</p>
        <p className="text-sm text-gray-300 mt-2">{label}</p>
    </div>
);

const LeisureTraining
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
            src="/lti.webp"
            alt="Modern corporate office with computers"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-transparent"></div>
        </div>
        <div className="relative z-10 px-6 container mx-auto h-full grid content-center">
            
            <p className="text-sky-400 font-bold uppercase tracking-widest">Website & Marketing</p>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mt-4 mb-4 tracking-tighter">
                Leisure Training Ireland
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <MetricCard value="88/100" label="Lighthouse Score" />
                <MetricCard value="#1" label="Google Page Rank" />
                <MetricCard value="185+" label="5 Star Reviews" />
            </div>
        </section>

        {/* Project Details */}
        <section className="mt-16 lg:mt-24 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div className="md:col-span-1">
                    <h2 className="text-2xl font-bold text-sky-400 mb-4">Project Overview</h2>
                    <ul className="space-y-3 text-gray-300">
                        <li><strong>Client:</strong> Leisure Training Ireland</li>
                        <li><strong>Date:</strong> March 2022</li>
                        <li><strong>Industry:</strong> Safety Training</li>
                        <li><strong>Initial Timeline:</strong> 3 Months</li>
                        <li><strong>Key Services:</strong>
                            <ul className="grid gap-2 list-disc list-inside ml-4 mt-4 text-gray-400">
                                <li>Web Design & Development</li>
                                <li>Bespoke CMS</li>
                                <li>SEO Optimisation</li>
                                <li>Print Material</li>
                                <li>Google Ads</li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className="md:col-span-2">
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-3">The Challenge</h3>
                        <p className="text-gray-400 leading-relaxed">
                            Leisure Training Ireland needed a website built from scratch with a CMS for editable content that staff could access. Evenetually, this was linked up to a course booking system. They also required print material such as business cards, flyers, roller banners and booklets. They had no socials setup and had a reputation to build.
                        </p>
                    </div>
                    <div className="mt-8">
                        <h3 className="text-2xl font-bold text-white mb-3">Our Solution</h3>
                        <p className="text-gray-400 leading-relaxed">
                            We built a shiny new website hooked up to a bespoke CMS and a third party booking platform. We set up their social accounts and created review cards to increase Google Reviews to help boost SEO and trust rankings rapidly. Occasional print material was also supplied for specific events and marketing pushes.
                        </p>
                    </div>
                     <div className="mt-8">
                        <h3 className="text-2xl font-bold text-white mb-3">Live Website</h3>
                       <a href="https://leisuretraining.ie?utm_source=irishwebdev" target="_blank" className="text-sky-400 hover:underline">https://leisuretraining.ie</a>
                    </div>
                </div>
            </div>
        </section>
      </main>
    </div>
  );
};

export default LeisureTraining
;