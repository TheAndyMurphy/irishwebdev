
import React from 'react';
import Card, { useScrollAnimation } from './ui/Card';
import { SEOSVG, StrategyIcon, DigitalMarketingSVG, ContentCreationSVG, PhotographyVideographySVG, PPCSVG, AnalyticsSVG, WebDevSVG, MotionGraphicsSVG } from './ui/Icons';

const servicesData = [
  {
    icon: <SEOSVG className="h-10 w-10 mb-4 text-sky-400" />,
    title: 'SEO Optimization',
    description: 'Boost your visibility on search engines and attract organic traffic with our proven SEO strategies.'
  },
  {
    icon: <DigitalMarketingSVG className="h-10 w-10 mb-4 text-sky-400" />,
    title: 'Digital Marketing',
    description: 'Leverage data-driven strategies across all digital channels to reach your target audience and drive growth.'
  },
  {
    icon: <ContentCreationSVG className="h-10 w-10 mb-4 text-sky-400" />,
    title: 'Content Creation',
    description: 'From compelling blog posts to stunning visuals, we create content that converts and captivates.'
  },
  {
    icon: <PhotographyVideographySVG className="h-10 w-10 mb-4 text-sky-400" />,
    title: 'Photography and Videography',
    description: 'Capture your brand\'s essence with professional photography and compelling video content that tells your story.'
  },
  {
    icon: <PPCSVG className="h-10 w-10 mb-4 text-sky-400" />,
    title: 'PPC Campaigns',
    description: 'Get immediate, targeted traffic and maximize your ROI with our expert pay-per-click management.'
  },
  {
    icon: <AnalyticsSVG className="h-10 w-10 mb-4 text-sky-400" />,
    title: 'Data & Analytics',
    description: 'Make informed decisions with our in-depth analytics, tracking, and reporting services.'
  },
  {
    icon: <WebDevSVG className="h-10 w-10 mb-4 text-sky-400" />,
    title: 'Web Design & Development',
    description: 'We build beautiful, responsive, and high-performing websites that drive conversions and reflect your brand.'
  },
  {
    icon: <StrategyIcon className="h-10 w-10 mb-4 text-sky-400" />,
    title: 'Brand Strategy',
    description: 'Strategic planning and positioning of your brand in the market to ensure long-term growth and recognition.'
  }
];

const Services: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-slate-900 section-bordered">
      <div className="container mx-auto px-6">
        <div className={`text-left md:text-center mb-12 scroll-animate ${isVisible ? 'is-visible' : ''}`}>
          <h2 className="text-4xl font-bold text-white mb-4">Our Core Services</h2>
          <p className="text-lg text-gray-400">We can provide the tools and services to help your business grow.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesData.map((service, index) => (
            <div key={index} className={`scroll-animate ${isVisible ? 'is-visible' : ''}`} style={{ transitionDelay: `${index * 100}ms` }}>
              <Card>
                {service.icon}
                <h3 className="text-xl font-bold mb-2 text-white">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;