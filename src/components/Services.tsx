import React from 'react';
import { Home, Layers, ShowerHead as Shower, PenTool as Tool } from 'lucide-react';

const serviceItems = [
  {
    icon: <Home size={36} />,
    title: 'Basement Finishing',
    description: 'Transform your unused basement into a functional, beautiful living space. From entertainment rooms to extra bedrooms, we create the perfect basement for your needs.',
    image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg'
  },
  {
    icon: <Layers size={36} />,
    title: 'Accent Walls',
    description: 'Add character and style to any room with our custom accent walls. From shiplap to stone, we design and build accent walls that become the focal point of your space.',
    image: 'https://images.pexels.com/photos/6480707/pexels-photo-6480707.jpeg'
  },
  {
    icon: <Shower size={36} />,
    title: 'Bathroom Remodeling',
    description: 'Upgrade your bathroom with accessible features and modern designs. We specialize in creating beautiful, functional bathrooms for all mobility needs.',
    image: 'https://images.pexels.com/photos/6585757/pexels-photo-6585757.jpeg'
  },
  {
    icon: <Tool size={36} />,
    title: 'Custom Projects',
    description: 'Have a unique construction project in mind? Our skilled team can bring your vision to life with quality craftsmanship and attention to detail.',
    image: 'https://images.pexels.com/photos/4513940/pexels-photo-4513940.jpeg'
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Services</h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
          <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
            We specialize in transforming your home with quality craftsmanship and attention to detail.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {serviceItems.map((service, index) => (
            <div 
              key={index} 
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform hover:translate-y-[-8px]"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="text-amber-400 mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="#contact" 
            className="inline-block bg-amber-500 hover:bg-amber-400 text-gray-900 font-bold py-3 px-8 rounded-lg transition-all shadow-lg"
          >
            Request a Consultation
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;