// src/app/contact/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Advocate Hafiz Sajid Hussain",
  description:
    "Get in touch with Advocate Hafiz Sajid Hussain in Lahore for legal consultation, case evaluation, or appointment booking.",
};

export default function ContactPage() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-slate-800 via-indigo-950 to-blue-950 py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(99,102,241,0.35),transparent_50%)]" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Get in Touch
          </h1>
          <p className="mt-6 text-xl md:text-2xl text-indigo-200 max-w-4xl mx-auto leading-relaxed">
            Schedule a confidential consultation or discuss your legal matter today
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-16 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Contact Info + Images */}
          <div className="space-y-10">
            <div className="glass rounded-2xl p-8 md:p-10 border border-slate-200/40 shadow-xl">
              <h2 className="text-3xl font-bold text-slate-800 mb-6">
                Office Information
              </h2>

              <div className="space-y-6 text-slate-700">
                <div className="flex items-start gap-4">
                  <span className="text-3xl text-indigo-600 mt-1">📍</span>
                  <div>
                    <p className="font-semibold text-lg">Office Address</p>
                    <p className="mt-1">
                      Office #12, First Floor, Al-Rehman Centre,<br />
                       bypass bhawana near dar e arqam school Punjab, Pakistan
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <span className="text-3xl text-indigo-600">📞</span>
                  <div>
                    <p className="font-semibold text-lg">Phone</p>
                    <p className="mt-1">+92 03084591993 (WhatsApp available)</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <span className="text-3xl text-indigo-600">✉️</span>
                  <div>
                    <p className="font-semibold text-lg">Email</p>
                    <p className="mt-1">adv.sajid@legalfirm.pk</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <span className="text-3xl text-indigo-600">🕒</span>
                  <div>
                    <p className="font-semibold text-lg">Working Hours</p>
                    <p className="mt-1">Monday – Saturday: 9:00 AM – 6:00 PM</p>
                    <p>Sunday: Closed (Emergency appointments available)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Office Interior Visual */}
            <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="https://www.alramzandevelopers.com/wp-content/uploads/2025/07/Interior-2.png"
                alt="Modern law firm conference room – Sharif Heights style office"
                className="w-full h-auto object-cover"
              />
              <div className="bg-gradient-to-t from-black/60 to-transparent p-6 -mt-20 relative">
                <p className="text-white text-lg font-medium">
                  Professional Consultation Environment
                </p>
              </div>
            </div>

            {/* Consultation Meeting Visual */}
            <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-200/50">
              <img
                src="https://as1.ftcdn.net/jpg/05/22/81/48/1000_F_522814874_9uXAgQRlyittCZGrhLD5ZFe6l5Q1tSFI.jpg"
                alt="Lawyer in professional consultation meeting with client"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="glass rounded-2xl p-8 md:p-10 border border-slate-200/40 shadow-2xl shadow-indigo-950/20">
            <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">
              Send Us a Message
            </h2>

            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1.5">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200/30 transition-all"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1.5">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200/30 transition-all"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1.5">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  required
                  className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200/30 transition-all"
                  placeholder="+92 3XX XXXXXXX"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-1.5">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  required
                  className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200/30 transition-all"
                  placeholder="e.g., Family Law Consultation, Property Dispute"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1.5">
                  Your Message *
                </label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200/30 transition-all resize-y"
                  placeholder="Please describe your legal matter or question..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 px-6 bg-gradient-to-r from-indigo-600 to-blue-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 text-lg"
              >
                Submit Inquiry
              </button>

              <p className="text-center text-sm text-slate-500 mt-4">
                We typically respond within 24 hours during business days.
              </p>
            </form>
          </div>
        </div>

        {/* Location Pin / Map Visual */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-6">
            Our Location in bhawana
          </h3>
          <div className="max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
            <img
              src="https://c8.alamy.com/comp/2G62440/location-lahore-in-pakistan-travel-map-with-push-pin-point-marker-closeup-asia-journey-concept-2G62440.jpg"
              alt="Map location pin on bhawana Pakistan"
              className="w-full h-auto object-cover"
            />
          </div>
          <p className="mt-4 text-slate-600">
            bypass III – Centrally located, easily accessible from main areas of bhawana
          </p>
        </div>

        {/* Final CTA */}
        <div className="mt-20 text-center">
          <p className="text-xl text-slate-700 mb-6 max-w-3xl mx-auto">
            For urgent matters or court appearances, please call directly.
          </p>
          <a
            href="tel:+923211234567"
            className="inline-block px-10 py-4 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-lg"
          >
            Call Now: +92 03084591993
          </a>
        </div>
      </div>
    </div>
  );
}