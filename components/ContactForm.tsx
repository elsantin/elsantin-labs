'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Hola Santiago, soy ${formData.name}.%0A%0AEmail: ${formData.email}%0ATel: ${formData.phone}%0A%0AMensaje: ${formData.message}`;
    window.open(`https://wa.me/584121969544?text=${whatsappMessage}`, '_blank');
  };

  return (
    <section className="py-24" id="contact">
      <div className="max-w-[800px] mx-auto px-8">
        <h2 className="font-heading text-[clamp(2rem,5vw,2.5rem)] text-center mb-4">
          Conversemos sobre tu Proyecto
        </h2>
        <p className="text-center text-dev-hub-text-secondary mb-12 max-w-[600px] mx-auto">
          Cuéntanos qué necesitas y te responderemos en menos de 24 horas
        </p>

        <form onSubmit={handleSubmit} className="neu-elevated rounded-xl p-8 md:p-10">
          <div className="grid gap-6 md:grid-cols-2 mb-6">
            <div>
              <label className="block text-dev-hub-text-primary font-semibold mb-2 text-sm">
                Nombre *
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full px-4 py-3 rounded-lg bg-dev-hub-surface border border-dev-hub-border text-dev-hub-text-primary focus:outline-none focus:border-accent-gold transition-colors"
                placeholder="Tu nombre"
              />
            </div>
            <div>
              <label className="block text-dev-hub-text-primary font-semibold mb-2 text-sm">
                Email *
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full px-4 py-3 rounded-lg bg-dev-hub-surface border border-dev-hub-border text-dev-hub-text-primary focus:outline-none focus:border-accent-gold transition-colors"
                placeholder="tu@email.com"
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-dev-hub-text-primary font-semibold mb-2 text-sm">
              Teléfono (opcional)
            </label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              className="w-full px-4 py-3 rounded-lg bg-dev-hub-surface border border-dev-hub-border text-dev-hub-text-primary focus:outline-none focus:border-accent-gold transition-colors"
              placeholder="+58 412 123 4567"
            />
          </div>

          <div className="mb-6">
            <label className="block text-dev-hub-text-primary font-semibold mb-2 text-sm">
              Cuéntanos sobre tu proyecto *
            </label>
            <textarea
              required
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              className="w-full px-4 py-3 rounded-lg bg-dev-hub-surface border border-dev-hub-border text-dev-hub-text-primary focus:outline-none focus:border-accent-gold transition-colors resize-none"
              placeholder="Describe qué tipo de sitio web necesitas, funcionalidades deseadas, plazos, etc."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-accent-gold text-white py-4 px-8 rounded-lg font-semibold neu-elevated-subtle transition-all duration-300 hover:bg-accent-gold-hover active:scale-95 shadow-lg"
          >
            Enviar Mensaje por WhatsApp
          </button>

          <p className="text-center text-dev-hub-text-secondary text-xs mt-4">
            Al enviar, serás redirigido a WhatsApp para confirmar tu mensaje
          </p>
        </form>
      </div>
    </section>
  );
}
