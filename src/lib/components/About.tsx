import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Users, Clock, Heart, Shield, BookOpen } from 'lucide-react';

const About = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const [mainRef, mainInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
    rootMargin: '-50px'
  });

  const [valuesRef, valuesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: '-50px'
  });

  const [statsRef, statsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: '-50px'
  });

  const values = [
    {
      icon: Heart,
      title: "Atención personalizada",
      description: "Cada caso es único y merece un enfoque personalizado. Nos tomamos el tiempo para entender tus necesidades específicas."
    },
    {
      icon: Shield,
      title: "Integridad profesional",
      description: "Trabajamos con los más altos estándares éticos, garantizando transparencia y honestidad en cada paso del proceso."
    },
    {
      icon: BookOpen,
      title: "Conocimiento actualizado",
      description: "Nos mantenemos al día con los cambios en leyes migratorias para ofrecerte la mejor asesoría posible."
    }
  ];

  const stats = [
    {
      icon: Users,
      value: '850+',
      label: 'Casos Exitosos',
      description: 'Familias y personas asistidas con éxito'
    },
    {
      icon: Award,
      value: '95%',
      label: 'Satisfacción',
      description: 'Clientes satisfechos con nuestros servicios'
    },
    {
      icon: Clock,
      value: '10+',
      label: 'Años de Experiencia',
      description: 'Trayectoria comprobada en el sector'
    }
  ];

  return (
    <section id="about" className="py-20 bg-midnight-light overflow-hidden" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content */}
        <div ref={mainRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: mainInView ? 1 : 0, x: mainInView ? 0 : -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 order-1"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Expertos en soluciones migratorias
            </h2>
            <p className="text-xl text-gray-300">
              En MZ Multiservices entendemos que cada proceso migratorio es único. Nuestro equipo de profesionales está comprometido a brindar soluciones personalizadas con tarifas accesibles.
            </p>
            <p className="text-lg text-gray-400">
              Con más de 10 años de experiencia en el campo de la inmigración, hemos ayudado a cientos de personas a navegar exitosamente por los complejos procesos migratorios. Nuestro enfoque combina conocimiento técnico con un genuino interés por el bienestar de nuestros clientes.
            </p>
            <a
              href='tel:+19543388978'
              className="inline-flex items-center px-6 py-3 bg-gold text-black font-semibold rounded-lg hover:bg-gold-light transition-colors"
            >
              Agenda una Consulta
            </a>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: mainInView ? 1 : 0, x: mainInView ? 0 : 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative order-2"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                alt="Immigration Specialist"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gold/10 rounded-full z-[-1]"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-gold/5 rounded-full z-[-1]"></div>
          </motion.div>
        </div>

        {/* Values Section */}
        <div id='nosotros' ref={valuesRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: valuesInView ? 1 : 0, y: valuesInView ? 0 : 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-midnight border border-gold/20 rounded-xl p-6 text-center hover:translate-y-[-5px] transition-transform shadow-md"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gold/10 rounded-lg mb-4">
                <value.icon className="w-6 h-6 text-gold" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{value.title}</h3>
              <p className="text-gray-400">{value.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <div ref={statsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: statsInView ? 1 : 0, y: statsInView ? 0 : 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gradient-to-br from-gold/20 to-gold/5 rounded-xl p-8 text-center text-white hover:scale-105 transition-transform shadow-lg border border-gold/30"
            >
              <stat.icon className="w-12 h-12 mx-auto mb-4 text-gold" />
              <div className="text-3xl font-bold mb-2 text-gold">{stat.value}</div>
              <div className="text-lg font-semibold mb-2 text-white">{stat.label}</div>
              <div className="text-gray-400">{stat.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;