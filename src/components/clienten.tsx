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
  description?: string; // Optionele korte beschrijving
}

const clients: Client[] = [
  {
    id: 1,
    name: 'Klant A',
    logo: '/img/clients/klant-a.png',
    url: 'https://www.klant-a.nl',
    description: 'Web Development & Branding'
  },
  {
    id: 2,
    name: 'Klant B',
    logo: '/img/clients/klant-b.png',
    url: 'https://www.klant-b.nl',
    description: 'E-commerce Solutions'
  },
  {
    id: 3,
    name: 'Klant C',
    logo: '/img/clients/klant-c.png',
    url: 'https://www.klant-c.nl',
    description: 'Mobile App Development'
  },
  {
    id: 4,
    name: 'Klant D',
    logo: '/img/clients/klant-d.png',
    url: 'https://www.klant-d.nl',
    description: 'UI/UX Design'
  },
  {
    id: 5,
    name: 'Klant E',
    logo: '/img/clients/klant-e.png',
    url: 'https://www.klant-e.nl',
    description: 'Digital Marketing'
  },
  {
    id: 6,
    name: 'Klant F',
    logo: '/img/clients/klant-f.png',
    url: 'https://www.klant-f.nl',
    description: 'CMS Implementation'
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
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile on mount and on resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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

  // Get clients to display (either all for desktop or active chunk for mobile)


  // Handle manual navigation for mobile carousel
  const handleNextClient = () => {
    if (activeIndex < Math.ceil(clients.length / 1) - 1) {
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 bg-clip-text text-transparent tracking-tight">
              Onze trotse klanten
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Samenwerkingen die leiden tot succesvolle digitale transformaties
            </p>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-5 rounded-full"></div>
          </motion.div>

          {/* Desktop View - Horizontal Scrollable Clients */}
          <motion.div 
            variants={headerVariants}
            className="relative hidden md:block"
          >
            {/* Navigation Controls */}
            <div className="absolute top-1/2 -translate-y-1/2 -left-3 md:-left-5 z-10">
              <button
                onClick={scrollLeft}
                disabled={!canScrollLeft}
                className={`flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-lg 
                  ${canScrollLeft ? 'hover:bg-gray-50 text-gray-800' : 'text-gray-300 cursor-not-allowed'} 
                  transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
                aria-label="Scroll left"
              >
                <ChevronLeft size={20} />
              </button>
            </div>
            
            <div className="absolute top-1/2 -translate-y-1/2 -right-3 md:-right-5 z-10">
              <button
                onClick={scrollRight}
                disabled={!canScrollRight}
                className={`flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-lg 
                  ${canScrollRight ? 'hover:bg-gray-50 text-gray-800' : 'text-gray-300 cursor-not-allowed'} 
                  transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
                aria-label="Scroll right"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            {/* Client Cards Container */}
            <div 
              ref={scrollContainerRef}
              className="flex gap-6 overflow-x-auto pb-8 px-1 snap-x snap-mandatory scrollbar-hide"
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
                  className="flex-shrink-0 snap-center rounded-xl bg-white shadow-md hover:shadow-xl transition-all duration-300 p-6 w-64 h-48 flex flex-col items-center justify-between group border border-gray-100"
                  whileHover={{ 
                    y: -5, 
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" 
                  }}
                >
                  <div className="relative w-full h-20 flex items-center justify-center">
                    <Image
                      src={client.logo}
                      alt={client.name}
                      fill
                      className="object-contain p-2 filter transition-all duration-300 group-hover:brightness-110"
                    />
                  </div>
                  
                  <div className="text-center mt-4">
                    <h3 className="font-semibold text-gray-800 text-lg mb-1 group-hover:text-blue-600 transition-colors">
                      {client.name}
                    </h3>
                    {client.description && (
                      <p className="text-sm text-gray-500">{client.description}</p>
                    )}
                  </div>
                  
                  <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <div className="flex items-center text-xs font-medium text-blue-600">
                      <span className="mr-1">Bekijk</span>
                      <ExternalLink size={12} />
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
                  className={`flex items-center justify-center w-8 h-8 rounded-full bg-white shadow-md 
                    ${activeIndex > 0 ? 'text-gray-800' : 'text-gray-300 cursor-not-allowed'} 
                    transition-all duration-200`}
                  aria-label="Previous client"
                >
                  <ChevronLeft size={16} />
                </button>
              </div>
              
              <div className="absolute top-1/2 -translate-y-1/2 -right-2 z-10">
                <button
                  onClick={handleNextClient}
                  disabled={activeIndex >= clients.length - 1}
                  className={`flex items-center justify-center w-8 h-8 rounded-full bg-white shadow-md 
                    ${activeIndex < clients.length - 1 ? 'text-gray-800' : 'text-gray-300 cursor-not-allowed'} 
                    transition-all duration-200`}
                  aria-label="Next client"
                >
                  <ChevronRight size={16} />
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
                    className="rounded-xl bg-white shadow-md p-6 w-full max-w-xs h-48 flex flex-col items-center justify-between border border-gray-100"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.25 }}
                  >
                    <div className="relative w-full h-20 flex items-center justify-center">
                      <Image
                        src={clients[activeIndex].logo}
                        alt={clients[activeIndex].name}
                        fill
                        className="object-contain p-2"
                      />
                    </div>
                    
                    <div className="text-center mt-4">
                      <h3 className="font-semibold text-gray-800 text-lg mb-1">
                        {clients[activeIndex].name}
                      </h3>
                      {clients[activeIndex].description && (
                        <p className="text-sm text-gray-500">{clients[activeIndex].description}</p>
                      )}
                    </div>
                    
                    <div className="mt-3 flex items-center text-xs font-medium text-blue-600">
                      <span className="mr-1">Bekijk</span>
                      <ExternalLink size={12} />
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
                        ? 'bg-blue-600 w-4' 
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
            className="mt-14 text-center"
          >
            <a 
              href="/projecten" 
              className="inline-flex items-center px-5 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-md shadow-md hover:shadow-lg transition-all duration-300 group"
            >
              <span>Bekijk onze projecten</span>
              <ChevronRight size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ClientPortfolioSection;