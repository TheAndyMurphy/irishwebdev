
import React, { useState } from 'react';
import { useScrollAnimation } from './ui/Card';
import { PlusIcon, MinusIcon } from './ui/Icons';

const faqData = [
  {
    question: "What is the typical timeline for a new website project?",
    answer: "A typical website project takes between 6 to 12 weeks from start to finish. This includes discovery, design, development, testing, and launch. The exact timeline can vary depending on the project's complexity and the timeliness of feedback."
  },
  {
    question: "How much does a new website cost?",
    answer: "Our website packages start at €5,000. The final cost depends on various factors like the number of pages, custom features, e-commerce functionality, and CMS requirements. We provide a detailed quote after our initial consultation. Check out our pricing section for more details."
  },
  {
    question: "Do you offer ongoing support and maintenance?",
    answer: "Yes, we offer monthly retainers for ongoing support, maintenance, and updates. This ensures your website remains secure, fast, and up-to-date with the latest technologies. Our retainers start at €250/month."
  },
  {
    question: "What kind of results can I expect from your marketing services?",
    answer: "Our goal is to deliver a positive return on your investment. Results vary based on your industry and budget, but we focus on key metrics like increased traffic, higher conversion rates, and improved brand visibility. We provide regular, transparent reports to track progress."
  },
  {
    question: "How do we get started?",
    answer: "The first step is to get in touch with us via our contact form! We'll schedule a free discovery call to discuss your project goals, understand your needs, and determine if we're a good fit. From there, we'll create a detailed proposal for you."
  }
];

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-slate-700">
      <button
        className="w-full flex justify-between items-center text-left py-6 px-4 focus:outline-none focus:ring-2 focus:ring-sky-500/50 focus:ring-offset-2 focus:ring-offset-slate-900 rounded-lg"
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <h3 className="text-lg font-semibold text-white pr-4">{question}</h3>
        <span className="text-sky-400 flex-shrink-0">
          {isOpen ? <MinusIcon className="w-6 h-6" /> : <PlusIcon className="w-6 h-6" />}
        </span>
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
      >
        <div className="overflow-hidden">
          <p className="pt-4 pb-6 text-gray-300 pl-4 pr-10">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
};


const Faq: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-slate-900 section-bordered">
      <div className="container mx-auto px-6">
        <div className={`text-center mb-12 scroll-animate ${isVisible ? 'is-visible' : ''}`}>
          <h2 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-300">Can't find the answer you're looking for? Reach out to us.</p>
        </div>
        <div className="max-w-3xl mx-auto">
          {faqData.map((faq, index) => (
            <div key={index} className={`scroll-animate ${isVisible ? 'is-visible' : ''}`} style={{ transitionDelay: `${index * 100}ms` }}>
              <AccordionItem
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onClick={() => handleToggle(index)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;