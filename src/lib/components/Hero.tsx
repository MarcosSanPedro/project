import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FileText, Users, Briefcase, ChevronDown } from 'lucide-react';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToNextSection = () => {
    const nextSection = document.getElementById('about');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div ref={heroRef} className="relative min-h-screen overflow-hidden bg-midnight-dark">
      {/* Background with diagonal overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-midnight to-black opacity-90"></div>
        
        {/* Animated diagonal lines */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-[1px] w-full bg-gold-light/20"
              style={{
                top: `${i * 10 + Math.random() * 5}%`,
                left: 0,
                transform: `rotate(${-5 + Math.random() * 10}deg)`,
              }}
              animate={{
                x: ['-100%', '200%'],
              }}
              transition={{
                duration: 15 + Math.random() * 20,
                repeat: Infinity,
                ease: 'linear',
                delay: i * 0.5,
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            >
              <span className="block">Construyendo</span>
              <span className="text-gold">Tu Futuro Legal</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg sm:text-xl text-gray-300 mb-8"
            >
              Servicios profesionales de inmigración, preparación de impuestos y soluciones legales personalizadas para tu situación específica.
            </motion.p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <motion.a
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                href="tel:+19543388978"
                className="px-8 py-4 bg-gold text-black font-bold rounded-md hover:bg-gold-light transition-colors shadow-lg"
              >
                Consulta Gratuita
              </motion.a>
              
              <motion.a
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
                href="#services"
                className="px-8 py-4 bg-transparent border-2 border-gold text-gold font-bold rounded-md hover:bg-gold/10 transition-colors"
              >
                Nuestros Servicios
              </motion.a>
            </div>
            
            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="grid grid-cols-3 gap-6"
            >
              {[
                { value: "10+", label: "Años de Experiencia" },
                { value: "850+", label: "Casos Exitosos" },
                { value: "100%", label: "Satisfacción" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-gold text-3xl font-bold mb-1">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
          
          {/* Abstract Design Element instead of Image Gallery */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative h-[500px] hidden lg:block"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-full h-full">
                {/* Abstract shapes */}
                <motion.div 
                  className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0.5, 0.7, 0.5]
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                <motion.div 
                  className="absolute bottom-20 left-10 w-48 h-48 bg-gold/5 rounded-full"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3]
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                />
                
                <motion.div 
                  className="absolute top-40 left-20 w-32 h-32 bg-gold/15 rounded-full"
                  animate={{ 
                    scale: [1, 1.3, 1],
                    opacity: [0.4, 0.6, 0.4]
                  }}
                  transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                  }}
                />
                
                {/* Diagonal lines */}
                <motion.div 
                  className="absolute top-1/4 left-0 right-0 h-[1px] bg-gold/30"
                  style={{ transform: "rotate(-15deg)" }}
                  animate={{ 
                    opacity: [0.2, 0.5, 0.2]
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                <motion.div 
                  className="absolute top-2/4 left-0 right-0 h-[1px] bg-gold/20"
                  style={{ transform: "rotate(10deg)" }}
                  animate={{ 
                    opacity: [0.1, 0.4, 0.1]
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                />
                
                <motion.div 
                  className="absolute top-3/4 left-0 right-0 h-[1px] bg-gold/40"
                  style={{ transform: "rotate(-5deg)" }}
                  animate={{ 
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                  }}
                />
              </div>
            </div>
            
            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.6 }}
              className="absolute -bottom-6 -right-6 bg-gold text-black px-6 py-4 rounded-lg shadow-xl font-bold"
            >
              Expertos en Inmigración
            </motion.div>
          </motion.div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        >
          <span className="text-gold-light text-sm mb-2">Descubre más</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            onClick={scrollToNextSection}
            className="cursor-pointer"
          >
            <ChevronDown className="w-6 h-6 text-gold" />
          </motion.div>
        </motion.div>
      </div>
      
      {/* Service highlights */}
      <div className="relative z-10 bg-midnight-light py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: FileText,
                title: "Trámites Migratorios",
                description: "Asistencia experta en todos tus procesos de inmigración"
              },
              {
                icon: Users,
                title: "Servicios de Impuestos",
                description: "Preparación profesional de impuestos personales y empresariales"
              },
              {
                icon: Briefcase,
                title: "Registro de Compañías",
                description: "Formación y registro legal de tu negocio en Estados Unidos"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-midnight border border-gold/20 rounded-lg p-6 hover:border-gold/50 transition-all duration-300"
              >
                <feature.icon className="w-10 h-10 text-gold mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Floating WhatsApp Button */}
      <motion.a
        href="https://wa.me/19543388978"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-4 sm:bottom-8 right-4 sm:right-8 bg-green-500 text-white p-3 sm:p-4 rounded-full shadow-lg z-50 cursor-pointer hover:bg-green-600 transition-colors"
      >
        <svg
          className="w-5 h-5 sm:w-6 sm:h-6"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </motion.a>
    </div>
  );
};

export default Hero;