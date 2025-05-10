'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('');
  const [isMounted, setIsMounted] = useState(false);

  // Effect voor scroll detectie - voegt schaduw en kleiner formaat toe bij scrollen
  useEffect(() => {
    setIsMounted(true);
    
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Zet de huidige pagina als active link bij initialisatie
    setActiveLink(window.location.pathname);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Navigatie links
  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'OVER', path: '/over-ons' },
    { name: 'PRIJZEN', path: '/prijzen' },
  ];

  // Contact gegevens
  const contactInfo = {
    email: 'info@pixbyte.nl',
    phone: '+31 6 12345678'
  };

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

  // Don't render client-side only content during SSR
  if (!isMounted) {
    return (
      <header className="w-full fixed top-0 z-50">
        <div className="w-full backdrop-blur-md transition-all duration-500 bg-white/80">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <nav className="flex items-center justify-between transition-all duration-300 h-20">
              {/* Logo placeholder during SSR */}
              <div className="flex items-center group">
                <div className="mr-3 relative transition-all duration-300 scale-100">
                  {/* Logo placeholder */}
                  <div className="w-[70px] h-[70px]"></div>
                </div>
                <div>
                  <div className="text-lg font-bold bg-gradient-to-br from-blue-500 to-purple-600 bg-clip-text text-transparent transition-all">
                    PIXBYTE
                  </div>
                  <div className="text-xs text-gray-500 font-medium">
                    TRANSFORMEER UW DIGITALE VISIE
                  </div>
                </div>
              </div>
              
              {/* Desktop Menu placeholder */}
              <div className="hidden md:flex items-center">
                {/* Navigation Links */}
                <div className="flex items-center space-x-2 mr-6">
                  {navLinks.map((link) => (
                    <div key={link.path} className="relative">
                      <div className="px-4 py-2 text-sm font-medium text-gray-700">
                        {link.name}
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Contact info placeholder */}
                <div className="relative h-8 overflow-hidden rounded-l-full pl-4">
                  <div className="relative h-full px-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-l-full flex items-center space-x-4">
                    <div className="flex items-center text-white text-xs font-medium">
                      <Mail size={14} className="mr-1.5" />
                      <span>{contactInfo.email}</span>
                    </div>
                    <div className="flex items-center text-white text-xs font-medium">
                      <Phone size={14} className="mr-1.5" />
                      <span>{contactInfo.phone}</span>
                    </div>
                  </div>
                </div>
                
                {/* Contact button placeholder */}
                <div className="ml-3">
                  <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-5 py-2 rounded-lg font-medium text-sm transition-all shadow-md">
                    Contact
                  </button>
                </div>
              </div>
              
              {/* Mobile Menu Button placeholder */}
              <div className="md:hidden">
                <button className="p-2 focus:outline-none rounded-md">
                  <div className="w-6 flex flex-col items-end justify-center gap-1.5 relative">
                    <span className="block h-0.5 w-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></span>
                    <span className="block h-0.5 w-4 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"></span>
                    <span className="block h-0.5 w-5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></span>
                  </div>
                </button>
              </div>
            </nav>
          </div>
        </div>
      </header>
    );
  }

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
                   PIXBYTE
                  </div>
                  <div className="text-xs text-gray-500 font-medium">
                    TRANSFORMEER UW DIGITALE VISIE
                  </div>
                </div>
              </div>
            </Link>

            {/* Desktop Menu en Wave Contact Bar */}
            <div className="hidden md:flex items-center">
              {/* Navigatie Links */}
              <div className="flex items-center space-x-2 mr-6">
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
              </div>
              
              {/* Wave contact bar - geïntegreerd in de navbar */}
              <div className="relative h-8 overflow-hidden rounded-l-full pl-4">
                {/* SVG wave voor achtergrond */}
                <svg 
                  className="absolute right-0 top-0 h-full" 
                  width="15" 
                  viewBox="0 0 15 40" 
                  preserveAspectRatio="none"
                >
                  <path 
                    d="M0,0 Q7.5,20 0,40 L15,40 L15,0 Z" 
                    fill="url(#blue-gradient)" 
                  />
                  <defs>
                    <linearGradient id="blue-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3B82F6" />
                      <stop offset="100%" stopColor="#8B5CF6" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Animerende wave overlay */}
                <motion.div 
                  className="absolute inset-0 opacity-30"
                  style={{
                    background: 'radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 70%)',
                  }}
                  animate={{ 
                    x: ['-25%', '125%'],
                    opacity: [0.1, 0.3, 0.1]
                  }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 4, 
                    ease: "easeInOut" 
                  }}
                />

                <div className="relative h-full px-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-l-full flex items-center space-x-4">
                  <motion.a 
                    href={`mailto:${contactInfo.email}`} 
                    className="flex items-center text-white text-xs font-medium hover:text-blue-100 transition-colors group"
                    whileHover={{ scale: 1.03 }}
                  >
                    <Mail size={14} className="mr-1.5 group-hover:rotate-12 transition-transform" />
                    <span>{contactInfo.email}</span>
                  </motion.a>
                  <motion.a 
                    href={`tel:${contactInfo.phone.replace(/\s/g, '')}`} 
                    className="flex items-center text-white text-xs font-medium hover:text-blue-100 transition-colors group"
                    whileHover={{ scale: 1.03 }}
                  >
                    <Phone size={14} className="mr-1.5 group-hover:rotate-12 transition-transform" />
                    <span>{contactInfo.phone}</span>
                  </motion.a>
                </div>
              </div>

              {/* Contact button */}
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
                {/* Mobiele contactgegevens met wave effect */}
                <motion.div variants={mobileItemVariants} className="mb-2 py-2 px-4">
                  <div className="rounded-lg overflow-hidden relative">
                    {/* Mini wave voor mobiel */}
                    <div className="absolute top-0 right-0 h-full w-3">
                      <svg className="h-full w-full" viewBox="0 0 10 40" preserveAspectRatio="none">
                        <path d="M10,0 Q2.5,20 10,40 L0,40 L0,0 Z" fill="url(#mobile-gradient)" />
                        <defs>
                          <linearGradient id="mobile-gradient" x1="100%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#3B82F6" />
                            <stop offset="100%" stopColor="#8B5CF6" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>

                    <div className="bg-blue-50 p-3 rounded-lg">
                      <div className="border-l-4 border-blue-500 pl-3 py-1">
                        <a href={`mailto:${contactInfo.email}`} className="flex items-center py-1.5 text-blue-600">
                          <Mail size={16} className="mr-2" />
                          <span className="text-sm">{contactInfo.email}</span>
                        </a>
                        <a href={`tel:${contactInfo.phone.replace(/\s/g, '')}`} className="flex items-center py-1.5 text-blue-600">
                          <Phone size={16} className="mr-2" />
                          <span className="text-sm">{contactInfo.phone}</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
                
                {/* Navigatie links */}
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