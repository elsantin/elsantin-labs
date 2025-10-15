export default function WorkProcess() {
  const steps = [
    {
      number: "01",
      title: "Consulta Inicial",
      description: "Conversamos sobre tu proyecto, objetivos y presupuesto en una llamada de 30 minutos.",
      duration: "30 min - Gratis"
    },
    {
      number: "02",
      title: "Propuesta",
      description: "Recibes una cotización detallada con alcance, tiempos y costos del proyecto.",
      duration: "24-48 horas"
    },
    {
      number: "03",
      title: "Desarrollo",
      description: "Diseño y construcción de tu sitio web con tecnología JAMstack moderna y optimizada.",
      duration: "1-3 semanas"
    },
    {
      number: "04",
      title: "Lanzamiento",
      description: "Publicamos tu sitio, te capacitamos en su uso y quedamos disponibles para soporte.",
      duration: "1 día"
    }
  ];

  return (
    <section className="py-24" id="process">
      <div className="max-w-[1200px] mx-auto px-8">
        <h2 className="font-heading text-[clamp(2rem,5vw,2.5rem)] text-center mb-4">
          Cómo Trabajamos
        </h2>
        <p className="text-center text-dev-hub-text-secondary mb-16 max-w-[600px] mx-auto">
          Un proceso simple y transparente para llevar tu proyecto de la idea a la realidad
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div
              key={index}
              className="neu-elevated-subtle rounded-xl p-6 relative transition-all duration-300 hover:scale-105"
            >
              {/* Step Number */}
              <div className="text-accent-gold text-5xl font-bold opacity-20 absolute top-4 right-4">
                {step.number}
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="font-heading text-xl font-bold mb-3 text-dev-hub-text-primary">
                  {step.title}
                </h3>
                <p className="text-dev-hub-text-secondary text-sm mb-4 leading-relaxed">
                  {step.description}
                </p>
                <div className="inline-block px-3 py-1 bg-dev-hub-bg rounded-full">
                  <span className="text-accent-gold text-xs font-semibold">{step.duration}</span>
                </div>
              </div>

              {/* Connector line (except last) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-accent-gold to-transparent"></div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="https://wa.me/584121969544?text=Hola%20Santiago,%20quiero%20iniciar%20un%20proyecto%20contigo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-accent-gold text-white py-3 px-8 rounded-lg font-semibold neu-elevated-subtle transition-all duration-300 hover:bg-accent-gold-hover active:scale-95 shadow-lg"
          >
            Iniciar Mi Proyecto
          </a>
        </div>
      </div>
    </section>
  );
}
