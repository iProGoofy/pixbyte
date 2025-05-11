'use client';
import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const [isInView, setIsInView] = useState(false);
  const footerRef = useRef<HTMLDivElement>(null);

  // Check if element is in viewport
  useEffect(() => {
    const node = footerRef.current;
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

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  // Footer navigation links
  const footerNavs = [
    {
      title: "Navigatie",
      items: [
        { name: "Home", href: "#" },
        { name: "Diensten", href: "#" },
        { name: "Over ons", href: "#" },
        { name: "Projecten", href: "#" },
        { name: "Contact", href: "#" },
      ],
    },
    {
      title: "Diensten",
      items: [
        { name: "Web Development", href: "#" },
        { name: "Branding", href: "#" },
        { name: "Digitale Strategie", href: "#" },
        { name: "SEO Optimalisatie", href: "#" },
      ],
    },
    {
      title: "Informatie",
      items: [
        { name: "Prijzen", href: "#" },
        { name: "FAQ", href: "#" },
        { name: "Vacatures", href: "#" },
        { name: "Privacy beleid", href: "#" },
      ],
    },
  ];

  // Render decorative elements with fixed positions to avoid hydration errors
  const renderDecorationElements = () => {
    // Use predefined positions instead of random values
    const positions = [
      { bottom: '20%', left: '15%', width: '250px', height: '250px' },
      { bottom: '60%', left: '75%', width: '180px', height: '180px' },
    ];
    
    return positions.map((pos, i) => (
      <div
        key={i}
        className={`absolute rounded-full bg-gradient-to-r ${
          i % 2 === 0 ? "from-blue-100/30 to-purple-100/30" : "from-purple-100/30 to-blue-100/30"
        } blur-xl hidden lg:block`}
        style={{
          bottom: pos.bottom,
          left: pos.left,
          width: pos.width,
          height: pos.height,
          zIndex: 0,
        }}
      ></div>
    ));
  };

  return (
    <footer ref={footerRef} className="bg-white relative">
      {/* Decorative elements */}
      {renderDecorationElements()}
      
      {/* Top wave separator */}
      <div className="w-full overflow-hidden">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="relative w-full h-12 text-gray-50"
          fill="currentColor"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>
      
      {/* Main footer section */}
      <motion.div 
        className="px-4 pt-12 pb-8 mx-auto sm:px-6 lg:px-8 max-w-7xl relative z-10"
        initial="hidden"
        viewport={{ once: true }}
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Company info */}
          <motion.div className="lg:col-span-4" variants={itemVariants}>
            <Link href="#" className="flex items-center">
                                <Image 
                                  src="/img/logo.svg" 
                                  alt="PixByte Logo" 
                                  width={70} 
                                  height={70} 
                                  className="transition-transform duration-500 group-hover:rotate-3"
                                />
              <span className="ml-3 text-xl font-bold text-gray-900">PIXBYTE</span>
            </Link>
            
            <p className="mt-6 text-base text-gray-600 max-w-md">
              Wij zijn gespecialiseerd in het ontwikkelen van moderne websites, digitale oplossingen op maat en effectieve merkstrategieën voor ambitieuze ondernemers.
            </p>
            
            <div className="flex mt-8 space-x-4">
              <a 
                href="#" 
                className="p-2 text-gray-600 transition-all duration-300 bg-white rounded-full hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:text-white shadow-sm border border-gray-200"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557a9.94 9.94 0 0 1-2.828.775A4.932 4.932 0 0 0 23.337 3c-.951.564-2.005.974-3.127 1.195a4.916 4.916 0 0 0-8.379 4.482A13.944 13.944 0 0 1 1.671 3.149a4.916 4.916 0 0 0 1.523 6.556 4.897 4.897 0 0 1-2.229-.616v.06a4.916 4.916 0 0 0 3.946 4.827 4.902 4.902 0 0 1-2.224.084 4.918 4.918 0 0 0 4.588 3.417A9.867 9.867 0 0 1 0 19.54 13.945 13.945 0 0 0 7.548 21c9.056 0 14.01-7.496 14.01-13.986 0-.213-.004-.425-.014-.637A10.012 10.012 0 0 0 24 4.557z" />
                </svg>
              </a>

              <a 
                href="#" 
                className="p-2 text-gray-600 transition-all duration-300 bg-white rounded-full hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:text-white shadow-sm border border-gray-200"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7.75 2A5.75 5.75 0 0 0 2 7.75v8.5A5.75 5.75 0 0 0 7.75 22h8.5A5.75 5.75 0 0 0 22 16.25v-8.5A5.75 5.75 0 0 0 16.25 2h-8.5zM4 7.75A3.75 3.75 0 0 1 7.75 4h8.5A3.75 3.75 0 0 1 20 7.75v8.5A3.75 3.75 0 0 1 16.25 20h-8.5A3.75 3.75 0 0 1 4 16.25v-8.5zm8 1.25a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm0 1.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zm4.75-2.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0z" />
                </svg>
              </a>

              <a 
                href="#" 
                className="p-2 text-gray-600 transition-all duration-300 bg-white rounded-full hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:text-white shadow-sm border border-gray-200"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14C2.2 0 1 1.2 1 2.6v18.8C1 22.8 2.2 24 4 24h16c1.8 0 3-1.2 3-2.6V2.6C23 1.2 21.8 0 20 0zM7.8 20H4.6V9h3.2v11zM6.2 7.5c-1 0-1.8-.8-1.8-1.8S5.2 3.9 6.2 3.9s1.8.8 1.8 1.8c0 1-.8 1.8-1.8 1.8zM20 20h-3.2v-5.7c0-1.4-.5-2.3-1.8-2.3-1 0-1.6.7-1.8 1.4-.1.2-.1.5-.1.8V20H10v-11h3.2v1.5c.4-.7 1.3-1.7 3-1.7 2.2 0 3.8 1.5 3.8 4.6V20z" />
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Navigation links */}
          <motion.div className="grid grid-cols-1 gap-8 sm:grid-cols-3 lg:col-span-8" variants={itemVariants}>
            {footerNavs.map((nav, index) => (
              <div key={index}>
                <h3 className="text-sm font-semibold tracking-wider uppercase text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  {nav.title}
                </h3>
                <div className="flex flex-col mt-4 space-y-2">
                  {nav.items.map((item, idx) => (
                    <Link 
                      key={idx} 
                      href={item.href}
                      className="text-base text-gray-600 transition-colors duration-300 hover:text-blue-500"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Newsletter */}
        <motion.div 
          className="mt-16 border-t border-gray-200 pt-8" 
          variants={itemVariants}
        >
          <div className="lg:flex lg:items-center lg:justify-between">
            <div>
              <h3 className="text-lg font-medium text-gray-900">Blijf op de hoogte</h3>
              <p className="mt-2 text-base text-gray-600 max-w-md">
                Meld je aan voor onze nieuwsbrief en ontvang als eerste de nieuwste inzichten en aanbiedingen.
              </p>
            </div>
            <div className="mt-6 lg:mt-0">
              <div className="flex flex-col sm:flex-row sm:space-x-4">
                <input
                  type="email"
                  className="px-5 py-3 text-base text-gray-900 placeholder-gray-500 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Email adres"
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center px-6 py-3 mt-4 sm:mt-0 text-base font-medium text-white transition-all duration-300 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  <span>Inschrijven</span>
                  <svg
                    className="w-5 h-5 ml-2 -mr-1"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact info and badge */}
        <motion.div
          className="mt-8 lg:flex lg:items-center lg:justify-between border-t border-gray-200 pt-8" 
          variants={itemVariants}
        >
          <div className="flex flex-col space-y-4 lg:space-y-0 lg:flex-row lg:space-x-8">
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="ml-2 text-gray-600">info@pixbyte.nl</span>
            </div>
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="ml-2 text-gray-600">+31 6 19114370</span>
            </div>
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="ml-2 text-gray-600">Rembrandtstraat 8, Venlo</span>
            </div>
          </div>

          {/* Badge */}
          <div className="mt-8 lg:mt-0">
            <div className="inline-flex items-center px-4 py-2 space-x-2 bg-gray-100 rounded-full">
              <div className="flex items-center justify-center w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full">
                <svg className="w-3 h-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-sm font-medium text-gray-900">Betrouwbare digitale partner</span>
            </div>
          </div>
        </motion.div>

        {/* Copyright */}
        <motion.div 
          className="pt-8 mt-8 border-t border-gray-200" 
          variants={itemVariants}
        >
          <p className="text-base text-center text-gray-500">
            &copy; {new Date().getFullYear()} PixByte. Alle rechten voorbehouden.
          </p>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;