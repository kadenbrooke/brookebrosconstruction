import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToServices = () => {
    const element = document.getElementById('services');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen flex items-end overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 via-gray-900/80 to-gray-900/95"></div>
        <div className="absolute inset-0 bg-[url('https://i.imgur.com/FhZOaFY.jpg')] bg-cover bg-center"></div>
      </div>
      
      <div className="relative z-10 w-full py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white leading-tight animate-fade-in drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
            Transform Your Space with{' '}
            <span className="text-amber-400">Brooke Bros Construction</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">
            Specializing in basement finishing, accent walls, bathroom remodels, and custom construction projects.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="#contact" 
              className="bg-amber-500 hover:bg-amber-400 text-gray-900 font-bold py-3 px-8 rounded-lg transition-all transform hover:scale-105 shadow-lg"
            >
              Get a Free Quote
            </a>
            <a 
              href="#gallery" 
              className="bg-transparent hover:bg-gray-800 text-white border-2 border-white py-3 px-8 rounded-lg transition-all"
            >
              View Our Work
            </a>
          </div>
        </div>
      </div>
      
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer z-10"
        onClick={scrollToServices}
      >
        <ChevronDown size={32} className="text-amber-400 drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]" />
      </div>
    </div>
  );
};

export default Hero;