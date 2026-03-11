import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { accessories } from '../data/mockData';
import { ShoppingCart } from 'lucide-react';

export const Accessories = () => {
  const section = useScrollAnimation(0.2);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...Array.from(new Set(accessories.map((a) => a.category)))];
  const filtered =
    selectedCategory === 'All'
      ? accessories
      : accessories.filter((a) => a.category === selectedCategory);

  return (
    <section id="accessories" className="bg-black text-white py-32 px-4">
      <div className="max-w-7xl mx-auto">
        <div ref={section.ref} className="text-center mb-16">
          <div
            className={`transition-all duration-1000 ${
              section.isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-8">
              Customize & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                Enhance
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-400 font-light max-w-3xl mx-auto">
              Premium accessories to personalize your Meteor 350.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-purple-400 to-pink-500 text-white shadow-lg shadow-purple-500/50'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((accessory, index) => (
            <div
              key={accessory.id}
              className={`group bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden border border-gray-700 hover:border-purple-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-purple-500/20 flex flex-col ${
                section.isVisible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-20 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <div className="relative h-40 overflow-hidden bg-black">
                <img
                  src={accessory.image}
                  alt={accessory.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-xs text-purple-400 font-semibold uppercase tracking-widest mb-2">
                    {accessory.category}
                  </p>
                  <h3 className="text-lg font-bold mb-2 line-clamp-2">{accessory.name}</h3>
                  <p className="text-gray-400 text-sm line-clamp-2">{accessory.description}</p>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-700 flex items-center justify-between">
                  <span className="text-xl font-bold text-purple-400">₹{accessory.price}</span>
                  <button className="p-2 rounded-full bg-purple-500/20 hover:bg-purple-500 transition-colors duration-300">
                    <ShoppingCart className="w-5 h-5 text-purple-400 group-hover:text-white" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
