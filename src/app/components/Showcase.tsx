import { motion } from 'motion/react';
import { Shield, Clock, Star, Award, LayoutDashboard } from 'lucide-react';

const features = [
  { icon: Shield, title: 'Verificación completa', description: 'Todos nuestros trabajadores pasan por verificación' },
  { icon: Clock, title: 'Respuesta rápida', description: 'Conecta con profesionales en minutos' },
  { icon: Star, title: 'Calidad garantizada', description: 'Sistema de calificaciones transparente' },
  { icon: Award, title: 'Mejor precio', description: 'Compara ofertas y elige la mejor' },
];

export function Showcase() {
  return (
    <section className="py-32 px-6 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(47,128,237,0.05),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(59,130,246,0.05),transparent_50%)]" />

      <div className="max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Feature Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="bg-white rounded-3xl shadow-2xl shadow-black/10 border border-gray-200 p-8 max-w-lg">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#2F80ED] to-blue-600 rounded-2xl flex items-center justify-center">
                    <LayoutDashboard className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl text-gray-900">Panel inteligente</h4>
                    <p className="text-sm text-gray-500">Gestión simplificada</p>
                  </div>
                </div>

                <div className="space-y-3">
                  {[
                    { label: 'Solicitudes activas', value: '12', color: 'bg-blue-100 text-blue-600' },
                    { label: 'Trabajadores favoritos', value: '8', color: 'bg-blue-100 text-blue-600' },
                    { label: 'Proyectos completados', value: '24', color: 'bg-green-100 text-green-600' },
                  ].map((stat) => (
                    <div key={stat.label} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                      <span className="text-gray-700">{stat.label}</span>
                      <span className={`px-3 py-1 rounded-lg font-bold ${stat.color}`}>{stat.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-6 -right-6 bg-white/90 backdrop-blur-xl rounded-2xl border border-black/5 shadow-xl p-4"
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <Shield className="w-4 h-4 text-green-600" />
                </div>
                <span className="font-semibold text-gray-900">100% Seguro</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Features */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <div className="inline-block bg-blue-50 text-[#2F80ED] px-4 py-2 rounded-full border border-blue-100 mb-6">
                Por qué Klick
              </div>
              <h2 className="text-5xl font-bold text-gray-900 mb-6">
                Diseñado para tu{' '}
                <span className="bg-gradient-to-r from-[#2F80ED] to-blue-600 bg-clip-text text-transparent">
                  tranquilidad
                </span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Conectamos personas con los mejores profesionales, garantizando calidad y confianza en cada servicio.
              </p>
            </div>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-2xl hover:bg-gray-50 transition-colors"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-[#2F80ED]/10 to-blue-600/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-[#2F80ED]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-gray-900 mb-1">{feature.title}</h4>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
