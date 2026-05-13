import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'María González',
    role: 'Cliente frecuente',
    content: 'Encontré un electricista excelente en minutos. El proceso fue súper simple y el trabajo impecable.',
    rating: 5,
  },
  {
    name: 'Carlos Ruiz',
    role: 'Plomero independiente',
    content: 'Como trabajador, Klick me ha permitido conectar con más clientes y crecer mi negocio significativamente.',
    rating: 5,
  },
  {
    name: 'Ana Martínez',
    role: 'Propietaria',
    content: 'La mejor plataforma para encontrar servicios confiables. Los profesionales están verificados y son muy responsables.',
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-block bg-blue-50 text-[#2F80ED] px-4 py-2 rounded-full border border-blue-100 mb-6">
            Testimonios
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Lo que dicen nuestros usuarios
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Miles de personas confían en Klick cada día
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-lg shadow-black/5 hover:shadow-xl hover:shadow-black/10 transition-all h-full">
                <Quote className="w-10 h-10 text-[#2F80ED] mb-4" />
                <p className="text-gray-700 leading-relaxed mb-6">{testimonial.content}</p>
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#2F80ED] to-blue-600" />
                  <div>
                    <p className="font-bold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
