'use client';
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FileText } from 'lucide-react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
  opacity: number;
}


const HeroSection: React.FC= () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  // Animation effect voor fade-in elementen
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Particle animation effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Canvas volledig scherm maken
    const updateCanvasSize = () => {
      const heroSection = canvas.parentElement;
      if (heroSection) {
        canvas.width = heroSection.offsetWidth;
        canvas.height = heroSection.offsetHeight;
      }
    };

    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);

    // Particles aanmaken
    const particles: Particle[] = [];
    const colors = ['#E9D5FF', '#DBEAFE', '#C7D2FE', '#E0E7FF'];
    
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 5 + 1,
        speedX: Math.random() * 1 - 0.5,
        speedY: Math.random() * 1 - 0.5,
        color: colors[Math.floor(Math.random() * colors.length)],
        opacity: Math.random() * 0.5 + 0.1
      });
    }

    // Animatie loop
    let animationFrameId: number;
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach((particle) => {
        // Particle tekenen
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = particle.opacity;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        
        // Beweeg particle
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // Bounce tegen de randen
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.speedX = -particle.speedX;
        }
        
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.speedY = -particle.speedY;
        }
      });
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animate();
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', updateCanvasSize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative bg-gradient-to-br from-purple-50 to-blue-50 pt-20 pb-16 overflow-hidden">
      {/* Canvas voor deeltjes animatie */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 z-0"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Tekst sectie */}
          <div className={`w-full lg:w-1/2 lg:pr-12 mb-12 lg:mb-0 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
              Transformeer uw visie naar
              <span className="block bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">een digitale realiteit</span>
            </h1>
            <p className="text-base sm:text-lg text-gray-600 mb-8 max-w-xl">
              Geef je bedrijf een boost met innovatieve oplossingen die groei en
              vernieuwing stimuleren. Ons deskundige team levert resultaten die de
              verwachtingen overtreffen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-all transform hover:scale-105 inline-flex items-center justify-center">
                Vraag offerte aan
                <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
              </Link>
              <Link href="/meer-info" className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-all transform hover:scale-105 inline-flex items-center justify-center">
                Meer weten?
                <FileText size={18} className="ml-2" />
              </Link>
            </div>
            
            {/* Statistieken */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              <div className={`bg-white p-4 sm:p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`} style={{ transitionDelay: '200ms' }}>
                <p className="text-sm text-gray-600 mb-1">Projecten</p>
                <p className="text-3xl sm:text-4xl font-bold text-purple-600">500+</p>
              </div>
              <div className={`bg-white p-4 sm:p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`} style={{ transitionDelay: '400ms' }}>
                <p className="text-sm text-gray-600 mb-1">Klanten</p>
                <p className="text-3xl sm:text-4xl font-bold text-pink-500">100+</p>
              </div>
              <div className={`bg-white p-4 sm:p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`} style={{ transitionDelay: '600ms' }}>
                <p className="text-sm text-gray-600 mb-1">Success</p>
                <p className="text-3xl sm:text-4xl font-bold text-gray-800">99%</p>
              </div>
            </div>
          </div>
          
          {/* Afbeelding sectie */}
          <div className={`w-full lg:w-1/2 flex justify-center lg:justify-end transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '300ms' }}>
            <div className="relative w-full max-w-md">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-200 to-blue-200 rounded-full blur-xl opacity-30 animate-pulse"></div>
              <Image
                src="/img/patchkast.png"
                alt="Server stack illustratie"
                width={500}
                height={600}
                className="object-contain relative z-10 drop-shadow-xl transform hover:scale-105 transition-transform duration-500"
                priority
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Golvende decoratie onderaan */}
      <div className="absolute bottom-0 left-0 right-0 h-16 overflow-hidden z-0">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="absolute bottom-0 left-0 w-full h-full">
          <path 
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V56.44Z" 
            className="fill-white opacity-20"
          ></path>
          <path 
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
            className="fill-white opacity-10"
          ></path>
          <path 
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" 
            className="fill-white opacity-5"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;