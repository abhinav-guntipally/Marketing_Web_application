import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Design', href: '#design' },
    { label: 'Performance', href: '#performance' },
    { label: 'Specs', href: '#specs' },
    { label: 'Heritage', href: '#heritage' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Accessories', href: '#accessories' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Stores', href: '#stores' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/95 backdrop-blur-md border-b border-gray-800' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-orange-500 to-red-600 flex items-center justify-center">
            <span className="text-white font-bold text-lg">RE</span>
          </div>
          <span className="text-white font-bold text-xl hidden sm:block">Meteor 350</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-gray-300 hover:text-white transition-colors duration-300 font-medium text-sm"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <button className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg hover:shadow-orange-500/50 transition-all duration-300 hover:scale-105">
            Book Test Drive
          </button>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white p-2 rounded-lg hover:bg-gray-800 transition-colors"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md border-b border-gray-800 absolute top-full left-0 right-0 w-full">
          <div className="flex flex-col p-4 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-300 hover:text-white transition-colors duration-300 font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <button className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white px-6 py-3 rounded-full font-semibold mt-4">
              Book Test Drive
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
