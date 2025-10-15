'use client';

import { useState } from 'react';

export default function ProjectSelector() {
  const [selectedType, setSelectedType] = useState<string | null>(null);

  const projectTypes = [
    {
      id: 'landing',
      icon: '🚀',
      title: 'Landing Page',
      description: 'Lanza tu producto o servicio con impacto',
      color: 'from-purple-500/20 to-pink-500/20',
      price: '$180'
    },
    {
      id: 'business',
      icon: '💼',
      title: 'Sitio Corporativo',
      description: 'Presencia profesional para tu empresa',
      color: 'from-blue-500/20 to-cyan-500/20',
      price: '$250'
    },
    {
      id: 'portfolio',
      icon: '🎨',
      title: 'Portfolio',
      description: 'Muestra tu trabajo de forma espectacular',
      color: 'from-orange-500/20 to-yellow-500/20',
      price: '$250'
    },
    {
      id: 'ecommerce',
      icon: '🛒',
      title: 'E-commerce',
      description: 'Vende tus productos online 24/7',
      color: 'from-green-500/20 to-emerald-500/20',
      price: 'Desde $350'
    }
  ];

  return (
    <section className="py-24 bg-dev-hub-bg" id="selector">
      <div className="max-w-[1200px] mx-auto px-8">
        <h2 className="font-heading text-[clamp(2rem,5vw,2.5rem)] text-center mb-4">
          ¿Qué Tipo de Sitio Necesitas?
        </h2>
        <p className="text-center text-dev-hub-text-secondary mb-12 max-w-[600px] mx-auto">
          Elige el que mejor se adapte a tu proyecto
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-12">
          {projectTypes.map((type) => (
            <div
              key={type.id}
              onClick={() => setSelectedType(type.id)}
              className={`neu-elevated-subtle rounded-xl p-6 cursor-pointer transition-all duration-300 hover:scale-105 ${
                selectedType === type.id ? 'ring-2 ring-accent-gold' : ''
              }`}
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${type.color} flex items-center justify-center text-4xl mb-4 mx-auto`}>
                {type.icon}
              </div>
              <h3 className="font-heading text-lg font-bold text-center mb-2 text-dev-hub-text-primary">
                {type.title}
              </h3>
              <p className="text-dev-hub-text-secondary text-sm text-center mb-3">
                {type.description}
              </p>
              <div className="text-center">
                <span className="text-accent-gold font-bold">{type.price}</span>
              </div>
            </div>
          ))}
        </div>

        {selectedType && (
          <div className="text-center animate-fade-in-up">
            <a
              href={`https://wa.me/584121969544?text=Hola%20Santiago,%20me%20interesa%20un%20${projectTypes.find(t => t.id === selectedType)?.title}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-accent-gold text-white py-4 px-8 rounded-lg font-semibold neu-elevated-subtle transition-all duration-300 hover:bg-accent-gold-hover active:scale-95 shadow-lg"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Consultar por WhatsApp
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
