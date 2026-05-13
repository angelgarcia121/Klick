import { motion } from 'motion/react';
import { UserPlus, Briefcase, TrendingUp, Shield, DollarSign, Clock, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router';
import { AppStoreButton } from '../components/AppStoreButton';
import { GooglePlayButton } from '../components/GooglePlayButton';

const benefits = [
  {
    icon: DollarSign,
    title: 'Gana más dinero',
    description: 'Accede a más clientes y aumenta tus ingresos significativamente.',
  },
  {
    icon: Clock,
    title: 'Horario flexible',
    description: 'Tú decides cuándo y dónde trabajar. Total flexibilidad.',
  },
  {
    icon: Shield,
    title: 'Pago garantizado',
    description: 'Sistema de pagos seguro con protección para ambas partes.',
  },
  {
    icon: TrendingUp,
    title: 'Crece tu negocio',
    description: 'Construye tu reputación con valoraciones verificadas.',
  },
];

const steps = [
  {
    number: '01',
    title: 'Descarga la app',
    description: 'Disponible en iOS y Android',
  },
  {
    number: '02',
    title: 'Completa tu perfil',
    description: 'Verifica tu identidad y experiencia',
  },
  {
    number: '03',
    title: 'Empieza a trabajar',
    description: 'Recibe solicitudes y empieza a ganar',
  },
];

const requirements = [
  'Ser mayor de 18 años',
  'Documento de identidad válido',
  'Experiencia demostrable en tu área',
  'Disponibilidad para trabajar',
  'Smartphone con internet',
];

export function WorkersPage() {
  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="py-32 px-6 bg-gradient-to-br from-blue-50/50 via-white to-blue-50/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block bg-blue-50 text-[#2F80ED] px-4 py-2 rounded-full border border-blue-100 mb-6">
                Para profesionales
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Conviértete en trabajador{' '}
                <span className="bg-gradient-to-r from-[#2F80ED] to-blue-600 bg-clip-text text-transparent">
                  Klick
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Únete a nuestra red de profesionales verificados y accede a miles de clientes que necesitan tus servicios.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/registro" className="bg-[#2F80ED] text-white px-8 py-4 rounded-xl hover:bg-[#2F80ED]/90 transition-all shadow-lg shadow-[#2F80ED]/20 flex items-center gap-2 justify-center">
                  <UserPlus className="w-5 h-5" />
                  <span className="font-semibold">Registrarme ahora</span>
                </Link>
                <button className="bg-white text-gray-900 px-8 py-4 rounded-xl hover:bg-gray-50 transition-all border border-gray-200 shadow-sm">
                  Ver requisitos
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-white rounded-3xl shadow-2xl shadow-black/10 border border-gray-200 p-8">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#2F80ED] to-blue-600 rounded-2xl flex items-center justify-center">
                      <Briefcase className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">Tu panel</h3>
                      <p className="text-gray-500">Gestiona todo desde un lugar</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {[
                      { label: 'Solicitudes activas', value: '8', trend: '+3 hoy' },
                      { label: 'Trabajos completados', value: '156', trend: '+12 este mes' },
                      { label: 'Valoración promedio', value: '4.9', trend: '⭐⭐⭐⭐⭐' },
                    ].map((stat) => (
                      <div key={stat.label} className="bg-gray-50 rounded-xl p-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm text-gray-600">{stat.label}</span>
                          <span className="text-2xl font-bold text-[#2F80ED]">{stat.value}</span>
                        </div>
                        <p className="text-xs text-green-600">{stat.trend}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Beneficios de trabajar con Klick
            </h2>
            <p className="text-xl text-gray-600">Todo lo que necesitas para hacer crecer tu negocio</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-lg shadow-black/5 hover:shadow-xl hover:shadow-black/10 transition-all"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[#2F80ED]/10 to-blue-600/10 rounded-xl flex items-center justify-center mb-4">
                  <benefit.icon className="w-7 h-7 text-[#2F80ED]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Start Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Cómo empezar
            </h2>
            <p className="text-xl text-gray-600">Tres simples pasos para comenzar a ganar</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative text-center"
              >
                <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg shadow-black/5 h-full">
                  <div className="text-6xl font-bold bg-gradient-to-br from-[#2F80ED] to-blue-600 bg-clip-text text-transparent mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <svg className="w-8 h-8 text-[#2F80ED]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Requisitos
            </h2>
            <p className="text-xl text-gray-600">Lo que necesitas para unirte</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg shadow-black/5"
          >
            <ul className="space-y-4">
              {requirements.map((requirement, index) => (
                <motion.li
                  key={requirement}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors"
                >
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-green-600" />
                  </div>
                  <span className="text-lg text-gray-700">{requirement}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#2F80ED] to-blue-600 rounded-[3rem] p-12 md:p-16 text-center text-white shadow-2xl shadow-[#2F80ED]/20 relative overflow-hidden"
          >
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl" />
              <div className="absolute bottom-10 right-10 w-40 h-40 bg-white rounded-full blur-3xl" />
            </div>

            <div className="relative z-10">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-xl rounded-2xl flex items-center justify-center mx-auto mb-6">
                <UserPlus className="w-8 h-8" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                ¿Listo para empezar?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Descarga la app y comienza a recibir solicitudes hoy mismo
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
