import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { faqs } from '../data/mockData';
import { ChevronDown } from 'lucide-react';

export const FAQ = () => {
  const section = useScrollAnimation(0.2);
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...Array.from(new Set(faqs.map((f) => f.category)))];
  const filtered = selectedCategory === 'All' ? faqs : faqs.filter((f) => f.category === selectedCategory);

  return (
    <section id="faq" className="bg-black text-white py-32 px-4">
      <div className="max-w-4xl mx-auto">
        <div ref={section.ref} className="text-center mb-16">
          <div
            className={`transition-all duration-1000 ${
              section.isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-8">
              Frequently <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Asked Questions
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-400 font-light">
              Find answers to common questions about the Meteor 350.
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
                  ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-black shadow-lg shadow-cyan-500/50'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="space-y-4">
          {filtered.map((faq, index) => (
            <div
              key={faq.id}
              className={`bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl border border-gray-700 overflow-hidden transition-all duration-500 hover:border-cyan-500/50 ${
                section.isVisible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-20 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <button
                onClick={() => setExpandedId(expandedId === faq.id ? null : faq.id)}
                className="w-full p-6 flex items-center justify-between hover:bg-gray-800/50 transition-colors duration-300"
              >
                <div className="text-left flex-1">
                  <p className="text-xs text-cyan-400 font-semibold uppercase tracking-widest mb-2">
                    {faq.category}
                  </p>
                  <h3 className="text-lg font-bold">{faq.question}</h3>
                </div>
                <ChevronDown
                  className={`w-6 h-6 text-cyan-400 transition-transform duration-300 flex-shrink-0 ml-4 ${
                    expandedId === faq.id ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {expandedId === faq.id && (
                <div className="px-6 pb-6 border-t border-gray-700 animate-in fade-in slide-in-from-top-2 duration-300">
                  <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
