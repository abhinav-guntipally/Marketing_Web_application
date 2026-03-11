import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Check, X } from 'lucide-react';

export const ComparisonSection = () => {
  const section = useScrollAnimation(0.2);

  const comparisonData = [
    {
      feature: 'Engine Displacement',
      meteor: '349cc',
      competitor1: '411cc',
      competitor2: '296cc',
    },
    {
      feature: 'Power Output',
      meteor: '20.3 bhp',
      competitor1: '24 bhp',
      competitor2: '18 bhp',
    },
    {
      feature: 'Torque',
      meteor: '27 Nm',
      competitor1: '29 Nm',
      competitor2: '23 Nm',
    },
    {
      feature: 'Fuel Efficiency',
      meteor: '45-55 km/l',
      competitor1: '35-40 km/l',
      competitor2: '40-45 km/l',
    },
    {
      feature: 'Seat Height',
      meteor: '790mm',
      competitor1: '810mm',
      competitor2: '770mm',
    },
    {
      feature: 'Weight',
      meteor: '202kg',
      competitor1: '215kg',
      competitor2: '185kg',
    },
    {
      feature: 'ABS (Dual Channel)',
      meteor: true,
      competitor1: true,
      competitor2: false,
    },
    {
      feature: '5-Year Warranty Available',
      meteor: true,
      competitor1: false,
      competitor2: false,
    },
  ];

  return (
    <section className="bg-black text-white py-32 px-4">
      <div className="max-w-7xl mx-auto">
        <div ref={section.ref} className="text-center mb-16">
          <div
            className={`transition-all duration-1000 ${
              section.isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-8">
              How We <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-green-500">
                Compare
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-400 font-light max-w-3xl mx-auto">
              See why the Meteor 350 stands out in its class.
            </p>
          </div>
        </div>

        <div className="overflow-x-auto">
          <div className="min-w-max inline-block w-full">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-700">
                  <th className="text-left py-4 px-6 font-bold text-lg sticky left-0 bg-black z-10 w-48">
                    Feature
                  </th>
                  <th className="py-4 px-6 text-center">
                    <div className="flex flex-col items-center">
                      <p className="text-lg font-bold text-teal-400">Meteor 350</p>
                      <p className="text-xs text-gray-400 mt-1">Royal Enfield</p>
                    </div>
                  </th>
                  <th className="py-4 px-6 text-center">
                    <div className="flex flex-col items-center">
                      <p className="text-lg font-bold text-gray-400">Competitor A</p>
                      <p className="text-xs text-gray-500 mt-1">Premium Brand</p>
                    </div>
                  </th>
                  <th className="py-4 px-6 text-center">
                    <div className="flex flex-col items-center">
                      <p className="text-lg font-bold text-gray-400">Competitor B</p>
                      <p className="text-xs text-gray-500 mt-1">Budget Brand</p>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr
                    key={row.feature}
                    className={`border-b border-gray-800 hover:bg-gray-900/50 transition-colors duration-300 ${
                      section.isVisible
                        ? 'opacity-100'
                        : 'opacity-0'
                    }`}
                    style={{ transitionDelay: `${index * 50}ms` }}
                  >
                    <td className="py-4 px-6 font-semibold sticky left-0 bg-black z-10 w-48">
                      {row.feature}
                    </td>
                    <td className="py-4 px-6 text-center">
                      {typeof row.meteor === 'boolean' ? (
                        row.meteor ? (
                          <Check className="w-6 h-6 text-green-400 mx-auto" />
                        ) : (
                          <X className="w-6 h-6 text-gray-600 mx-auto" />
                        )
                      ) : (
                        <p className="text-teal-400 font-bold">{row.meteor}</p>
                      )}
                    </td>
                    <td className="py-4 px-6 text-center">
                      {typeof row.competitor1 === 'boolean' ? (
                        row.competitor1 ? (
                          <Check className="w-6 h-6 text-green-400 mx-auto" />
                        ) : (
                          <X className="w-6 h-6 text-gray-600 mx-auto" />
                        )
                      ) : (
                        <p className="text-gray-400">{row.competitor1}</p>
                      )}
                    </td>
                    <td className="py-4 px-6 text-center">
                      {typeof row.competitor2 === 'boolean' ? (
                        row.competitor2 ? (
                          <Check className="w-6 h-6 text-green-400 mx-auto" />
                        ) : (
                          <X className="w-6 h-6 text-gray-600 mx-auto" />
                        )
                      ) : (
                        <p className="text-gray-400">{row.competitor2}</p>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
