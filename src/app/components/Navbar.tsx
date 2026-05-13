import { useState } from 'react';
import { Link, useLocation } from 'react-router';
import { Menu, X, User } from 'lucide-react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  const linkClass = (path: string) => {
    return isActive(path)
      ? "text-[#2F80ED] font-semibold"
      : "text-gray-600 hover:text-gray-900 transition-colors";
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl border border-black/5 shadow-lg shadow-black/5 px-6 py-3">
          <div className="flex items-center justify-between relative">
            <Link to="/" className="flex items-center gap-2 z-10">
              <img src="/logo.png" alt="Klick Logo" className="w-12 h-12" />
            </Link>

            {/* Centered Brand Name (Mobile Only) */}
            <div className="absolute left-1/2 -translate-x-1/2 font-bold text-xl tracking-tight text-gray-900 pointer-events-none md:hidden z-0">
              Klick
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <Link to="/" className={linkClass('/')}>
                Inicio
              </Link>
              <Link to="/como-funciona" className={linkClass('/como-funciona')}>
                Cómo funciona
              </Link>
              <Link to="/servicios" className={linkClass('/servicios')}>
                Servicios
              </Link>
              <Link to="/trabajadores" className={linkClass('/trabajadores')}>
                Trabajadores
              </Link>
              <Link to="/contacto" className={linkClass('/contacto')}>
                Contacto
              </Link>
            </div>

            {/* CTA Button and Login */}
            <div className="hidden md:flex items-center gap-4">
              <Link
                to="/login"
                className="p-2 text-gray-600 hover:text-[#2F80ED] transition-colors rounded-full hover:bg-blue-50 flex items-center justify-center"
                title="Iniciar sesión"
              >
                <User size={24} />
              </Link>
              <Link to="/registro" className="bg-[#2F80ED] text-white px-6 py-3 rounded-2xl hover:bg-[#2F80ED]/90 transition-all shadow-sm hover:shadow-md font-semibold">
                Comenzar
              </Link>
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-gray-600 hover:text-gray-900 z-10"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden pt-4 pb-2 space-y-3 border-t border-gray-100 mt-4">
              <Link
                to="/"
                className={`block py-2 ${linkClass('/')}`}
                onClick={() => setIsOpen(false)}
              >
                Inicio
              </Link>
              <Link
                to="/como-funciona"
                className={`block py-2 ${linkClass('/como-funciona')}`}
                onClick={() => setIsOpen(false)}
              >
                Cómo funciona
              </Link>
              <Link
                to="/servicios"
                className={`block py-2 ${linkClass('/servicios')}`}
                onClick={() => setIsOpen(false)}
              >
                Servicios
              </Link>
              <Link
                to="/trabajadores"
                className={`block py-2 ${linkClass('/trabajadores')}`}
                onClick={() => setIsOpen(false)}
              >
                Trabajadores
              </Link>
              <Link
                to="/contacto"
                className={`block py-2 ${linkClass('/contacto')}`}
                onClick={() => setIsOpen(false)}
              >
                Contacto
              </Link>
              <Link
                to="/login"
                className={`flex items-center gap-2 py-2 ${linkClass('/login')}`}
                onClick={() => setIsOpen(false)}
              >
                <User size={20} />
                Iniciar sesión
              </Link>
              <Link to="/registro" onClick={() => setIsOpen(false)} className="block text-center w-full bg-[#2F80ED] text-white px-6 py-3 rounded-2xl hover:bg-[#2F80ED]/90 transition-all font-semibold mt-2">
                Comenzar
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
