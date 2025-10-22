
import React from 'react';
import { useScrollAnimation } from './ui/Card';
import { CheckIcon, SparklesIcon } from './ui/Icons';

interface PricingCardProps {
  plan: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  onContactClick: () => void;
  delay: number;
  isVisible: boolean;
  timeline?: string;
  timelineNote?: string;
}

const PricingCard: React.FC<PricingCardProps> = ({ plan, price, description, features, isPopular, onContactClick, delay, isVisible, timeline, timelineNote }) => (
  <div 
    className={`bg-slate-800 p-8 rounded-lg shadow-lg h-full flex flex-col transition-all duration-300 scroll-animate ${isVisible ? 'is-visible' : ''} ${isPopular ? 'border-2 border-sky-500 transform lg:scale-105' : 'border-2 border-transparent'}`}
    style={{ transitionDelay: `${delay}ms` }}
  >
    {isPopular && (
      <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2">
          <span className="bg-sky-500 text-white text-xs font-bold px-3 py-1 rounded-lg uppercase whitespace-nowrap">Most Popular</span>
      </div>
    )}
    <h3 className="text-2xl font-bold text-white mb-2">{plan}</h3>
    <p className="text-gray-400 mb-6">{description}</p>
    <p className="text-4xl font-extrabold text-white mb-6">{price}</p>
    <ul className="space-y-4 text-gray-300 mb-8 flex-grow">
      {features.map((feature, index) => (
        <li key={index} className="flex items-start">
          <CheckIcon className="h-6 w-6 text-green-400 mr-3 flex-shrink-0" />
          <span>{feature}</span>
        </li>
      ))}
    </ul>
    {timeline && (
      <div className="mb-6 text-center">
          <p className="font-semibold text-sky-300">{timeline}</p>
          {timelineNote && <p className="text-xs text-gray-500 mt-2 italic">{timelineNote}</p>}
      </div>
    )}
    <button
      onClick={onContactClick}
      className={`${isPopular ? 'bg-sky-500 hover:bg-sky-600' : 'bg-slate-700 hover:bg-slate-600'} text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 w-full`}
    >
      Get Started
    </button>
  </div>
);

const marketingPackages = [
    {
        plan: "Starter",
        price: "€2500+/mo",
        description: "Small budget: Ideal for new businesses looking to establish a digital footprint.",
        features: ["Google Ads PPC Campaigns", "Limited Social Media Management", "Meta Ads", "Basic Analytics & Optimisations", "Local SEO Optimisation"],
    },
    {
        plan: "Growth",
        price: "€5000+/mo",
        description: "Medium Budget: For growing businesses aiming to expand their reach and engagement.",
        features: ["Print Materials: Logos, Flyers, Banners, Business Cards", "Google Ads PPC Campaigns", "Social Media Management & Email Marketing", "Subscription Forms", "Detailed Analytics & Optimisations", "Local SEO & GEO Optimisation", "Web Authoring & Content Optimisation"],
        isPopular: true,
    },
    {
        plan: "Scale",
        price: "€10,000+/mo",
        description: "Large Budget: Comprehensive solution for established brands seeking market leadership.",
        features: ["Print Materials: Full Suite","Google Ads PPC campaigns",  "Social Media Management & Email Marketing", "Subscription Forms & Management", "Detailed Analytics & Optimisations","Complete SEO & GEO Review with Optimisation",  "Web Authoring & Website Updates (Sites built by irishweb.dev)", "Content Creation (With Photography/Videography x 2 Projects)",],
    },
];

const webDevPackages = [
    {
        plan: "Standard Website",
        price: "€5000+",
        description: "Bespoke design, tailored to your company.",
        features: ["Bespoke Design", "Image Galleries", "Projects & Services Pages", "Contact & Enquiry Forms", "Max 10 Custom Pages"],
        timeline: "Est. Timeline: 4-8 Weeks",
        timelineNote: "(delays with client feedback and reviews will increase this timeline)",
    },
    {
        plan: "Customisable Website",
        price: "€10,000+",
        description: "Everything in Standard plus a bespoke, easy-to-use CMS.",
        features: ["Everything in Standard", "Bespoke CMS with your branding", "Tailored editable content", "GDPR Compliant Analytics Setup"],
        isPopular: true,
        timeline: "Est. Timeline: 8-12 Weeks",
        timelineNote: "(delays with client feedback and reviews will increase this timeline)",
    },
    {
        plan: "Premium Website",
        price: "€20,000+",
        description: "Customisable online stores or event platforms with advanced analytics, ready for business.",
        features: ["Everything in Customisable", "Full E-Commerce Setup (Optional)", "Booking System (Optional)", "Live Event Hosting (Optional - Incurs additional cost per event)", "Payment Gateway Integration", "Product / Event Management System"],
        timeline: "Est. Timeline: 12+ Weeks",
        timelineNote: "(delays with client feedback and reviews will increase this timeline)",
    },
];

interface PricingProps {
  onContactClick: () => void;
}

const Pricing: React.FC<PricingProps> = ({ onContactClick }) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-slate-900 section-bordered">
      <div className="container mx-auto px-10">
        <div className={`max-w-4xl mx-auto text-left md:text-center mb-20 scroll-animate ${isVisible ? 'is-visible' : ''}`}>
          <h2 className="text-4xl font-bold text-white mb-4">How Much Will It Cost Me?</h2>
          <p className="text-lg text-gray-400">Ah yes, FAQ number 1 and the answer is always going to be it depends. Some results are tangible, a new website, a brochure, a logo or a promotional video. With marketing you have to think of it as an investment, the money you put in directly correlates with the reward you'll to get out of it. <br/><br/><span className="text-sky-300">Our job is to mitigate the risk and maximise your profit.</span></p>
        </div>

        {/* Marketing Packages */}
        <div className="mb-32">
            <h3 className={`text-3xl font-bold text-left md:text-center text-white mb-2 scroll-animate ${isVisible ? 'is-visible' : ''}`} style={{ transitionDelay: '100ms' }}>Marketing Packages</h3>
          <p className="mx-auto max-w-5xl text-left md:text-center text-lg  mb-16 text-gray-400"><span className=" text-sm text-sky-300">Prices below exclude your monthly advertising cost which is entirely at your discretion.</span></p>
           
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 max-w-6xl mx-auto items-stretch">
            {marketingPackages.map((pkg, index) => (
                <div key={index} className="relative">
                    <PricingCard {...pkg} onContactClick={onContactClick} delay={200 + index * 100} isVisible={isVisible} />
                </div>
            ))}
            </div>
        </div>

        {/* Web Development Packages */}
        <div className="mb-12">
            <h3 className={`text-3xl font-bold text-left md:text-center text-white mb-4 scroll-animate ${isVisible ? 'is-visible' : ''}`} style={{ transitionDelay: '500ms' }}>Web Development Packages</h3>
          <p className="mx-auto max-w-5xl text-left md:text-center text-lg  mb-16 text-gray-400"><span className=" text-sm text-sky-300">Prices below give you an estimate based on your requirements. Each package can be tailored to your needs.</span></p>
           
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 max-w-6xl mx-auto items-stretch">
            {webDevPackages.map((pkg, index) => (
                <div key={index} className="relative">
                    <PricingCard {...pkg} onContactClick={onContactClick} delay={600 + index * 100} isVisible={isVisible} />
                </div>
            ))}
            </div>
        </div>

        {/* Bespoke Package Section */}
        <div className="mt-20">
            <div className={`relative max-w-4xl mx-auto bg-slate-800 rounded-lg shadow-lg p-8 md:p-12 text-center overflow-hidden scroll-animate ${isVisible ? 'is-visible' : ''}`} style={{ transitionDelay: '900ms' }}>
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-sky-500/20 rounded-lg filter blur-3xl"></div>
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-teal-500/20 rounded-lg filter blur-3xl"></div>
                <div className="relative z-10">
                    <SparklesIcon className="w-12 h-12 mx-auto text-sky-400 mb-4" />
                    <h3 className="text-3xl font-bold text-white mb-2">Bespoke</h3>
                    <p className="text-gray-300 max-w-2xl mx-auto mb-8">
                        If you need a bit of everything, or would like to tailor a package to your specific needs you can request a custom quote.
                    </p>
                    <button
                        onClick={onContactClick}
                        className="bg-sky-500 hover:bg-sky-600 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 text-lg shadow-lg shadow-sky-500/30"
                    >
                        Request a Quote
                    </button>
                </div>
            </div>
        </div>

        {/* Footnote */}
        <div className={`text-center mt-16 scroll-animate ${isVisible ? 'is-visible' : ''}`} style={{ transitionDelay: '1000ms' }}>
          <p className="text-sm text-gray-400 max-w-4xl mx-auto">
            Monthly retainers start at €250/month for essential maintenance and upgrades with a report of work completed. Analytics and reporting start at €500/month. If no contract is drawn up for monthly retainers, any updates and maintenance required will be charged at a daily rate which is subject to change.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;