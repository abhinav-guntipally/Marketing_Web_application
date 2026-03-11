import { Facebook, Instagram, Twitter, Youtube, Mail, Phone } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-black via-gray-900 to-black text-white py-20 px-4 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-5 gap-12 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-orange-500 to-red-600 flex items-center justify-center">
                <span className="text-white font-bold">RE</span>
              </div>
              <h3 className="text-2xl font-bold">Royal Enfield</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Made like a gun. Goes like a bullet. Crafting legends since 1901.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-white">Motorcycles</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-orange-400 transition-colors">Meteor 350</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Classic 350</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Interceptor 650</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Continental GT</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><a href="#design" className="hover:text-orange-400 transition-colors">Design</a></li>
              <li><a href="#specs" className="hover:text-orange-400 transition-colors">Specifications</a></li>
              <li><a href="#pricing" className="hover:text-orange-400 transition-colors">Pricing</a></li>
              <li><a href="#heritage" className="hover:text-orange-400 transition-colors">Heritage</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-white">Support</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><a href="#stores" className="hover:text-orange-400 transition-colors">Find a Dealer</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Owner's Manual</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Warranty Info</a></li>
              <li><a href="#faq" className="hover:text-orange-400 transition-colors">FAQs</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-white">Contact</h4>
            <div className="space-y-3">
              <a href="tel:+919876543210" className="flex items-center gap-2 text-gray-400 hover:text-orange-400 transition-colors text-sm">
                <Phone className="w-4 h-4" />
                +91 98765 43210
              </a>
              <a href="mailto:info@royalenfield.com" className="flex items-center gap-2 text-gray-400 hover:text-orange-400 transition-colors text-sm">
                <Mail className="w-4 h-4" />
                info@royalenfield.com
              </a>
              <div className="flex gap-3 mt-4">
                <a href="#" className="bg-gray-800 hover:bg-orange-600 p-3 rounded-full transition-all hover:scale-110 duration-300">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="bg-gray-800 hover:bg-pink-600 p-3 rounded-full transition-all hover:scale-110 duration-300">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="bg-gray-800 hover:bg-blue-500 p-3 rounded-full transition-all hover:scale-110 duration-300">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="bg-gray-800 hover:bg-red-600 p-3 rounded-full transition-all hover:scale-110 duration-300">
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12 py-12 border-y border-gray-700">
          <div>
            <p className="text-gray-400 text-xs font-semibold uppercase tracking-widest mb-2">Finance</p>
            <p className="text-gray-300">EMI Options Available from select locations</p>
          </div>
          <div>
            <p className="text-gray-400 text-xs font-semibold uppercase tracking-widest mb-2">Warranty</p>
            <p className="text-gray-300">2-year/40,000 km standard warranty included</p>
          </div>
          <div>
            <p className="text-gray-400 text-xs font-semibold uppercase tracking-widest mb-2">Service</p>
            <p className="text-gray-300">Comprehensive service network across India</p>
          </div>
        </div>

        <div className="text-center text-gray-500 text-xs space-y-3">
          <p>&copy; 2024 Royal Enfield. All rights reserved. | Made with passion for riders worldwide</p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a href="#" className="hover:text-orange-400 transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-orange-400 transition-colors">Terms & Conditions</a>
            <span>•</span>
            <a href="#" className="hover:text-orange-400 transition-colors">Cookie Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-orange-400 transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
