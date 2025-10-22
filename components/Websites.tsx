
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useScrollAnimation } from './ui/Card';

interface WebsiteItemProps {
  imageUrl: string;
  category: string;
  title: string;
  onClick: () => void;
}

const WebsiteItem: React.FC<WebsiteItemProps> = ({ imageUrl, category, title, onClick }) => (
  <button 
    onClick={onClick}
    className="group relative overflow-hidden rounded-lg shadow-lg w-full h-full text-left cursor-pointer block focus:outline-none focus:ring-4 focus:ring-sky-500/50 focus:ring-offset-2 focus:ring-offset-slate-900"
  >
    <img src={imageUrl} alt={title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 ease-in-out" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-all duration-300"></div>
    <div className="absolute inset-0 flex flex-col justify-end p-6">
       <div className="transform transition-transform duration-300 ease-in-out group-hover:-translate-y-2">
            <p className="text-sm text-sky-300 font-semibold">{category}</p>
            <h3 className="text-xl font-bold text-white mt-1">{title}</h3>
       </div>
    </div>
  </button>
);

const websitesData = [
  { id: 'elegant-john', imageUrl: '../assets/elegant-john.jpg', category: 'Website & Marketing', title: 'Elegant John Bathrooms' },
  { id: 'portfolio-site', imageUrl: 'https://images.unsplash.com/photo-1522199755839-a2bacb67c546?q=80&w=2072&auto=format&fit=crop', category: 'Creative Portfolio', title: 'Elena\'s Artistry' },
  { id: 'landing-page', imageUrl: 'https://images.unsplash.com/photo-1559028006-44d5a217208d?q=80&w=1935&auto=format&fit=crop', category: 'SaaS Landing Page', title: 'InnovateAI Platform' },
  { id: 'blog-site', imageUrl: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070&auto=format&fit=crop', category: 'Blog & Content Hub', title: 'Wanderlust Chronicles' },
  { id: 'non-profit', imageUrl: 'https://images.unsplash.com/photo-1617802690992-1587596e8748?q=80&w=2070&auto=format&fit=crop', category: 'Non-Profit', title: 'Green Earth Initiative' },
  { id: 'restaurant-site', imageUrl: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1974&auto=format&fit=crop', category: 'Restaurant', title: 'The Gilded Spoon' }
];

const Websites: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const navigate = useNavigate();

  const handleSelectWebsite = (websiteId: string) => {
    if (websiteId === 'elegant-john') {
      navigate(`/websites/${websiteId}`);
    } else {
      alert('Case study coming soon!');
    }
  };

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-slate-800 section-bordered">
      <div className="container mx-auto px-6">
        <div className={`text-left md:text-center mb-12 scroll-animate ${isVisible ? 'is-visible' : ''}`}>
          <h2 className="text-4xl font-bold text-white mb-4">Our Projects</h2>
          <p className="text-lg text-gray-400">A collection of websites we've proudly designed and developed.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {websitesData.map((item, index) => (
            <div key={item.id} className={`scroll-animate aspect-[4/3] ${isVisible ? 'is-visible' : ''}`} style={{ transitionDelay: `${index * 100}ms` }}>
                <WebsiteItem {...item} onClick={() => handleSelectWebsite(item.id)} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Websites;