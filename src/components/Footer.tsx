import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-800 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8 border-b border-gray-700">
          <div className="col-span-1 md:col-span-2">
            <img 
              src="https://i.imgur.com/0jdGc5J.png" 
              alt="Brooke Bros Construction" 
              className="h-40 w-auto mb-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
            />
            <p className="text-gray-400 mb-12 max-w-md">
              Transforming spaces with quality craftsmanship and attention to detail. 
              Specializing in basement finishing, accent walls, bathroom remodels, and custom projects.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-700 p-2 rounded-full text-gray-300 hover:text-amber-400 hover:bg-gray-600 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-gray-700 p-2 rounded-full text-gray-300 hover:text-amber-400 hover:bg-gray-600 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-gray-700 p-2 rounded-full text-gray-300 hover:text-amber-400 hover:bg-gray-600 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="bg-gray-700 p-2 rounded-full text-gray-300 hover:text-amber-400 hover:bg-gray-600 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-gray-400 hover:text-amber-400 transition-colors">Services</a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-amber-400 transition-colors">About Us</a>
              </li>
              <li>
                <a href="#gallery" className="text-gray-400 hover:text-amber-400 transition-colors">Projects</a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-400 hover:text-amber-400 transition-colors">Testimonials</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-amber-400 transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-gray-400 hover:text-amber-400 transition-colors">Basement Finishing</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-amber-400 transition-colors">Accent Walls</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-amber-400 transition-colors">Bathroom Remodeling</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-amber-400 transition-colors">Custom Projects</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Brooke Bros Construction. All rights reserved.
          </p>
          <button 
            onClick={scrollToTop}
            className="bg-amber-500 hover:bg-amber-400 text-gray-900 p-3 rounded-full transition-all shadow-md"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;