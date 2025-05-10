'use client';
import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const FeaturesSection: React.FC = () => {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeFeature, setActiveFeature] = useState<number | null>(null);

  // Check if element is in viewport
  useEffect(() => {
    const node = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );
  
    if (node) {
      observer.observe(node);
    }
  
    return () => {
      if (node) {
        observer.unobserve(node);
      }
    };
  }, []);
  

  // Feature items data
  const features = [
    {
      id: 1,
      title: "Web Development",
      description: "Wereldwijd zijn er 4,57 miljard internetgebruikers, waarvan de helft van het gebruik via de telefoon is. Social media vormt 25% van alle digitale media consumptie. U merkt al dat in dit digitale tijdperk een sterke online aanwezigheid onmisbaar is. Er rest alleen de vraag nog hoe u gaat opvallen tussen alle anderen.",
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
      description: "Een succesvolle onderneming begint bij een identiteit. Hiervoor is een duidelijke merkstrategie nodig. Waar staat uw merk voor? Schept u wel de juiste verwachtingen voor uw merk? Valt u op in de markt? Bij een goede branding beantwoordt uw merk al deze vragen voor u.",
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
      description: "Ondernemen is nu anders dan vroeger. Waar ondernemers vaak niet bewust van zijn is dat vele processen slimmer kunnen door digitalisering en het gebruik van slimme methodieken. Bent u bewust van wat er beter kan, of loopt u achter de feiten aan?",
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

  // Animatie varianten
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.3,
      },
    },
  };

  // Functie om decoratieve elementen te genereren
  const renderDecorationElements = () => {
    return [...Array(3)].map((_, i) => (
      <div
        key={i}
        className={`absolute rounded-full bg-gradient-to-r ${
          i % 2 === 0 ? "from-blue-200/10 to-purple-200/10" : "from-purple-200/10 to-blue-200/10"
        } blur-xl hidden lg:block`}
        style={{
          top: `${10 + Math.random() * 70}%`,
          left: `${Math.random() * 40}%`,
          width: `${Math.random() * 300 + 100}px`,
          height: `${Math.random() * 300 + 100}px`,
          zIndex: 0,
          animationDuration: `${Math.random() * 20 + 10}s`,
          animationDelay: `${Math.random() * 5}s`,
        }}
      ></div>
    ));
  };

  return (
    <section 
      ref={sectionRef} 
      className="py-24 overflow-hidden bg-gradient-to-b from-white to-gray-50 relative"
    >
      {/* Decoratieve elementen */}
      {renderDecorationElements()}
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 gap-14 items-center lg:grid-cols-12 lg:gap-16">
          <motion.div 
            className="w-full xl:col-span-5 lg:col-span-6 2xl:-mx-5 xl:-mx-0"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <motion.div 
              className="relative"
              variants={titleVariants}
            >
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
            </motion.div>

            <motion.div 
              className="space-y-8 mt-12"
              variants={containerVariants}
            >
              {features.map((feature) => (
                <motion.div 
                  key={feature.id}
                  className={`p-5 rounded-xl transition-all duration-300 ${
                    activeFeature === feature.id 
                      ? "bg-white shadow-xl shadow-blue-100/30 scale-[1.02]" 
                      : "hover:bg-white hover:shadow-lg"
                  }`}
                  variants={itemVariants}
                  onMouseEnter={() => setActiveFeature(feature.id)}
                  onMouseLeave={() => setActiveFeature(null)}
                  onClick={() => setActiveFeature(activeFeature === feature.id ? null : feature.id)}
                >
                  <div className="flex gap-5">
                    <div className={`rounded-lg p-3 bg-gradient-to-r ${feature.color} text-white flex-shrink-0 shadow-lg transform transition-all duration-300 ${
                      activeFeature === feature.id ? "rotate-6 scale-110" : ""
                    }`}>
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
                          className={`w-4 h-4 transition-transform duration-300 ${
                            activeFeature === feature.id ? "translate-x-1" : ""
                          }`}
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Afbeelding met floating effect */}
          <motion.div 
            className="w-full xl:col-span-7 lg:col-span-6 lg:block"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={imageVariants}
          >
            <div className="relative w-full">
              {/* Decorative circle backdrop */}
              <div className="absolute -top-12 -right-12 w-64 h-64 bg-gradient-to-r from-blue-200/20 to-purple-200/20 rounded-full blur-3xl"></div>
              
              {/* Main image */}
              <div className="relative">
                <Image
                priority={false}
                  src="/img/coding.png"
                  alt="Feature tailwind section"
                  width={1200}
                  height={800}
                  className="w-full rounded-2xl lg:h-auto object-cover shadow-2xl shadow-blue-200/40"
                  style={{
                    animation: "float 6s ease-in-out infinite",
                  }}
                />
                
                {/* Floating elements */}
                <div className="absolute -top-8 -left-8 lg:flex hidden items-center gap-2 bg-white p-4 rounded-xl shadow-lg animate-bounce-slow">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                    </svg>
                  </div>
                  <span className="font-medium text-sm">100% Custom Code</span>
                </div>
                
                <div className="absolute -bottom-6 right-12 lg:flex hidden items-center gap-2 bg-white p-4 rounded-xl shadow-lg animate-pulse-slow">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                    </svg>
                  </div>
                  <span className="font-medium text-sm">Snelle Levering</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Custom animation styles */}
      <style jsx global>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }
        .animate-bounce-slow {
          animation: bounce 5s infinite ease-in-out;
        }
        .animate-pulse-slow {
          animation: pulse 5s infinite cubic-bezier(0.4, 0, 0.6, 1);
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }
      `}</style>
    </section>
  );
};

export default FeaturesSection;