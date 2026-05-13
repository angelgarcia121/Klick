import { motion } from 'motion/react';
import { Zap, Wrench, Sparkles, Trees, Laptop, Truck, CheckCircle2, Clock, Star, Shield, Smartphone, ArrowRight } from 'lucide-react';
import { Testimonials } from "../components/Testimonials";
import { CTA } from "../components/CTA";
import { AppStoreButton } from "../components/AppStoreButton";
import { GooglePlayButton } from "../components/GooglePlayButton";

const services = [
  {
    icon: Zap,
    name: 'Electricista',
    color: 'from-yellow-400 to-orange-500',
    description: 'Soluciones eléctricas profesionales para tu hogar o negocio',
    details: [
      'Instalación y reparación de sistemas eléctricos',
      'Mantenimiento preventivo de instalaciones',
      'Actualización de tableros y cableado',
      'Instalación de iluminación LED',
      'Certificaciones y peritajes eléctricos',
    ],
    features: [
      { icon: Shield, text: 'Certificados y licenciados' },
      { icon: Clock, text: 'Servicio de emergencia 24/7' },
      { icon: Star, text: 'Garantía en todos los trabajos' },
    ],
  },
  {
    icon: Wrench,
    name: 'Plomería',
    color: 'from-blue-400 to-cyan-500',
    description: 'Expertos en instalaciones y reparaciones de sistemas hidráulicos',
    details: [
      'Reparación de fugas y goteras',
      'Instalación de tuberías y desagües',
      'Mantenimiento de calentadores',
      'Destapado de cañerías',
      'Instalación de sanitarios y grifería',
    ],
    features: [
      { icon: Shield, text: 'Garantía de servicio' },
      { icon: Clock, text: 'Atención urgente disponible' },
      { icon: Star, text: 'Trabajos de calidad' },
    ],
  },
  {
    icon: Sparkles,
    name: 'Limpieza',
    color: 'from-sky-400 to-blue-500',
    description: 'Servicios de limpieza profesional para espacios impecables',
    details: [
      'Limpieza profunda de hogares',
      'Limpieza de oficinas y comercios',
      'Limpieza post-construcción',
      'Limpieza de alfombras y tapicería',
      'Servicios de desinfección',
    ],
    features: [
      { icon: Shield, text: 'Productos ecológicos' },
      { icon: Clock, text: 'Horarios flexibles' },
      { icon: Star, text: 'Personal capacitado' },
    ],
  },
  {
    icon: Trees,
    name: 'Jardinería',
    color: 'from-green-400 to-emerald-500',
    description: 'Cuidado y mantenimiento profesional de jardines',
    details: [
      'Diseño y creación de jardines',
      'Mantenimiento de áreas verdes',
      'Poda de árboles y arbustos',
      'Sistemas de riego automático',
      'Control de plagas y fertilización',
    ],
    features: [
      { icon: Shield, text: 'Expertos certificados' },
      { icon: Clock, text: 'Mantenimiento programado' },
      { icon: Star, text: 'Resultados garantizados' },
    ],
  },
  {
    icon: Laptop,
    name: 'Tecnología',
    color: 'from-indigo-400 to-blue-500',
    description: 'Soporte técnico y servicios IT para particulares y empresas',
    details: [
      'Reparación de computadoras y laptops',
      'Configuración de redes wifi',
      'Instalación de software y sistemas',
      'Recuperación de datos',
      'Soporte técnico remoto',
    ],
    features: [
      { icon: Shield, text: 'Técnicos certificados' },
      { icon: Clock, text: 'Diagnóstico rápido' },
      { icon: Star, text: 'Soporte continuo' },
    ],
  },
  {
    icon: Truck,
    name: 'Mudanzas',
    color: 'from-red-400 to-rose-500',
    description: 'Servicio completo de mudanzas seguras y eficientes',
    details: [
      'Mudanzas residenciales y comerciales',
      'Embalaje y protección de objetos',
      'Transporte seguro y asegurado',
      'Desmontaje y montaje de muebles',
      'Almacenamiento temporal',
    ],
    features: [
      { icon: Shield, text: 'Seguro incluido' },
      { icon: Clock, text: 'Servicio express' },
      { icon: Star, text: 'Equipo profesional' },
    ],
  },
];

export function ServicesPage() {
  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="py-32 px-6 bg-gradient-to-br from-blue-50/50 via-white to-blue-50/30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block bg-blue-50 text-[#2F80ED] px-4 py-2 rounded-full border border-blue-100 mb-6">
              Servicios profesionales
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Encuentra el{' '}
              <span className="bg-gradient-to-r from-[#2F80ED] to-blue-600 bg-clip-text text-transparent">
                profesional perfecto
              </span>
              {' '}para tu necesidad
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Accede a una red de profesionales verificados en múltiples categorías, listos para ayudarte.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto space-y-32">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Content */}
              <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className={`inline-flex items-center gap-3 bg-gradient-to-r ${service.color} text-white px-4 py-2 rounded-2xl mb-6`}>
                  <service.icon className="w-5 h-5" />
                  <span className="font-semibold">{service.name}</span>
                </div>

                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  {service.description}
                </h2>

                <div className="space-y-3 mb-8">
                  {service.details.map((detail, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-[#2F80ED] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{detail}</span>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-3 gap-4">
                  {service.features.map((feature, i) => (
                    <div key={i} className="text-center p-4 bg-gray-50 rounded-2xl">
                      <feature.icon className="w-6 h-6 text-[#2F80ED] mx-auto mb-2" />
                      <p className="text-xs text-gray-600 leading-tight">{feature.text}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Visual */}
              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="relative">
                  <div className="bg-gradient-to-br from-gray-50 to-blue-50/30 rounded-3xl p-12 border border-gray-100 shadow-xl">
                    <div className={`w-32 h-32 bg-gradient-to-br ${service.color} rounded-3xl mx-auto mb-6 flex items-center justify-center transform rotate-6 hover:rotate-0 transition-transform`}>
                      <service.icon className="w-16 h-16 text-white" />
                    </div>
                    <div className="text-center">
                      <div className="bg-white rounded-2xl p-6 shadow-sm">
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <p className="text-sm text-gray-500">Calificación promedio</p>
                            <div className="flex items-center gap-1 mt-1">
                              {[1, 2, 3, 4, 5].map((i) => (
                                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                              ))}
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-3xl font-bold text-gray-900">4.9</p>
                          </div>
                        </div>
                        <div className="pt-4 border-t border-gray-100">
                          <div className="grid grid-cols-2 gap-4 text-center">
                            <div>
                              <p className="text-2xl font-bold text-[#2F80ED]">1,234</p>
                              <p className="text-xs text-gray-500">Profesionales</p>
                            </div>
                            <div>
                              <p className="text-2xl font-bold text-[#2F80ED]">5,678</p>
                              <p className="text-xs text-gray-500">Trabajos</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How to Request Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-blue-50 text-[#2F80ED] px-4 py-2 rounded-full border border-blue-100 mb-6">
              <Smartphone className="w-4 h-4" />
              <span className="text-sm font-semibold">Solicita desde la app</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              ¿Cómo solicitar un servicio?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Descarga la app Klick y accede a todos los servicios en segundos
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            {[
              {
                step: '01',
                title: 'Descarga la app',
                description: 'Disponible gratis en iOS y Android',
                icon: Smartphone,
              },
              {
                step: '02',
                title: 'Describe tu necesidad',
                description: 'Selecciona el servicio y detalla qué necesitas',
                icon: CheckCircle2,
              },
              {
                step: '03',
                title: 'Recibe propuestas',
                description: 'Profesionales cercanos te contactarán en minutos',
                icon: Star,
              },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative bg-white rounded-3xl p-8 border border-gray-100 shadow-lg shadow-black/5"
              >
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-[#2F80ED] text-white rounded-full flex items-center justify-center font-bold text-lg">
                  {item.step}
                </div>
                <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl flex items-center justify-center mb-6">
                  <item.icon className="w-8 h-8 text-[#2F80ED]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#2F80ED] to-blue-600 rounded-[3rem] p-12 md:p-16 text-white shadow-2xl relative overflow-hidden"
          >
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl" />
              <div className="absolute bottom-10 right-10 w-40 h-40 bg-white rounded-full blur-3xl" />
            </div>

            <div className="relative z-10">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  Descarga Klick ahora
                </h2>
                <p className="text-xl text-white/90">
                  Accede a todos los servicios desde tu smartphone
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <AppStoreButton />
                <GooglePlayButton />
              </div>

              <div className="grid md:grid-cols-4 gap-8 pt-8 border-t border-white/20">
                {[
                  { number: '10,000+', label: 'Usuarios activos' },
                  { number: '5,000+', label: 'Profesionales' },
                  { number: '50,000+', label: 'Trabajos completados' },
                  { number: '4.9', label: 'Calificación promedio' },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="text-center"
                  >
                    <p className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</p>
                    <p className="text-white/80 text-sm">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Testimonials />
      <CTA />
    </main>
  );
}
