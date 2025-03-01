import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { FileText, Users, Briefcase, ChevronDown } from "lucide-react";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToNextSection = () => {
    const nextSection = document.getElementById("about");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Images for the animated gallery
  const images = [
    "/images/1.jpg",
    "/images/2.jpg",
    "/images/3.jpg",
    "/images/4.jpg",
    "/images/6.jpg",
    "/images/7.jpg",
  ];

  return (
    <div
      ref={heroRef}
      className="relative min-h-screen overflow-hidden bg-midnight-dark"
    >
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
                x: ["-100%", "200%"],
              }}
              transition={{
                duration: 15 + Math.random() * 20,
                repeat: Infinity,
                ease: "linear",
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
              Servicios profesionales de inmigración, preparación de impuestos y
              soluciones legales personalizadas para tu situación específica.
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
                { value: "95%", label: "Satisfacción" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-gold text-3xl font-bold mb-1">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Image Gallery */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative h-[500px] hidden lg:block"
          >
            <div className="absolute inset-0 grid grid-cols-2 gap-4">
              {images.slice(0, 4).map((img, index) => (
                <motion.div
                  key={index}
                  className="relative overflow-hidden rounded-lg shadow-xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.2 }}
                  style={{
                    height: index % 2 === 0 ? "240px" : "220px",
                    marginTop: index % 2 === 0 ? "0" : "20px",
                  }}
                >
                  <img
                    src={img}
                    alt={`Success story ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                </motion.div>
              ))}
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
          className="absolute lg:bottom-8 bottom-2 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        >
          <span className="text-gold-light text-xs">Descubre más</span>
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
                description:
                  "Asistencia experta en todos tus procesos de inmigración",
              },
              {
                icon: Users,
                title: "Servicios de Impuestos",
                description:
                  "Preparación profesional de impuestos personales y empresariales",
              },
              {
                icon: Briefcase,
                title: "Registro de Compañías",
                description:
                  "Formación y registro legal de tu negocio en Estados Unidos",
              },
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
                <h3 className="text-xl font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
