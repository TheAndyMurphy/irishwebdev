
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeftIcon } from '../ui/Icons';

interface FutureNetSolutionsProps {
  onBack: () => void;
}

const MetricCard: React.FC<{ value: string, label: string }> = ({ value, label }) => (
    <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-lg text-center">
        <p className="text-4xl lg:text-5xl font-bold text-sky-400">{value}</p>
        <p className="text-sm text-gray-300 mt-2">{label}</p>
    </div>
);

const FutureNetSolutions: React.FC = () => {
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
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
            alt="Modern corporate office with computers"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-transparent"></div>
        </div>
        <div className="relative z-10 px-6 container mx-auto">
            <button onClick={() => navigate('/')} className="absolute top-0 left-6 md:left-0 flex items-center gap-2 text-gray-300 hover:text-white transition-colors text-lg font-semibold">
                <ArrowLeftIcon className="w-6 h-6" />
                Back to Main Site
            </button>
            <p className="text-sky-400 font-bold uppercase tracking-widest">Corporate Website Showcase</p>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mt-4 mb-4 tracking-tighter">
                FutureNet Solutions
            </h1>
        </div>
      </section>

      <main className="container mx-auto px-6 py-16 lg:py-24">
        {/* Metrics Section */}
        <section className="-mt-32 lg:-mt-40 relative z-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <MetricCard value="98/100" label="Lighthouse Score" />
                <MetricCard value="+150%" label="Qualified Lead Generation" />
                <MetricCard value="-40%" label="Bounce Rate Reduction" />
            </div>
        </section>

        {/* Project Details */}
        <section className="mt-16 lg:mt-24 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div className="md:col-span-1">
                    <h2 className="text-2xl font-bold text-sky-400 mb-4">Project Overview</h2>
                    <ul className="space-y-3 text-gray-300">
                        <li><strong>Client:</strong> FutureNet Solutions</li>
                        <li><strong>Industry:</strong> Enterprise Technology</li>
                        <li><strong>Timeline:</strong> 3 Months</li>
                        <li><strong>Services:</strong>
                            <ul className="list-disc list-inside ml-4 text-gray-400">
                                <li>Web Design & Development</li>
                                <li>Custom CMS</li>
                                <li>SEO Integration</li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className="md:col-span-2">
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-3">The Challenge</h3>
                        <p className="text-gray-400 leading-relaxed">
                            FutureNet's existing website was outdated, slow, and difficult to navigate, especially on mobile devices. It failed to reflect their status as a modern tech leader and was underperforming in generating qualified leads.
                        </p>
                    </div>
                    <div className="mt-8">
                        <h3 className="text-2xl font-bold text-white mb-3">Our Solution</h3>
                        <p className="text-gray-400 leading-relaxed">
                            We executed a complete overhaul, building a sleek, professional website on a modern tech stack. The new design is fully responsive and optimized for lightning-fast performance. We developed a user-friendly custom CMS, empowering the FutureNet team to manage content effortlessly. Strategic placement of calls-to-action and optimized contact forms led to a significant increase in lead capture.
                        </p>
                    </div>
                </div>
            </div>
        </section>
      </main>
    </div>
  );
};

export default FutureNetSolutions;