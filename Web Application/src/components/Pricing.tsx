import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Check } from 'lucide-react';

export const Pricing = () => {
  const section = useScrollAnimation(0.2);

  const plans = [
    {
      name: 'Standard Meteor 350',
      price: '1,64,500',
      color: 'from-blue-400 to-blue-600',
      features: [
        'Single Cylinder 349cc Engine',
        '41mm Telescopic Forks',
        'Dual Channel ABS',
        '15L Fuel Tank',
        '5-Speed Manual Transmission',
        'Single Seat',
        'Basic Instrumentation',
      ],
      popular: false,
    },
    {
      name: 'Meteor 350 Supernova Edition',
      price: '1,78,500',
      color: 'from-purple-400 to-pink-600',
      features: [
        'All Standard Features',
        'Premium Leather Seat',
        'LED Headlight',
        'Chrome Mirrors',
        'Windscreen Included',
        'ABS on both wheels',
        'Digital Speedometer',
        '5-Year Extended Warranty',
      ],
      popular: true,
    },
    {
      name: 'Meteor 350 Cruiser Edition',
      price: '1,92,000',
      color: 'from-orange-400 to-red-600',
      features: [
        'All Supernova Features',
        'Custom Exhaust System',
        'Engine Guard',
        'Crash Bars',
        'Saddlebag Support',
        'Premium Customization Kit',
        'Dedicated Customer Support',
        'Free First Service',
      ],
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="bg-gradient-to-b from-black via-gray-900 to-black text-white py-32 px-4">
      <div className="max-w-7xl mx-auto">
        <div ref={section.ref} className="text-center mb-16">
          <div
            className={`transition-all duration-1000 ${
              section.isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-8">
              Simple & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">
                Transparent Pricing
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-400 font-light max-w-3xl mx-auto">
              Choose the perfect Meteor 350 variant for your lifestyle.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative group ${
                section.isVisible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-20 opacity-0'
              } transition-all duration-1000`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <span className="bg-gradient-to-r from-purple-400 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-bold">
                    Most Popular
                  </span>
                </div>
              )}

              <div
                className={`h-full bg-gradient-to-br ${plan.color} p-[1px] rounded-3xl ${
                  plan.popular ? 'ring-2 ring-offset-2 ring-offset-black ring-purple-400' : ''
                }`}
              >
                <div className="h-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 flex flex-col">
                  <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>

                  <div className="mb-8">
                    <p className="text-gray-400 text-sm mb-2">Starting at</p>
                    <p className="text-5xl font-bold">₹{plan.price}</p>
                    <p className="text-gray-400 text-sm mt-2">Excl. taxes & registration</p>
                  </div>

                  <button
                    className={`w-full py-4 rounded-xl font-bold text-lg mb-8 transition-all duration-300 hover:scale-105 bg-gradient-to-r ${plan.color} text-white hover:shadow-2xl`}
                  >
                    {plan.popular ? 'Book Now' : 'Explore'}
                  </button>

                  <div className="space-y-4 flex-1">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-3xl p-12 border border-gray-700">
          <h3 className="text-3xl font-bold mb-8 text-center">Financing Options Available</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <p className="text-4xl font-bold text-emerald-400 mb-2">0%</p>
              <p className="text-gray-400">EMI for 12 Months</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-cyan-400 mb-2">From 5.9%</p>
              <p className="text-gray-400">Interest for Extended Terms</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-blue-400 mb-2">90%</p>
              <p className="text-gray-400">Maximum Finance Available</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
