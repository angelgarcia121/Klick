import { motion } from 'motion/react';
import { Zap, Wrench, Sparkles, Trees, Laptop, Truck } from 'lucide-react';

const services = [
  { icon: Zap, name: 'Electricista', color: 'from-yellow-400 to-orange-500' },
  { icon: Wrench, name: 'Plomería', color: 'from-blue-400 to-cyan-500' },
  { icon: Sparkles, name: 'Limpieza', color: 'from-sky-400 to-blue-500' },
  { icon: Trees, name: 'Jardinería', color: 'from-green-400 to-emerald-500' },
  { icon: Laptop, name: 'Tecnología', color: 'from-indigo-400 to-blue-500' },
  { icon: Truck, name: 'Mudanzas', color: 'from-red-400 to-rose-500' },
];

export function Services() {
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
            Categorías populares
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Servicios disponibles
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Encuentra profesionales en las categorías más solicitadas
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-gray-100 hover:border-[#2F80ED]/30 shadow-lg shadow-black/5 hover:shadow-xl hover:shadow-[#2F80ED]/10 transition-all cursor-pointer overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-blue-50/30 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className={`w-20 h-20 bg-gradient-to-br ${service.color} rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <service.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.name}</h3>
                  <p className="text-gray-600 mb-4">Profesionales verificados y calificados</p>
                  <div className="mt-4 inline-flex items-center gap-2 text-[#2F80ED] opacity-0 group-hover:opacity-100 transition-opacity bg-blue-50 px-4 py-2 rounded-xl">
                    <span className="text-sm font-semibold">Ver detalles</span>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
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
