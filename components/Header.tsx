import React, { useState, useEffect } from "react";
import { WebDevSVG, AnimatedMenuIcon } from "./ui/Icons";
import { useNavigate } from "react-router-dom";



const Header: React.FC = ({

}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMobileMenuOpen]);

  const handleMobileLinkClick = (scrollFunc: () => void) => {
    scrollFunc();
    setIsMobileMenuOpen(false);
  };

  const NavLink: React.FC<{
    onClick?: () => void;
    link: string;
    children: React.ReactNode;
  }> = ({ onClick, children, link }) => (
    <a
      onClick={onClick}
      href={link}
      className="relative group cursor-pointer text-gray-300 hover:text-white transition-colors duration-300 py-2 font-bold"
    >
      <span className="relative z-10">{children}</span>
      <span className="absolute bottom-0 left-0 w-full h-[2px] bg-sky-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-center"></span>
    </a>
  );

  const MobileNavLink: React.FC<{
    onClick?: () => void;
    link:string;
    children: React.ReactNode;
  }> = ({ onClick, children, link }) => (
    <a
      href={link}
      onClick={()=>setIsMobileMenuOpen(false)}
      className="relative group text-4xl font-bold text-white hover:text-sky-400 transition-colors pb-2"
    >
      <span className="relative z-10">{children}</span>
      <span className="absolute bottom-0 left-0 w-full h-[2px] bg-sky-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-center"></span>
    </a>
  );

  return (
    <header
      className={`fixed w-full top-0 z-40 md:py-2 transition-all duration-300 border-b border-sky-500 bg-slate-900/80 ${
        isScrolled
          ? "backdrop-blur-lg shadow-[0_4px_30px_rgba(99,102,241,0.2)]"
          : ""
      }`}
    >
      <nav className="container mx-auto px-6 h-[4.5rem] flex justify-between items-center">
        <button
          className="flex text-2xl font-bold gap-1 items-center space-x-2 cursor-pointer text-white"
          onClick={() => {
            navigate("/");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        ><WebDevSVG className="h-6 w-6 text-sky-400" />
          <div>IRISHWEB<span className="text-sky-300">.DEV</span></div>
        </button>

        <div className="hidden md:flex items-center space-x-8">
          <NavLink link="#services">Services</NavLink>
          <NavLink link="#portfolio">Portfolio</NavLink>
          <NavLink link="#pricing">Pricing</NavLink>
          <NavLink link="#faqs">FAQs</NavLink>
          <a
            href="#contact"
            className="cursor-pointer bg-sky-500 hover:bg-sky-600 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            Get Started
          </a>
        </div>

        <div className="md:hidden">
          <AnimatedMenuIcon
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </div>
      </nav>

      {/* Mobile Menu Panel */}
      <div
        className={`
        absolute left-0 w-full md:hidden bg-gradient-to-br from-slate-900 via-slate-900 to-sky-900 
        transition-all duration-500 ease-in-out overflow-hidden
        ${
          isMobileMenuOpen
            ? "max-h-[100vh] border-t border-slate-700/50"
            : "max-h-0"
        }
      `}
      >
        <nav
          className="flex flex-col items-center justify-center space-y-10 w-full"
          style={{ height: "calc(100vh - 4.5rem)" }}
        >
          <MobileNavLink link="#services">Services</MobileNavLink>
          <MobileNavLink link="#portfolio">Portfolio</MobileNavLink>
          <MobileNavLink link="#pricing">Pricing</MobileNavLink>
          <MobileNavLink link="#faqs">FAQs</MobileNavLink>
          <a
            href="#contact"
            className="mt-4 text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-blue-500 hover:opacity-80 transition-opacity"
          >
            Contact Us
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
