'use client';

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "¿Cómo funciona el proceso de contratación?",
    answer: "Primero aclaramos todos los detalles. Una vez definido el alcance, inicia el proyecto con el pago del 50% inicial y se agenda la fecha de entrega."
  },
  {
    question: "¿Qué incluye una \"revisión\" en los planes?",
    answer: "Cada revisión permite solicitar cambios sobre el sitio, como ajustes de contenido, diseño o funcionalidades, dentro del alcance previamente acordado."
  },
  {
    question: "¿En cuánto tiempo está listo mi sitio web?",
    answer: "El tiempo promedio de entrega es de 7 días hábiles, dependiendo del tipo de sitio y respuesta del cliente."
  },
  {
    question: "¿Qué opciones de pago aceptan?",
    answer: "Aceptamos PayPal, Zelle, USDT, Binance, Pago Móvil y transferencia bancaria nacional."
  },
  {
    question: "¿Puedo solicitar funcionalidades extra no incluidas en los planes?",
    answer: "Claro, se pueden agregar addons, y te cotizamos según el requerimiento adicional."
  },
  {
    question: "¿Incluyen soporte después de la entrega?",
    answer: "Sí, todos los sitios incluyen 30 días de soporte técnico gratis para dudas, ajustes menores y asistencia."
  },
  {
    question: "¿Qué pasa si no quedo satisfecho con el resultado final?",
    answer: "Buscamos siempre la satisfacción del cliente. Si existen problemas graves, ofrecemos ajustes adicionales hasta completar lo pactado en el contrato."
  },
  {
    question: "¿Puedo migrar mi sitio web a otro servidor o proveedor en el futuro?",
    answer: "Por supuesto. Los sitios desarrollados son 100% tuyos y puedes migrarlos cuando lo requieras."
  },
  {
    question: "¿Necesito tener conocimientos técnicos para gestionar mi sitio?",
    answer: "No es necesario. Te entregamos un manual básico y soporte inicial para que puedas administrar tu web sin complicaciones."
  },
  {
    question: "¿Trabajan con clientes fuera de Venezuela?",
    answer: "Sí, atendemos proyectos de toda Latinoamérica y USA. Adaptamos los métodos de pago y comunicación según cada cliente."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24" id="faq">
      <div className="max-w-[900px] mx-auto px-8">
        <h2 className="font-heading text-[clamp(2rem,5vw,2.5rem)] text-center mb-4">
          Preguntas Frecuentes
        </h2>
        <p className="text-center text-dev-hub-text-secondary mb-12 max-w-[600px] mx-auto">
          Resolvemos las dudas más comunes sobre nuestros servicios, proceso de trabajo y condiciones.
        </p>

        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="neu-elevated rounded-xl overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-dev-hub-bg/30 transition-colors duration-200"
              >
                <span className="font-semibold text-dev-hub-text-primary pr-4">
                  {item.question}
                </span>
                <svg
                  className={`w-5 h-5 text-accent-gold flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-5 text-dev-hub-text-secondary leading-relaxed">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA adicional */}
        <div className="mt-12 text-center">
          <p className="text-dev-hub-text-secondary mb-4">
            ¿Tienes otra pregunta?
          </p>
          <a
            href="https://wa.me/584121969544?text=Hola%20Santiago,%20tengo%20una%20pregunta%20sobre%20sus%20servicios"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-accent-gold text-white py-3 px-6 rounded-lg font-semibold neu-elevated-subtle transition-all duration-300 hover:bg-accent-gold-hover active:scale-95"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            Contáctanos por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
