# Guía de Desarrollo - elsantin Labs

## 🚀 Inicio Rápido

### Instalación
```bash
cd d:\GitHub\elsantin-labs-test
npm install
npm run dev
```

El sitio estará disponible en `http://localhost:3000`

### Comandos Principales
```bash
npm run dev      # Servidor de desarrollo
npm run build    # Build de producción
npm run start    # Servidor de producción
npm run lint     # Linter
```

## 📂 Estructura de Archivos

```
app/
├── globals.css      # Variables CSS, animaciones, utilidades
├── layout.tsx       # Layout raíz con fuentes y metadata
└── page.tsx         # Página principal (todas las secciones)

components/
├── Header.tsx       # Navegación
├── Hero.tsx         # Hero section
├── PlanCard.tsx     # Tarjetas de planes
├── AddonCard.tsx    # Tarjetas de add-ons
├── ProjectCard.tsx  # Tarjetas de portfolio
├── ProjectSelector.tsx  # Selector de proyectos
├── ContactForm.tsx  # Formulario de contacto
├── Footer.tsx       # Footer
├── ScrollProgress.tsx   # Barra de progreso
└── FloatingCTA.tsx  # CTA flotante mobile
```

## 🎨 Sistema de Colores

### Variables CSS (globals.css)
```css
--color-dev-hub-bg: #0d1117;           /* Fondo principal */
--color-dev-hub-surface: #161b22;      /* Superficies elevadas */
--color-dev-hub-border: #30363d;       /* Bordes */
--color-dev-hub-text-primary: #e6edf3; /* Texto principal */
--color-dev-hub-text-secondary: #8b949e; /* Texto secundario */
--color-accent-gold: #a37e4f;          /* Dorado principal */
--color-accent-gold-hover: #b8925f;    /* Dorado hover */
--color-text-on-gold: #ffffff;         /* Texto sobre dorado */
```

### Uso en Tailwind
```tsx
// Usando variables CSS
className="bg-[var(--color-dev-hub-bg)]"

// Usando clases Tailwind personalizadas
className="bg-dev-hub-bg text-accent-gold"
```

## ✨ Animaciones

### Animaciones Disponibles

#### fade-in-up
Entrada desde abajo con fade
```tsx
className="animate-fade-in-up animation-delay-400"
```

#### blob
Movimiento orgánico (7s loop)
```tsx
className="animate-blob animation-delay-2000"
```

#### float
Flotación suave (3s loop)
```tsx
className="animate-float"
```

#### flow
Flujo horizontal (4s loop)
```tsx
className="animate-flow"
```

### Crear Nueva Animación

1. Definir keyframes en `globals.css`:
```css
@keyframes mi-animacion {
  0% { transform: translateX(0); }
  100% { transform: translateX(100px); }
}
```

2. Crear clase de utilidad:
```css
@layer utilities {
  .animate-mi-animacion {
    animation: mi-animacion 2s ease-in-out infinite;
  }
}
```

3. Usar en componente:
```tsx
className="animate-mi-animacion"
```

## 🎯 Neumorphism

### Clases Disponibles

```css
.neu-elevated        /* Sombra elevada estándar */
.neu-elevated-subtle /* Sombra sutil para hover */
.neu-pressed         /* Efecto presionado */
```

### Implementación
```css
.neu-elevated {
  box-shadow: 
    8px 8px 16px rgba(0, 0, 0, 0.4),
    -8px -8px 16px rgba(255, 255, 255, 0.02);
}
```

### Uso
```tsx
<div className="neu-elevated rounded-xl p-6">
  Contenido con efecto neumorphism
</div>
```

## 📱 Responsive Design

### Breakpoints Tailwind
```
sm: 640px   // Mobile landscape
md: 768px   // Tablet
lg: 1024px  // Desktop
xl: 1280px  // Large desktop
2xl: 1536px // Extra large
```

### Patrón de Uso
```tsx
className="
  grid 
  grid-cols-1      /* Mobile: 1 columna */
  md:grid-cols-2   /* Tablet: 2 columnas */
  lg:grid-cols-4   /* Desktop: 4 columnas */
"
```

### Ocultar en Mobile
```tsx
className="hidden lg:block"  // Solo visible en desktop
```

## 🔧 Agregar Nueva Sección

### 1. Crear Componente (opcional)
```tsx
// components/MiSeccion.tsx
export default function MiSeccion() {
  return (
    <section className="py-24" id="mi-seccion">
      <div className="max-w-[1200px] mx-auto px-8">
        <h2 className="font-heading text-[clamp(2rem,5vw,2.5rem)] text-center mb-4">
          Título de Mi Sección
        </h2>
        {/* Contenido */}
      </div>
    </section>
  );
}
```

### 2. Importar en page.tsx
```tsx
import MiSeccion from "@/components/MiSeccion";
```

### 3. Agregar en el orden correcto
```tsx
<main>
  <Hero />
  <MiSeccion />  {/* Nueva sección */}
  <Footer />
</main>
```

### 4. Actualizar navegación (Header.tsx)
```tsx
<a href="#mi-seccion">Mi Sección</a>
```

## 🎨 Agregar Nuevo Plan/Addon

### Plan (PlanCard)
```tsx
<PlanCard
  name="Nombre del Plan"
  description="Descripción breve"
  price={300}
  features={[
    "Característica 1",
    "Característica 2",
    "Característica 3"
  ]}
  buttonText="Solicitar"
  isFeatured={false}  // true para destacar
/>
```

### Addon (AddonCard)
```tsx
<AddonCard
  icon={
    <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
      {/* SVG path */}
    </svg>
  }
  name="Nombre del Servicio"
  description="Descripción del servicio"
  price={100}
/>
```

## 🔗 Modificar Enlaces de Contacto

### WhatsApp
Buscar y reemplazar: `584121969544`
```tsx
href="https://wa.me/584121969544?text=..."
```

### Email
Buscar y reemplazar: `santiago@elsantin.com`
```tsx
href="mailto:santiago@elsantin.com?subject=..."
```

### Redes Sociales (Footer.tsx)
```tsx
<a href="https://github.com/elsantin">GitHub</a>
<a href="https://www.linkedin.com/in/elsantin">LinkedIn</a>
```

## 🐛 Debugging

### Ver Estado de Formulario
```tsx
console.log('Form Data:', formData);
```

### Ver Parámetros URL
```tsx
const params = new URLSearchParams(window.location.search);
console.log('Type:', params.get('type'));
```

### Verificar Animaciones
Abrir DevTools → Elements → Computed → Buscar `animation`

## 📝 Convenciones de Código

### Nombres de Archivos
- Componentes: `PascalCase.tsx`
- Utilidades: `camelCase.ts`
- Estilos: `kebab-case.css`

### Nombres de Clases
- Componentes: `PascalCase`
- Funciones: `camelCase`
- Constantes: `UPPER_SNAKE_CASE`

### Commits
```bash
# Formato: tipo: descripción breve en inglés
git commit -m "feat: add new contact form"
git commit -m "fix: correct button alignment"
git commit -m "style: improve hero animations"
git commit -m "refactor: simplify footer layout"
git commit -m "docs: update component guide"
```

### Tipos de Commit
- `feat`: Nueva funcionalidad
- `fix`: Corrección de bug
- `style`: Cambios visuales (CSS, animaciones)
- `refactor`: Refactorización de código
- `docs`: Documentación
- `perf`: Mejoras de rendimiento
- `test`: Tests

## 🚨 Problemas Comunes

### Animación no aparece
1. Verificar que la clase existe en `globals.css`
2. Verificar z-index (puede estar detrás)
3. Verificar breakpoint (hidden lg:block)

### Formulario no pre-selecciona
1. Verificar parámetro URL: `?type=landing`
2. Verificar mapeo en `typeMap`
3. Console.log el `useEffect`

### Estilos no aplican
1. Verificar orden de imports en `layout.tsx`
2. Verificar que la clase no esté sobrescrita
3. Usar `!important` como último recurso

### Build falla
```bash
npm run build
# Revisar errores de TypeScript
# Verificar imports
# Verificar que todas las imágenes existen
```

## 📚 Recursos

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [React Icons](https://react-icons.github.io/react-icons/)
- [Neumorphism Generator](https://neumorphism.io/)
