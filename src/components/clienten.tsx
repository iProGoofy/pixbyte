'use client';
import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';

interface Client {
  id: number;
  name: string;
  logo: string; // relative path to logo/image
  url: string;
}

const clients: Client[] = [
  {
    id: 1,
    name: 'Klant A',
    logo: '/img/clients/klant-a.png',
    url: 'https://www.klant-a.nl',
  },
  {
    id: 2,
    name: 'Klant B',
    logo: '/img/clients/klant-b.png',
    url: 'https://www.klant-b.nl',
  },
  {
    id: 3,
    name: 'Klant C',
    logo: '/img/clients/klant-c.png',
    url: 'https://www.klant-c.nl',
  },
  {
    id: 4,
    name: 'Klant D',
    logo: '/img/clients/klant-d.png',
    url: 'https://www.klant-d.nl',
  },
];

const ClientPortfolioSection: React.FC = () => {
  const controls = useAnimation();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          controls.start({ opacity: 1, y: 0 });
          setHasAnimated(true);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [controls, hasAnimated]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full px-4 py-20 md:py-28 bg-gradient-to-b from-white to-gray-50 overflow-hidden"
    >
      {/* Decorative element */}
      <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-gradient-to-r from-purple-200/30 to-blue-200/30 blur-xl hidden lg:block"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={controls}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 md:mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent">
            Onze klanten in beeld
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-xl mx-auto">
            Een selectie van bedrijven die wij hebben mogen ondersteunen
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mt-6 rounded-full"></div>
        </motion.div>

        {/* Scrollable client logos */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={controls}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="overflow-x-auto"
        >
          <div className="flex gap-6 md:gap-10 px-1 md:px-4 snap-x snap-mandatory scroll-pl-4">
            {clients.map((client) => (
              <a
                key={client.id}
                href={client.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 snap-center rounded-xl bg-white shadow-md hover:shadow-xl transition-shadow duration-300 p-4 w-56 h-40 flex flex-col items-center justify-center group hover:scale-105 transform transition-transform"
              >
                <div className="relative w-28 h-16 mb-3">
                  <Image
                    src={client.logo}
                    alt={client.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-sm font-medium text-gray-700 group-hover:text-black">
                  {client.name}
                </span>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ClientPortfolioSection;
