import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { stores, cities } from '../data/mockData';
import { MapPin, Phone } from 'lucide-react';

export const Stores = () => {
  const [selectedCity, setSelectedCity] = useState('All Cities');
  const section = useScrollAnimation(0.2);

  const filteredStores =
    selectedCity === 'All Cities'
      ? stores
      : stores.filter((store) => store.city === selectedCity);

  return (
    <section id="stores" className="bg-gradient-to-b from-black via-gray-900 to-black text-white py-32 px-4">
      <div className="max-w-7xl mx-auto">
        <div ref={section.ref} className="text-center mb-20">
          <div
            className={`transition-all duration-1000 ${
              section.isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-8">
              Find Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">
                Nearest Store
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto font-light">
              Visit us to experience the Meteor 350 in person.
            </p>
          </div>
        </div>

        <div
          className={`flex flex-wrap gap-3 justify-center mb-12 transition-all duration-1000 delay-300 ${
            section.isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}
        >
          {cities.map((city) => (
            <button
              key={city}
              onClick={() => setSelectedCity(city)}
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                selectedCity === city
                  ? 'bg-white text-black scale-105'
                  : 'bg-gray-800 text-white hover:bg-gray-700 hover:scale-105'
              }`}
            >
              {city}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStores.map((store, index) => (
            <div
              key={store.id}
              className={`bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 backdrop-blur-lg border border-gray-700 hover:border-green-500 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/20 ${
                section.isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
              }`}
              style={{ transitionDelay: `${500 + index * 100}ms` }}
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="bg-green-500/20 p-3 rounded-full">
                  <MapPin className="w-5 h-5 text-green-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold mb-1">{store.name}</h3>
                  <p className="text-sm text-green-400">{store.city}</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm mb-4">{store.address}</p>
              <div className="flex items-center gap-2 text-gray-300">
                <Phone className="w-4 h-4" />
                <a href={`tel:${store.phone}`} className="text-sm hover:text-white transition-colors">
                  {store.phone}
                </a>
              </div>
            </div>
          ))}
        </div>

        {filteredStores.length === 0 && (
          <div className="text-center py-20">
            <p className="text-2xl text-gray-400">No stores found in this city.</p>
          </div>
        )}
      </div>
    </section>
  );
};
