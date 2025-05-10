'use client';
import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';

const FeaturesSection: React.FC = () => {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeFeature, setActiveFeature] = useState<number | null>(null);

  // Vereenvoudigde IntersectionObserver - alleen laden wanneer nodig
  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isInView) {
          setIsInView(true);
          // Verwijder observer na activatie om verdere berekeningen te voorkomen
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
  
    observer.observe(node);
    return () => observer.disconnect();
  }, [isInView]);

  // Feature items data
  const features = [
    {
      id: 1,
      title: "Web Development",
      description: "Wereldwijd zijn er 4,57 miljard internetgebruikers, waarvan de helft van het gebruik via de telefoon is. Social media vormt 25% van alle digitale media consumptie. U merkt al dat in dit digitale tijdperk een sterke online aanwezigheid onmisbaar is.",
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
      description: "Een succesvolle onderneming begint bij een identiteit. Hiervoor is een duidelijke merkstrategie nodig. Waar staat uw merk voor? Schept u wel de juiste verwachtingen voor uw merk? Valt u op in de markt?",
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
      description: "Ondernemen is nu anders dan vroeger. Waar ondernemers vaak niet bewust van zijn is dat vele processen slimmer kunnen door digitalisering en het gebruik van slimme methodieken.",
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

  // Verminder complexiteit door slechts één decoratief element te gebruiken
  const decorationElement = 
    <div
      className="absolute rounded-full bg-gradient-to-r from-blue-200/10 to-purple-200/10 blur-xl hidden lg:block"
      style={{
        top: '30%',
        left: '10%',
        width: '300px',
        height: '300px',
        zIndex: 0,
      }}
    ></div>;

  // CSS klassen genereren op basis van isInView (geen complexe animaties meer)
  const getContentClasses = () => {
    return `transition-opacity duration-700 ${isInView ? 'opacity-100' : 'opacity-0'}`;
  };

  return (
    <section 
      ref={sectionRef} 
      className="py-24 overflow-hidden bg-gradient-to-b from-white to-gray-50 relative"
    >
      {/* Beperkt tot één decoratief element */}
      {decorationElement}
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 gap-14 items-center lg:grid-cols-12 lg:gap-16">
          {/* Linker kolom - Tekst en features */}
          <div 
            className={`w-full xl:col-span-5 lg:col-span-6 2xl:-mx-5 xl:-mx-0 ${getContentClasses()}`}
            style={{ transitionDelay: '100ms' }}
          >
            <div className="relative">
              <span className="text-base font-medium bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600 mb-2 block lg:text-left inline-flex items-center">
                <span className="w-8 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mr-3 hidden lg:inline-block"></span>
                Waar wij voor staan
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 sm:leading-[3.25rem] lg:text-left">
                Wij nemen <span className="relative">
                  al uw IT zorgen
                  <span className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-blue-400/40 to-purple-500/40 rounded-full"></span>
                </span> op ons
              </h2>
              <p className="text-gray-600 mt-4 text-lg max-w-xl">
                Laat ons uw digitale uitdagingen oplossen, zodat u zich kunt concentreren op het laten groeien van uw bedrijf.
              </p>
            </div>

            <div className="space-y-8 mt-12">
              {features.map((feature) => (
                <div 
                  key={feature.id}
                  className={`p-5 rounded-xl transition-all duration-300 ${
                    activeFeature === feature.id 
                      ? "bg-white shadow-xl shadow-blue-100/30 scale-[1.02]" 
                      : "hover:bg-white hover:shadow-lg"
                  }`}
                  onClick={() => setActiveFeature(activeFeature === feature.id ? null : feature.id)}

                >
                  <div className="flex gap-5">
                    <div className={`rounded-lg p-3 bg-gradient-to-r ${feature.color} text-white flex-shrink-0 shadow-lg`}>
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className={`text-lg font-semibold mb-3 transition-colors duration-300 ${
                        activeFeature === feature.id 
                          ? "text-transparent bg-clip-text bg-gradient-to-r " + feature.color
                          : "text-gray-900"
                      }`}>
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-sm">
                        {feature.description}
                      </p>
                      <div className={`mt-4 text-sm font-medium flex items-center gap-2 ${
                        activeFeature === feature.id 
                          ? `text-transparent bg-clip-text bg-gradient-to-r ${feature.color}`
                          : "text-gray-500"
                      }`}>
                        <span>Meer weten</span>
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          className="w-4 h-4"
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
              ))}
            </div>
          </div>

          {/* Rechter kolom - Afbeelding */}
          <div 
            className={`w-full xl:col-span-7 lg:col-span-6 lg:block ${getContentClasses()}`}
            style={{ transitionDelay: '300ms' }}
          >
            <div className="relative w-full">
              {/* Eenvoudigere decoratieve elementen */}
              <div className="absolute -top-12 -right-12 w-64 h-64 bg-gradient-to-r from-blue-200/20 to-purple-200/20 rounded-full blur-3xl"></div>
              
              {/* Geoptimaliseerde afbeelding */}
              <div className="relative">
                <Image
                  priority={false}
                  src="/img/coding.png"
                  alt="Feature section"
                  width={1200}
                  height={800}
                  className="w-full rounded-2xl lg:h-auto object-cover shadow-xl shadow-blue-200/40"
                />
                
                {/* Vereenvoudigde elementen - alleen tonen op desktop */}
                <div className="absolute top-4 left-4 lg:flex hidden items-center gap-2 bg-white p-3 rounded-xl shadow-md">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="font-medium text-sm text-black">Custom Code</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;