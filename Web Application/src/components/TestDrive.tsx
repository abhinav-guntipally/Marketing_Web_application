import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { TestDriveBooking } from '../types';
import { CheckCircle, Calendar } from 'lucide-react';

export const TestDrive = () => {
  const section = useScrollAnimation(0.2);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: '',
    preferredDate: '',
  });
  const [booking, setBooking] = useState<TestDriveBooking | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      const newBooking: TestDriveBooking = {
        id: Date.now(),
        ...formData,
        timestamp: new Date().toISOString(),
      };
      setBooking(newBooking);
      setIsSubmitting(false);
    }, 1500);
  };

  const handleReset = () => {
    setBooking(null);
    setFormData({
      name: '',
      phone: '',
      city: '',
      preferredDate: '',
    });
  };

  if (booking) {
    return (
      <section className="bg-black text-white py-32 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-12 backdrop-blur-lg border border-gray-700 text-center">
            <div className="inline-block animate-bounce mb-6">
              <CheckCircle className="w-20 h-20 text-green-400" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Test Drive Booked Successfully</h2>
            <p className="text-gray-400 mb-8">We look forward to seeing you</p>

            <div className="bg-black/50 rounded-2xl p-6 mb-8 text-left space-y-3">
              <div className="flex justify-between border-b border-gray-700 pb-3">
                <span className="text-gray-400">Name</span>
                <span className="font-semibold">{booking.name}</span>
              </div>
              <div className="flex justify-between border-b border-gray-700 pb-3">
                <span className="text-gray-400">Phone</span>
                <span className="font-semibold">{booking.phone}</span>
              </div>
              <div className="flex justify-between border-b border-gray-700 pb-3">
                <span className="text-gray-400">City</span>
                <span className="font-semibold">{booking.city}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Date</span>
                <span className="font-semibold">{booking.preferredDate}</span>
              </div>
            </div>

            <button
              onClick={handleReset}
              className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-200 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              Book Another Test Drive
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-black text-white py-32 px-4">
      <div className="max-w-2xl mx-auto">
        <div ref={section.ref} className="text-center mb-12">
          <div
            className={`transition-all duration-1000 ${
              section.isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-8">
              Experience the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                Legend
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-400 font-light">
              Book your test drive today and feel the power of the Meteor 350.
            </p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className={`bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 md:p-12 backdrop-blur-lg border border-gray-700 transition-all duration-1000 delay-300 ${
            section.isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}
        >
          <div className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-300">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-black/50 border border-gray-600 rounded-xl px-4 py-4 focus:outline-none focus:border-blue-500 transition-colors"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-2 text-gray-300">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full bg-black/50 border border-gray-600 rounded-xl px-4 py-4 focus:outline-none focus:border-blue-500 transition-colors"
                placeholder="+91 XXXXX XXXXX"
              />
            </div>

            <div>
              <label htmlFor="city" className="block text-sm font-medium mb-2 text-gray-300">
                City
              </label>
              <input
                type="text"
                id="city"
                required
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                className="w-full bg-black/50 border border-gray-600 rounded-xl px-4 py-4 focus:outline-none focus:border-blue-500 transition-colors"
                placeholder="Enter your city"
              />
            </div>

            <div>
              <label htmlFor="date" className="block text-sm font-medium mb-2 text-gray-300">
                Preferred Date
              </label>
              <div className="relative">
                <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="date"
                  id="date"
                  required
                  value={formData.preferredDate}
                  onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                  className="w-full bg-black/50 border border-gray-600 rounded-xl pl-12 pr-4 py-4 focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-5 rounded-full font-bold text-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <span className="animate-spin">⏳</span>
                  Booking...
                </span>
              ) : (
                'Book Test Drive'
              )}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
