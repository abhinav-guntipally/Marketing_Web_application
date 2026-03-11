import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { variants } from '../data/mockData';

export const Variants = () => {
  const [selectedVariant, setSelectedVariant] = useState(variants[0]);
  const section = useScrollAnimation(0.2);

  return (
    <section className="bg-gradient-to-b from-black via-gray-900 to-black text-white py-32 px-4">
      <div className="max-w-7xl mx-auto">
        <div ref={section.ref} className="text-center mb-20">
          <div
            className={`transition-all duration-1000 ${
              section.isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-8">
              Choose Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                Character
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto font-light">
              Three distinct personalities. One legendary machine.
            </p>
          </div>
        </div>

        <div
          className={`mb-12 transition-all duration-1000 delay-300 ${
            section.isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
          }`}
        >
          <img
            src={selectedVariant.image}
            alt={selectedVariant.name}
            className="w-full max-w-5xl mx-auto rounded-3xl shadow-2xl transition-all duration-700"
            style={{ boxShadow: `0 20px 60px ${selectedVariant.accent}40` }}
          />
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {variants.map((variant, index) => (
            <button
              key={variant.id}
              onClick={() => setSelectedVariant(variant)}
              className={`group p-6 rounded-2xl transition-all duration-500 ${
                selectedVariant.id === variant.id
                  ? 'bg-white text-black scale-105'
                  : 'bg-gray-800 text-white hover:bg-gray-700 hover:scale-105'
              } ${
                section.isVisible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-20 opacity-0'
              }`}
              style={{ transitionDelay: `${500 + index * 100}ms` }}
            >
              <div
                className="w-12 h-12 rounded-full mb-4 mx-auto transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundColor: variant.accent }}
              />
              <h3 className="text-2xl font-bold mb-2">{variant.name}</h3>
              <p
                className={`text-sm ${
                  selectedVariant.id === variant.id ? 'text-gray-600' : 'text-gray-400'
                }`}
              >
                {variant.color}
              </p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
