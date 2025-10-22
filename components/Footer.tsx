
import React from 'react';
import { WebDevSVG, TwitterIcon, LinkedInIcon, GitHubIcon } from './ui/Icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <div className="flex items-center space-x-2 mb-4 md:mb-0">
          <WebDevSVG className="h-6 w-6 text-sky-400" />
          <span className="text-lg font-bold text-white">IRISHWEB.DEV</span>
        </div>
        <p className="text-gray-400 text-sm mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} IRISHWEB.DEV. All rights reserved.
        </p>
        {/* <div className="flex space-x-4">
          <a href="#" className="text-gray-400 hover:text-white transition-colors"><TwitterIcon className="h-6 w-6" /></a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors"><LinkedInIcon className="h-6 w-6" /></a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors"><GitHubIcon className="h-6 w-6" /></a>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
