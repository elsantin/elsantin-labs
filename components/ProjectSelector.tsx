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
              className="inline-block bg-accent-gold text-white py-4 px-8 rounded-lg font-semibold neu-elevated-subtle transition-all duration-300 hover:bg-accent-gold-hover active:scale-95 shadow-lg"
            >
              Hablar sobre mi {projectTypes.find(t => t.id === selectedType)?.title}
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
