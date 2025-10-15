'use client';

import { useState } from 'react';

export default function BudgetCalculator() {
  const [pages, setPages] = useState(3);
  const [hasBlog, setHasBlog] = useState(false);
  const [hasEcommerce, setHasEcommerce] = useState(false);
  const [hasSEO, setHasSEO] = useState(false);

  const calculatePrice = () => {
    let basePrice = 180; // Landing page base
    
    if (pages <= 1) {
      basePrice = 180;
    } else if (pages <= 5) {
      basePrice = 250;
    } else if (pages <= 10) {
      basePrice = 350;
    } else {
      basePrice = 350 + (pages - 10) * 30;
    }

    if (hasBlog) basePrice += 50;
    if (hasEcommerce) basePrice += 150;
    if (hasSEO) basePrice += 40;

    return basePrice;
  };

  const estimatedPrice = calculatePrice();

  return (
    <section className="py-24 bg-dev-hub-bg" id="calculator">
      <div className="max-w-[900px] mx-auto px-8">
        <h2 className="font-heading text-[clamp(2rem,5vw,2.5rem)] text-center mb-4">
          Calcula tu Presupuesto
        </h2>
        <p className="text-center text-dev-hub-text-secondary mb-12 max-w-[600px] mx-auto">
          Personaliza tu proyecto y obtén una estimación instantánea
        </p>

        <div className="neu-elevated rounded-xl p-8 md:p-10">
          {/* Pages Slider */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-3">
              <label className="text-dev-hub-text-primary font-semibold">
                Número de páginas
              </label>
              <span className="text-accent-gold font-bold text-xl">{pages}</span>
            </div>
            <input
              type="range"
              min="1"
              max="15"
              value={pages}
              onChange={(e) => setPages(Number(e.target.value))}
              className="w-full h-2 bg-dev-hub-surface rounded-lg appearance-none cursor-pointer accent-accent-gold"
            />
            <div className="flex justify-between text-xs text-dev-hub-text-secondary mt-1">
              <span>1</span>
              <span>15+</span>
            </div>
          </div>

          {/* Feature Toggles */}
          <div className="space-y-4 mb-8">
            <label className="flex items-center justify-between p-4 rounded-lg border border-dev-hub-border hover:border-accent-gold transition-colors cursor-pointer">
              <div>
                <span className="text-dev-hub-text-primary font-semibold block">Blog integrado</span>
                <span className="text-dev-hub-text-secondary text-sm">+$50</span>
              </div>
              <input
                type="checkbox"
                checked={hasBlog}
                onChange={(e) => setHasBlog(e.target.checked)}
                className="w-5 h-5 rounded accent-accent-gold cursor-pointer"
              />
            </label>

            <label className="flex items-center justify-between p-4 rounded-lg border border-dev-hub-border hover:border-accent-gold transition-colors cursor-pointer">
              <div>
                <span className="text-dev-hub-text-primary font-semibold block">E-commerce básico</span>
                <span className="text-dev-hub-text-secondary text-sm">+$150</span>
              </div>
              <input
                type="checkbox"
                checked={hasEcommerce}
                onChange={(e) => setHasEcommerce(e.target.checked)}
                className="w-5 h-5 rounded accent-accent-gold cursor-pointer"
              />
            </label>

            <label className="flex items-center justify-between p-4 rounded-lg border border-dev-hub-border hover:border-accent-gold transition-colors cursor-pointer">
              <div>
                <span className="text-dev-hub-text-primary font-semibold block">SEO Avanzado</span>
                <span className="text-dev-hub-text-secondary text-sm">+$40</span>
              </div>
              <input
                type="checkbox"
                checked={hasSEO}
                onChange={(e) => setHasSEO(e.target.checked)}
                className="w-5 h-5 rounded accent-accent-gold cursor-pointer"
              />
            </label>
          </div>

          {/* Price Display */}
          <div className="border-t border-dev-hub-border pt-6">
            <div className="flex justify-between items-center mb-6">
              <span className="text-dev-hub-text-secondary">Estimación de tu proyecto:</span>
              <div className="text-right">
                <span className="text-4xl font-bold text-accent-gold">${estimatedPrice}</span>
                <span className="text-dev-hub-text-secondary text-sm block">USD una sola vez</span>
              </div>
            </div>

            <a
              href={`https://wa.me/584121969544?text=Hola%20Santiago,%20me%20interesa%20un%20proyecto%20de%20${pages}%20página(s)${hasBlog ? '%20con%20blog' : ''}${hasEcommerce ? '%20con%20e-commerce' : ''}${hasSEO ? '%20con%20SEO%20avanzado' : ''}.%20Estimado:%20$${estimatedPrice}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-accent-gold text-white py-4 px-8 rounded-lg font-semibold neu-elevated-subtle transition-all duration-300 hover:bg-accent-gold-hover active:scale-95 shadow-lg text-center block"
            >
              Solicitar Cotización Exacta
            </a>
            <p className="text-center text-dev-hub-text-secondary text-xs mt-3">
              *Esta es una estimación. El precio final puede variar según requerimientos específicos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
