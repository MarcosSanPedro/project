import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: "Carlos Mendoza",
    content: "MZ Multiservices me ayudó a obtener mi residencia permanente después de años de intentarlo por mi cuenta. Su equipo fue profesional y me guió en cada paso del proceso.",
    rating: 5
  },
  {
    name: "María Fernández",
    content: "Excelente servicio y atención personalizada. Me ayudaron con mi caso de asilo y siempre estuvieron disponibles para responder mis preguntas. Altamente recomendados.",
    rating: 5
  },
  {
    name: "Roberto Sánchez",
    content: "Gracias a MZ Multiservices pude reunirme con mi familia después de 5 años. Su conocimiento y dedicación hicieron posible lo que parecía imposible.",
    rating: 5
  },
  {
    name: "Ana Gutiérrez",
    content: "El servicio de preparación de impuestos fue excelente. Me explicaron todo el proceso y me ayudaron a maximizar mi devolución. Definitivamente regresaré el próximo año.",
    rating: 5
  },
  {
    name: "Javier Morales",
    content: "Profesionales en todo sentido. Me ayudaron a establecer mi negocio y a entender todas mis obligaciones legales como emprendedor inmigrante. ¡Gracias por todo!",
    rating: 5
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const next = () => {
    setIsAutoPlaying(false);
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setIsAutoPlaying(false);
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <section id='testimonials' className="py-20 bg-midnight-dark relative overflow-hidden">
      {/* Gold accent elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gold/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/5 rounded-full translate-x-1/3 translate-y-1/3"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Historias reales de personas que confiaron en nosotros para sus procesos migratorios
          </p>
        </motion.div>

        <div className="relative">
          <div className="overflow-hidden">
            <div className="relative h-[400px]">
              <AnimatePresence initial={false} custom={direction}>
                <motion.div
                  key={current}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 }
                  }}
                  className="absolute w-full"
                >
                  <div className="bg-midnight-light rounded-2xl shadow-xl p-8 md:p-12 relative border border-gold/20">
                    {/* Navigation Arrows - Inside the box */}
                    <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-4 pointer-events-none">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={prev}
                        className="p-2 rounded-full bg-midnight/80 shadow-lg text-gold hover:bg-gold/10 transition-all pointer-events-auto border border-gold/30"
                      >
                        <ChevronLeft className="w-6 h-6" />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={next}
                        className="p-2 rounded-full bg-midnight/80 shadow-lg text-gold hover:bg-gold/10 transition-all pointer-events-auto border border-gold/30"
                      >
                        <ChevronRight className="w-6 h-6" />
                      </motion.button>
                    </div>

                    <div className="flex flex-col items-center text-center px-8">
                      <motion.div 
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="flex items-center justify-center mb-6"
                      >
                        {[...Array(testimonials[current].rating)].map((_, i) => (
                          <Star key={i} className="w-6 h-6 text-gold fill-current" />
                        ))}
                      </motion.div>
                      <motion.blockquote 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-xl md:text-2xl text-white mb-8 font-light italic"
                      >
                        "{testimonials[current].content}"
                      </motion.blockquote>
                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="font-semibold text-lg text-gold"
                      >
                        {testimonials[current].name}
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.2 }}
                onClick={() => {
                  setIsAutoPlaying(false);
                  setDirection(index > current ? 1 : -1);
                  setCurrent(index);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === current 
                    ? 'bg-gold scale-125' 
                    : 'bg-white/20 hover:bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;