'use client';
import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

interface Client {
  id: number;
  name: string;
  logo: string;
  url: string;
  description?: string;
}

const clients: Client[] = [
  {
    id: 1,
    name: 'CoachedByOsman',
    logo: '/img/clients/Coachedbyosman.png',
    url: 'https://www.coachedbyosman.nl',
    description: 'Coaching & Training'
  },
 
];

const ClientPortfolioSection: React.FC = () => {
  const controls = useAnimation();
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);


  // Check if mobile on mount and on resize


  // Intersection observer for animation
  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          controls.start('visible');
          setHasAnimated(true);
        }
      },
      { threshold: 0.2 }
    );
    
    observer.observe(node);
    return () => observer.disconnect();
  }, [controls, hasAnimated]);

  // Check scroll possibilities
  useEffect(() => {
    const checkScroll = () => {
      const container = scrollContainerRef.current;
      if (!container) return;
      
      setCanScrollLeft(container.scrollLeft > 0);
      setCanScrollRight(
        container.scrollLeft < container.scrollWidth - container.clientWidth - 5
      );
    };

    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScroll);
      checkScroll(); // Initial check
      
      // Also check after images might have loaded
      setTimeout(checkScroll, 500);
    }
    
    return () => container?.removeEventListener('scroll', checkScroll);
  }, []);

  // Scroll handlers
  const scrollLeft = () => {
    const container = scrollContainerRef.current;
    if (container) {
      const clientWidth = container.clientWidth;
      container.scrollBy({ left: -clientWidth / 2, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    const container = scrollContainerRef.current;
    if (container) {
      const clientWidth = container.clientWidth;
      container.scrollBy({ left: clientWidth / 2, behavior: 'smooth' });
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  const clientVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" } 
    }
  };

  // Handle manual navigation for mobile carousel
  const handleNextClient = () => {
    if (activeIndex < clients.length - 1) {
      setActiveIndex(activeIndex + 1);
    }
  };

  const handlePrevClient = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-16 sm:py-20 md:py-28 bg-gradient-to-b from-white to-gray-50 overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500/10 via-purple-500/20 to-blue-500/10"></div>
      <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-gradient-to-r from-purple-200/30 to-blue-200/30 blur-xl hidden lg:block"></div>
      <div className="absolute bottom-10 right-10 w-48 h-48 rounded-full bg-gradient-to-l from-blue-200/20 to-purple-200/20 blur-xl hidden lg:block"></div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="max-w-7xl mx-auto"
        >
          {/* Header Section */}
          <motion.div 
            variants={headerVariants}
            className="text-center mb-10 md:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 bg-clip-text text-transparent tracking-tight">
              Onze trotse klanten
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Samenwerkingen die leiden tot succesvolle digitale transformaties
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-5 rounded-full"></div>
          </motion.div>

          {/* Desktop View - Horizontal Scrollable Clients */}
          <motion.div 
            variants={headerVariants}
            className="relative hidden md:block"
          >
            {/* Navigation Controls */}
            <div className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-6 z-10">
              <button
                onClick={scrollLeft}
                disabled={!canScrollLeft}
                className={`flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-lg 
                  ${canScrollLeft ? 'hover:bg-gray-50 text-gray-800' : 'text-gray-300 cursor-not-allowed'} 
                  transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
                aria-label="Scroll left"
              >
                <ChevronLeft size={24} />
              </button>
            </div>
            
            <div className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-6 z-10">
              <button
                onClick={scrollRight}
                disabled={!canScrollRight}
                className={`flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-lg 
                  ${canScrollRight ? 'hover:bg-gray-50 text-gray-800' : 'text-gray-300 cursor-not-allowed'} 
                  transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
                aria-label="Scroll right"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Client Cards Container */}
            <div 
              ref={scrollContainerRef}
              className="flex gap-6 overflow-x-auto pb-8 px-2 snap-x snap-mandatory scrollbar-hide"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              <style jsx global>{`
                /* Hide scrollbar for Chrome, Safari and Opera */
                .scrollbar-hide::-webkit-scrollbar {
                  display: none;
                }
              `}</style>
              
              {clients.map((client) => (
                <motion.a
                  key={client.id}
                  href={client.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={clientVariants}
                  className="flex-shrink-0 snap-center rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 p-6 w-80 h-64 flex flex-col items-center justify-between group border border-gray-100"
                  whileHover={{ 
                    y: -5, 
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" 
                  }}
                >
                  <div className="relative w-full h-28 flex items-center justify-center">
                    <Image
                      src={client.logo}
                      alt={client.name}
                      fill
                      className="object-contain p-2 filter transition-all duration-300 group-hover:brightness-110"
                    />
                  </div>
                  
                  <div className="text-center mt-6 w-full">
                    <h3 className="font-bold text-gray-800 text-xl mb-2 group-hover:text-blue-600 transition-colors">
                      {client.name}
                    </h3>
                    {client.description && (
                      <p className="text-base text-gray-600 font-medium">{client.description}</p>
                    )}
                  </div>
                  
                  <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <div className="flex items-center text-sm font-medium text-blue-600 border border-blue-200 px-3 py-1 rounded-full bg-blue-50">
                      <span className="mr-1">Bekijk website</span>
                      <ExternalLink size={14} />
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Mobile View - Carousel */}
          <motion.div 
            variants={headerVariants}
            className="md:hidden"
          >
            <div className="relative px-4">
              {/* Mobile Navigation Controls */}
              <div className="absolute top-1/2 -translate-y-1/2 -left-2 z-10">
                <button
                  onClick={handlePrevClient}
                  disabled={activeIndex === 0}
                  className={`flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-md 
                    ${activeIndex > 0 ? 'text-gray-800' : 'text-gray-300 cursor-not-allowed'} 
                    transition-all duration-200`}
                  aria-label="Previous client"
                >
                  <ChevronLeft size={20} />
                </button>
              </div>
              
              <div className="absolute top-1/2 -translate-y-1/2 -right-2 z-10">
                <button
                  onClick={handleNextClient}
                  disabled={activeIndex >= clients.length - 1}
                  className={`flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-md 
                    ${activeIndex < clients.length - 1 ? 'text-gray-800' : 'text-gray-300 cursor-not-allowed'} 
                    transition-all duration-200`}
                  aria-label="Next client"
                >
                  <ChevronRight size={20} />
                </button>
              </div>

              {/* Mobile Client Card */}
              <div className="flex justify-center">
                <AnimatePresence mode="wait">
                  <motion.a
                    key={`mobile-client-${activeIndex}`}
                    href={clients[activeIndex].url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl bg-white shadow-lg p-6 w-full max-w-xs h-64 flex flex-col items-center justify-between border border-gray-100"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.25 }}
                  >
                    <div className="relative w-full h-28 flex items-center justify-center">
                      <Image
                        src={clients[activeIndex].logo}
                        alt={clients[activeIndex].name}
                        fill
                        className="object-contain p-2"
                      />
                    </div>
                    
                    <div className="text-center mt-6 w-full">
                      <h3 className="font-bold text-gray-800 text-xl mb-2">
                        {clients[activeIndex].name}
                      </h3>
                      {clients[activeIndex].description && (
                        <p className="text-base text-gray-600 font-medium">{clients[activeIndex].description}</p>
                      )}
                    </div>
                    
                    <div className="mt-4 flex items-center text-sm font-medium text-blue-600 border border-blue-200 px-3 py-1 rounded-full bg-blue-50">
                      <span className="mr-1">Bekijk website</span>
                      <ExternalLink size={14} />
                    </div>
                  </motion.a>
                </AnimatePresence>
              </div>

              {/* Mobile Pagination Indicators */}
              <div className="flex justify-center mt-6 space-x-2">
                {clients.map((_, index) => (
                  <button
                    key={`indicator-${index}`}
                    onClick={() => setActiveIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      activeIndex === index 
                        ? 'bg-blue-600 w-6' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to client ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            variants={headerVariants}
            className="mt-16 text-center"
          >
            <a 
              href="/projecten" 
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg font-medium rounded-md shadow-md hover:shadow-lg transition-all duration-300 group"
            >
              <span>Bekijk onze projecten</span>
              <ChevronRight size={18} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ClientPortfolioSection;