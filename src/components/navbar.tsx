'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  // Je kunt hier extra props toevoegen indien nodig
}

const Navbar: React.FC<NavbarProps> = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('/');

  // Effect voor scroll detectie - voegt schaduw en kleiner formaat toe bij scrollen
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Zet de huidige pagina als active link bij initialisatie
    if (typeof window !== 'undefined') {
      setActiveLink(window.location.pathname);
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Navigatie links
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Over ons', path: '/over-ons' },
    { name: 'Prijzen', path: '/prijzen' },
  ];

  // Animatie varianten voor menu items
  const menuItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    }),
    exit: { opacity: 0, y: -10 }
  };

  // Animatie voor underline indicator
  const underlineVariants = {
    hidden: { width: 0, opacity: 0 },
    visible: { width: '100%', opacity: 1, transition: { duration: 0.3 } }
  };

  // Mobiel menu varianten
  const mobileMenuVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: { 
      height: 'auto', 
      opacity: 1,
      transition: { 
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    },
    exit: { 
      height: 0, 
      opacity: 0,
      transition: { 
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    }
  };

  const mobileItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, x: -20, transition: { duration: 0.2 } }
  };

  return (
    <header className="w-full fixed top-0 z-50">
      <div 
        className={`w-full backdrop-blur-md transition-all duration-500 ${
          scrolled 
            ? 'bg-white/95 shadow-lg shadow-blue-100/20' 
            : 'bg-white/80'
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <nav className={`flex items-center justify-between transition-all duration-300 ${
            scrolled ? 'h-16' : 'h-20'
          }`}>
            {/* Logo met slogan */}
            <Link href="/" className="flex items-center group">
              <div className="flex items-center">
                <div className={`mr-3 relative transition-all duration-300 ${
                  scrolled ? 'scale-90' : 'scale-100'
                }`}>
                  {/* Logo - vervang dit met je eigen logo */}
                  <Image 
                    src="/img/logo.svg" 
                    alt="PixByte Logo" 
                    width={70} 
                    height={70} 
                    className="transition-transform duration-500 group-hover:rotate-3"
                  />
                </div>
                <div>
                  <div className="text-lg font-bold bg-gradient-to-br from-blue-500 to-purple-600 bg-clip-text text-transparent transition-all">
                    PixByte
                  </div>
                  <div className="text-xs text-gray-500 font-medium">
                    Transformeer uw digitale visie
                  </div>
                </div>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-2">
              {navLinks.map((link, index) => (
                <div key={link.path} className="relative">
                  <Link 
                    href={link.path}
                    className={`px-4 py-2 text-sm font-medium transition-colors relative ${
                      activeLink === link.path 
                        ? 'text-blue-600' 
                        : 'text-gray-700 hover:text-blue-600'
                    }`}
                    onClick={() => setActiveLink(link.path)}
                  >
                    <motion.span
                      initial="hidden"
                      animate="visible"
                      custom={index}
                      variants={menuItemVariants}
                    >
                      {link.name}
                    </motion.span>
                    
                    {/* Active indicator */}
                    {activeLink === link.path && (
                      <motion.span 
                        className="absolute bottom-0 left-0 right-0 mx-auto h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"
                        initial="hidden"
                        animate="visible"
                        variants={underlineVariants}
                      />
                    )}
                  </Link>
                </div>
              ))}
              
              {/* Contact button with nice gradient and animation */}
              <Link href="/contact" className="ml-3">
                <motion.button 
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-5 py-2 rounded-lg font-medium text-sm transition-all shadow-md hover:shadow-lg hover:shadow-blue-200"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Contact
                </motion.button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button 
                onClick={toggleMenu}
                className="p-2 focus:outline-none rounded-md"
                aria-label="Menu"
              >
                <div className="w-6 flex flex-col items-end justify-center gap-1.5 relative">
                  <span className={`block h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-300 ease-out ${
                    isMobileMenuOpen ? 'w-6 rotate-45 translate-y-2' : 'w-6'
                  }`}></span>
                  <span className={`block h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full transition-all duration-300 ease-out ${
                    isMobileMenuOpen ? 'opacity-0' : 'w-4'
                  }`}></span>
                  <span className={`block h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-300 ease-out ${
                    isMobileMenuOpen ? 'w-6 -rotate-45 -translate-y-2' : 'w-5'
                  }`}></span>
                </div>
              </button>
            </div>
          </nav>
        </div>
      </div>

      {/* Mobile Menu with framer-motion for smooth animations */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            className="md:hidden bg-white/95 backdrop-blur-md w-full shadow-lg overflow-hidden"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={mobileMenuVariants}
          >
            <div className="container mx-auto px-4">
              <div className="py-2">
                {navLinks.map((link) => (
                  <motion.div key={link.path} variants={mobileItemVariants}>
                    <Link 
                      href={link.path} 
                      className={`block py-3 px-4 font-medium border-b border-gray-100 ${
                        activeLink === link.path
                          ? 'text-blue-600 border-l-4 border-l-blue-500 pl-3'
                          : 'text-gray-700 hover:text-blue-600'
                      }`}
                      onClick={() => {
                        setActiveLink(link.path);
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
                
                <motion.div variants={mobileItemVariants}>
                  <Link 
                    href="/contact" 
                    className="block mt-2 mx-3"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <div className="py-3 px-4 text-center text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-medium">
                      Contact
                    </div>
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;