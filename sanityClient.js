import { createClient } from "https://cdn.skypack.dev/@sanity/client";

export const client = createClient({
  projectId: "iawu5ctn",
  dataset: "production",
  useCdn: false,
  apiVersion: "2024-01-01",
});

// 🌐 FUNCIÓN PRINCIPAL: Obtener servicios principales (Main Development Plans)
export async function getServices(language = "es") {
  try {
    console.log(
      `🌐 Cargando servicios de elsantin Labs en ${language.toUpperCase()}`
    );

    // DEBUGGING: Verificar qué tipos de documentos existen (tu lógica probada preservada)
    const allTypes = await client.fetch(`*[]{_type} | order(_type asc)`);
    const uniqueTypes = [...new Set(allTypes.map((doc) => doc._type))];
    console.log("🔍 Tipos de documentos disponibles en Sanity:", uniqueTypes);

    // ARQUITECTURA SINGULAR PRIORITARIA (tu decisión técnica superior preservada)
    const possibleSchemaNames = [
      "elsantinLabsService", // ← PRIORIDAD 1 (singular) - ARQUITECTURA DEFINITIVA
      "elsantinService", // ← Alternativa singular
      "elsantinLabsServices", // ← Tu versión anterior (plural fallback)
      "elsantinServices", // ← Plural alternativo
      "service", // ← Genérico singular
      "services", // ← Genérico plural
    ];

    let services = [];
    let usedSchemaName = null;

    for (const schemaName of possibleSchemaNames) {
      console.log(`🔍 Probando schema: ${schemaName}`);

      const query = `
        *[_type == "${schemaName}"] | order(order asc) {
          _id,
          _type,
          "name": coalesce(name.${language}, name),
          "description": coalesce(description.${language}, description),
          "features": coalesce(features.${language}, features),
          "buttonText": coalesce(buttonText.${language}, buttonText),
          price,
          featured,
          order
        }
      `;

      const result = await client.fetch(query);

      if (result && result.length > 0) {
        services = result;
        usedSchemaName = schemaName;
        console.log(
          `✅ Encontrados ${result.length} servicios con schema: ${schemaName}`
        );
        break;
      }
    }

    if (services.length === 0) {
      console.warn("⚠️ No se encontraron servicios con ningún schema name");
      console.log(
        "💡 Verifica que tengas documentos en Sanity Studio y que estén publicados"
      );
      console.log("🎯 Schemas disponibles en tu proyecto:", uniqueTypes);
      return [];
    }

    // LOGGING DETALLADO (tu patrón de debugging preservado)
    console.log(`🎯 Usando schema definitivo: "${usedSchemaName}"`);

    // VALIDACIÓN Y TRANSFORMACIÓN ROBUSTA (tu lógica original preservada)
    const validServices = services
      .filter((service) => {
        const hasValidName = service.name && service.name.trim() !== "";
        const hasValidDescription =
          service.description && service.description.trim() !== "";
        const hasValidPrice =
          typeof service.price === "number" && service.price >= 0;

        if (!hasValidName || !hasValidDescription || !hasValidPrice) {
          console.warn(`⚠️ Servicio incompleto en ${language.toUpperCase()}:`, {
            id: service._id,
            name: service.name,
            hasName: hasValidName,
            hasDescription: hasValidDescription,
            hasPrice: hasValidPrice,
          });
        }

        return hasValidName && hasValidDescription && hasValidPrice;
      })
      .map((service) => ({
        ...service,
        language,
        buttonText:
          service.buttonText ||
          (language === "es" ? "Más Información" : "Learn More"),
      }));

    console.log(
      `✅ ${
        validServices.length
      } servicios válidos en ${language.toUpperCase()}`
    );
    console.log(
      "🎯 Servicios encontrados:",
      validServices.map((s) => `${s.name} ($${s.price})`)
    );

    return validServices;
  } catch (error) {
    console.error(`❌ Error cargando servicios:`, error);
    return [];
  }
}

// 🔧 NUEVA FUNCIÓN: Obtener add-ons (Add-Ons & Additional Services)
export async function getAddOns(language = "es") {
  try {
    console.log(
      `🔧 Cargando add-ons de elsantin Labs en ${language.toUpperCase()}`
    );

    // ARQUITECTURA SINGULAR CONSISTENTE (siguiendo tu patrón establecido)
    const possibleSchemaNames = [
      "elsantinLabsAddon", // ← PRIORIDAD 1 (singular) - CONSISTENTE CON TU ARQUITECTURA
      "elsantinAddon", // ← Alternativa singular
      "elsantinLabsAddons", // ← Fallback plural (por compatibilidad)
      "elsantinAddons", // ← Plural alternativo
      "addon", // ← Genérico singular
      "addons", // ← Genérico plural
    ];

    let addOns = [];
    let usedSchemaName = null;

    for (const schemaName of possibleSchemaNames) {
      console.log(`🔍 Probando schema add-on: ${schemaName}`);

      const query = `
        *[_type == "${schemaName}" && active != false] | order(order asc) {
          _id,
          _type,
          "name": coalesce(name.${language}, name),
          "description": coalesce(description.${language}, description),
          price,
          order,
          active
        }
      `;

      const result = await client.fetch(query);

      if (result && result.length > 0) {
        addOns = result;
        usedSchemaName = schemaName;
        console.log(
          `✅ Encontrados ${result.length} add-ons con schema: ${schemaName}`
        );
        break;
      }
    }

    if (addOns.length === 0) {
      console.warn("⚠️ No se encontraron add-ons activos");
      console.log(
        "💡 Verifica que tengas add-ons en Sanity Studio y que estén publicados y activos"
      );
      return [];
    }

    console.log(`🎯 Usando schema de add-ons: "${usedSchemaName}"`);

    // VALIDACIÓN Y TRANSFORMACIÓN PARA ADD-ONS (siguiendo tu patrón)
    const validAddOns = addOns
      .filter((addon) => {
        const hasValidName = addon.name && addon.name.trim() !== "";
        const hasValidPrice =
          typeof addon.price === "number" && addon.price >= 0;

        if (!hasValidName || !hasValidPrice) {
          console.warn(`⚠️ Add-on incompleto en ${language.toUpperCase()}:`, {
            id: addon._id,
            name: addon.name,
            hasName: hasValidName,
            hasPrice: hasValidPrice,
          });
        }

        return hasValidName && hasValidPrice;
      })
      .map((addon) => ({
        ...addon,
        language,
        description:
          addon.description ||
          (language === "es"
            ? "Servicio adicional premium"
            : "Premium additional service"),
      }));

    console.log(
      `✅ ${validAddOns.length} add-ons válidos en ${language.toUpperCase()}`
    );
    console.log(
      "🎯 Add-ons encontrados:",
      validAddOns.map((a) => `${a.name} ($${a.price})`)
    );

    return validAddOns;
  } catch (error) {
    console.error(`❌ Error cargando add-ons:`, error);
    return [];
  }
}

// 🌐 SISTEMA DE DETECCIÓN DE IDIOMA (tu código perfecto preservado)
export function detectLanguage() {
  const urlParams = new URLSearchParams(window.location.search);
  const urlLang = urlParams.get("lang");
  if (urlLang && ["es", "en"].includes(urlLang)) {
    console.log(`🔗 Idioma detectado por URL: ${urlLang.toUpperCase()}`);
    return urlLang;
  }

  const savedLang = localStorage.getItem("elsantin-labs-language");
  if (savedLang && ["es", "en"].includes(savedLang)) {
    console.log(`💾 Idioma guardado detectado: ${savedLang.toUpperCase()}`);
    return savedLang;
  }

  const browserLang = navigator.language || navigator.userLanguage;
  const langCode = browserLang.split("-")[0];

  if (langCode === "es") {
    console.log("🌐 Idioma del navegador detectado: ESPAÑOL");
    return "es";
  } else {
    console.log("🌐 Idioma del navegador detectado, usando: INGLÉS");
    return "en";
  }
}

// 🔄 FUNCIÓN DE CAMBIO DE IDIOMA (tu código perfecto preservado)
export function setLanguage(language) {
  if (!["es", "en"].includes(language)) {
    console.error("❌ Idioma no soportado:", language);
    return false;
  }

  localStorage.setItem("elsantin-labs-language", language);
  console.log(`✅ Idioma guardado: ${language.toUpperCase()}`);

  const url = new URL(window.location);
  url.searchParams.set("lang", language);
  window.history.replaceState({}, "", url);

  return true;
}

// 📝 TEXTOS DE INTERFAZ BILINGÜES (expandido para add-ons)
export function getTexts(language = "es") {
  const texts = {
    es: {
      // Textos principales (tus textos originales preservados)
      title: "elsantin Labs - Servicios Audiovisuales con IA",
      pageTitle: "Servicios Profesionales",
      subtitle:
        "Soluciones innovadoras para creadores de contenido audiovisual",

      // Servicios principales
      servicesTitle: "Planes de Desarrollo Web",
      servicesSubtitle:
        "Sitios web modernos creados con tecnología Jamstack y asistencia de inteligencia artificial para garantizar rendimiento excepcional y diseño único.",

      // Add-ons (nuevos textos)
      addonsTitle: "Servicios Adicionales",
      addonsSubtitle:
        "Mejora tu sitio web con funcionalidades específicas y contenido generado con inteligencia artificial.",

      // Estados (tus textos originales preservados)
      loading: "Cargando servicios...",
      loadingAddons: "Cargando servicios adicionales...",
      noServices: "No hay servicios disponibles en este momento.",
      noAddons: "No hay servicios adicionales disponibles.",
      error: "Error cargando servicios. Por favor, recarga la página.",
      contactMessage:
        "¡Gracias por tu interés en elsantin Labs! Contacta para más información.",
      featured: "MÁS POPULAR",
    },
    en: {
      // Main texts (tus textos originales preservados)
      title: "elsantin Labs - AI-Powered Audiovisual Services",
      pageTitle: "Professional Services",
      subtitle: "Innovative solutions for audiovisual content creators",

      // Main services
      servicesTitle: "Web Development Plans",
      servicesSubtitle:
        "Modern websites built with Jamstack technology and AI assistance to ensure exceptional performance and unique design.",

      // Add-ons (nuevos textos)
      addonsTitle: "Additional Services",
      addonsSubtitle:
        "Enhance your website with specific functionalities and AI-generated content.",

      // States (tus textos originales preservados)
      loading: "Loading services...",
      loadingAddons: "Loading additional services...",
      noServices: "No services available at this time.",
      noAddons: "No additional services available.",
      error: "Error loading services. Please reload the page.",
      contactMessage:
        "Thank you for your interest in elsantin Labs! Contact for more information.",
      featured: "MOST POPULAR",
    },
  };

  return texts[language] || texts.es;
}

// 🛠️ FUNCIÓN UTILITARIA: Obtener todos los servicios (principales + add-ons)
export async function getAllServices(language = "es") {
  try {
    console.log(
      `🚀 Cargando todos los servicios de elsantin Labs en ${language.toUpperCase()}`
    );

    const [mainServices, addOns] = await Promise.all([
      getServices(language),
      getAddOns(language),
    ]);

    console.log(
      `📊 Resumen: ${mainServices.length} servicios principales + ${
        addOns.length
      } add-ons = ${mainServices.length + addOns.length} total`
    );

    return {
      mainServices,
      addOns,
      total: mainServices.length + addOns.length,
    };
  } catch (error) {
    console.error("❌ Error cargando todos los servicios:", error);
    return {
      mainServices: [],
      addOns: [],
      total: 0,
    };
  }
}
