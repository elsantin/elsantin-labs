import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PlanCard from "@/components/PlanCard";
import AddonCard from "@/components/AddonCard";
import ProjectCard from "@/components/ProjectCard";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import FloatingCTA from "@/components/FloatingCTA";
import ProjectSelector from "@/components/ProjectSelector";
import WorkProcess from "@/components/WorkProcess";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <FloatingCTA />
      <Header />
      <main>
        <Hero />
        
        {/* Services Section */}
        <section className="py-24" id="services">
          <div className="max-w-[1200px] mx-auto px-8">
            <h2 className="font-heading text-[clamp(2rem,5vw,2.5rem)] text-center mb-4">
              Planes de Desarrollo Web
            </h2>
            <p className="text-center text-dev-hub-text-secondary mb-16 max-w-[700px] mx-auto">
              Sitios web modernos creados con tecnología Jamstack y asistencia de inteligencia artificial para
              garantizar rendimiento excepcional y diseño único.
            </p>
            <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              <PlanCard
                name="Landing Page"
                description="Perfecta para lanzar productos, servicios o campañas con impacto inmediato."
                price={180}
                features={[
                  "1 página optimizada",
                  "Diseño 100% personalizado",
                  "Formulario de contacto",
                  "Optimización SEO básica",
                  "Responsive design"
                ]}
                buttonText="Solicitar"
              />
              <PlanCard
                name="Sitio Profesional"
                description="Ideal para negocios y profesionales que necesitan presencia web completa."
                price={250}
                features={[
                  "Hasta 5 páginas",
                  "Diseño personalizado",
                  "Formulario de contacto",
                  "Optimización SEO",
                  "Integración redes sociales"
                ]}
                buttonText="Solicitar"
                isFeatured
              />
              <PlanCard
                name="Sitio Avanzado"
                description="La solución completa para empresas que buscan destacar en su sector."
                price={350}
                features={[
                  "Hasta 10 páginas",
                  "Blog o Portfolio integrado",
                  "SEO Avanzado",
                  "Google Analytics",
                  "Animaciones personalizadas"
                ]}
                buttonText="Solicitar"
              />
            </div>

            {/* Custom Projects Card */}
            <div className="mt-12 max-w-[900px] mx-auto">
              <div className="neu-elevated rounded-xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 border-2 border-accent-gold">
                <div className="flex-1 text-center md:text-left">
                  <h3 className="font-heading text-2xl font-bold mb-3 text-dev-hub-text-primary">
                    ¿Necesitas algo más complejo?
                  </h3>
                  <p className="text-dev-hub-text-secondary">
                    Para páginas complejas, aplicaciones web personalizadas o proyectos a medida, contáctanos y conversemos sobre tu idea.
                  </p>
                </div>
                <a
                  href="https://wa.me/584121969544?text=Hola%20Santiago,%20necesito%20un%20proyecto%20personalizado"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-accent-gold text-white py-3 px-8 rounded-lg font-semibold neu-elevated-subtle transition-all duration-300 hover:bg-accent-gold-hover active:scale-95 shadow-lg whitespace-nowrap"
                >
                  Contáctanos
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Add-ons Section */}
        <section className="py-24" id="add-ons">
          <div className="max-w-[1200px] mx-auto px-8">
            <h2 className="font-heading text-[clamp(2rem,5vw,2.5rem)] text-center mb-4">
              Servicios Adicionales
            </h2>
            <p className="text-center text-dev-hub-text-secondary mb-16 max-w-[700px] mx-auto">
              Mejora tu sitio web con funcionalidades específicas y contenido generado con inteligencia artificial.
            </p>
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
              <AddonCard
                icon={
                  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                }
                name="Sistema de Citas"
                description="Integración completa con calendarios y notificaciones automáticas."
                price={90}
              />
              <AddonCard
                icon={
                  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                  </svg>
                }
                name="Galería de Imágenes"
                description="Galería avanzada con filtros, lightbox y optimización de imágenes."
                price={60}
              />
              <AddonCard
                icon={
                  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                  </svg>
                }
                name="Blog con Contenido IA"
                description="Blog funcional con 10 artículos optimizados para SEO."
                price={75}
              />
              <AddonCard
                icon={
                  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                }
                name="Newsletter Integration"
                description="Sistema de suscripción y envío de newsletters automatizado."
                price={50}
              />
            </div>
          </div>
        </section>

        {/* Project Selector */}
        <ProjectSelector />

        {/* Work Process */}
        <WorkProcess />

        {/* Portfolio Section */}
        <section className="py-24" id="portfolio">
          <div className="max-w-[1200px] mx-auto px-8">
            <h2 className="font-[var(--font-heading)] text-[clamp(2rem,5vw,2.5rem)] text-center mb-4">
              Portafolio de Trabajos
            </h2>
            <p className="text-center text-[var(--color-dev-hub-text-secondary)] mb-16 max-w-[700px] mx-auto">
              Un vistazo a algunas de las soluciones digitales que hemos construido. Cada proyecto es una colaboración
              única enfocada en resultados.
            </p>
            <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
              <ProjectCard
                title="Chill Chess Club"
                description="SPA for online chess courses with an AI-assisted, personalized interface designed for learning and community engagement."
                image="/images/chill-chess-club-layout.jpg"
                technologies={["HTML5", "CSS3", "JavaScript", "p5.js"]}
                liveUrl="#"
              />
              <ProjectCard
                title="Dra. Hanoi Online"
                description="Professional website for Dr. Hanoi, showcasing services and facilitating patient communication with a warm, trustworthy design."
                image="/images/dra-hanoi-online-layout.jpg"
                technologies={["HTML5", "CSS3", "JavaScript"]}
                liveUrl="#"
              />
              <ProjectCard
                title="Santiago Narváez: AI Art"
                description="Visual exploration at the intersection of imagination and artificial intelligence, showcasing AI-generated artistic creations."
                image="/images/santiago-narvaez-portfolio-layout.jpg"
                technologies={["HTML5", "CSS3", "JavaScript"]}
                liveUrl="#"
              />
              <ProjectCard
                title="Sitio Web Veridia"
                description="Official SPA for Veridia, showcasing intelligent automation solutions with a modern, clean design focused on efficiency."
                image="/images/veridia-layout.jpg"
                technologies={["HTML5", "CSS3", "JavaScript"]}
                liveUrl="#"
              />
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24" id="process">
          <div className="max-w-[1200px] mx-auto px-8">
            <h2 className="font-[var(--font-heading)] text-[clamp(2rem,5vw,2.5rem)] text-center mb-4">
              Nuestro Proceso de Trabajo
            </h2>
            <p className="text-center text-[var(--color-dev-hub-text-secondary)] mb-16 max-w-[700px] mx-auto">
              Un flujo transparente y eficiente en 4 pasos que garantiza resultados excepcionales y una colaboración
              sin sorpresas.
            </p>
            <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
              {[1, 2, 3, 4].map((num) => (
                <div key={num} className="text-center">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[var(--color-dev-hub-surface)] border-2 border-[var(--color-accent-gold)] flex items-center justify-center font-[var(--font-heading)] text-4xl font-bold text-[var(--color-accent-gold)]">
                    {num}
                  </div>
                  <h3 className="font-[var(--font-heading)] text-xl mb-3">
                    {num === 1 && "Consulta y Estrategia"}
                    {num === 2 && "Diseño y Propuesta"}
                    {num === 3 && "Desarrollo y Revisión"}
                    {num === 4 && "Lanzamiento y Soporte"}
                  </h3>
                  <p className="text-[var(--color-dev-hub-text-secondary)] text-sm">
                    {num === 1 && "Conversamos sobre tu visión y objetivos para definir el proyecto ideal y la estrategia a seguir."}
                    {num === 2 && "Creamos una propuesta visual y detallada con cronograma, funcionalidades y presupuesto."}
                    {num === 3 && "Construimos tu sitio con tecnología de vanguardia, manteniéndote informado en cada etapa."}
                    {num === 4 && "Desplegamos tu web, configuramos el hosting y te capacitamos para el éxito continuo."}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Hosting Section */}
        <section className="py-24">
          <div className="max-w-[1200px] mx-auto px-8">
            <h2 className="font-heading text-[clamp(2rem,5vw,2.5rem)] text-center mb-4">
              Hosting y Mantenimiento Anual
            </h2>
            <p className="text-center text-dev-hub-text-secondary mb-16 max-w-[700px] mx-auto">
              Tu sitio web merece estar en un entorno rápido, seguro y siempre disponible. Olvídate de los problemas
              técnicos, nosotros nos encargamos.
            </p>
            <div className="grid gap-8 grid-cols-1 md:grid-cols-2 max-w-[900px] mx-auto">
              <PlanCard
                name="Gestión Básica"
                description=""
                price={60}
                features={[
                  "Hosting de alto rendimiento",
                  "Dominio .com (1er año)",
                  "Certificado de Seguridad (SSL)",
                  "Monitoreo de disponibilidad",
                  "Soporte técnico vía email"
                ]}
                buttonText="Seleccionar"
              />
              <PlanCard
                name="Gestión Prioritaria"
                description=""
                price={200}
                features={[
                  "Todo del plan Básico, más:",
                  "Soporte prioritario (Email/WA)",
                  "Actualizaciones menores de contenido",
                  "Backups de seguridad",
                  "Tranquilidad total"
                ]}
                buttonText="Seleccionar"
                isFeatured
              />
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-24">
          <div className="max-w-[1200px] mx-auto px-8">
            <h2 className="font-heading text-[clamp(2rem,5vw,2.5rem)] text-center mb-16">
              Lo que Dicen Nuestros Clientes
            </h2>
            <div className="max-w-[800px] mx-auto bg-dev-hub-surface border border-dev-hub-border rounded-2xl p-8 md:p-12 relative">
              <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full overflow-hidden mb-6 border-2 border-accent-gold">
                  <img 
                    src="/images/hanoi.png" 
                    alt="Dra. Hanoi Yánez" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-dev-hub-text-primary text-lg mb-6 italic leading-relaxed">
                  &ldquo;En elsantinLabs captaron perfectamente la esencia de mi práctica médica. Mi sitio web refleja mi
                  enfoque integral y transmite esa calidez y confianza que busco generar en mis pacientes. Una experiencia
                  completa y armoniosa.&rdquo;
                </p>
                <h4 className="text-accent-gold font-bold text-xl mb-1">Dra. Hanoi Yánez</h4>
                <p className="text-dev-hub-text-secondary text-sm">Ginecóloga Obstetra, Venezuela</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-24" id="contact">
          <div className="max-w-[1200px] mx-auto px-8">
            <div className="text-center">
              <h2 className="font-[var(--font-heading)] text-[clamp(2rem,5vw,2.5rem)] mb-6">
                ¿Listo para Elevar tu Presencia Digital?
              </h2>
              <p className="text-[var(--color-dev-hub-text-secondary)] max-w-[600px] mx-auto mb-12">
                Cada gran proyecto comienza con una conversación. Contáctame para discutir tus ideas y cómo podemos
                transformarlas en una poderosa herramienta digital para tu marca.
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <a
                  href="https://wa.me/584121969544?text=Hola%20Santiago,%20estoy%20interesado%20en%20desarrollar%20un%20sitio%20web%20con%20elsantinLabs"
                  className="inline-flex items-center gap-3 bg-accent-gold text-white py-4 px-8 rounded-lg font-semibold neu-elevated-subtle transition-all duration-300 hover:bg-accent-gold-hover active:scale-95"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  Enviar WhatsApp
                </a>
                <a
                  href="mailto:santiago@elsantin.com?subject=Consulta%20sobre%20Desarrollo%20Web&body=Hola%20Santiago,%0A%0AEstoy%20interesado%20en%20desarrollar%20un%20sitio%20web%20con%20elsantin%20Labs.%0A%0ASaludos"
                  className="inline-flex items-center gap-3 bg-transparent text-dev-hub-text-primary py-4 px-8 rounded-lg font-semibold border-2 border-dev-hub-border neu-elevated-subtle transition-all duration-300 hover:border-accent-gold hover:text-accent-gold active:scale-95"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Enviar Email
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
