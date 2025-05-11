'use client';
import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';

const ContactSection: React.FC = () => {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  // Vereenvoudigde IntersectionObserver - alleen laden wanneer nodig
  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isInView) {
          setIsInView(true);
          // Verwijder observer na activatie om verdere berekeningen te voorkomen
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
  
    observer.observe(node);
    return () => observer.disconnect();
  }, [isInView]);

  // Contact info items
  const contactInfo = [
    {
      id: 1,
      title: "Email",
      value: "info@pixbyte.nl",
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
            d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
          />
        </svg>
      ),
      color: "from-blue-500 to-indigo-600"
    },
    {
      id: 2,
      title: "Telefoon",
      value: "+31 (0)6 12345678",
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
            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
          />
        </svg>
      ),
      color: "from-purple-500 to-pink-600"
    },
    {
      id: 3,
      title: "Adres",
      value: "Rembrandtstraat 8, 5914TE, Venlo",
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
            d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
          />
        </svg>
      ),
      color: "from-amber-500 to-orange-600"
    },
  ];

  // CSS klassen genereren op basis van isInView
  const getContentClasses = () => {
    return `transition-opacity duration-700 ${isInView ? 'opacity-100' : 'opacity-0'}`;
  };

  // Contact form handler
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    
    // Simuleer een aanvraag verzending
    setTimeout(() => {
      setFormStatus('success');
      
      // Reset het formulier na 3 seconden
      setTimeout(() => {
        setFormStatus('idle');
        (e.target as HTMLFormElement).reset();
      }, 3000);
    }, 1500);
  };

  return (
    <section 
      ref={sectionRef} 
      className="py-24 overflow-hidden bg-gray-50"
      id="contact"
    >
      {/* Decoratieve elementen */}
      <div
        className="absolute rounded-full bg-gradient-to-r from-blue-200/10 to-purple-200/10 blur-xl hidden lg:block"
        style={{
          top: '20%',
          right: '10%',
          width: '300px',
          height: '300px',
          zIndex: 0,
        }}
      ></div>
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-base font-medium bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600 mb-2 block inline-flex items-center justify-center">
            <span className="w-8 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mr-3"></span>
            Neem contact op
            <span className="w-8 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full ml-3"></span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 sm:leading-[3.25rem] max-w-2xl mx-auto">
            Heeft u een <span className="relative">
              vraag of project
              <span className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-blue-400/40 to-purple-500/40 rounded-full"></span>
            </span> voor ons?
          </h2>
          <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
            Vul het onderstaande formulier in en we nemen zo snel mogelijk contact met u op.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 items-start lg:grid-cols-12 lg:gap-16">
          {/* Linker kolom - Contact informatie */}
          <div 
            className={`w-full lg:col-span-5 ${getContentClasses()}`}
            style={{ transitionDelay: '100ms' }}
          >
            <div className="bg-white rounded-2xl shadow-xl shadow-blue-100/20 p-8 relative overflow-hidden">
              {/* Decoratieve achtergrond */}
              <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-gradient-to-r from-blue-100/30 to-purple-100/30 rounded-full"></div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Informatie</h3>
              
              <div className="space-y-8 relative z-10">
                {contactInfo.map((item) => (
                  <div key={item.id} className="flex items-start gap-4 group">
                    <div className={`rounded-lg p-3 bg-gradient-to-r ${item.color} text-white flex-shrink-0 shadow-md transition-transform duration-300 group-hover:scale-110`}>
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-gray-900 font-medium mb-1">{item.title}</h4>
                      <p className="text-gray-600">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Sociale media links */}
              <div className="mt-10 pt-6 border-t border-gray-100 flex gap-4 relative z-10">
                <a href="#" className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full p-2.5 text-white shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                  </svg>
                </a>
                <a href="#" className="bg-gradient-to-r from-purple-500 to-pink-600 rounded-full p-2.5 text-white shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-twitter-x" viewBox="0 0 16 16">
                    <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z"/>
                  </svg>
                </a>
                <a href="#" className="bg-gradient-to-r from-amber-500 to-orange-600 rounded-full p-2.5 text-white shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Rechter kolom - Contact formulier */}
          <div 
            className={`w-full lg:col-span-7 ${getContentClasses()}`}
            style={{ transitionDelay: '300ms' }}
          >
            <div className="bg-white rounded-2xl shadow-xl shadow-blue-100/20 p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Stuur ons een bericht</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Naam</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full rounded-lg border border-gray-200 p-3 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
                      placeholder="Uw volledige naam"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full rounded-lg border border-gray-200 p-3 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
                      placeholder="uw@email.nl"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Telefoonnummer</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full rounded-lg border border-gray-200 p-3 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
                    placeholder="Uw telefoonnummer (optioneel)"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Onderwerp</label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    className="w-full rounded-lg border border-gray-200 p-3 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
                  >
                    <option value="">Selecteer een onderwerp</option>
                    <option value="web-development">Web Development</option>
                    <option value="branding">Branding</option>
                    <option value="consultancy">Consultancy</option>
                    <option value="other">Anders</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Bericht</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full rounded-lg border border-gray-200 p-3 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all resize-none"
                    placeholder="Hoe kunnen wij u helpen?"
                  ></textarea>
                </div>
                
                <div className="flex items-center">
                  <input
                    id="privacy"
                    name="privacy"
                    type="checkbox"
                    required
                    className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <label htmlFor="privacy" className="ml-2 block text-sm text-gray-600">
                    Ik ga akkoord met het <a href="#" className="text-blue-600 hover:underline">privacybeleid</a>
                  </label>
                </div>
                
                <div>
                  <button
                    type="submit"
                    disabled={formStatus === 'sending'}
                    className={`w-full rounded-lg p-3 text-sm font-medium text-white transition-all flex justify-center items-center ${
                      formStatus === 'sending' 
                        ? 'bg-gray-400'
                        : 'bg-gradient-to-r from-blue-500 to-indigo-600 hover:shadow-lg hover:shadow-blue-500/30'
                    }`}
                  >
                    {formStatus === 'sending' ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Verzenden...
                      </>
                    ) : formStatus === 'success' ? (
                      <>
                        <svg className="-ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Verzonden!
                      </>
                    ) : (
                      'Verstuur bericht'
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;