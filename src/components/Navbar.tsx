import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-900 shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="#" className="flex-shrink-0">
              <img 
                src="https://i.imgur.com/0jdGc5J.png" 
                alt="Brooke Bros Construction" 
                className="h-20 w-auto drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
              />
            </a>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-300 hover:text-amber-400 transition-colors">
              Services
            </a>
            <a href="#about" className="text-gray-300 hover:text-amber-400 transition-colors">
              About
            </a>
            <a href="#gallery" className="text-gray-300 hover:text-amber-400 transition-colors">
              Projects
            </a>
            <a href="#testimonials" className="text-gray-300 hover:text-amber-400 transition-colors">
              Testimonials
            </a>
            <a href="#contact" className="bg-amber-500 text-gray-900 hover:bg-amber-400 px-4 py-2 rounded-md font-medium transition-colors">
              Contact Us
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a 
              href="#services" 
              className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </a>
            <a 
              href="#about" 
              className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#gallery" 
              className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </a>
            <a 
              href="#testimonials" 
              className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </a>
            <a 
              href="#contact" 
              className="block px-3 py-2 bg-amber-500 text-gray-900 hover:bg-amber-400 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;