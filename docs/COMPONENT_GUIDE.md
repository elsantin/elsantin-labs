# Guía de Componentes - elsantin Labs

## 📦 Componentes Principales

### Header.tsx
**Propósito**: Navegación principal con logo animado

**Características**:
- Logo: Solo brackets `{ }` dorados
- Hover: Brackets se separan, aparece cursor `_`
- Menú: Servicios, Portfolio, Proceso, Contacto
- Responsive: Hamburguesa en mobile

**Props**: Ninguna

**Estilos clave**:
```tsx
text-[1.3rem] font-semibold tracking-wider
transition-all duration-500
```

---

### Hero.tsx
**Propósito**: Sección principal de bienvenida

**Características**:
- Logo grande con efecto glow
- 2 CTAs: "Ver Planes" (dorado) + "Enviar Mensaje" (outline)
- Badges de tecnología: HTML5, CSS3, JavaScript, etc.
- Scroll indicator: Mouse animado con float (3s)

**Animaciones**:
- Fade-in-up escalonado (200ms, 400ms, 600ms delays)
- Background con blobs animados (7s)
- Float suave en scroll indicator

---

### PlanCard.tsx
**Propósito**: Tarjetas de planes de desarrollo

**Props**:
```typescript
{
  name: string          // Nombre del plan
  description: string   // Descripción breve
  price: number        // Precio en USD
  features: string[]   // Lista de características
  buttonText: string   // Texto del botón
  isFeatured?: boolean // Plan destacado (opcional)
}
```

**Estilos**:
- Neumorphism: `neu-elevated`
- Botón: `bg-accent-gold text-white`
- Featured: Borde dorado adicional

**Ejemplo**:
```tsx
<PlanCard
  name="Landing Page"
  price={180}
  features={["1 página", "Diseño personalizado"]}
  buttonText="Solicitar"
/>
```

---

### AddonCard.tsx
**Propósito**: Tarjetas de servicios adicionales

**Props**:
```typescript
{
  icon: React.ReactNode  // SVG icon
  name: string          // Nombre del servicio
  description: string   // Descripción
  price: number        // Precio en USD
}
```

**Características**:
- Icono grande (w-12 h-12) en la parte superior
- Botón outline que se llena en hover
- Precio destacado en dorado

---

### ProjectCard.tsx
**Propósito**: Tarjetas de proyectos del portfolio

**Props**:
```typescript
{
  title: string
  description: string
  image: string           // Ruta a imagen
  technologies: string[]  // Array de tecnologías
  liveUrl?: string       // URL del proyecto (opcional)
  repoUrl?: string       // URL del repo (opcional)
}
```

**Animaciones**:
- Hover: scale 1.02 (500ms)
- Imagen: scale 1.05 (700ms ease-out)
- Título cambia a dorado en hover

**Tecnologías soportadas**:
- HTML5, CSS3, JavaScript, p5.js (con iconos)

---

### ProjectSelector.tsx
**Propósito**: Selector lúdico de tipos de proyecto

**Características**:
- 4 tipos con emojis: 🚀 Landing, 💼 Corporativo, 🎨 Portfolio, 🛒 E-commerce
- Click selecciona tipo
- CTA aparece: "Solicitar Cotización"
- Redirige a formulario con parámetro: `#contact?type=landing`

**Tipos**:
```typescript
{
  id: 'landing' | 'business' | 'portfolio' | 'ecommerce'
  icon: string  // Emoji
  title: string
  description: string
  color: string  // Gradient Tailwind
  price: string
}
```

---

### ContactForm.tsx
**Propósito**: Formulario de contacto con dual WhatsApp/Email

**Características**:
- Detecta parámetro URL `?type=` y pre-selecciona
- Campos: Nombre*, Email*, Teléfono, Tipo de Proyecto*, Mensaje*
- 2 botones: WhatsApp (con icono) y Email (con icono)

**Flujo**:
1. Usuario llega desde ProjectSelector o directo
2. Si viene con `?type=`, dropdown pre-seleccionado
3. Completa formulario
4. Click WhatsApp → abre WhatsApp con mensaje formateado
5. Click Email → abre cliente de email con mailto:

**Mensaje WhatsApp**:
```
Hola Santiago, soy [Nombre].

Email: [email]
Tel: [teléfono]
Tipo de proyecto: [tipo]

Mensaje: [mensaje]
```

---

### Footer.tsx
**Propósito**: Footer con redes sociales y copyright

**Características**:
- Layout centrado vertical
- Iconos sociales: GitHub, LinkedIn, WhatsApp
- Copyright: `© 2025 {elsantinLabs}`
- Ubicación: "Isla de Margarita, Venezuela"

**Estructura**:
```
[Iconos Sociales]
© 2025 {elsantinLabs}
Isla de Margarita, Venezuela
```

---

### ScrollProgress.tsx
**Propósito**: Barra de progreso de scroll

**Características**:
- Barra fija en top
- Color dorado
- Se llena según % de scroll
- z-index alto (9999)

---

### FloatingCTA.tsx
**Propósito**: CTA flotante en mobile

**Características**:
- Solo visible en mobile
- Fijo en bottom
- Link a WhatsApp o formulario
- Animación de entrada suave

---

## 🎨 Patrones de Uso

### Neumorphism
Todos los componentes tipo card usan:
```tsx
className="neu-elevated rounded-xl p-6"
```

### Botones Primarios
```tsx
className="bg-accent-gold text-white py-3 px-8 rounded-lg font-semibold 
           neu-elevated-subtle transition-all duration-300 
           hover:bg-accent-gold-hover active:scale-95 shadow-lg"
```

### Botones Secundarios
```tsx
className="bg-transparent border-2 border-dev-hub-border text-dev-hub-text-primary 
           py-3 px-8 rounded-lg font-semibold transition-all duration-300 
           hover:border-accent-gold hover:text-accent-gold active:scale-95"
```

### Animaciones de Entrada
```tsx
className="animate-fade-in-up animation-delay-400"
```

## 🔄 Flujos de Usuario

### Flujo 1: Desde ProjectSelector a Formulario
1. Usuario en ProjectSelector
2. Click en tipo de proyecto (ej: Landing Page)
3. Click "Solicitar Cotización"
4. Redirige a `#contact?type=landing`
5. Formulario detecta parámetro
6. Dropdown pre-selecciona "Landing Page"
7. Usuario completa y envía

### Flujo 2: Desde Planes a WhatsApp
1. Usuario ve planes
2. Click "Solicitar" en plan
3. Va a formulario (#contact)
4. Completa formulario
5. Click WhatsApp o Email
6. Mensaje enviado con info del plan

## 📝 Convenciones

- **Props**: TypeScript interfaces en el mismo archivo
- **Estilos**: Tailwind inline, variables CSS para colores
- **Animaciones**: Clases personalizadas en globals.css
- **Iconos**: React Icons o SVG inline
- **Imágenes**: Next.js Image component (pendiente migración)
