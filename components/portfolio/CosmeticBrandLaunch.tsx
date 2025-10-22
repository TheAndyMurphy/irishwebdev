
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeftIcon } from '../ui/Icons';

const MetricCard: React.FC<{ value: string, label: string }> = ({ value, label }) => (
    <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-lg text-center">
        <p className="text-4xl lg:text-5xl font-bold text-sky-400">{value}</p>
        <p className="text-sm text-gray-300 mt-2">{label}</p>
    </div>
);

const CosmeticBrandLaunch: React.FC = () => {
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
            src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1887&auto=format&fit=crop"
            alt="Cosmetic products arranged beautifully"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-transparent"></div>
        </div>
        <div className="relative z-10 px-6 container mx-auto">
            <button onClick={() => navigate('/')} className="absolute top-0 left-6 md:left-0 flex items-center gap-2 text-gray-300 hover:text-white transition-colors text-lg font-semibold">
                <ArrowLeftIcon className="w-6 h-6" />
                Back to Portfolio
            </button>
            <p className="text-sky-400 font-bold uppercase tracking-widest">E-commerce Success Story</p>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mt-4 mb-4 tracking-tighter">
                Cosmetic Brand Launch
            </h1>
        </div>
      </section>

      <main className="container mx-auto px-6 py-16 lg:py-24">
        {/* Metrics Section */}
        <section className="-mt-32 lg:-mt-40 relative z-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <MetricCard value="+300%" label="Sales Increase in 3 Months" />
                <MetricCard value="+1.2M" label="Impressions on Social" />
                <MetricCard value="50K" label="New Email Subscribers" />
            </div>
        </section>

        {/* Project Details */}
        <section className="mt-16 lg:mt-24 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div className="md:col-span-1">
                    <h2 className="text-2xl font-bold text-sky-400 mb-4">Project Overview</h2>
                    <ul className="space-y-3 text-gray-300">
                        <li><strong>Client:</strong> Serene Beauty</li>
                        <li><strong>Industry:</strong> Cosmetics</li>
                        <li><strong>Timeline:</strong> 4 Months</li>
                        <li><strong>Services:</strong>
                            <ul className="list-disc list-inside ml-4 text-gray-400">
                                <li>E-commerce Website</li>
                                <li>Social Media Campaign</li>
                                <li>Email Marketing</li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className="md:col-span-2">
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-3">The Challenge</h3>
                        <p className="text-gray-400 leading-relaxed">
                            Serene Beauty, a new player in the crowded cosmetics market, needed to launch their brand with a strong digital presence. They required a high-converting e-commerce site and a multi-channel marketing strategy to build brand awareness and drive initial sales from scratch.
                        </p>
                    </div>
                    <div className="mt-8">
                        <h3 className="text-2xl font-bold text-white mb-3">Our Solution</h3>
                        <p className="text-gray-400 leading-relaxed">
                            We developed a visually stunning, mobile-first Shopify e-commerce store optimized for conversions. The site highlighted the product's unique selling points through beautiful imagery and compelling copy. Simultaneously, we launched an integrated marketing campaign across Instagram and TikTok, using influencer partnerships and targeted ads to reach the ideal customer demographic. An email marketing funnel was set up to capture leads and nurture them into loyal customers, resulting in a highly successful launch that exceeded all initial KPIs.
                        </p>
                    </div>
                </div>
            </div>
        </section>
      </main>
    </div>
  );
};

export default CosmeticBrandLaunch;