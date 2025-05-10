'use client';
import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';

const TestimonialsSection: React.FC = () => {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // IntersectionObserver implementatie - laadt de sectie alleen wanneer zichtbaar
  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isInView) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
  
    observer.observe(node);
    return () => observer.disconnect();
  }, [isInView]);

  // Testimonial data
  const testimonials = [
    {
      id: 1,
      name: "Jan de Vries",
      position: "CEO, TechSolutions BV",
      content: "Dankzij de professionele aanpak hebben we nu een website die perfect aansluit bij onze huisstijl en doelgroep. De conversie is met 45% gestegen sinds de lancering.",
      image: "/img/testimonial1.jpg",
      rating: 5,
    },
    {
      id: 2,
      name: "Lisa Bakker",
      position: "Marketing Manager, GrowthPartners",
      content: "Van concept tot uitvoering, alles verliep vlekkeloos. De technische expertise en creatieve inzichten hebben ons merk naar een hoger niveau getild.",
      image: "/img/testimonial2.jpg",
      rating: 5,
    },
    {
      id: 3,
      name: "Robert Jansen",
      position: "Oprichter, InnovatieWerkt",
      content: "We hadden complexe IT-uitdagingen die niemand anders kon oplossen. Hun team begreep precies wat we nodig hadden en leverde een oplossing die zowel elegant als efficiënt is.",
      image: "/img/testimonial3.jpg",
      rating: 5,
    },
  ];

  // Auto-rotatie van testimonials
  useEffect(() => {
    if (!isInView) return;
    
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(timer);
  }, [isInView, testimonials.length]);

  // CSS klassen voor animatie
  const getContentClasses = () => {
    return `transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`;
  };

  // Sterrenrating component
  const StarRating = ({ rating }: { rating: number }) => {
    return (
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, index) => (
          <svg
            key={index}
            xmlns="http://www.w3.org/2000/svg"
            className={`h-5 w-5 ${
              index < rating 
                ? 'text-amber-400' 
                : 'text-gray-300'
            }`}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
            />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <section 
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
    >
      {/* Decoratieve elementen */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-gradient-to-r from-blue-200/10 to-purple-200/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-r from-amber-200/10 to-orange-200/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Sectietitel */}
        <div className={`text-center mb-16 ${getContentClasses()}`} style={{ transitionDelay: '100ms' }}>
          <span className="text-base font-medium bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600 mb-2 inline-flex items-center">
            <span className="w-8 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mr-3 hidden sm:inline-block"></span>
            Wat klanten zeggen
            <span className="w-8 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full ml-3 hidden sm:inline-block"></span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 sm:leading-[3.25rem]">
            Succesvolle <span className="relative">
              samenwerkingen
              <span className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-blue-400/40 to-purple-500/40 rounded-full"></span>
            </span> met onze klanten
          </h2>
          <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
            Wij helpen ondernemers hun digitale ambities waar te maken en dat leidt tot tevreden klanten.
          </p>
        </div>

        {/* Testimonial cards */}
        <div className={`${getContentClasses()}`} style={{ transitionDelay: '300ms' }}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className={`bg-white rounded-xl p-8 shadow-lg transition-all duration-500 ${
                  index === activeTestimonial 
                    ? "scale-[1.02] shadow-xl ring-1 ring-blue-100" 
                    : "hover:shadow-xl hover:scale-[1.01]"
                }`}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="h-16 w-16 rounded-full overflow-hidden flex-shrink-0 border-2 border-blue-100">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={64}
                      height={64}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <StarRating rating={testimonial.rating} />
                    <h3 className="font-semibold text-lg mt-1">{testimonial.name}</h3>
                    <p className="text-sm text-gray-500">{testimonial.position}</p>
                  </div>
                </div>
                <div className="relative">
                  <svg
                    className="absolute -top-3 -left-3 w-8 h-8 text-blue-100 transform -scale-x-100"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                    aria-hidden="true"
                  >
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <p className="text-gray-600 italic relative z-10 pl-4">
                    {testimonial.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigatie dots */}
        <div className={`flex justify-center mt-10 gap-3 ${getContentClasses()}`} style={{ transitionDelay: '400ms' }}>
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === activeTestimonial
                  ? "bg-gradient-to-r from-blue-500 to-purple-600 w-8"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Call to action */}
        <div className={`mt-16 text-center ${getContentClasses()}`} style={{ transitionDelay: '500ms' }}>
          <a 
            href="/contact" 
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium hover:shadow-lg hover:from-blue-600 hover:to-purple-700 transition-all"
          >
            <span>Word ook een tevreden klant</span>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;