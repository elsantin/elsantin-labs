'use client';

import { useState, useEffect } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    budget: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [touched, setTouched] = useState({
    name: false,
    email: false,
    message: false
  });

  useEffect(() => {
    // Detectar parámetro de URL
    const params = new URLSearchParams(window.location.search);
    const type = params.get('type');
    if (type) {
      const typeMap: { [key: string]: string } = {
        'landing': 'Landing Page',
        'business': 'Sitio Corporativo',
        'portfolio': 'Portfolio',
        'ecommerce': 'E-commerce'
      };
      setFormData(prev => ({ ...prev, projectType: typeMap[type] || '' }));
    }
  }, []);

  // Validaciones
  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validateForm = () => {
    const newErrors = {
      name: formData.name.trim().length < 2 ? 'El nombre debe tener al menos 2 caracteres' : '',
      email: !validateEmail(formData.email) ? 'Email inválido' : '',
      message: formData.message.trim().length < 10 ? 'El mensaje debe tener al menos 10 caracteres' : ''
    };
    setErrors(newErrors);
    return !newErrors.name && !newErrors.email && !newErrors.message;
  };

  const handleBlur = (field: 'name' | 'email' | 'message') => {
    setTouched({ ...touched, [field]: true });
    validateForm();
  };

  const handleWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    const whatsappMessage = `Hola Santiago, soy ${formData.name}.%0A%0AEmail: ${formData.email}%0ATel: ${formData.phone || 'No proporcionado'}%0ATipo de proyecto: ${formData.projectType || 'No especificado'}%0APresupuesto: ${formData.budget || 'No especificado'}%0A%0AMensaje: ${formData.message}`;
    window.open(`https://wa.me/584121969544?text=${whatsappMessage}`, '_blank');
  };

  const handleEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    const subject = `Consulta: ${formData.projectType || 'Proyecto Web'}`;
    const body = `Hola Santiago,%0A%0ASoy ${formData.name}.%0A%0AEmail: ${formData.email}%0ATeléfono: ${formData.phone || 'No proporcionado'}%0ATipo de proyecto: ${formData.projectType || 'No especificado'}%0APresupuesto: ${formData.budget || 'No especificado'}%0A%0AMensaje:%0A${formData.message}`;
    window.location.href = `mailto:santiago@elsantin.com?subject=${subject}&body=${body}`;
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

        <form className="neu-elevated rounded-xl p-8 md:p-10">
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
                onBlur={() => handleBlur('name')}
                className={`w-full px-4 py-3 rounded-lg bg-dev-hub-surface border text-dev-hub-text-primary focus:outline-none transition-colors ${
                  touched.name && errors.name ? 'border-red-500 focus:border-red-500' : 'border-dev-hub-border focus:border-accent-gold'
                }`}
                placeholder="Tu nombre"
              />
              {touched.name && errors.name && (
                <p className="text-red-500 text-xs mt-1">{errors.name}</p>
              )}
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
                onBlur={() => handleBlur('email')}
                className={`w-full px-4 py-3 rounded-lg bg-dev-hub-surface border text-dev-hub-text-primary focus:outline-none transition-colors ${
                  touched.email && errors.email ? 'border-red-500 focus:border-red-500' : 'border-dev-hub-border focus:border-accent-gold'
                }`}
                placeholder="tu@email.com"
              />
              {touched.email && errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
              {touched.email && !errors.email && formData.email && (
                <p className="text-green-500 text-xs mt-1 flex items-center gap-1">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Email válido
                </p>
              )}
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

          <div className="grid gap-6 md:grid-cols-2 mb-6">
            <div>
              <label className="block text-dev-hub-text-primary font-semibold mb-2 text-sm">
                Tipo de Proyecto *
              </label>
              <select
                required
                value={formData.projectType}
                onChange={(e) => setFormData({...formData, projectType: e.target.value})}
                className="w-full px-4 py-3 rounded-lg bg-dev-hub-surface border border-dev-hub-border text-dev-hub-text-primary focus:outline-none focus:border-accent-gold transition-colors"
              >
                <option value="">Selecciona un tipo</option>
                <option value="Landing Page">Landing Page</option>
                <option value="Sitio Corporativo">Sitio Corporativo</option>
                <option value="Portfolio">Portfolio</option>
                <option value="E-commerce">E-commerce</option>
                <option value="Otro">Otro</option>
              </select>
            </div>
            <div>
              <label className="block text-dev-hub-text-primary font-semibold mb-2 text-sm">
                Presupuesto Estimado (opcional)
              </label>
              <select
                value={formData.budget}
                onChange={(e) => setFormData({...formData, budget: e.target.value})}
                className="w-full px-4 py-3 rounded-lg bg-dev-hub-surface border border-dev-hub-border text-dev-hub-text-primary focus:outline-none focus:border-accent-gold transition-colors"
              >
                <option value="">Selecciona un rango</option>
                <option value="$150-$250">$150 - $250</option>
                <option value="$250-$400">$250 - $400</option>
                <option value="$400-$600">$400 - $600</option>
                <option value="$600+">Más de $600</option>
              </select>
            </div>
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
              onBlur={() => handleBlur('message')}
              className={`w-full px-4 py-3 rounded-lg bg-dev-hub-surface border text-dev-hub-text-primary focus:outline-none transition-colors resize-none ${
                touched.message && errors.message ? 'border-red-500 focus:border-red-500' : 'border-dev-hub-border focus:border-accent-gold'
              }`}
              placeholder="Describe qué tipo de sitio web necesitas, funcionalidades deseadas, plazos, etc."
            />
            {touched.message && errors.message && (
              <p className="text-red-500 text-xs mt-1">{errors.message}</p>
            )}
            <p className="text-dev-hub-text-secondary text-xs mt-1">
              {formData.message.length} caracteres (mínimo 10)
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <button
              type="button"
              onClick={handleWhatsApp}
              className="inline-flex items-center justify-center gap-2 bg-accent-gold text-white py-4 px-6 rounded-lg font-semibold neu-elevated-subtle transition-all duration-300 hover:bg-accent-gold-hover active:scale-95 shadow-lg"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              WhatsApp
            </button>

            <button
              type="button"
              onClick={handleEmail}
              className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-dev-hub-border text-dev-hub-text-primary py-4 px-6 rounded-lg font-semibold transition-all duration-300 hover:border-accent-gold hover:text-accent-gold active:scale-95"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Email
            </button>
          </div>

          <p className="text-center text-dev-hub-text-secondary text-xs mt-4">
            Elige tu método de contacto preferido
          </p>
        </form>
      </div>
    </section>
  );
}
