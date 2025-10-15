# elsantin Labs - Visión General del Proyecto

## 🎯 Descripción
Sitio web profesional para elsantin Labs, un servicio de desarrollo web con tecnología Jamstack e IA. El sitio presenta un diseño moderno con sistema de diseño Neumorphism y animaciones suaves tipo ASMR.

## 🎨 Sistema de Diseño

### Estilo Visual: Neumorphism
- **Concepto**: Diseño suave con sombras sutiles que crean profundidad
- **Colores principales**:
  - Fondo: `#0d1117` (dev-hub-bg)
  - Dorado: `#a37e4f` (accent-gold)
  - Superficie: `#161b22` (dev-hub-surface)
  - Texto primario: `#e6edf3`
  - Texto secundario: `#8b949e`

### Filosofía de Animaciones
- **Tipo**: ASMR - suaves, lentas, armónicas
- **Duraciones**: 500-700ms para transiciones, 3-4s para loops
- **Opacidades**: Bajas (5-20%) para efectos sutiles
- **Easing**: ease-out, ease-in-out para movimientos naturales

## 📁 Estructura del Proyecto

```
elsantin-labs-test/
├── app/
│   ├── globals.css          # Estilos globales, variables CSS, animaciones
│   ├── layout.tsx           # Layout principal con fuentes
│   └── page.tsx             # Página principal con todas las secciones
├── components/
│   ├── Header.tsx           # Navegación con logo animado { }
│   ├── Hero.tsx             # Hero con CTAs y scroll indicator
│   ├── PlanCard.tsx         # Tarjetas de planes de desarrollo
│   ├── AddonCard.tsx        # Tarjetas de servicios adicionales
│   ├── ProjectCard.tsx      # Tarjetas de portfolio
│   ├── ProjectSelector.tsx  # Selector lúdico de tipos de proyecto
│   ├── ContactForm.tsx      # Formulario con opciones WhatsApp/Email
│   ├── Footer.tsx           # Footer centrado con redes sociales
│   ├── ScrollProgress.tsx   # Barra de progreso de scroll
│   └── FloatingCTA.tsx      # CTA flotante en mobile
├── public/
│   └── images/              # Imágenes del proyecto
└── docs/                    # Documentación
```

## 🔧 Stack Tecnológico

- **Framework**: Next.js 15.5.5 (App Router)
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS
- **Fuentes**: 
  - Heading: Orbitron (futurista, tech)
  - Body: Inter (legible, moderna)
- **Iconos**: React Icons (simple-icons)

## 📊 Secciones del Sitio

1. **Hero**: Presentación con logo animado, CTAs, badges de tecnología
2. **Planes**: 3 planes principales ($180, $250, $350)
3. **Add-ons**: 4 servicios adicionales ($90, $60, $75, $50)
4. **Project Selector**: Selector interactivo de tipos de proyecto
5. **Proceso**: 4 pasos con círculos y línea animada
6. **Portfolio**: Grid de proyectos (pendiente: 2x3 = 6 proyectos)
7. **Hosting**: 2 planes de mantenimiento anual
8. **Testimonios**: 1 testimonio (expandir cuando haya más)
9. **Contacto**: Formulario con dropdown de tipo de proyecto
10. **Footer**: Redes sociales + copyright

## 🎯 Características Clave

### Logo Interactivo
- Solo brackets `{ }` en el header
- Hover: se separan y aparece cursor `_` parpadeante
- Tamaño: 1.3rem, font-semibold, tracking-wider

### Animaciones de Proceso
- Línea punteada dorada conectando 4 círculos
- Efecto de flujo viajando por la línea (4s loop)
- Ping radar ultra-suave en círculos (4s, opacidad 15%)
- Hover: scale 1.08, duración 700ms

### Formulario de Contacto
- Detecta parámetro URL del ProjectSelector
- Pre-selecciona tipo de proyecto en dropdown
- Dos botones: WhatsApp (primario) y Email (secundario)
- Mensajes pre-formateados con datos del formulario

### CTAs Estratégicos
- Hero: "Ver Planes" + "Enviar Mensaje"
- ProjectSelector: "Solicitar Cotización" → va al formulario
- Planes: Botones "Solicitar" con texto blanco sobre dorado
- Formulario: Dual WhatsApp/Email con iconos claros

## 🎨 Clases CSS Personalizadas

### Neumorphism
```css
.neu-elevated        /* Sombra elevada */
.neu-elevated-subtle /* Sombra sutil */
.neu-pressed         /* Efecto presionado */
```

### Animaciones
```css
.animate-fade-in-up  /* Fade in desde abajo */
.animate-blob        /* Movimiento orgánico (7s) */
.animate-float       /* Flotación suave (3s) */
.animate-flow        /* Flujo horizontal (4s) */
```

## 📱 Responsive Design

- **Mobile**: < 768px - Stack vertical, menú hamburguesa
- **Tablet**: 768px - 1024px - Grid 2 columnas
- **Desktop**: > 1024px - Grid completo, animaciones visibles

## 🔗 Enlaces Importantes

- **WhatsApp**: +58 412 196 9544
- **Email**: santiago@elsantin.com
- **GitHub**: github.com/elsantin
- **LinkedIn**: linkedin.com/in/elsantin

## 🚀 Próximos Pasos

1. **Portfolio**: Implementar grid 2x3 con 6 proyectos reales
2. **Testimonios**: Agregar más cuando estén disponibles
3. **Optimización**: Convertir `<img>` a `<Image>` de Next.js
4. **SEO**: Meta tags, Open Graph, sitemap
5. **Analytics**: Integrar Google Analytics
6. **Performance**: Lazy loading, optimización de imágenes

## 📝 Notas de Desarrollo

- Todos los precios en USD
- Mensajes de commit en inglés, sin acentos
- Código en inglés, UI en español
- Mantener filosofía ASMR en todas las animaciones
- Priorizar: funcionalidad > perfección > optimización extrema
