import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { specifications } from '../data/mockData';

export const Specifications = () => {
  const section = useScrollAnimation(0.2);
  const [selectedCategory, setSelectedCategory] = useState('Engine');

  const categories = Array.from(new Set(specifications.map((s) => s.category)));
  const filtered = specifications.filter((s) => s.category === selectedCategory);

  return (
    <section id="specs" className="bg-black text-white py-32 px-4">
      <div className="max-w-7xl mx-auto">
        <div ref={section.ref} className="text-center mb-16">
          <div
            className={`transition-all duration-1000 ${
              section.isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-8">
              Technical <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                Specifications
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-400 font-light max-w-3xl mx-auto">
              Engineered for power, efficiency, and timeless appeal.
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
                  ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-black shadow-lg shadow-orange-500/50'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {filtered.map((spec, index) => (
            <div
              key={spec.label}
              className={`bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700 hover:border-orange-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/20 ${
                section.isVisible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-20 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <p className="text-gray-400 text-sm font-medium mb-2">{spec.label}</p>
              <p className="text-2xl font-bold text-white">{spec.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
