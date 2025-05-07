import React, { useState } from 'react';

const categories = [
  'All',
  'Basements',
  'Accent Walls',
  'Bathrooms',
  'Custom'
];

const projects = [
  {
    id: 1,
    title: 'Modern Basement Conversion',
    category: 'Basements',
    image: 'https://i.imgur.com/lmI0WLp.jpg'
  },
  {
    id: 2,
    title: 'Wood Accent Wall',
    category: 'Accent Walls',
    image: 'https://i.imgur.com/XHaIe46.jpg'
  },
  {
    id: 3,
    title: 'Accessible Bathroom Remodel',
    category: 'Bathrooms',
    image: 'https://images.pexels.com/photos/1454804/pexels-photo-1454804.jpeg'
  },
  {
    id: 4,
    title: 'Custom Outdoor Deck',
    category: 'Custom',
    image: 'https://placehold.co/600x400/1f2937/fcd34d?text=Image+Coming+Soon'
  },
  {
    id: 5,
    title: 'Entertainment Basement',
    category: 'Basements',
    image: 'https://placehold.co/600x400/1f2937/fcd34d?text=Image+Coming+Soon'
  },
  {
    id: 6,
    title: 'Stone Accent Wall',
    category: 'Accent Walls',
    image: 'https://images.pexels.com/photos/1571470/pexels-photo-1571470.jpeg'
  },
  {
    id: 7,
    title: 'Luxury Bathroom',
    category: 'Bathrooms',
    image: 'https://images.pexels.com/photos/6585758/pexels-photo-6585758.jpeg'
  },
  {
    id: 8,
    title: 'Custom Built-ins',
    category: 'Custom',
    image: 'https://images.pexels.com/photos/3932930/pexels-photo-3932930.jpeg'
  },
  {
    id: 9,
    title: 'Modern Master Bath',
    category: 'Bathrooms',
    image: 'https://i.imgur.com/6tgN4uF.jpg'
  }
];

const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="gallery" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Projects</h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
          <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
            Browse through our portfolio of completed projects and see the quality of our work.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full transition-all ${
                activeCategory === category
                  ? 'bg-amber-500 text-gray-900 font-semibold'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProjects.map(project => (
            <div 
              key={project.id} 
              className="group relative overflow-hidden rounded-lg shadow-lg bg-gray-800"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white text-lg font-bold">{project.title}</h3>
                  <p className="text-amber-400 text-sm">{project.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="#contact" 
            className="inline-block bg-amber-500 hover:bg-amber-400 text-gray-900 font-bold py-3 px-8 rounded-lg transition-all shadow-lg"
          >
            Start Your Project Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;