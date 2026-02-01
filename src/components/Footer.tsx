// src/components/Footer.tsx
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto bg-linear-to-t from-slate-900 to-slate-800 text-slate-300">
      {/* Main footer content */}
      <div className="container mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4 lg:gap-12">
          {/* Brand / About column */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold text-white tracking-tight">
              Advocate Hafiz Sajid Hussain
            </h3>
            <p className="mt-4 text-slate-400 leading-relaxed max-w-md">
              Providing trusted legal representation and consultation in Lahore with integrity, 
              professionalism, and dedication to justice since many years.
            </p>

            <div className="mt-6 flex items-center gap-4">
              <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full" />
              <span className="text-sm text-slate-500">Since Excellence in Law</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-6 text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-slate-400 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-slate-400 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-slate-400 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block"
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-slate-400 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/login"
                  className="text-slate-400 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block"
                >
                  Client Portal
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-6 text-lg font-semibold text-white">Contact</h4>
            <ul className="space-y-4 text-slate-400">
              <li className="flex items-start gap-3">
                <span className="text-indigo-400 text-xl mt-0.5">📍</span>
                <span>
                  Office # 12, First Floor, <br />
                  Al-Rehman Centre, <br />
                  Gulberg III, Lahore, Punjab
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-indigo-400 text-xl">📞</span>
                <span>+92 321 1234567</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-indigo-400 text-xl">✉️</span>
                <span>adv.sajid@legalfirm.pk</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-700/60 bg-slate-950/40">
        <div className="container mx-auto px-6 py-6 text-center text-sm text-slate-500">
          <p>
            © {currentYear} Advocate Hafiz Sajid Hussain. All Rights Reserved.
          </p>
          <p className="mt-1">
            <span className="inline-block mx-2">•</span>
            <Link href="/privacy" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <span className="inline-block mx-2">•</span>
            <Link href="/terms" className="hover:text-slate-300 transition-colors">
              Terms of Service
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}