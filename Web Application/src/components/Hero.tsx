import { ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';

export const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-10" />

      <div
        className={`absolute inset-0 transition-all duration-[2000ms] ${
          isLoaded ? 'scale-100 opacity-100' : 'scale-110 opacity-0'
        }`}
      >
        <img
          src="https://images.pexels.com/photos/2607554/pexels-photo-2607554.jpeg"
          alt="Royal Enfield Meteor 350"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-20 h-full flex flex-col items-center justify-center text-white px-4">
        <div
          className={`transition-all duration-1000 delay-500 ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-center mb-4 tracking-tight">
            Meteor 350
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-center text-gray-300 font-light tracking-wide">
            Cruising. Perfected.
          </p>
        </div>

        <div
          className={`absolute bottom-12 transition-all duration-1000 delay-1000 ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="flex flex-col items-center animate-bounce">
            <span className="text-sm text-gray-400 mb-2">Scroll to explore</span>
            <ChevronDown className="w-6 h-6 text-gray-400" />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-20" />
    </section>
  );
};
