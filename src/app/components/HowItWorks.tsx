import { motion } from 'motion/react';
import { FileEdit, Users2, CheckCircle2 } from 'lucide-react';

const steps = [
  {
    icon: FileEdit,
    title: 'Publica lo que necesitas',
    description: 'Describe el servicio que buscas en minutos. Simple y rápido.',
  },
  {
    icon: Users2,
    title: 'Recibe propuestas',
    description: 'Trabajadores calificados cerca de ti te contactarán con sus ofertas.',
  },
  {
    icon: CheckCircle2,
    title: 'Contrata fácilmente',
    description: 'Revisa perfiles, compara precios y contrata con confianza.',
  },
];

export function HowItWorks() {
  return (
    <section className="py-32 px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-block bg-blue-50 text-[#2F80ED] px-4 py-2 rounded-full border border-blue-100 mb-6">
            Proceso simple
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Cómo funciona
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Conectar con profesionales nunca fue tan fácil
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-lg shadow-black/5 hover:shadow-xl hover:shadow-black/10 transition-all h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-[#2F80ED] to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-[#2F80ED] text-white rounded-full flex items-center justify-center font-bold text-xl">
                  {index + 1}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
