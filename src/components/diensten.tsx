'use client';
import React, { useState } from 'react';


const FeaturesSection: React.FC = () => {
  const [selectedFeature, setSelectedFeature] = useState<number | null>(null);

  // Feature items data
  const features = [
    {
      id: 1,
      title: "Web Development",
      description: "Wereldwijd zijn er 4,57 miljard internetgebruikers, waarvan de helft van het gebruik via de telefoon is. Social media vormt 25% van alle digitale media consumptie.",
      detailedContent: "Wij creëren moderne, responsieve websites en webapplicaties die perfect werken op alle apparaten. Van eenvoudige landingspagina's tot complexe e-commerce platforms, wij zorgen voor een naadloze gebruikerservaring met snelle laadtijden en intuïtieve navigatie. Onze expertise omvat front-end ontwikkeling met React, Vue en Angular, back-end implementaties met Node.js, PHP of Python, en volledig geoptimaliseerde progressive web apps voor mobiele gebruikers.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.8}
          stroke="currentColor"
          className="size-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
          />
        </svg>
      ),
      color: "from-blue-500 to-indigo-600"
    },
    {
      id: 2,
      title: "Branding",
      description: "Een succesvolle onderneming begint bij een identiteit. Hiervoor is een duidelijke merkstrategie nodig. Waar staat uw merk voor?",
      detailedContent: "Wij helpen u een sterk en herkenbaar merk te bouwen dat resoneert met uw doelgroep. Door middel van uitgebreid marktonderzoek en klantanalyse ontwikkelen we een unieke merkidentiteit die uw waarden en missie weerspiegelt. Ons team van creatieve professionals zorgt voor consistente merkuitingen in alle kanalen - van logo en visuele identiteit tot tone-of-voice en marketingcommunicatie. We creëren niet alleen een aantrekkelijk imago, maar bouwen aan een strategisch merkverhaal dat een emotionele verbinding met uw klanten aangaat.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.8}
          stroke="currentColor"
          className="size-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7.864 4.243A7.5 7.5 0 0 1 19.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 0 0 4.5 10.5a7.464 7.464 0 0 1-1.15 3.993m1.989 3.559A11.209 11.209 0 0 0 8.25 10.5a3.75 3.75 0 1 1 7.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 0 1-3.6 9.75m6.633-4.596a18.666 18.666 0 0 1-2.485 5.33"
          />
        </svg>
      ),
      color: "from-purple-500 to-pink-600"
    },
    {
      id: 3,
      title: "Haal het maximale uit uw onderneming",
      description: "Ondernemen is nu anders dan vroeger. Waar ondernemers vaak niet bewust van zijn is dat vele processen slimmer kunnen door digitalisering.",
      detailedContent: "Met onze bedrijfsoptimalisatie services helpen we u het volledige potentieel van uw onderneming te benutten. We analyseren uw huidige werkprocessen en identificeren mogelijkheden voor automatisering en digitalisering die tijd en kosten besparen. Van CRM-implementatie en workflowoptimalisatie tot data-analyse en business intelligence - wij leveren de technologische oplossingen die uw efficiëntie verhogen en groei versnellen. Onze consultants werken nauw met u samen om innovatieve strategieën te ontwikkelen die passen bij uw specifieke bedrijfsdoelen.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.8}
          stroke="currentColor"
          className="size-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
          />
        </svg>
      ),
      color: "from-amber-500 to-orange-600"
    },
  ];

  // Functie om de geselecteerde feature in te stellen
  const handleFeatureClick = (id: number) => {
    setSelectedFeature(selectedFeature === id ? null : id);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative">
      {/* Decoratief element */}
      <div
        className="absolute rounded-full bg-gradient-to-r from-blue-200/10 to-purple-200/10 blur-xl hidden lg:block"
        style={{
          top: '30%',
          left: '10%',
          width: '300px',
          height: '300px',
          zIndex: 0,
        }}
      ></div>
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <span className="text-base font-medium bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600 inline-flex items-center justify-center">
            <span className="w-8 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mr-3 hidden sm:inline-block"></span>
            Waar wij voor staan
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">
            Wij nemen <span className="relative">
              al uw IT zorgen
              <span className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-blue-400/40 to-purple-500/40 rounded-full"></span>
            </span> op ons
          </h2>
          <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
            Laat ons uw digitale uitdagingen oplossen, zodat u zich kunt concentreren op het laten groeien van uw bedrijf.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Features kolom */}
          <div className="space-y-4">
            {features.map((feature) => (
              <div 
                key={feature.id}
                className={`
                  rounded-xl transition-all duration-200 cursor-pointer border 
                  ${selectedFeature === feature.id 
                    ? "border-transparent bg-white shadow-lg shadow-blue-100/40" 
                    : "border-gray-100 hover:border-transparent hover:bg-white hover:shadow"
                  }
                `}
                onClick={() => handleFeatureClick(feature.id)}
              >
                <div className="p-5">
                  <div className="flex gap-4">
                    <div className={`rounded-lg p-3 bg-gradient-to-r ${feature.color} text-white flex-shrink-0`}>
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className={`text-lg font-semibold ${
                        selectedFeature === feature.id 
                          ? "text-transparent bg-clip-text bg-gradient-to-r " + feature.color
                          : "text-gray-900"
                      }`}>
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 text-sm mt-1">
                        {feature.description}
                      </p>
                      <div className={`mt-2 text-sm font-medium flex items-center gap-1 
                        ${selectedFeature === feature.id 
                          ? `text-transparent bg-clip-text bg-gradient-to-r ${feature.color}`
                          : "text-gray-500"
                        }`}
                      >
                        <span>{selectedFeature === feature.id ? "Sluiten" : "Meer weten"}</span>
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          className={`w-4 h-4 transition-transform ${selectedFeature === feature.id ? "rotate-90" : ""}`}
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Detail content kolom */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden h-full">
            {selectedFeature ? (
              <div className="h-full">
                {/* Header van detail content */}
                <div className={`p-6 bg-gradient-to-r ${features.find(f => f.id === selectedFeature)?.color}`}>
                  <h3 className="text-xl font-bold text-white">
                    {features.find(f => f.id === selectedFeature)?.title}
                  </h3>
                </div>
                
                {/* Main content */}
                <div className="p-8">
                  <div className="prose prose-sm prose-gray max-w-none">
                    <p className="text-gray-700 leading-relaxed">
                      {features.find(f => f.id === selectedFeature)?.detailedContent}
                    </p>
                  </div>
                  
                  {/* CTA Button */}
                  <div className="mt-8">
                    <button
                      className={`py-2 px-6 rounded-lg bg-gradient-to-r ${features.find(f => f.id === selectedFeature)?.color} text-white text-sm font-medium`}
                    >
                      Vraag een gesprek aan
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-center h-full p-12">
                <div className="text-center">
                  <div className="mb-4 mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-gray-900">Selecteer een service</h3>
                  <p className="mt-2 text-sm text-gray-500">
                    Klik op één van onze services om meer informatie te bekijken.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

       </div>
    </section>
  );
};

export default FeaturesSection;