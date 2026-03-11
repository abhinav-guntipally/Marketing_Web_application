import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const Design = () => {
  const section1 = useScrollAnimation(0.2);
  const section2 = useScrollAnimation(0.2);

  return (
    <section id="design" className="bg-black text-white py-32 px-4">
      <div className="max-w-7xl mx-auto">
        <div ref={section1.ref} className="mb-32">
          <div
            className={`transition-all duration-1000 ${
              section1.isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-8 text-center">
              Crafted for <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-200">
                Timeless Beauty
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-center text-gray-400 max-w-3xl mx-auto font-light">
              Every curve, every detail speaks of craftsmanship that stands the test of time.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
          <div
            ref={section2.ref}
            className={`transition-all duration-1000 delay-200 ${
              section2.isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
            }`}
          >
            <img
              src="https://images.pexels.com/photos/1715193/pexels-photo-1715193.jpeg"
              alt="Chrome Details"
              className="rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div
            className={`transition-all duration-1000 delay-400 ${
              section2.isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
            }`}
          >
            <h3 className="text-4xl md:text-5xl font-bold mb-6">Chrome Excellence</h3>
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
              Handcrafted chrome accents that catch the light perfectly. Each element meticulously
              designed to create a visual symphony of metal and motion.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div
            className={`order-2 md:order-1 transition-all duration-1000 delay-200 ${
              section2.isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
            }`}
          >
            <h3 className="text-4xl md:text-5xl font-bold mb-6">Sculpted Tank</h3>
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
              The teardrop fuel tank embodies classic cruiser aesthetics, flowing seamlessly into
              the bodywork with purposeful elegance.
            </p>
          </div>
          <div
            className={`order-1 md:order-2 transition-all duration-1000 delay-400 ${
              section2.isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
            }`}
          >
            <img
              src="https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg"
              alt="Fuel Tank"
              className="rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
