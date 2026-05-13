import { useState } from 'react';
import { Link } from 'react-router';
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { TermsModal } from './TermsModal';

export function Footer() {
  const [showTerms, setShowTerms] = useState(false);

  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-8 lg:mb-12 text-center sm:text-left">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <img src="/logo.png" alt="Klick Logo" className="w-24 h-24 object-contain" />
            </div>
            <p className="text-gray-600 leading-relaxed mx-auto sm:mx-0 max-w-xs">
              Conectando personas con profesionales de confianza, de manera simple y segura.
            </p>
            <div className="flex items-center justify-center sm:justify-start gap-3">
              <a href="#" className="w-10 h-10 bg-gray-100 hover:bg-[#2F80ED] hover:text-white rounded-full flex items-center justify-center transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-100 hover:bg-[#2F80ED] hover:text-white rounded-full flex items-center justify-center transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-100 hover:bg-[#2F80ED] hover:text-white rounded-full flex items-center justify-center transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-100 hover:bg-[#2F80ED] hover:text-white rounded-full flex items-center justify-center transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Compañía</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-600 hover:text-[#2F80ED] transition-colors">Sobre nosotros</Link></li>
              <li><Link to="/como-funciona" className="text-gray-600 hover:text-[#2F80ED] transition-colors">Cómo funciona</Link></li>
              <li><Link to="/trabajadores" className="text-gray-600 hover:text-[#2F80ED] transition-colors">Trabajadores</Link></li>
              <li><a href="#" className="text-gray-600 hover:text-[#2F80ED] transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Soporte</h4>
            <ul className="space-y-3">
              <li><Link to="/contacto" className="text-gray-600 hover:text-[#2F80ED] transition-colors">Centro de ayuda</Link></li>
              <li>
                <button onClick={() => setShowTerms(true)} className="text-gray-600 hover:text-[#2F80ED] transition-colors">
                  Términos de servicio
                </button>
              </li>
              <li><a href="#" className="text-gray-600 hover:text-[#2F80ED] transition-colors">Privacidad</a></li>
              <li><Link to="/contacto" className="text-gray-600 hover:text-[#2F80ED] transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-center justify-center sm:justify-start gap-2 text-gray-600">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <a href="mailto:hola@klick.com" className="hover:text-[#2F80ED] transition-colors">
                  hola@klick.com
                </a>
              </li>
              <li className="flex items-center justify-center sm:justify-start gap-2 text-gray-600">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <a href="tel:+524491234567" className="hover:text-[#2F80ED] transition-colors">
                  +52 449 123 4567
                </a>
              </li>
              <li className="flex items-center justify-center sm:justify-start gap-2 text-gray-600">
                <MapPin className="w-5 h-5 flex-shrink-0" />
                <span>Aguascalientes, México</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6 text-center">
          <p className="text-gray-600 text-sm">
            © 2026 Klick. Todos los derechos reservados.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
            <a href="#" className="text-gray-600 hover:text-[#2F80ED] text-sm transition-colors">
              Política de Privacidad
            </a>
            <button onClick={() => setShowTerms(true)} className="text-gray-600 hover:text-[#2F80ED] text-sm transition-colors">
              Términos y Condiciones
            </button>
            <a href="#" className="text-gray-600 hover:text-[#2F80ED] text-sm transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>

      {showTerms && (
        <TermsModal 
          mode="read" 
          onClose={() => setShowTerms(false)} 
        />
      )}
    </footer>
  );
}
