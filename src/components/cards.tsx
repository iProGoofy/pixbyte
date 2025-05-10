'use client';
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

// Type voor onze diensten
interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const WhatWeDoSection: React.FC = () => {
  const [activeService, setActiveService] = useState<number | null>(null);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Check if element is in viewport
  useEffect(() => {
    const currentRef = sectionRef.current;
  
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );
  
    if (currentRef) observer.observe(currentRef);
  
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);
  

  // Diensten data
  const services: Service[] = [
    {
      id: 1,
      title: "Websites",
      description: "Creatieve code, naadloze ervaringen. Wij ontwerpen en ontwikkelen websites die niet alleen visueel indrukwekkend zijn, maar ook optimaal presteren.",
      color: "from-blue-500 to-indigo-600",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.8}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
          />
        </svg>
      ),
    },
    {
      id: 2,
      title: "IT-Beheer",
      description: "Zorgeloos beheer, maximale prestaties. Laat ons uw IT-infrastructuur beheren, zodat u zich kunt concentreren op wat echt belangrijk is: uw bedrijf laten groeien.",
      color: "from-purple-500 to-pink-600",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.8}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"
          />
        </svg>
      ),
    },
    {
      id: 3,
      title: "Snelle Service",
      description: "Altijd snel, altijd betrouwbaar: service waar u op kunt rekenen. Onze responstijd is een van de beste in de branche en we staan 24/7 voor u klaar.",
      color: "from-amber-500 to-orange-600",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.8}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
      ),
    },
    {
      id: 4,
      title: "Kwaliteit",
      description: "Kwaliteit die u ziet, betrouwbaarheid die u voelt. Wij hanteren de hoogste standaarden in alles wat we doen, van codering tot klantenservice.",
      color: "from-emerald-500 to-teal-600",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.8}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z"
          />
        </svg>
      ),
    },
  ];

  // Animatie varianten
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
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

  // Functie om decoratieve blokken te genereren
  const renderDecorationBlocks = () => {
    return [...Array(5)].map((_, i) => (
      <div
        key={i}
        className={`absolute rounded-xl bg-gradient-to-r ${
          i % 2 === 0 ? "from-blue-200/20 to-purple-200/20" : "from-purple-200/20 to-blue-200/20"
        } blur-xl hidden lg:block`}
        style={{
          top: `${Math.random() * 80}%`,
          left: `${Math.random() * 80}%`,
          width: `${Math.random() * 100 + 100}px`,
          height: `${Math.random() * 100 + 100}px`,
          zIndex: 0,
          animationDuration: `${Math.random() * 10 + 20}s`,
          animationDelay: `${Math.random() * 5}s`,
          transform: `rotate(${Math.random() * 360}deg)`,
        }}
      ></div>
    ));
  };

  return (
    <section ref={sectionRef} className="relative w-full px-4 py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Decoratieve elementen */}
      {renderDecorationBlocks()}
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16 md:mb-20"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={titleVariants}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent">
            Wat kunnen wij voor u betekenen?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Ontdek hoe onze diensten uw bedrijf naar een hoger niveau tillen
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mt-6 rounded-full"></div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 lg:gap-8"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              className={`relative group rounded-xl bg-white p-6 transition-all duration-300 ${
                activeService === service.id
                  ? "shadow-xl scale-[1.02] z-10"
                  : "hover:shadow-lg hover:scale-[1.01]"
              }`}
              variants={itemVariants}
              onClick={() => setActiveService(activeService === service.id ? null : service.id)}
              onMouseEnter={() => setActiveService(service.id)}
              onMouseLeave={() => setActiveService(null)}
            >
              {/* Top decorative bar */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color} rounded-t-xl transform origin-left transition-all duration-300 ${
                activeService === service.id ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
              }`}></div>
              
              {/* Icon */}
              <div className={`w-14 h-14 rounded-lg flex items-center justify-center mb-5 transition-all duration-500 ${
                activeService === service.id 
                  ? `bg-gradient-to-r ${service.color} text-white rotate-3`
                  : "bg-gray-100 text-gray-700 group-hover:bg-gray-200"
              }`}>
                {service.icon}
              </div>
              
              {/* Content */}
              <h3 className={`text-xl md:text-2xl font-bold mb-3 transition-colors duration-300 ${
                activeService === service.id ? "text-transparent bg-clip-text bg-gradient-to-r " + service.color : "text-gray-800"
              }`}>
                {service.title}
              </h3>
              
              <p className="text-gray-600 transition-all duration-300">
                {activeService === service.id
                  ? service.description
                  : service.description.split(' ').slice(0, 6).join(' ') + '...'}
              </p>
              
              {/* Learn more indicator */}
              <div className={`mt-4 text-sm font-medium flex items-center transition-all duration-300 ${
                activeService === service.id ? `text-transparent bg-clip-text bg-gradient-to-r ${service.color}` : "text-gray-400"
              }`}>
                {activeService === service.id ? "Minder info" : "Meer informatie"}
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className={`ml-1 w-4 h-4 transition-transform duration-300 ${activeService === service.id ? "rotate-180" : ""}`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* CTA Sectie */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <a 
            href="/contact" 
            className="inline-flex items-center px-6 py-3 rounded-full bg-black text-white hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl hover:translate-y-[-2px] transform"
          >
            <span>Neem contact op</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;