import React from 'react';
import { CheckCircle } from 'lucide-react';

const AboutUs: React.FC = () => {
  const qualities = [
    "Licensed and insured professionals",
    "Over 20 years of construction experience",
    "Quality craftsmanship guaranteed",
    "On-time and on-budget completion",
    "Clean and respectful work environments",
    "Free consultations and estimates"
  ];

  return (
    <section id="about" className="py-24 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About Brooke Bros Construction</h2>
            <div className="w-24 h-1 bg-amber-500 mb-6"></div>
            
            <p className="text-gray-300 mb-6">
              Founded with a passion for quality craftsmanship, Brooke Bros Construction has been transforming homes and commercial spaces with exceptional construction services for over 20 years. Our team of skilled professionals takes pride in delivering projects that exceed expectations.
            </p>
            
            <p className="text-gray-300 mb-8">
              Whether you're looking to finish your basement, create a stunning accent wall, remodel your bathroom for better accessibility, or tackle a custom project, we bring expertise, reliability, and attention to detail to every job we undertake.
            </p>
            
            <ul className="space-y-3 mb-8">
              {qualities.map((quality, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="text-amber-400 mr-3 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-300">{quality}</span>
                </li>
              ))}
            </ul>
            
            <a 
              href="#contact" 
              className="inline-block bg-amber-500 hover:bg-amber-400 text-gray-900 font-bold py-3 px-8 rounded-lg transition-all shadow-lg"
            >
              Get in Touch
            </a>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            <div className="relative h-80 md:h-96 lg:h-[500px] rounded-lg overflow-hidden shadow-2xl">
              <img 
                src="https://i.imgur.com/FhZOaFY.jpg" 
                alt="Brooke Bros Team" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-amber-500 text-gray-900 rounded-lg p-6 shadow-xl hidden md:block">
              <p className="text-2xl font-bold">20+</p>
              <p className="text-sm uppercase font-semibold">Years of Excellence</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;