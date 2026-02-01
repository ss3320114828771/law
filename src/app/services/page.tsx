// src/app/services/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Legal Services | Advocate Hafiz Sajid Hussain",
  description:
    "Expert legal services in Lahore: corporate & commercial law, family & matrimonial disputes, criminal defense, civil litigation, property & real estate matters, constitutional petitions, and more.",
  keywords:
    "legal services Lahore, corporate lawyer Lahore, family lawyer Pakistan, criminal defense advocate, property disputes lawyer, constitutional law expert",
  openGraph: {
    title: "Our Legal Services | Advocate Hafiz Sajid Hussain",
    description:
      "Protecting your rights with integrity and expertise across multiple domains of law in Lahore.",
    url: "https://yourdomain.com/services",
    type: "website",
  },
};

export default function ServicesPage() {
  const services = [
    {
      title: "Corporate & Commercial Law",
      description:
        "Drafting & vetting contracts, company incorporation, mergers & acquisitions, shareholder agreements, regulatory compliance, corporate governance, and dispute resolution.",
      icon: "💼",
      color: "from-blue-600 to-indigo-600",
    },
    {
      title: "Family & Matrimonial Law",
      description:
        "Khula, Talaq, custody & guardianship, maintenance & dower rights, nikahnama disputes, family mediation, and pre/post-nuptial agreements.",
      icon: "👨‍👩‍👧",
      color: "from-emerald-600 to-teal-600",
    },
    {
      title: "Criminal Defense",
      description:
        "Bail applications, trial representation, appeals, white-collar crimes, narcotics offenses, cybercrime defense, anti-terrorism matters, and quashing of FIRs.",
      icon: "🛡️",
      color: "from-rose-600 to-pink-600",
    },
    {
      title: "Civil Litigation & Recovery",
      description:
        "Property & rent disputes, recovery suits, specific performance, permanent & mandatory injunctions, declaration suits, partition matters, and execution proceedings.",
      icon: "⚖️",
      color: "from-purple-600 to-violet-600",
    },
    {
      title: "Property & Real Estate Law",
      description:
        "Sale/purchase agreements, mutation & fard badar, gift deeds (Hiba), partition suits, power of attorney, rent agreements, land revenue cases, and title verification.",
      icon: "🏛️",
      color: "from-amber-600 to-orange-600",
    },
    {
      title: "Constitutional & Writ Petitions",
      description:
        "Enforcement of fundamental rights, writs of habeas corpus, mandamus, certiorari, prohibition, quo warranto, public interest litigation, and High Court/Supreme Court petitions.",
      icon: "📜",
      color: "from-cyan-600 to-teal-600",
    },
  ];

  return (
    <div className="relative bg-slate-50 dark:bg-slate-950 min-h-screen">
      {/* Hero Section – more dramatic & trust-building */}
      <section className="relative bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(99,102,241,0.35),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(79,70,229,0.25),transparent_60%)]" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white to-blue-300">
            Comprehensive Legal Expertise
          </h1>
          <p className="text-xl md:text-2xl text-indigo-200/90 max-w-4xl mx-auto leading-relaxed font-light">
            Strategic, ethical, and result-oriented representation across all major domains of law in Lahore and throughout Pakistan.
          </p>
          <p className="mt-6 text-lg text-slate-300 max-w-3xl mx-auto">
            Advocate Hafiz Sajid Hussain – Protecting rights with integrity since [Year].
          </p>
        </div>
      </section>

      {/* Services Grid – advanced cards */}
      <section className="container mx-auto px-6 py-16 md:py-24">
        <div className="grid gap-8 md:gap-10 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, idx) => (
            <div
              key={idx}
              className={`
                group relative bg-white/70 dark:bg-slate-800/40 
                backdrop-blur-xl border border-slate-200/60 dark:border-slate-700/50
                rounded-2xl p-7 md:p-8 shadow-xl hover:shadow-2xl 
                transition-all duration-500 ease-out
                hover:-translate-y-3 hover:scale-[1.02]
                overflow-hidden
              `}
            >
              {/* Top gradient accent bar – glow on hover */}
              <div
                className={`
                  absolute top-0 left-0 right-0 h-1.5 
                  bg-gradient-to-r ${service.color} 
                  opacity-90 group-hover:opacity-100 
                  transition-opacity duration-500
                `}
              />

              {/* Icon with gradient background */}
              <div className="mb-6">
                <div
                  className={`
                    inline-flex items-center justify-center w-16 h-16 
                    rounded-2xl bg-gradient-to-br ${service.color} 
                    text-white text-3xl shadow-lg
                    group-hover:scale-110 group-hover:rotate-3
                    transition-transform duration-500 ease-out
                  `}
                >
                  {service.icon}
                </div>
              </div>

              <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-4 group-hover:text-indigo-700 dark:group-hover:text-indigo-400 transition-colors duration-300">
                {service.title}
              </h3>

              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                {service.description}
              </p>

              <div className="mt-auto">
                <span className="inline-flex items-center text-indigo-600 dark:text-indigo-400 font-medium group-hover:text-indigo-800 dark:group-hover:text-indigo-300 transition-colors">
                  Learn more →
                  <span className="ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">
                    →
                  </span>
                </span>
              </div>

              {/* Subtle shine / glass reflection effect on hover */}
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-30 transition-opacity duration-700 bg-gradient-to-br from-white/10 via-transparent to-transparent" />
            </div>
          ))}
        </div>
      </section>

      {/* Strong CTA – centered, gradient border, scale animation */}
      <section className="container mx-auto px-6 pb-24 md:pb-32">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative inline-block p-1 rounded-3xl bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-600">
            <div className="bg-white dark:bg-slate-900 rounded-3xl px-10 py-12 md:px-16 md:py-16 shadow-2xl">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 dark:text-slate-100 mb-6">
                Need Expert Legal Guidance Today?
              </h2>
              <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
                Schedule a confidential consultation with Advocate Hafiz Sajid Hussain. Your rights deserve the strongest possible protection.
              </p>
              <a
                href="/contact"
                className={`
                  inline-flex items-center px-10 py-5 
                  bg-gradient-to-r from-indigo-600 to-blue-700 
                  hover:from-indigo-500 hover:to-blue-600
                  text-white font-semibold text-lg rounded-2xl 
                  shadow-xl hover:shadow-2xl hover:scale-105 
                  transition-all duration-400 ease-out
                `}
              >
                Book Your Consultation Now →
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}