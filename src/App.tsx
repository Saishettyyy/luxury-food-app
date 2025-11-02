import { ChevronDown, Clock, Star, CheckCircle2, Sparkles, X } from 'lucide-react';
import { useState } from 'react';

function App() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [orderForm, setOrderForm] = useState({ name: '', orderNumber: '', phone: '' });

  const handleOrderSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Order submitted:', orderForm);
    setOrderForm({ name: '', orderNumber: '', phone: '' });
    setIsOrderModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-white text-stone-900">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-32 pb-32">
        <div className="max-w-5xl text-center space-y-12">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-stone-500">
              Culinary Excellence Delivered
            </p>
            <h1 className="text-8xl md:text-9xl font-bold text-stone-950 leading-none">
              Food at your fingertips
              <span className="block text-stone-600 mt-4">under 3 mins</span>
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-stone-600 font-light tracking-wide leading-relaxed max-w-2xl mx-auto">
            Premium dining delivered with obsessive precision. Taste uncompromises speed—every order, a masterpiece.
          </p>
          <div className="pt-8">
            <button onClick={() => setIsOrderModalOpen(true)} className="inline-block bg-stone-950 text-white px-12 py-5 text-base font-medium hover:bg-stone-800 transition-all duration-300 transform hover:scale-105">
              Access Now
            </button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-40 px-6 bg-stone-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-6xl md:text-7xl font-bold text-stone-900 mb-32 text-center">
            The Luxury Standard
          </h2>
          <div className="grid md:grid-cols-3 gap-20">
            {/* Benefit 1 */}
            <div className="space-y-8">
              <div className="inline-block">
                <div className="p-4 bg-stone-900 rounded-sm">
                  <Clock className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-3xl font-bold text-stone-900">Speed Redefined</h3>
                <p className="text-lg text-stone-600 leading-relaxed font-light">
                  Three minutes from craving to confirmation. Our infrastructure eliminates wait times, ensuring your meal arrives exactly when promised.
                </p>
              </div>
            </div>

            {/* Benefit 2 */}
            <div className="space-y-8">
              <div className="inline-block">
                <div className="p-4 bg-stone-900 rounded-sm">
                  <Star className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-3xl font-bold text-stone-900">Curated Excellence</h3>
                <p className="text-lg text-stone-600 leading-relaxed font-light">
                  Every restaurant partner meets our rigorous standards. Quality isn't negotiable—it's guaranteed with every order.
                </p>
              </div>
            </div>

            {/* Benefit 3 */}
            <div className="space-y-8">
              <div className="inline-block">
                <div className="p-4 bg-stone-900 rounded-sm">
                  <CheckCircle2 className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-3xl font-bold text-stone-900">Effortless Experience</h3>
                <p className="text-lg text-stone-600 leading-relaxed font-light">
                  Intuitive design meets intelligent technology. From selection to delivery, every interaction is streamlined for your convenience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-40 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-6xl md:text-7xl font-bold text-stone-900 mb-32 text-center">
            Trusted by Connoisseurs
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            {/* Testimonial 1 */}
            <div className="border border-stone-200 p-12 space-y-8 hover:shadow-lg transition-shadow duration-300">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-stone-900 text-stone-900" />
                ))}
              </div>
              <p className="text-stone-700 text-lg leading-relaxed font-light">
                "A revelation in urban dining. The speed is remarkable, but the quality is what keeps me coming back. Finally, a service that respects both my time and my palate."
              </p>
              <div className="border-t border-stone-200 pt-6">
                <p className="text-stone-900 font-semibold text-base">Michael Chen</p>
                <p className="text-stone-500 text-sm mt-1">Executive Director</p>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="border border-stone-200 p-12 space-y-8 hover:shadow-lg transition-shadow duration-300">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-stone-900 text-stone-900" />
                ))}
              </div>
              <p className="text-stone-700 text-lg leading-relaxed font-light">
                "Precision meets pleasure. Three minutes sounded ambitious. They delivered in two. The food arrived immaculate, the experience seamless. This is the future."
              </p>
              <div className="border-t border-stone-200 pt-6">
                <p className="text-stone-900 font-semibold text-base">Sarah Martinez</p>
                <p className="text-stone-500 text-sm mt-1">Entrepreneur</p>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="border border-stone-200 p-12 space-y-8 hover:shadow-lg transition-shadow duration-300">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-stone-900 text-stone-900" />
                ))}
              </div>
              <p className="text-stone-700 text-lg leading-relaxed font-light">
                "Uncompromising quality, zero compromise. I've tried every platform. This is the only one that treats dining with the seriousness it deserves. Exceptional."
              </p>
              <div className="border-t border-stone-200 pt-6">
                <p className="text-stone-900 font-semibold text-base">James Okonkwo</p>
                <p className="text-stone-500 text-sm mt-1">Creative Director</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-40 px-6 bg-stone-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-6xl md:text-7xl font-bold text-stone-900 mb-32 text-center">
            Questions
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "How do you guarantee delivery under 3 minutes?",
                a: "Our proprietary logistics network and strategic restaurant partnerships ensure optimal routing and preparation timing. Speed is built into our architecture, not promised as an afterthought."
              },
              {
                q: "What areas do you currently serve?",
                a: "We operate in select metropolitan zones where our infrastructure can maintain our quality standards. Coverage expands only when excellence can be guaranteed."
              },
              {
                q: "Can I schedule orders in advance?",
                a: "Yes. Schedule deliveries up to 48 hours ahead while maintaining the same precision timing and quality assurance."
              },
              {
                q: "What if my order doesn't meet expectations?",
                a: "Our quality guarantee is absolute. Any issue is resolved immediately with full accountability. Your satisfaction isn't a goal—it's our baseline."
              }
            ].map((item, idx) => (
              <div key={idx} className="border border-stone-300 bg-white">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                  className="w-full px-8 py-8 flex items-center justify-between hover:bg-stone-50 transition-colors duration-200"
                >
                  <h3 className="text-lg font-semibold text-stone-900 text-left">
                    {item.q}
                  </h3>
                  <ChevronDown
                    className={`w-6 h-6 text-stone-600 flex-shrink-0 transition-transform duration-300 ${
                      expandedFaq === idx ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>
                {expandedFaq === idx && (
                  <div className="px-8 py-8 bg-stone-50 border-t border-stone-300">
                    <p className="text-stone-600 text-lg leading-relaxed font-light">
                      {item.a}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Order Modal */}
      {isOrderModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center px-6 py-8">
          <div className="bg-white rounded-sm max-w-md w-full shadow-2xl border border-stone-200">
            {/* Modal Header */}
            <div className="flex items-center justify-between px-8 py-8 border-b border-stone-200">
              <h2 className="text-2xl font-bold text-stone-900">Your Order</h2>
              <button
                onClick={() => setIsOrderModalOpen(false)}
                className="text-stone-500 hover:text-stone-900 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Form */}
            <form onSubmit={handleOrderSubmit} className="p-8 space-y-6">
              {/* Name Field */}
              <div className="space-y-3">
                <label className="block text-sm font-semibold text-stone-900 uppercase tracking-wide">
                  Customer Name
                </label>
                <input
                  type="text"
                  required
                  value={orderForm.name}
                  onChange={(e) => setOrderForm({ ...orderForm, name: e.target.value })}
                  className="w-full px-4 py-3 border border-stone-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-stone-900 focus:border-transparent bg-white text-stone-900 placeholder-stone-400"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Order Number Field */}
              <div className="space-y-3">
                <label className="block text-sm font-semibold text-stone-900 uppercase tracking-wide">
                  Order Number
                </label>
                <input
                  type="text"
                  required
                  value={orderForm.orderNumber}
                  onChange={(e) => setOrderForm({ ...orderForm, orderNumber: e.target.value })}
                  className="w-full px-4 py-3 border border-stone-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-stone-900 focus:border-transparent bg-white text-stone-900 placeholder-stone-400"
                  placeholder="Enter order number"
                />
              </div>

              {/* Phone Field */}
              <div className="space-y-3">
                <label className="block text-sm font-semibold text-stone-900 uppercase tracking-wide">
                  Phone Number
                </label>
                <input
                  type="tel"
                  required
                  value={orderForm.phone}
                  onChange={(e) => setOrderForm({ ...orderForm, phone: e.target.value })}
                  className="w-full px-4 py-3 border border-stone-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-stone-900 focus:border-transparent bg-white text-stone-900 placeholder-stone-400"
                  placeholder="Enter phone number"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-stone-950 text-white py-4 font-semibold mt-8 hover:bg-stone-800 transition-all duration-300 transform hover:scale-105 uppercase tracking-wide text-sm"
              >
                Confirm Order
              </button>

              {/* Cancel Button */}
              <button
                type="button"
                onClick={() => setIsOrderModalOpen(false)}
                className="w-full border border-stone-300 text-stone-900 py-4 font-semibold hover:bg-stone-50 transition-colors duration-300 uppercase tracking-wide text-sm"
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-stone-950 text-white py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-5 gap-16 mb-20">
            <div>
              <h4 className="font-semibold text-base mb-8 tracking-wide uppercase text-xs">Company</h4>
              <ul className="space-y-5">
                <li><a href="#" className="text-stone-400 hover:text-white transition-colors text-sm font-light">About Us</a></li>
                <li><a href="#" className="text-stone-400 hover:text-white transition-colors text-sm font-light">Careers</a></li>
                <li><a href="#" className="text-stone-400 hover:text-white transition-colors text-sm font-light">Partner Restaurants</a></li>
                <li><a href="#" className="text-stone-400 hover:text-white transition-colors text-sm font-light">Press & Media</a></li>
                <li><a href="#" className="text-stone-400 hover:text-white transition-colors text-sm font-light">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-stone-800 pt-12 flex flex-col md:flex-row md:items-center md:justify-between">
            <p className="text-stone-500 mb-6 md:mb-0 text-sm font-light">© 2025 Premium Dining Platform. All rights reserved.</p>
            <div className="flex gap-12">
              <a href="#" className="text-stone-400 hover:text-white transition-colors text-sm font-light">Privacy Policy</a>
              <a href="#" className="text-stone-400 hover:text-white transition-colors text-sm font-light">Terms of Service</a>
              <a href="#" className="text-stone-400 hover:text-white transition-colors text-sm font-light">Cookie Settings</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
