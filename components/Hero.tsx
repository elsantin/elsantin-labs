export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-8 py-24 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-gold rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-accent-gold-hover rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-accent-gold rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto text-center">
        <h1 className="font-heading font-bold text-[clamp(3rem,8vw,5rem)] leading-tight mb-6 animate-fade-in-up">
          <span className="text-dev-hub-text-primary">{`{`}elsantin</span>
          <span className="text-accent-gold glow-text">Labs</span>
          <span className="text-dev-hub-text-primary">{`}`}</span>
        </h1>
        <p className="text-dev-hub-text-secondary text-[clamp(1.1rem,3vw,1.5rem)] max-w-[800px] mx-auto mb-8 animate-fade-in-up animation-delay-200">
          Creamos sitios web de alto rendimiento con tecnología Jamstack. Optimizados para velocidad, seguridad y una
          experiencia de usuario que convierte visitantes en clientes.
        </p>
        <div className="flex gap-4 flex-wrap justify-center text-sm animate-fade-in-up animation-delay-400">
          {["HTML5", "CSS3", "JavaScript", "Jamstack", "Core Web Vitals", "IA Asistida", "SEO"].map((tech, index) => (
            <span
              key={tech}
              className="px-4 py-2 bg-dev-hub-surface border border-dev-hub-border rounded-full text-dev-hub-text-secondary hover:border-accent-gold hover:text-accent-gold hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${600 + index * 100}ms` }}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-accent-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
