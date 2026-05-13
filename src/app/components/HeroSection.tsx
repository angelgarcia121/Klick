import { motion } from 'motion/react';
import { FloatingCard } from './FloatingCard';
import { Check, Star, Users, Clock } from 'lucide-react';

export function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center pt-32 pb-20 px-6 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white to-blue-50/30 -z-10" />

      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 bg-blue-50 text-[#2F80ED] px-4 py-2 rounded-full border border-blue-100">
              <div className="w-2 h-2 bg-[#2F80ED] rounded-full animate-pulse" />
              <span className="text-sm">Conecta en segundos</span>
            </div>

            <h1 className="text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
              Encuentra ayuda{' '}
              <span className="bg-gradient-to-r from-[#2F80ED] to-blue-600 bg-clip-text text-transparent">
                confiable
              </span>{' '}
              cerca de ti
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
              Klick conecta clientes con trabajadores independientes de manera rápida, segura y moderna.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[#2F80ED] text-white px-8 py-4 rounded-xl hover:bg-[#2F80ED]/90 transition-all shadow-lg shadow-[#2F80ED]/20 hover:shadow-xl hover:shadow-[#2F80ED]/30">
                Explorar servicios
              </button>
              <button className="bg-white text-gray-900 px-8 py-4 rounded-xl hover:bg-gray-50 transition-all border border-gray-200 shadow-sm">
                Cómo funciona
              </button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-white"
                  />
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm text-gray-600 mt-1">Más de 10,000 usuarios</p>
              </div>
            </div>
          </motion.div>

          {/* Right - Mockup with Floating Cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Main Mockup */}
            <div className="relative bg-white rounded-3xl shadow-2xl shadow-black/10 border border-gray-200 p-8 max-w-md mx-auto">
              <div className="space-y-6">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Servicios</h3>
                    <p className="text-sm text-gray-500">Encuentra lo que necesitas</p>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#2F80ED] to-blue-600" />
                </div>

                {/* Service Cards */}
                <div className="space-y-3">
                  {['Electricista', 'Plomería', 'Limpieza'].map((service, i) => (
                    <div
                      key={service}
                      className="bg-gradient-to-br from-blue-50 to-blue-50/30 rounded-xl p-4 border border-blue-100"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-semibold text-gray-900">{service}</p>
                          <p className="text-sm text-gray-500">Disponible ahora</p>
                        </div>
                        <div className="w-10 h-10 bg-[#2F80ED] rounded-lg flex items-center justify-center text-white">
                          {i + 1}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating Cards */}
            <FloatingCard
              delay={0}
              className="absolute -top-8 -right-8 p-4 hidden lg:block"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <Check className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Verificado</p>
                  <p className="text-xs text-gray-500">Trabajador confiable</p>
                </div>
              </div>
            </FloatingCard>

            <FloatingCard
              delay={0.3}
              className="absolute -bottom-8 -left-8 p-4 hidden lg:block"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <Users className="w-5 h-5 text-[#2F80ED]" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">1,234+</p>
                  <p className="text-xs text-gray-500">Trabajadores activos</p>
                </div>
              </div>
            </FloatingCard>

            <FloatingCard
              delay={0.6}
              className="absolute top-1/2 -right-12 p-3 hidden xl:block"
            >
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-blue-600" />
                <p className="text-sm font-semibold text-gray-900">Respuesta en 5 min</p>
              </div>
            </FloatingCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
