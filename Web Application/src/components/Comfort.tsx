import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const Comfort = () => {
  const section1 = useScrollAnimation(0.2);
  const section2 = useScrollAnimation(0.2);

  return (
    <section className="bg-black text-white py-32 px-4">
      <div className="max-w-7xl mx-auto">
        <div ref={section1.ref} className="text-center mb-20">
          <div
            className={`transition-all duration-1000 ${
              section1.isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-8">
              Engineered for <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-500">
                Endless Journeys
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto font-light">
              Where ergonomics meet aesthetics to create the perfect riding experience.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {[
            {
              title: 'Relaxed Seating',
              description: 'Low seat height of 765mm with plush dual seats for all-day comfort.',
              image: 'https://images.pexels.com/photos/1715196/pexels-photo-1715196.jpeg',
            },
            {
              title: 'Perfect Posture',
              description: 'Forward-set foot pegs and swept-back handlebars for natural riding.',
              image: 'https://images.pexels.com/photos/2393816/pexels-photo-2393816.jpeg',
            },
            {
              title: 'Smooth Ride',
              description: 'Twin shock absorbers ensure a plush ride on any terrain.',
              image: 'https://images.pexels.com/photos/2607544/pexels-photo-2607544.jpeg',
            },
          ].map((item, index) => (
            <div
              key={item.title}
              ref={section2.ref}
              className={`transition-all duration-1000 ${
                section2.isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="group relative overflow-hidden rounded-2xl">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-300 text-sm">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
