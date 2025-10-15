# Tareas Pendientes - elsantin Labs

## 🔴 Prioridad Alta

### 1. Traducción al Inglés
**Estado**: Pendiente  
**Descripción**: Implementar sistema de internacionalización (i18n)

**Pasos**:
1. Instalar `next-intl` o `react-i18next`
2. Crear archivos de traducción:
   - `/locales/es.json` (español - actual)
   - `/locales/en.json` (inglés)
3. Implementar selector de idioma en Header
4. Hacer funcional el switch de idioma existente
5. Traducir todo el contenido:
   - Navegación
   - Hero
   - Planes y servicios
   - Formulario
   - Footer

**Archivos a modificar**:
- `components/Header.tsx` - Activar función `toggleLanguage`
- `app/page.tsx` - Envolver textos con función de traducción
- Todos los componentes con texto

**Ejemplo de implementación**:
```tsx
import { useTranslations } from 'next-intl';

const t = useTranslations('hero');
<h1>{t('title')}</h1>
```

---

### 2. Conectar ProjectSelector con ContactForm
**Estado**: ✅ Corregido  
**Descripción**: El botón "Solicitar Cotización" ahora navega correctamente con parámetro

**Implementación**:
```tsx
onClick={(e) => {
  e.preventDefault();
  window.location.href = `${window.location.pathname}?type=${selectedType}#contact`;
}}
```

---

## 🟡 Prioridad Media

### 3. Theme Switcher (Color Accent Customizer)
**Estado**: Pendiente  
**Descripción**: Función semi-oculta en footer para cambiar color de acento

**Concepto**:
- Icono pequeño en footer (🎨 o similar)
- Click abre panel con 4-5 opciones de color
- Cambia `--color-accent-gold` dinámicamente
- Guarda preferencia en localStorage

**Opciones de colores sugeridas**:
1. 🟡 Dorado (actual): `#a37e4f`
2. 🔵 Azul Tech: `#4f9ba3`
3. 🟣 Púrpura: `#8b4fa3`
4. 🟢 Verde: `#4fa37e`
5. 🔴 Rojo: `#a34f4f`

**Implementación sugerida**:

#### Footer.tsx
```tsx
const [showColorPicker, setShowColorPicker] = useState(false);

const colors = [
  { name: 'Gold', value: '#a37e4f', emoji: '🟡' },
  { name: 'Blue', value: '#4f9ba3', emoji: '🔵' },
  { name: 'Purple', value: '#8b4fa3', emoji: '🟣' },
  { name: 'Green', value: '#4fa37e', emoji: '🟢' },
  { name: 'Red', value: '#a34f4f', emoji: '🔴' }
];

const changeAccentColor = (color: string) => {
  document.documentElement.style.setProperty('--color-accent-gold', color);
  localStorage.setItem('accent-color', color);
};

// En el render, agregar al footer:
<button 
  onClick={() => setShowColorPicker(!showColorPicker)}
  className="text-xs opacity-30 hover:opacity-100 transition-opacity"
  aria-label="Cambiar color de acento"
>
  🎨
</button>

{showColorPicker && (
  <div className="absolute bottom-12 right-8 bg-dev-hub-surface border border-dev-hub-border rounded-lg p-4 shadow-xl">
    <p className="text-xs text-dev-hub-text-secondary mb-3">Color de acento</p>
    <div className="flex gap-2">
      {colors.map(color => (
        <button
          key={color.value}
          onClick={() => changeAccentColor(color.value)}
          className="w-8 h-8 rounded-full hover:scale-110 transition-transform"
          style={{ backgroundColor: color.value }}
          title={color.name}
        >
          {color.emoji}
        </button>
      ))}
    </div>
  </div>
)}
```

#### globals.css
Asegurar que todas las referencias usen la variable:
```css
.text-accent-gold { color: var(--color-accent-gold); }
.bg-accent-gold { background-color: var(--color-accent-gold); }
.border-accent-gold { border-color: var(--color-accent-gold); }
```

**Complejidad**: Media  
**Tiempo estimado**: 2-3 horas

---

## 🟢 Prioridad Baja

### 4. Portfolio Grid 2x3
**Estado**: Pendiente  
**Descripción**: Implementar grid de 6 proyectos reales

**Estructura actual**: 2 proyectos en grid 2 columnas  
**Estructura deseada**: 6 proyectos en grid 2x3

**Pasos**:
1. Conseguir 4 proyectos adicionales
2. Preparar imágenes optimizadas
3. Actualizar grid en `page.tsx`:
```tsx
<div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  {/* 6 ProjectCard components */}
</div>
```

---

### 5. Más Testimonios
**Estado**: Pendiente  
**Descripción**: Agregar más testimonios cuando estén disponibles

**Actual**: 1 testimonio  
**Deseado**: 3-5 testimonios con carrusel

**Implementación sugerida**:
- Usar Swiper.js o crear carrusel custom
- Auto-play cada 5 segundos
- Dots de navegación
- Flechas prev/next en hover

---

### 6. Optimización de Imágenes
**Estado**: Pendiente  
**Descripción**: Migrar de `<img>` a `<Image>` de Next.js

**Archivos afectados**:
- `app/page.tsx` (línea 304 - imagen de testimonio)
- `components/ProjectCard.tsx` (ya usa Image)

**Beneficios**:
- Lazy loading automático
- Optimización de tamaño
- Mejor LCP (Largest Contentful Paint)
- Formatos modernos (WebP, AVIF)

---

### 7. SEO y Metadata
**Estado**: Pendiente  
**Descripción**: Mejorar SEO del sitio

**Tareas**:
1. Meta tags completos en `layout.tsx`
2. Open Graph para redes sociales
3. Sitemap.xml
4. robots.txt
5. Schema.org markup (LocalBusiness, Service)
6. Alt text en todas las imágenes

---

### 8. Analytics
**Estado**: Pendiente  
**Descripción**: Integrar Google Analytics

**Pasos**:
1. Crear cuenta GA4
2. Instalar `@next/third-parties`
3. Agregar tracking ID
4. Configurar eventos personalizados:
   - Click en planes
   - Envío de formulario
   - Click en WhatsApp/Email

---

### 9. Performance
**Estado**: Pendiente  
**Descripción**: Optimizaciones de rendimiento

**Tareas**:
- Lazy loading de secciones
- Code splitting
- Preload de fuentes
- Minimizar CSS no usado
- Optimizar animaciones (will-change)

---

## 📋 Checklist de Implementación

### Traducción al Inglés
- [ ] Instalar librería i18n
- [ ] Crear archivos de traducción
- [ ] Implementar selector de idioma
- [ ] Traducir Header
- [ ] Traducir Hero
- [ ] Traducir Planes
- [ ] Traducir Formulario
- [ ] Traducir Footer
- [ ] Probar cambio de idioma

### Theme Switcher
- [ ] Diseñar UI del color picker
- [ ] Implementar cambio de CSS variable
- [ ] Agregar localStorage
- [ ] Cargar preferencia al inicio
- [ ] Agregar botón en footer
- [ ] Probar con todos los colores
- [ ] Asegurar contraste accesible

### Portfolio
- [ ] Conseguir 4 proyectos adicionales
- [ ] Optimizar imágenes
- [ ] Actualizar grid
- [ ] Agregar ProjectCard x4
- [ ] Probar responsive

### Optimizaciones
- [ ] Migrar a Next.js Image
- [ ] Agregar meta tags
- [ ] Crear sitemap
- [ ] Integrar Analytics
- [ ] Medir performance
- [ ] Optimizar Core Web Vitals

---

## 🎯 Priorización Recomendada

1. **Semana 1**: Traducción al inglés (alta demanda)
2. **Semana 2**: Theme switcher (diferenciador)
3. **Semana 3**: Portfolio completo (credibilidad)
4. **Semana 4**: SEO y optimizaciones (visibilidad)

---

## 📝 Notas

- Mantener filosofía ASMR en todas las nuevas features
- Probar en mobile antes de commit
- Documentar cambios importantes
- Mantener accesibilidad (WCAG 2.1 AA)
- Código en inglés, UI en español (o bilingüe)
