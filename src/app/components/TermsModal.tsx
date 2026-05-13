import { useRef, useState, useEffect } from 'react';
import { X } from 'lucide-react';

interface TermsModalProps {
  onClose: () => void;
  onAccept?: () => void;
  mode: 'read' | 'accept';
}

export function TermsModal({ onClose, onAccept, mode }: TermsModalProps) {
  const [hasScrolledToBottom, setHasScrolledToBottom] = useState(mode === 'read');
  const termsRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (mode === 'read') return;
    
    if (termsRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = termsRef.current;
      if (scrollTop + clientHeight >= scrollHeight - 5) {
        setHasScrolledToBottom(true);
      }
    }
  };

  const handleAccept = () => {
    if (mode === 'read' || hasScrolledToBottom) {
      if (onAccept) onAccept();
      else onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl max-h-[85vh] flex flex-col overflow-hidden">
        <div className="p-6 border-b border-gray-100 flex justify-between items-center">
          <h3 className="text-xl font-bold text-gray-900">Términos y Condiciones</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <div 
          className="p-6 overflow-y-auto flex-1 prose prose-sm prose-blue max-w-none text-gray-600"
          ref={termsRef}
          onScroll={handleScroll}
        >
          <p><strong>Última actualización: 9 de abril de 2026</strong></p>

          <h4>1. Aceptación de Términos</h4>
          <p>Al acceder y usar Klick, aceptas estar vinculado por estos Términos y Condiciones. Si no estás de acuerdo con alguna parte de estos términos, no debes usar nuestra aplicación.</p>

          <h4>2. Descripción del Servicio</h4>
          <p>Klick es una plataforma que conecta a clientes con profesionales para servicios locales en Aguascalientes, México. Actuamos como intermediarios y no somos responsables directos de la calidad de los servicios prestados.</p>

          <h4>3. Registro y Cuenta</h4>
          <p>Para usar Klick, debes:</p>
          <ul>
            <li>Ser mayor de 18 años</li>
            <li>Proporcionar información precisa y actualizada</li>
            <li>Mantener la confidencialidad de tu cuenta</li>
            <li>Aceptar toda responsabilidad por actividades en tu cuenta</li>
          </ul>

          <h4>4. Comisiones y Pagos</h4>
          <p>Sistema de comisiones:</p>
          <ul>
            <li>Pago digital: 10% de comisión sobre el monto total</li>
            <li>Pago en efectivo: 12% de comisión sobre el monto total</li>
            <li>Plazo de pago de comisión: 7 días desde finalización del trabajo</li>
            <li>Bloqueo automático por falta de pago después de 7 días</li>
          </ul>

          <h4>5. Deudas y Suspensiones</h4>
          <p>Si tienes una deuda pendiente por más de 7 días, tu cuenta será suspendida temporalmente hasta que se regularice el pago. No podrás aceptar nuevos trabajos durante la suspensión.</p>

          <h4>6. Cancelaciones</h4>
          <p>Las cancelaciones deben realizarse con al menos 2 horas de anticipación. Cancelaciones frecuentes pueden resultar en penalizaciones o suspensión de cuenta.</p>

          <h4>7. Materiales y Suministros</h4>
          <p>Responsabilidades sobre materiales:</p>
          <ul>
            <li>El trabajador debe informar al cliente si el trabajo requiere materiales específicos</li>
            <li>El cliente es responsable de proporcionar o cubrir el costo de los materiales necesarios</li>
            <li>Si se acordó que el precio incluye materiales, el trabajador debe especificarlo claramente en su propuesta</li>
            <li>Cualquier costo adicional por materiales debe ser acordado entre ambas partes antes de iniciar el trabajo</li>
            <li>Klick no se hace responsable por disputas relacionadas con materiales o su calidad</li>
          </ul>

          <h4>8. Calificaciones y Reseñas</h4>
          <p>Ambas partes pueden calificar el servicio. Las calificaciones son públicas y permanentes. Contenido ofensivo o falso será eliminado y puede resultar en suspensión.</p>

          <h4>9. Responsabilidad</h4>
          <p>Klick no se hace responsable por daños, pérdidas o lesiones resultantes de servicios contratados a través de la plataforma. Los usuarios asumen toda responsabilidad.</p>

          <h4>10. Privacidad</h4>
          <p>Recopilamos y usamos información personal según nuestra Política de Privacidad. Al usar Klick, aceptas nuestras prácticas de manejo de datos.</p>

          <h4>11. Modificaciones</h4>
          <p>Klick se reserva el derecho de modificar estos términos en cualquier momento. Los cambios entrarán en vigor inmediatamente después de su publicación.</p>

          <h4>12. Terminación</h4>
          <p>Podemos suspender o terminar tu cuenta por violación de estos términos, conducta inapropiada, o cualquier razón a nuestra discreción.</p>

          <h4>13. Ley Aplicable</h4>
          <p>Estos términos se rigen por las leyes de México. Cualquier disputa se resolverá en los tribunales de Aguascalientes, México.</p>
        </div>
        
        <div className="p-6 border-t border-gray-100 bg-gray-50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-sm text-gray-500 text-center sm:text-left">
            {mode === 'accept' && !hasScrolledToBottom && "Debes leer todo el documento para continuar"}
          </span>
          <button
            onClick={handleAccept}
            disabled={mode === 'accept' && !hasScrolledToBottom}
            className={`w-full sm:w-auto px-6 py-3 rounded-xl font-semibold transition-all ${
              mode === 'read' || hasScrolledToBottom 
                ? 'bg-[#2F80ED] text-white hover:bg-blue-600 shadow-lg shadow-blue-500/20' 
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
          >
            {mode === 'accept' ? 'Aceptar y continuar' : 'Cerrar'}
          </button>
        </div>
      </div>
    </div>
  );
}
