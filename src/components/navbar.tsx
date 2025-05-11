'use client';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  // State voor navigatie functionaliteit
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('');
  const [isMounted, setIsMounted] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Effect voor scroll detectie en client-side initialisatie
  useEffect(() => {
    setIsMounted(true);
    
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Set active link based on current pathname
    setActiveLink(window.location.pathname);

    // Scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Handle clicks outside mobile menu to close it
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Navigatie links
  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'OVER ONS', path: '/over-ons' },
    { name: 'DIENSTEN', path: '/diensten' },
    { name: 'PROJECTEN', path: '/projecten' },
    { name: 'BLOG', path: '/blog' },
  ];

  // Contact gegevens
  const contactInfo = {
    email: 'info@pixbyte.nl',
    phone: '+31 6 12345678'
  };

  // Animatie varianten
  const navVariants = {
    initial: { opacity: 0, y: -20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  const linkVariants = {
    initial: { opacity: 0, y: -10 },
    animate: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.08,
        duration: 0.3,
        ease: "easeOut"
      }
    }),
    hover: { 
      scale: 1.05,
      transition: { duration: 0.2 }
    }
  };
  
  const mobileMenuVariants = {
    closed: { 
      opacity: 0,
      clipPath: 'inset(0 0 100% 0)',
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1],
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    },
    open: { 
      opacity: 1,
      clipPath: 'inset(0 0 0 0)',
      transition: {
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1],
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const mobileItemVariants = {
    closed: { opacity: 0, x: -20 },
    open: { opacity: 1, x: 0 }
  };

  // Don't render client-side only content during SSR
  if (!isMounted) {
    return (
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md">
        <div className="container mx-auto px-4">
          <div className="h-20 flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-10 h-10 mr-3"></div>
              <span className="font-bold text-xl">PIXBYTE</span>
            </div>
          </div>
        </div>
      </header>
    );
  }

  return (
    <motion.header
      initial="initial"
      animate="animate"
      variants={navVariants}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className={`w-full transition-all duration-500 ${
        scrolled 
          ? 'bg-white/95 shadow-lg shadow-blue-100/20' 
          : 'bg-white/80 backdrop-blur-md'
      }`}>
        <div className="container mx-auto px-4 md:px-6">
          <div className={`relative flex items-center justify-between transition-all duration-300 ${
            scrolled ? 'h-16' : 'h-20'
          }`}>
            {/* Logo */}
            <Link href="/" className="flex items-center group z-10">
              <div className={`relative mr-3 transition-all duration-300 ${
                scrolled ? 'scale-90' : 'scale-100'
              }`}>
                <Image 
                  src="/img/logo.svg" 
                  alt="PixByte Logo" 
                  width={50} 
                  height={50} 
                  className="transition-transform duration-500 group-hover:scale-110"
                />
                {/* Animated glow effect on hover */}
                <motion.div 
                  className="absolute inset-0 bg-blue-400/20 rounded-full blur-xl -z-10"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ opacity: 1, scale: 1.2 }}
                  transition={{ duration: 0.4 }}
                />
              </div>
              
              <div>
                <div className="text-lg font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                  PIXBYTE
                </div>
                <div className="text-xs tracking-wider text-gray-500 font-medium">
                  SMALL BYTES, BIG IMPACT
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navLinks.map((link, index) => (
                <motion.div 
                  key={link.path}
                  custom={index}
                  variants={linkVariants}
                  whileHover="hover"
                >
                  <Link 
                    href={link.path}
                    className="relative px-3 py-2 block"
                    onClick={() => setActiveLink(link.path)}
                  >
                    <span className={`text-sm font-medium ${
                      activeLink === link.path 
                        ? 'text-blue-600' 
                        : 'text-gray-700 hover:text-blue-600 transition-colors'
                    }`}>
                      {link.name}
                    </span>

                    {/* Active indicator */}
                    {activeLink === link.path && (
                      <motion.span 
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                        layoutId="navbar-active-indicator"
                        initial={{ opacity: 0, width: '0%' }}
                        animate={{ opacity: 1, width: '100%' }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Contact Button */}
            <div className="hidden md:flex items-center">
              <div className="flex items-center space-x-3 mr-2">                
                <motion.a 
                  href={`mailto:${contactInfo.email}`}
                  className="text-sm text-gray-600 hover:text-blue-600 transition-colors flex items-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <Mail size={16} className="mr-1.5 text-blue-500" />
                  <span>{contactInfo.email}</span>
                </motion.a>
                
                <span className="h-4 w-px bg-gray-300"></span>
                
                <motion.a 
                  href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
                  className="text-sm text-gray-600 hover:text-blue-600 transition-colors flex items-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <Phone size={16} className="mr-1.5 text-blue-500" />
                  <span>{contactInfo.phone}</span>
                </motion.a>
              </div>
              
              <Link href="/contact">
                <motion.button 
                  className="relative group px-5 py-2 rounded-full overflow-hidden"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Button background with gradient */}
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full" />
                  
                  {/* Animated glow effect */}
                  <span className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300">
                    <span className="absolute inset-0 bg-white blur-md" />
                  </span>
                  
                  {/* Animated shine effect */}
                  <motion.span 
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
                    initial={{ left: '-100%' }}
                    animate={{ left: ['100%', '100%', '-100%'] }}
                    transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 1 }}
                  />
                  
                  {/* Button text */}
                  <span className="relative text-sm font-medium text-white">
                    Contact
                  </span>
                </motion.button>
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden z-20">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={toggleMenu}
                className="p-2 rounded-md focus:outline-none"
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              >
                <div className="w-6 h-6 flex items-center justify-center">
                  <AnimatePresence initial={false} mode="wait">
                    {isMobileMenuOpen ? (
                      <motion.div
                        key="close"
                        initial={{ opacity: 0, rotate: -90 }}
                        animate={{ opacity: 1, rotate: 0 }}
                        exit={{ opacity: 0, rotate: 90 }}
                        transition={{ duration: 0.2 }}
                      >
                        <X className="text-blue-600" size={24} />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="menu"
                        initial={{ opacity: 0, rotate: 90 }}
                        animate={{ opacity: 1, rotate: 0 }}
                        exit={{ opacity: 0, rotate: -90 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Menu className="text-blue-600" size={24} />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            ref={mobileMenuRef}
            className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg shadow-blue-100/20 z-10"
            initial="closed"
            animate="open"
            exit="closed"
            variants={mobileMenuVariants}
          >
            <div className="container mx-auto p-4">
              <div className="flex flex-col space-y-1">
                {navLinks.map((link, index) => (
                  <motion.div 
                    key={link.path} 
                    variants={mobileItemVariants}
                    custom={index}
                  >
                    <Link
                      href={link.path}
                      className={`block py-3 px-4 rounded-lg text-sm font-medium transition-colors ${
                        activeLink === link.path
                          ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-500'
                          : 'text-gray-700 hover:bg-gray-50'
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
              </div>

              {/* Mobile Contact Info */}
              <motion.div 
                variants={mobileItemVariants}
                className="mt-4 pt-4 border-t border-gray-100"
              >
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">Contact Informatie</h4>
                  
                  <div className="space-y-3">
                    <a 
                      href={`mailto:${contactInfo.email}`}
                      className="flex items-center text-sm text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                        <Mail size={14} className="text-blue-600" />
                      </div>
                      {contactInfo.email}
                    </a>
                    
                    <a 
                      href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
                      className="flex items-center text-sm text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                        <Phone size={14} className="text-purple-600" />
                      </div>
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Mobile Contact Button */}
              <motion.div variants={mobileItemVariants} className="mt-4">
                <Link 
                  href="/contact" 
                  className="block w-full"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <button className="w-full py-3 text-center rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium text-sm">
                    Neem contact op
                  </button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;