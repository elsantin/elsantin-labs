export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-8 py-24 overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/images/hero6.jpg)' }}
      >
        <div className="absolute inset-0 bg-dev-hub-bg opacity-80"></div>
      </div>

      {/* Animated gradient background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-gold rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-accent-gold-hover rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-accent-gold rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto text-center">
        <h1 className="font-heading font-bold text-[clamp(3rem,8vw,5rem)] leading-tight mb-6 animate-fade-in-up">
          <span className="text-accent-gold">{`{`}</span>
          <span className="text-dev-hub-text-primary">elsantin</span>
          <span className="text-accent-gold glow-text">Labs</span>
          <span className="text-accent-gold">{`}`}</span>
        </h1>
        <p className="text-dev-hub-text-secondary text-[clamp(1.1rem,3vw,1.5rem)] max-w-[800px] mx-auto mb-8 animate-fade-in-up animation-delay-200">
          Creamos sitios web de alto rendimiento con tecnología Jamstack. Optimizados para velocidad, seguridad y una
          experiencia de usuario que convierte visitantes en clientes.
        </p>

        {/* CTAs */}
        <div className="flex gap-4 justify-center mb-12 animate-fade-in-up animation-delay-400">
          <a
            href="#services"
            className="bg-accent-gold text-white py-3 px-8 rounded-lg font-semibold neu-elevated-subtle transition-all duration-300 hover:bg-accent-gold-hover active:scale-95 shadow-lg"
          >
            Ver Planes
          </a>
          <a
            href="#contact"
            className="bg-transparent border-2 border-dev-hub-border text-dev-hub-text-primary py-3 px-8 rounded-lg font-semibold transition-all duration-300 hover:border-accent-gold hover:text-accent-gold active:scale-95"
          >
            Enviar Mensaje
          </a>
        </div>

        <div className="flex gap-4 flex-wrap justify-center text-sm animate-fade-in-up animation-delay-600 mb-20">
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

        {/* Scroll indicator - Modern mouse icon */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 animate-float">
          <div className="flex flex-col items-center gap-2">
            <svg className="w-6 h-10 text-accent-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
              {/* Mouse body */}
              <rect x="8" y="4" width="8" height="14" rx="4" strokeLinecap="round" strokeLinejoin="round"/>
              {/* Mouse wheel */}
              <line x1="12" y1="8" x2="12" y2="11" strokeLinecap="round" strokeLinejoin="round" className="animate-pulse"/>
            </svg>
            <svg className="w-4 h-4 text-accent-gold -mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
              {/* Arrow down */}
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
