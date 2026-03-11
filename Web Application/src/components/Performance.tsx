import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useState, useEffect } from 'react';

const AnimatedNumber = ({ target, isVisible }: { target: number; isVisible: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isVisible && count < target) {
      const increment = target / 50;
      const timer = setTimeout(() => {
        setCount(Math.min(count + increment, target));
      }, 20);
      return () => clearTimeout(timer);
    }
  }, [count, target, isVisible]);

  return <span>{Math.round(count)}</span>;
};

export const Performance = () => {
  const section = useScrollAnimation(0.3);

  const specs = [
    { label: 'Engine', value: '349', unit: 'cc', description: 'Single Cylinder' },
    { label: 'Power', value: '20', unit: 'bhp', description: '@ 6100 rpm' },
    { label: 'Torque', value: '27', unit: 'Nm', description: '@ 4000 rpm' },
    { label: 'Top Speed', value: '115', unit: 'km/h', description: 'Approximate' },
  ];

  return (
    <section id="performance" className="bg-gradient-to-b from-black via-gray-900 to-black text-white py-32 px-4">
      <div className="max-w-7xl mx-auto">
        <div ref={section.ref} className="text-center mb-20">
          <div
            className={`transition-all duration-1000 ${
              section.isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-8">
              Power Meets <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
                Precision
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto font-light">
              The heart that beats with refined power and unwavering reliability.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {specs.map((spec, index) => (
            <div
              key={spec.label}
              className={`text-center transition-all duration-1000 ${
                section.isVisible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-20 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 backdrop-blur-lg border border-gray-700 hover:border-amber-500 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/20">
                <p className="text-sm text-gray-400 mb-2">{spec.label}</p>
                <p className="text-5xl md:text-6xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
                  <AnimatedNumber target={parseInt(spec.value)} isVisible={section.isVisible} />
                  <span className="text-3xl">{spec.unit}</span>
                </p>
                <p className="text-xs text-gray-500">{spec.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`mt-20 transition-all duration-1000 delay-500 ${
            section.isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
          }`}
        >
          <img
            src="https://images.pexels.com/photos/1715195/pexels-photo-1715195.jpeg"
            alt="Engine Close-up"
            className="w-full max-w-4xl mx-auto rounded-3xl shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};
