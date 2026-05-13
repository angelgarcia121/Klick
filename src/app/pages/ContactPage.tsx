import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, MessageSquare, HelpCircle } from 'lucide-react';

const contactMethods = [
  {
    icon: Mail,
    title: 'Email',
    detail: 'hola@klick.com',
    description: 'Te responderemos en 24 horas',
  },
  {
    icon: Phone,
    title: 'Teléfono',
    detail: '+52 449 123 4567',
    description: 'Lun - Vie, 9:00 - 18:00',
  },
  {
    icon: MapPin,
    title: 'Oficina',
    detail: 'Aguascalientes, México',
    description: 'Calle Principal 123',
  },
];

const faqs = [
  {
    question: '¿Cómo funciona Klick?',
    answer: 'Klick conecta clientes con profesionales verificados. Publica tu solicitud, recibe propuestas y elige el mejor profesional para tu proyecto.',
  },
  {
    question: '¿Es seguro usar Klick?',
    answer: 'Sí, todos nuestros profesionales están verificados. Además, contamos con un sistema de pagos seguro y valoraciones transparentes.',
  },
  {
    question: '¿Cuánto cuesta usar Klick?',
    answer: 'Registrarse y publicar solicitudes es completamente gratis. Solo pagas cuando contratas un servicio.',
  },
  {
    question: '¿Puedo cancelar un servicio?',
    answer: 'Sí, puedes cancelar según nuestros términos de servicio. Revisa las políticas de cancelación antes de contratar.',
  },
];

export function ContactPage() {
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
              Estamos aquí para ayudarte
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Contacta con{' '}
              <span className="bg-gradient-to-r from-[#2F80ED] to-blue-600 bg-clip-text text-transparent">
                nosotros
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              ¿Tienes alguna pregunta? Nuestro equipo está listo para ayudarte en lo que necesites.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg shadow-black/5 hover:shadow-xl hover:shadow-black/10 transition-all text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#2F80ED] to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <method.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{method.title}</h3>
                <p className="text-lg text-[#2F80ED] font-semibold mb-2">{method.detail}</p>
                <p className="text-gray-600">{method.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <div className="bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-xl shadow-black/5">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-[#2F80ED] to-blue-600 rounded-xl flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Envíanos un mensaje</h2>
                  <p className="text-gray-600">Te responderemos lo antes posible</p>
                </div>
              </div>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Nombre
                    </label>
                    <input
                      type="text"
                      placeholder="Tu nombre"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#2F80ED] focus:ring-2 focus:ring-[#2F80ED]/20 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="tu@email.com"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#2F80ED] focus:ring-2 focus:ring-[#2F80ED]/20 outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Asunto
                  </label>
                  <input
                    type="text"
                    placeholder="¿En qué podemos ayudarte?"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#2F80ED] focus:ring-2 focus:ring-[#2F80ED]/20 outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Mensaje
                  </label>
                  <textarea
                    rows={6}
                    placeholder="Cuéntanos más detalles..."
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#2F80ED] focus:ring-2 focus:ring-[#2F80ED]/20 outline-none transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#2F80ED] text-white px-8 py-4 rounded-xl hover:bg-[#2F80ED]/90 transition-all shadow-lg shadow-[#2F80ED]/20 flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  <span className="font-semibold">Enviar mensaje</span>
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-blue-50 text-[#2F80ED] px-4 py-2 rounded-full border border-blue-100 mb-6">
              <HelpCircle className="w-4 h-4" />
              <span className="text-sm font-semibold">Preguntas frecuentes</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              ¿Tienes dudas?
            </h2>
            <p className="text-xl text-gray-600">Aquí están las respuestas a las preguntas más comunes</p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-lg hover:shadow-black/5 transition-all"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
