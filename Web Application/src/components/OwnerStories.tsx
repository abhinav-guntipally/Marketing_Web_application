import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { ownerStories } from '../data/mockData';

export const OwnerStories = () => {
  const section = useScrollAnimation(0.2);

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
              Owner <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                Stories
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-400 font-light max-w-3xl mx-auto">
              Real people, real experiences with the Meteor 350.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {ownerStories.map((story, index) => (
            <div
              key={story.id}
              className={`group bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl overflow-hidden border border-gray-700 hover:border-green-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-green-500/20 ${
                section.isVisible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-20 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative h-60 overflow-hidden">
                <img
                  src={story.image}
                  alt={story.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              </div>

              <div className="p-8">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold mb-2">{story.name}</h3>
                  <p className="text-gray-400 flex items-center gap-2">
                    📍 {story.location} • {story.bikeYears} years with Meteor
                  </p>
                </div>

                <p className="text-gray-300 leading-relaxed text-lg">"{story.story}"</p>

                <div className="mt-6 pt-6 border-t border-gray-700 flex gap-4">
                  <div className="flex-1">
                    <p className="text-gray-400 text-sm">Bikes Owned</p>
                    <p className="text-2xl font-bold text-green-400">{story.bikeYears}</p>
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-400 text-sm">Status</p>
                    <p className="text-2xl font-bold text-blue-400">Active</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
