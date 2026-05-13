import { motion } from 'motion/react';
import { Star, Smartphone, Shield, Zap, Users, User, Wrench, Sparkles } from 'lucide-react';
import { AppStoreButton } from '../components/AppStoreButton';
import { GooglePlayButton } from '../components/GooglePlayButton';

export function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section - App Download Focus */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-36 md:pt-40 lg:pt-48 pb-12 lg:pb-20 px-4 sm:px-6 overflow-hidden">
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
              <div className="inline-flex items-center gap-2 bg-blue-50 text-[#2F80ED] px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-blue-100">
                <div className="w-2 h-2 bg-[#2F80ED] rounded-full animate-pulse" />
                <span className="text-xs sm:text-sm font-medium">Ya disponible en iOS y Android</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-gray-900 leading-[1.15] tracking-tight">
                Tu solución{' '}
                <span className="bg-gradient-to-r from-[#2F80ED] to-blue-600 bg-clip-text text-transparent">
                  perfecta
                </span>{' '}
                está a un clic
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl">
                Descarga Klick y conecta con profesionales verificados cerca de ti. Rápido, seguro y confiable.
              </p>

              {/* Download Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <AppStoreButton />
                <GooglePlayButton />
              </div>

              {/* Stats */}
              <div className="flex items-center gap-4 sm:gap-8 pt-2 sm:pt-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-white flex items-center justify-center overflow-hidden"
                    >
                      <User className="w-5 h-5 text-white/80" />
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-sm text-gray-600 mt-1">10,000+ descargas</p>
                </div>
              </div>
            </motion.div>

            {/* Right - App Mockup */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              {/* Phone Mockup */}
              <div className="relative w-full max-w-[280px] sm:max-w-xs md:max-w-sm mx-auto">
                <div className="bg-gray-900 rounded-[2.5rem] sm:rounded-[3rem] p-3 shadow-2xl shadow-black/20 border-4 sm:border-8 border-gray-800">
                  <div className="bg-white rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden">
                    {/* Status Bar */}
                    <div className="bg-gray-50 px-4 sm:px-6 py-3 flex items-center justify-between text-xs">
                      <span className="font-semibold">9:41</span>
                      <div className="flex items-center gap-1">
                        <div className="w-4 h-3 border border-gray-900 rounded-sm" />
                      </div>
                    </div>

                    {/* App Content */}
                    <div className="p-4 sm:p-6 space-y-6 bg-gradient-to-b from-blue-50 to-white">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900">Klick</h3>
                          <p className="text-sm text-gray-500">Servicios cerca de ti</p>
                        </div>
                        <div className="w-12 h-12 bg-gradient-to-br from-[#2F80ED] to-blue-600 rounded-2xl flex items-center justify-center">
                          <User className="w-6 h-6 text-white" />
                        </div>
                      </div>

                      {/* Search Bar */}
                      <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                        <div className="flex items-center gap-3 text-gray-400">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                          </svg>
                          <span className="text-sm">Buscar servicios...</span>
                        </div>
                      </div>

                      {/* Service Cards */}
                      <div className="space-y-3">
                        {[
                          { name: 'Electricista', status: 'Disponible ahora', color: 'from-yellow-400 to-orange-500', icon: Zap },
                          { name: 'Plomería', status: '3 profesionales cerca', color: 'from-blue-400 to-cyan-500', icon: Wrench },
                          { name: 'Limpieza', status: 'Respuesta en 5 min', color: 'from-sky-400 to-blue-500', icon: Sparkles },
                        ].map((service) => (
                          <div key={service.name} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                            <div className="flex items-center justify-between">
                              <div>
                                <p className="font-semibold text-gray-900">{service.name}</p>
                                <p className="text-xs text-gray-500">{service.status}</p>
                              </div>
                              <div className={`w-10 h-10 bg-gradient-to-br ${service.color} rounded-lg flex items-center justify-center`}>
                                <service.icon className="w-5 h-5 text-white" />
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating badges around phone */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -top-8 -left-8 bg-white/90 backdrop-blur-xl rounded-2xl border border-black/5 shadow-xl p-4 hidden lg:block"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <Shield className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Verificado</p>
                      <p className="text-xs text-gray-500">100% seguro</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                  className="absolute -bottom-8 -right-8 bg-white/90 backdrop-blur-xl rounded-2xl border border-black/5 shadow-xl p-4 hidden lg:block"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <Zap className="w-5 h-5 text-[#2F80ED]" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Rápido</p>
                      <p className="text-xs text-gray-500">En minutos</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
              ¿Por qué elegir Klick?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600">Todo lo que necesitas en una sola app</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: 'Totalmente seguro',
                description: 'Todos los profesionales están verificados y cuentan con valoraciones reales.',
              },
              {
                icon: Zap,
                title: 'Súper rápido',
                description: 'Encuentra y contrata profesionales en cuestión de minutos, no días.',
              },
              {
                icon: Users,
                title: 'Red confiable',
                description: 'Miles de profesionales y clientes satisfechos en toda la plataforma.',
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-lg shadow-black/5 hover:shadow-xl hover:shadow-black/10 transition-all"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#2F80ED] to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#2F80ED] to-blue-600 rounded-[2rem] md:rounded-[3rem] p-6 sm:p-10 md:p-16 text-center text-white shadow-2xl shadow-[#2F80ED]/20 relative overflow-hidden"
          >
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl" />
              <div className="absolute bottom-10 right-10 w-40 h-40 bg-white rounded-full blur-3xl" />
            </div>

            <div className="relative z-10">
              <Smartphone className="w-16 h-16 mx-auto mb-6" />
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
                Descarga Klick hoy
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto">
                Únete a miles de usuarios que ya encontraron la solución perfecta
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <AppStoreButton />
                <GooglePlayButton />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
