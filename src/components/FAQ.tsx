import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: "¿Qué servicios de inmigración ofrecen?",
    answer: "Ofrecemos una amplia gama de servicios migratorios que incluyen solicitudes de visas, residencia permanente, ciudadanía, asilo político, peticiones familiares, permisos de trabajo y más. Nuestro equipo brinda asesoría personalizada para cada caso."
  },
  {
    question: "¿Cuánto tiempo toma procesar una solicitud de residencia?",
    answer: "El tiempo de procesamiento varía según el tipo de solicitud y la situación actual de USCIS. Generalmente, las solicitudes de residencia pueden tomar entre 8 y 14 meses. Durante tu consulta, te proporcionaremos un estimado más preciso basado en tu caso específico."
  },
  {
    question: "¿Qué documentos necesito para iniciar mi proceso migratorio?",
    answer: "Los documentos requeridos varían según el tipo de caso. Generalmente, necesitarás identificación personal, certificados de nacimiento/matrimonio, pasaportes, evidencia financiera y documentación específica según tu situación. En tu primera consulta, te proporcionaremos una lista detallada."
  },
  {
    question: "¿Ofrecen servicios de preparación de impuestos?",
    answer: "Sí, ofrecemos servicios completos de preparación de impuestos para individuos y pequeñas empresas. Nuestros especialistas están familiarizados con las necesidades específicas de contribuyentes inmigrantes y pueden ayudarte a maximizar tus devoluciones."
  },
  {
    question: "¿Pueden ayudarme a establecer un negocio como inmigrante?",
    answer: "Absolutamente. Ofrecemos servicios de formación de empresas, obtención de EIN, licencias comerciales y asesoría sobre cumplimiento legal para emprendedores inmigrantes. Te guiaremos en cada paso del proceso para establecer tu negocio correctamente."
  },
  {
    question: "¿Cómo puedo programar una consulta?",
    answer: "Puedes programar una consulta llamando a nuestro número principal, enviándonos un mensaje por WhatsApp o completando el formulario en nuestro sitio web. Ofrecemos consultas presenciales y virtuales para adaptarnos a tus necesidades."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id='faq' className="py-20 bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Preguntas frecuentes
          </h2>
          <p className="text-xl text-gray-400">
          Encuentra respuestas a las dudas más comunes sobre nuestros servicios
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-midnight-light rounded-2xl overflow-hidden shadow-md border border-gold/20"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left"
              >
                <span className="font-semibold text-white">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex-shrink-0 ml-4"
                >
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-gold" />
                  ) : (
                    <Plus className="w-5 h-5 text-gold" />
                  )}
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="px-6 pb-4 text-gray-400">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;