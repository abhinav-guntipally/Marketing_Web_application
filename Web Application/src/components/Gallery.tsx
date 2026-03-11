import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const Gallery = () => {
  const section = useScrollAnimation(0.2);
  const scrollRef = useRef<HTMLDivElement>(null);

  const images = [
    'https://images.pexels.com/photos/2607554/pexels-photo-2607554.jpeg',
    'https://images.pexels.com/photos/1715193/pexels-photo-1715193.jpeg',
    'https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg',
    'https://images.pexels.com/photos/1715195/pexels-photo-1715195.jpeg',
    'https://images.pexels.com/photos/1715196/pexels-photo-1715196.jpeg',
    'https://images.pexels.com/photos/2393816/pexels-photo-2393816.jpeg',
    'https://images.pexels.com/photos/2397517/pexels-photo-2397517.jpeg',
    'https://images.pexels.com/photos/1657032/pexels-photo-1657032.jpeg',
    'https://images.pexels.com/photos/2116471/pexels-photo-2116471.jpeg',
    'https://images.pexels.com/photos/1657033/pexels-photo-1657033.jpeg',
    'https://images.pexels.com/photos/2607555/pexels-photo-2607555.jpeg',
    'https://images.pexels.com/photos/3588365/pexels-photo-3588365.jpeg',
    'https://images.pexels.com/photos/3588366/pexels-photo-3588366.jpeg',
    'https://images.pexels.com/photos/3588367/pexels-photo-3588367.jpeg',
    'https://images.pexels.com/photos/1715197/pexels-photo-1715197.jpeg',
    'https://images.pexels.com/photos/1715198/pexels-photo-1715198.jpeg',
    'https://images.pexels.com/photos/2393815/pexels-photo-2393815.jpeg',
    'https://images.pexels.com/photos/2116470/pexels-photo-2116470.jpeg',
    'https://images.pexels.com/photos/1657034/pexels-photo-1657034.jpeg',
    'https://images.pexels.com/photos/2607556/pexels-photo-2607556.jpeg',
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 600;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="bg-black text-white py-32 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div ref={section.ref} className="text-center mb-20">
          <div
            className={`transition-all duration-1000 ${
              section.isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-8">
              Cinematic <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-500">
                Showcase
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto font-light">
              Every angle tells a story of passion and precision.
            </p>
          </div>
        </div>

        <div className="relative">
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/80 hover:bg-black p-4 rounded-full backdrop-blur-lg transition-all duration-300 hover:scale-110"
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {images.map((image, index) => (
              <div
                key={index}
                className={`flex-shrink-0 w-[85vw] md:w-[600px] snap-center transition-all duration-1000 ${
                  section.isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative group overflow-hidden rounded-3xl">
                  <img
                    src={image}
                    alt={`Gallery ${index + 1}`}
                    className="w-full h-[400px] md:h-[500px] object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-500" />
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/80 hover:bg-black p-4 rounded-full backdrop-blur-lg transition-all duration-300 hover:scale-110"
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};
