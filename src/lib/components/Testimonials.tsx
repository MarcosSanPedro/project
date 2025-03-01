import { motion } from "framer-motion";
import { Star, CheckCircle, ExternalLink } from "lucide-react";

// Enhanced testimonials with additional fields for a more Google-like experience
const testimonials = [
  {
    name: "Carlos Mendoza",
    content:
      "MZ Multiservices me ayudó a obtener mi residencia permanente después de años de intentarlo por mi cuenta. Su equipo fue profesional y me guió en cada paso del proceso.",
    rating: 5,
    date: "2 meses atrás",
    verified: true,
  },
  {
    name: "María Fernández",
    content:
      "Excelente servicio y atención personalizada. Me ayudaron con mi caso de asilo y siempre estuvieron disponibles para responder mis preguntas. Altamente recomendados.",
    rating: 5,
    date: "1 mes atrás",
    verified: true,
  },
  {
    name: "Roberto Sánchez",
    content:
      "Gracias a MZ Multiservices pude reunirme con mi familia después de 5 años. Su conocimiento y dedicación hicieron posible lo que parecía imposible.",
    rating: 5,
    date: "3 meses atrás",
    verified: true,
  },
  {
    name: "Ana Gutiérrez",
    content:
      "El servicio de preparación de impuestos fue excelente. Me explicaron todo el proceso y me ayudaron a maximizar mi devolución. Definitivamente regresaré el próximo año.",
    rating: 5,
    date: "2 semanas atrás",
    verified: true,
  },
  {
    name: "Javier Morales",
    content:
      "Profesionales en todo sentido. Me ayudaron a establecer mi negocio y a entender todas mis obligaciones legales como emprendedor inmigrante. ¡Gracias por todo!",
    rating: 5,
    date: "1 semana atrás",
    verified: true,
  },
];

// Calculate aggregate rating
const aggregateRating = {
  ratingValue:
    testimonials.reduce((acc, t) => acc + t.rating, 0) / testimonials.length,
  reviewCount: testimonials.length,
};

const Testimonials = () => {
  // SEO-friendly schema markup for reviews
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "MZ Multiservices",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: aggregateRating.ratingValue.toFixed(1),
      reviewCount: aggregateRating.reviewCount,
    },
    review: testimonials.map((t) => ({
      "@type": "Review",
      author: {
        "@type": "Person",
        name: t.name,
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: t.rating,
      },
      reviewBody: t.content,
    })),
  };

  return (
    <section
      id="testimonials"
      className="py-20 bg-black relative overflow-hidden"
    >
      {/* Gold accent elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gold/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/5 rounded-full translate-x-1/3 translate-y-1/3"></div>

      {/* Animated diagonal lines - similar to hero section */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-[1px] w-full bg-gold-light/20"
            style={{
              top: `${i * 15 + Math.random() * 5}%`,
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

      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-midnight via-black to-midnight opacity-80 z-0"></div>

      {/* Schema.org JSON-LD for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Historias reales de personas que confiaron en nosotros para sus
            procesos migratorios
          </p>
        </motion.div>

        {/* Premium review summary - styled to match site branding */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-midnight border border-gold/30 rounded-lg shadow-xl p-6 mb-10 max-w-3xl mx-auto backdrop-blur-sm relative overflow-hidden group"
          whileHover={{ 
            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            borderColor: "rgba(212, 175, 55, 0.5)"
          }}
        > */}
        {/* Background gradient */}
        {/* <div className="absolute inset-0 bg-gradient-to-r from-midnight via-black to-midnight opacity-80"></div> */}

        {/* Subtle gold accent line */}
        {/* <motion.div 
            className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-gold/40 via-gold to-gold/40"
            initial={{ width: "30%" }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
          
          <div className="flex flex-col md:flex-row items-center justify-between relative z-10">
            <div className="flex items-center mb-4 md:mb-0">
              {/* Custom Google icon with gold accent */}
        {/* <div className="mr-4 flex-shrink-0 bg-midnight-light p-3 rounded-full border border-gold/20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-gold"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 8v8"></path>
                  <path d="M8 12h8"></path>
                </svg>
              </div>
              <div>
                <div className="text-lg font-semibold text-white mb-1">
                  Google Reviews
                </div>
                <div className="flex items-center">
                  <div className="flex mr-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${i < Math.round(aggregateRating.ratingValue) ? "text-gold fill-current" : "text-gray-600"}`}
                      />
                    ))}
                  </div>
                  <span className="text-gold font-medium">
                    {aggregateRating.ratingValue.toFixed(1)}
                  </span>
                  <span className="text-gray-400 ml-1">
                    ({aggregateRating.reviewCount} reseñas)
                  </span>
                </div>
              </div>
            </div>
            <motion.a
              href="https://g.page/review/mzmultiservices"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-4 py-2 bg-midnight-light border border-gold/30 rounded-md text-gold hover:bg-gold/10 transition-colors group-hover:border-gold/50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Ver en Google
              <ExternalLink className="w-4 h-4 ml-1" />
            </motion.a>
          </div>
        </motion.div> */}

        {/* Grid of testimonials - styled to match Services component */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="group relative overflow-hidden rounded-xl shadow-lg border border-gold/20 hover:border-gold/40 transition-all duration-300"
              whileHover={{
                y: -5,
                boxShadow:
                  "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)",
              }}
            >
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-b from-midnight-light via-midnight to-black opacity-90"></div>

              <div className="relative p-6 z-10">
                {/* Header with rating and date */}
                <div className="flex justify-between items-center mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${i < testimonial.rating ? "text-gold fill-current" : "text-gray-600"}`}
                      />
                    ))}
                  </div>
                  <span className="text-gray-400 text-sm bg-midnight-light px-2 py-1 rounded-full">
                    {testimonial.date}
                  </span>
                </div>

                {/* Review content */}
                <blockquote className="text-gray-200 mb-6 relative">
                  <span className="absolute -top-4 -left-2 text-4xl text-gold/20">
                    "
                  </span>
                  <p className="relative z-10">{testimonial.content}</p>
                  <span className="absolute -bottom-6 -right-2 text-4xl text-gold/20">
                    "
                  </span>
                </blockquote>

                {/* Reviewer info with verification */}
                <div className="flex items-center mt-8 border-t border-gold/10 pt-4">
                  <div className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center text-gold font-bold mr-3 border border-gold/30">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-medium text-white">
                      {testimonial.name}
                    </div>
                    {testimonial.verified && (
                      <div className="flex items-center text-gold text-sm">
                        <CheckCircle className="w-3 h-3 mr-1" />
                        Reseña verificada
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Subtle gold accent line */}
              <motion.div
                className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-gold/0 via-gold/50 to-gold/0"
                initial={{ width: "0%" }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.6 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
