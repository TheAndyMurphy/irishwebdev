
import React, { useRef, useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Websites from './components/Websites';
import Reviews from './components/Reviews';
import Pricing from './components/Pricing';
import Faq from './components/Faq';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ElegantJohn from './components/websites/ElegantJohn';
import WhoWeAre from './components/WhoWeAre';
import WhatWeDo from './components/WhatWeDo';
import '@fontsource/poppins/300.css';
import '@fontsource/poppins/700.css';

const App: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [deferredScroll, setDeferredScroll] = useState<React.RefObject<HTMLDivElement> | null>(null);

  const servicesRef = useRef<HTMLDivElement>(null);
  const portfolioRef = useRef<HTMLDivElement>(null);
  const pricingRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  // Scroll to top on page change
  const prevPathRef = useRef(location.pathname);
  useEffect(() => {
    if (prevPathRef.current !== location.pathname) {
      window.scrollTo(0, 0);
    }
    prevPathRef.current = location.pathname;
  }, [location.pathname]);

  const scrollTo = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  // Handle deferred scroll after navigating to the homepage
  useEffect(() => {
    if (deferredScroll && location.pathname === '/') {
      const timer = setTimeout(() => {
        scrollTo(deferredScroll);
        setDeferredScroll(null);
      }, 100); // Small delay for content to render
      return () => clearTimeout(timer);
    }
  }, [deferredScroll, location.pathname]);

  const handleNavClick = (ref: React.RefObject<HTMLDivElement>) => {
    if (location.pathname !== '/') {
      setDeferredScroll(ref);
      navigate('/');
    } else {
      scrollTo(ref);
    }
  };

  const MainPage = () => (
    <>
      <Hero onContactClick={() => handleNavClick(contactRef)} />
      <WhoWeAre onViewWorkClick={() => handleNavClick(portfolioRef)} />
      <WhatWeDo onLearnMoreClick={() => handleNavClick(servicesRef)} />
      <div>
        <Reviews />
      </div>
      <div ref={servicesRef}>
        <Services />
      </div>
      <div>
        <About />
      </div>
    
      <div>
        <Websites />
      </div>
      <div ref={pricingRef}>
        <Pricing onContactClick={() => handleNavClick(contactRef)} />
      </div>
      <div ref={faqRef}>
        <Faq />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
    </>
  );

  return (
    <div className="min-h-screen bg-slate-900">
      <Header
        onServicesClick={() => handleNavClick(servicesRef)}
        onPortfolioClick={() => handleNavClick(portfolioRef)}
        onPricingClick={() => handleNavClick(pricingRef)}
        onFaqClick={() => handleNavClick(faqRef)}
        onContactClick={() => handleNavClick(contactRef)}
      />
      <main>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/websites/elegant-john" element={<ElegantJohn />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;