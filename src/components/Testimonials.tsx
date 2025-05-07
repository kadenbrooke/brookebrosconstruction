import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Homeowner',
    quote: 'Brooke Bros Construction transformed our basement into an amazing entertainment space. Their attention to detail and quality craftsmanship exceeded our expectations. Highly recommended!',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg'
  },
  {
    id: 2,
    name: 'Michael Peterson',
    role: 'Business Owner',
    quote: 'The team at Brooke Bros did an outstanding job creating a feature wall for our office. They were professional, on time, and the finished product looks incredible. Will definitely work with them again.',
    image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg'
  },
  {
    id: 3,
    name: 'Lisa Martinez',
    role: 'Homeowner',
    quote: 'After my mother had mobility issues, Brooke Bros remodeled her bathroom to make it fully accessible. They were compassionate, understanding of our needs, and delivered a beautiful, functional space.',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg'
  }
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-24 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What Our Clients Say</h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Large Quote Icon */}
          <div className="absolute -top-10 left-0 text-gray-700 opacity-20">
            <Quote size={80} />
          </div>
          
          <div className="bg-gray-900 rounded-xl shadow-xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-32 h-32 rounded-full overflow-hidden flex-shrink-0 border-4 border-amber-500">
                <img 
                  src={testimonials[currentIndex].image} 
                  alt={testimonials[currentIndex].name} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="flex-1">
                <p className="text-gray-300 text-lg italic mb-6">"{testimonials[currentIndex].quote}"</p>
                <div>
                  <p className="text-white font-bold text-xl">{testimonials[currentIndex].name}</p>
                  <p className="text-amber-400">{testimonials[currentIndex].role}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-8 gap-4">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-gray-700 hover:bg-amber-500 text-white transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  currentIndex === index ? 'bg-amber-500 w-8' : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-gray-700 hover:bg-amber-500 text-white transition-colors"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;