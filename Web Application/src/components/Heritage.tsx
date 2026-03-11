import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const Heritage = () => {
  const section = useScrollAnimation(0.2);

  return (
    <section id="heritage" className="bg-gradient-to-b from-black to-gray-900 text-white py-32 px-4">
      <div className="max-w-7xl mx-auto">
        <div ref={section.ref} className="text-center mb-16">
          <div
            className={`transition-all duration-1000 ${
              section.isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-8">
              A Legacy of <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-amber-500">
                Excellence
              </span>
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div
            className={`transition-all duration-1000 delay-200 ${
              section.isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
            }`}
          >
            <img
              src="https://images.pexels.com/photos/2607554/pexels-photo-2607554.jpeg"
              alt="Heritage"
              className="rounded-3xl shadow-2xl w-full"
            />
          </div>
          <div
            className={`transition-all duration-1000 delay-400 ${
              section.isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
            }`}
          >
            <h3 className="text-4xl font-bold mb-6">Since 1901</h3>
            <p className="text-lg text-gray-400 leading-relaxed mb-6">
              Royal Enfield stands as the world's oldest motorcycle brand still in continuous production. For over a century, we've crafted machines that combine reliability with timeless design.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed mb-6">
              The Meteor 350 is our latest masterpiece, embodying decades of engineering excellence and a deep understanding of what riders truly desire. Every detail reflects our commitment to quality and innovation.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-800 rounded-lg p-4">
                <p className="text-gray-400 text-sm mb-2">Years in Operation</p>
                <p className="text-3xl font-bold text-red-400">120+</p>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <p className="text-gray-400 text-sm mb-2">Motorcycles Sold</p>
                <p className="text-3xl font-bold text-amber-400">5M+</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-3xl p-12 border border-gray-700">
          <h3 className="text-3xl font-bold mb-8 text-center">Our Heritage Timeline</h3>
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="w-32 flex-shrink-0">
                <p className="text-2xl font-bold text-red-400">1901</p>
              </div>
              <div className="pb-8 border-l-2 border-gray-600 pl-6">
                <h4 className="text-xl font-bold mb-2">Foundation</h4>
                <p className="text-gray-400">Royal Enfield is founded in Redditch, England, beginning a legacy that spans over a century.</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-32 flex-shrink-0">
                <p className="text-2xl font-bold text-red-400">1949</p>
              </div>
              <div className="pb-8 border-l-2 border-gray-600 pl-6">
                <h4 className="text-xl font-bold mb-2">India Operations</h4>
                <p className="text-gray-400">Production shifts to India, becoming a symbol of Indian engineering and craftsmanship.</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-32 flex-shrink-0">
                <p className="text-2xl font-bold text-red-400">1994</p>
              </div>
              <div className="pb-8 border-l-2 border-gray-600 pl-6">
                <h4 className="text-xl font-bold mb-2">Modern Era</h4>
                <p className="text-gray-400">Company restructures with renewed focus on global markets and modern technology.</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-32 flex-shrink-0">
                <p className="text-2xl font-bold text-red-400">2023</p>
              </div>
              <div className="border-l-2 border-gray-600 pl-6">
                <h4 className="text-xl font-bold mb-2">Meteor 350 Launch</h4>
                <p className="text-gray-400">Introducing the Meteor 350, a masterpiece that captures our heritage while embracing the future.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
