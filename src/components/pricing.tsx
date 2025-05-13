'use client';

import React, { useRef, useEffect, useState } from 'react';

const PricingSection: React.FC = () => {
  const [isInView, setIsInView] = useState(false);
  const [hoveredPlan, setHoveredPlan] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  // IntersectionObserver implementatie voor lazyloading
  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isInView) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [isInView]);

  // Prijsplan data
  const pricingPlans = [
    {
      id: 1,
      name: "Website",
      description: "Professionele website voor uw bedrijf",
      price: 695,
      features: [
        "Professionele website (5 pagina's)",
        "Responsive design",
        "Contactformulier",
        "SEO basisoptimalisatie",
        "Google Analytics koppeling",
        "3 maanden gratis onderhoud"
      ],
      note: "Voor meer pagina's, neem contact met ons op",
      color: "from-blue-500 to-blue-600",
      popular: false,
    },
    {
      id: 2,
      name: "IT Beheer",
      description: "Complete IT-ondersteuning voor uw bedrijf",
      price: null, // Prijs op aanvraag
      features: [
        "Remote helpdesk ondersteuning",
        "Netwerkbeheer en monitoring",
        "Dagelijkse back-ups",
        "Beveiligingsupdates",
        "Hardware en software advies",
        "Proactief systeembeheer",
        "Cloud-oplossingen",
        "Maandelijks onderhoudsrapport"
      ],
      color: "from-purple-500 to-indigo-600",
      popular: true,
    },
    {
      id: 3,
      name: "Branding",
      description: "Compleet merkidentiteit pakket",
      price: 995,
      features: [
        "Logo ontwerp",
        "Huisstijl ontwikkeling",
        "Visitekaartjes ontwerp",
        "Social media templates",
        "Brand guidelines document",
        "Onbeperkte revisies",
        "Alle bronbestanden"
      ],
      color: "from-amber-500 to-orange-600",
      popular: false,
    }
  ];

  // Animatie klassen
  const getContentClasses = (delay: number = 0) => {
    return `transition-all duration-700 ${isInView
      ? 'opacity-100 translate-y-0'
      : 'opacity-0 translate-y-8'} transition-delay-${delay}`;
  };

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden"
      id="pricing"
    >
      {/* Decoratieve elementen */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-24 right-10 w-64 h-64 bg-gradient-to-r from-blue-200/10 to-purple-200/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-gradient-to-r from-indigo-200/10 to-blue-200/10 rounded-full blur-3xl"></div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Sectietitel */}
        <div className={`text-center mb-16 ${getContentClasses()}`}>
          <span className="text-base font-medium bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600 mb-2 inline-flex items-center">
            <span className="w-8 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mr-3 hidden sm:inline-block"></span>
            Transparante prijzen
            <span className="w-8 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full ml-3 hidden sm:inline-block"></span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 sm:leading-[3.25rem]">
            Investeer in <span className="relative">
              digitale groei
              <span className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-blue-400/40 to-purple-500/40 rounded-full"></span>
            </span> van uw bedrijf
          </h2>
          <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
            Wij bieden heldere tarieven voor onze diensten en maatwerk oplossingen voor uw onderneming.
          </p>
        </div>

        {/* Prijsplannen */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 ${getContentClasses(200)}`}>
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-2xl p-1 transition-all duration-300 ${
                hoveredPlan === plan.id || plan.popular
                  ? `bg-gradient-to-br ${plan.color}`
                  : 'bg-gray-100 hover:bg-gray-200'
              }`}
              onMouseEnter={() => setHoveredPlan(plan.id)}
              onMouseLeave={() => setHoveredPlan(null)}
            >
              {plan.popular && (
                <div className="absolute -top-5 left-0 right-0 mx-auto w-max px-4 py-1 rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 text-white text-sm font-medium">
                  Aanbevolen
                </div>
              )}
              <div className="bg-white rounded-xl p-8 h-full flex flex-col">
                <div className="mb-6">
                  <h3 className={`text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${plan.color}`}>
                    {plan.name}
                  </h3>
                  <p className="text-gray-600 mt-1 text-sm">
                    {plan.description}
                  </p>
                </div>
                <div className="mb-6">
                  {plan.price ? (
                    <div className="flex items-baseline">
                      <span className="text-3xl font-bold text-gray-900">€{plan.price}</span>
                      <span className="text-gray-500 ml-2">eenmalig</span>
                    </div>
                  ) : (
                    <div className="flex items-baseline">
                      <span className="text-xl font-medium text-gray-900">Prijs op aanvraag</span>
                    </div>
                  )}
                </div>
                <div className="flex-grow">
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className={`h-5 w-5 mt-0.5 flex-shrink-0 bg-clip-text text-transparent bg-gradient-to-r ${plan.color}`}
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  {plan.note && (
                    <p className="text-sm text-gray-500 italic mt-4">{plan.note}</p>
                  )}
                </div>
                <div className="mt-8">
                  <a
                    href="#contact"
                    className={`w-full py-3 rounded-lg transition-all block text-center ${
                      hoveredPlan === plan.id || plan.popular
                        ? `bg-gradient-to-r ${plan.color} text-white shadow-lg`
                        : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                    }`}
                  >
                    Neem contact op
                  </a>
                </div>
              </div>
            </div>
          ))}

        {/* Aanvullende informatie */}
          <div className="col-span-1 md:col-span-3 mt-8 text-center">
            <p className="text-gray-600 text-sm">
              Alle prijzen zijn exclusief BTW. Neem contact met ons op voor maatwerk oplossingen en meer informatie.
            </p>
          </div>

      </div>
      </div>
    </section>
  );
};

export default PricingSection;