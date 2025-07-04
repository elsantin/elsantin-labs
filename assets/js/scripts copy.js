// scripts.js - elsantin Labs Frontend (Version Final Unificada 2025-01-21)

// === IMPORTACIONES ===
import {
  getServices,
  getAddOns,
  detectLanguage,
  setLanguage,
  getTexts,
} from "../../sanityClient.js";

// === FUNCIÓN PARA CREAR SKELETONS ===
function createSkeletonCard(type = "service") {
  const skeleton = document.createElement("div");
  skeleton.className =
    type === "addon"
      ? "addon-card skeleton-card addon-skeleton"
      : "plan-card skeleton-card";

  if (type === "service") {
    skeleton.innerHTML = `
      <div class="skeleton-line skeleton-title"></div>
      <div class="skeleton-line skeleton-text"></div>
      <div class="skeleton-line skeleton-text" style="width: 60%;"></div>
      <div class="skeleton-line skeleton-price"></div>
      <div class="skeleton-line skeleton-button"></div>
    `;
  } else {
    skeleton.innerHTML = `
      <div class="skeleton-line skeleton-title" style="width: 80%;"></div>
      <div class="skeleton-line skeleton-text" style="width: 90%;"></div>
      <div class="skeleton-line skeleton-price" style="width: 40%;"></div>
    `;
    return skeleton;
  }

  // Variables globales
  let currentLanguage = "es";
  let isInitialized = false;

  // ============================================================================
  // SISTEMA BILINGÜE - FUNCIONES PRINCIPALES
  // ============================================================================

  // Inicializar idioma
  async function initializeLanguage() {
    try {
      currentLanguage = await detectLanguage();
      console.log(`Idioma detectado: ${currentLanguage.toUpperCase()}`);

      // Actualizar selector si ya existe
      setTimeout(() => {
        updateLanguageToggleState();
      }, 100);

      return currentLanguage;
    } catch (error) {
      console.error("Error detectando idioma:", error);
      currentLanguage = "es";
      return currentLanguage;
    }
  }
  try {
    if (navbar.tagName === "UL") {
      navbar.insertAdjacentHTML("beforeend", toggleHTML);
    } else {
      navbar.insertAdjacentHTML(
        "beforeend",
        `<ul style="display: inline-flex; margin: 0; padding: 0; list-style: none;">${toggleHTML}</ul>`
      );
    }

    const toggleElement = document.getElementById("languageToggle");
    if (toggleElement) {
      toggleElement.addEventListener("click", handleLanguageChangeWithEffects);
      console.log("✨ Selector premium creado exitosamente");
    }
  } catch (error) {
    console.error("Error creando selector premium:", error);
  }
}

function updateLanguageToggleState() {
  const toggleElement = document.getElementById("languageToggle");
  if (!toggleElement) return;

  toggleElement.setAttribute("data-active-lang", currentLanguage);

  const buttons = toggleElement.querySelectorAll(".nav-lang-btn");
  buttons.forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === currentLanguage);
  });
}

// Función para actualizar el estado del selector
function updateLanguageToggleState() {
  const toggleElement = document.getElementById("languageToggle");
  if (!toggleElement) return;

  // Actualizar data-active-lang
  toggleElement.setAttribute("data-active-lang", currentLanguage);

  // Actualizar botones
  const buttons = toggleElement.querySelectorAll(".nav-lang-btn");
  buttons.forEach((btn) => {
    const isActive = btn.dataset.lang === currentLanguage;
    btn.classList.toggle("active", isActive);
    btn.setAttribute("aria-checked", isActive.toString());
  });
}

// Función mejorada para cambio de idioma con efectos premium
async function handleLanguageChangeWithEffects(event) {
  if (!event.target.classList.contains("nav-lang-btn")) return;

  const newLanguage = event.target.dataset.lang;
  if (newLanguage === currentLanguage) return;

  const clickedButton = event.target;
  const toggleElement = document.getElementById("languageToggle");

  console.log(`🌍 Cambiando idioma: ${currentLanguage} → ${newLanguage}`);

  try {
    // Efecto de loading premium
    clickedButton.classList.add("loading");
    showLoadingState(true);

    // Efecto de pulso en el contenedor
    toggleElement.style.transform = "scale(1.05)";
    setTimeout(() => {
      toggleElement.style.transform = "scale(1)";
    }, 200);

    // Actualizar estado inmediatamente para animación del slider
    toggleElement.setAttribute("data-active-lang", newLanguage);

    // Preservar clases de grids
    const plansGrid = document.querySelector(".plans-grid");
    const addonsGrid = document.querySelector(".addons-grid");
    const originalPlansClasses = plansGrid ? plansGrid.className : "";
    const originalAddonsClasses = addonsGrid ? addonsGrid.className : "";

    await setLanguage(newLanguage);
    currentLanguage = newLanguage;

    // Actualizar estados de botones
    updateLanguageToggleState();

    // Cargar contenido
    await Promise.all([loadServicesFromSanity(), loadAddOnsFromSanity()]);

    // Restaurar clases originales
    if (plansGrid && originalPlansClasses) {
      plansGrid.className = originalPlansClasses;
    }
    if (addonsGrid && originalAddonsClasses) {
      addonsGrid.className = originalAddonsClasses;
    }

    // Efecto de éxito
    setTimeout(() => {
      clickedButton.classList.remove("loading");

      // Micro-celebración
      toggleElement.style.filter = "brightness(1.2)";
      setTimeout(() => {
        toggleElement.style.filter = "brightness(1)";
      }, 300);
    }, 500);

    forceStyleReapplication();
    console.log(
      `✨ Idioma cambiado a ${newLanguage.toUpperCase()} con efectos premium`
    );
  } catch (error) {
    console.error("Error cambiando idioma:", error);

    // Revertir estado en caso de error
    toggleElement.setAttribute("data-active-lang", currentLanguage);
    updateLanguageToggleState();
    clickedButton.classList.remove("loading");
  } finally {
    showLoadingState(false);
  }
}

// Mostrar estado de carga
function showLoadingState(isLoading) {
  const buttons = document.querySelectorAll(".nav-lang-btn");
  buttons.forEach((btn) => {
    btn.disabled = isLoading;
    btn.classList.toggle("loading", isLoading);
  });
}

// Actualizar botones de idioma
function updateLanguageButtons() {
  const buttons = document.querySelectorAll(".nav-lang-btn");
  buttons.forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === currentLanguage);
  });
}

// Forzar re-aplicación de estilos
function forceStyleReapplication() {
  document.body.offsetHeight;
  if (window.FontAwesome && window.FontAwesome.dom) {
    window.FontAwesome.dom.i2svg();
  }
  console.log("Re-aplicación mínima completada");
}

// Cargar servicios desde Sanity (AHORA CON SKELETONS)
async function loadServicesFromSanity() {
  console.log(
    `🔄 Cargando servicios en ${currentLanguage.toUpperCase()} con skeletons...`
  );
  const plansGrid = document.querySelector(".plans-grid");
  if (!plansGrid) {
    console.warn(".plans-grid no encontrado");
    return;
  }

  // Mostrar skeletons inmediatamente
  plansGrid.innerHTML = "";
  for (let i = 0; i < 3; i++) {
    plansGrid.appendChild(createSkeletonCard("service"));
  }

  try {
    if (typeof getServices !== "function") {
      throw new Error("getServices no disponible");
    }

    const services = await getServices(currentLanguage);
    console.log(`Servicios obtenidos: ${services.length}`);

    // Pequeño delay para apreciar el shimmer (opcional)
    await new Promise((resolve) => setTimeout(resolve, 800));

    // Reemplazar skeletons con contenido real
    plansGrid.innerHTML = "";
    if (services.length === 0) {
      const messageDiv = document.createElement("div");
      messageDiv.className = "no-services-message";
      messageDiv.innerHTML = `
        <h3>Servicios temporalmente no disponibles</h3>
        <p>Estamos trabajando en cargar el contenido...</p>
      `;
      plansGrid.appendChild(messageDiv);
    } else {
      services.forEach((service, index) => {
        try {
          const serviceCard = createServiceCard(service);
          plansGrid.appendChild(serviceCard);
        } catch (cardError) {
          console.error(`Error creando tarjeta ${index}:`, cardError);
        }
      });
    }

    try {
      configureCTAButtons();
    } catch (ctaError) {
      console.error("Error configurando botones CTA:", ctaError);
    }
    console.log(`✨ ${services.length} servicios cargados con éxito`);
  } catch (error) {
    console.error("❌ Error general en loadServicesFromSanity:", error);
    plansGrid.innerHTML = "";
    const errorDiv = document.createElement("div");
    errorDiv.className = "error-message";
    errorDiv.innerHTML = `
      <h3>Error temporal</h3>
      <p>No se pudieron cargar los servicios. Inténtalo recargando la página.</p>
    `;
    plansGrid.appendChild(errorDiv);
  }
}

// Crear tarjeta de servicio (CLASE CSS CORREGIDA)
function createServiceCard(service) {
  const card = document.createElement("div");
  card.className = "plan-card";

  if (service.featured) {
    card.classList.add("featured");
  }

  const featuresHTML =
    service.features && service.features.length > 0
      ? service.features
          .map((feature) => `<li><i class="fas fa-check"></i>${feature}</li>`)
          .join("")
      : `<li><i class="fas fa-check"></i>${
          currentLanguage === "es"
            ? "Características por definir"
            : "Features to be defined"
        }</li>`;

  card.innerHTML = `
    ${
      service.featured
        ? `<div class="plan-badge new">${
            currentLanguage === "es" ? "Más Popular" : "Most Popular"
          }</div>`
        : ""
    }
    <h3 class="plan-name">${service.name}</h3>
    <p class="plan-description">${service.description || ""}</p>
    <div class="plan-price">
      <span class="currency">$</span>
      <span class="amount">${service.price.toFixed(0)}</span>
    </div>
    <ul class="plan-features">
      ${featuresHTML}
    </ul>
    <button class="plan-button cta-btn" data-service-name="${
      service.name
    }" data-price="${service.price}">
      ${
        service.buttonText ||
        (currentLanguage === "es" ? "Seleccionar" : "Select")
      }
    </button>
  `;

  return card;
}

// Cargar add-ons desde Sanity (AHORA CON SKELETONS)
async function loadAddOnsFromSanity() {
  console.log(
    `🔄 Cargando add-ons en ${currentLanguage.toUpperCase()} con skeletons...`
  );
  const addonsGrid = document.querySelector(".addons-grid");
  if (!addonsGrid) {
    console.warn(".addons-grid no encontrado");
    return;
  }

  // Mostrar skeletons inmediatamente
  addonsGrid.innerHTML = "";
  for (let i = 0; i < 4; i++) {
    addonsGrid.appendChild(createSkeletonCard("addon"));
  }

  try {
    if (typeof getAddOns !== "function") {
      console.warn("getAddOns no disponible");
      return;
    }

    const addOns = await getAddOns(currentLanguage);
    console.log(`Add-ons obtenidos: ${addOns.length}`);

    // Pequeño delay para apreciar el shimmer (opcional)
    await new Promise((resolve) => setTimeout(resolve, 600));

    // Reemplazar skeletons con contenido real
    addonsGrid.innerHTML = "";
    if (addOns.length === 0) {
      const messageDiv = document.createElement("div");
      messageDiv.className = "no-addons-message";
      messageDiv.innerHTML = `
        <h3>Add-ons temporalmente no disponibles</h3>
        <p>Estamos trabajando en cargar el contenido...</p>
      `;
      addonsGrid.appendChild(messageDiv);
    } else {
      addOns.forEach((addon, index) => {
        try {
          const addonCard = createAddonCard(addon);
          addonsGrid.appendChild(addonCard);
        } catch (cardError) {
          console.error(`Error creando add-on ${index}:`, cardError);
        }
      });
    }
    console.log(`✨ ${addOns.length} add-ons cargados con éxito`);
  } catch (error) {
    console.error("❌ Error general en loadAddOnsFromSanity:", error);
  }
}

// Crear tarjeta de add-on con iconos específicos
function createAddonCard(addon) {
  const card = document.createElement("div");
  card.className = "plan-card addon-card";

  const iconMap = {
    "Sistema de Citas": "fas fa-calendar-alt",
    "Galería Premium": "fas fa-images",
    "Blog con Contenido": "fas fa-blog",
    "Newsletter Integration": "fas fa-envelope",
    "Appointment System": "fas fa-calendar-alt",
    "Premium Gallery": "fas fa-images",
    "Blog with Content": "fas fa-blog",
    Newsletter: "fas fa-envelope",
  };

  const iconClass = iconMap[addon.name] || "fas fa-puzzle-piece";

  card.innerHTML = `
    <div class="addon-icon">
      <i class="${iconClass}"></i>
    </div>
    <h3 class="plan-name">${addon.name}</h3>
    <p class="addon-description">${addon.description || ""}</p>
    <div class="plan-price">
      <span class="currency">$</span>
      <span class="amount">${addon.price.toFixed(0)}</span>
    </div>
    <button class="plan-button cta-btn" data-service-name="${
      addon.name
    }" data-price="${addon.price}">
      ${currentLanguage === "es" ? "Agregar" : "Add"}
    </button>
  `;

  return card;
}

// Configurar botones CTA - VERSIÓN CORREGIDA
function configureCTAButtons() {
  document.querySelectorAll(".cta-btn").forEach((btn) => {
    const newBtn = btn.cloneNode(true);
    btn.parentNode.replaceChild(newBtn, btn);
  });

  document.querySelectorAll(".cta-btn").forEach((btn) => {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      const serviceName = this.dataset.serviceName;
      const servicePrice = this.dataset.price;
      const questionnaireUrl = `questionnaire.html?service=${encodeURIComponent(
        serviceName
      )}&price=${encodeURIComponent(servicePrice)}`;
      window.location.href = questionnaireUrl;
    });
  });

  console.log("CTAs configurados correctamente");
}

// Manejar cambio de idioma
async function handleLanguageChangeWithEffects(event) {
  if (!event.target.classList.contains("nav-lang-btn")) return;

  const newLanguage = event.target.dataset.lang;
  if (newLanguage === currentLanguage) return;

  const clickedButton = event.target;
  const toggleElement = document.getElementById("languageToggle");

  console.log(`🌍 Cambiando idioma: ${currentLanguage} → ${newLanguage}`);

  try {
    clickedButton.classList.add("loading");
    showLoadingState(true);

    toggleElement.style.transform = "scale(1.05)";
    setTimeout(() => {
      toggleElement.style.transform = "scale(1)";
    }, 200);

    toggleElement.setAttribute("data-active-lang", newLanguage);

    const plansGrid = document.querySelector(".plans-grid");
    const addonsGrid = document.querySelector(".addons-grid");
    const originalPlansClasses = plansGrid ? plansGrid.className : "";
    const originalAddonsClasses = addonsGrid ? addonsGrid.className : "";

    await setLanguage(newLanguage);
    currentLanguage = newLanguage;

    updateLanguageToggleState();

    await Promise.all([loadServicesFromSanity(), loadAddOnsFromSanity()]);

    if (plansGrid && originalPlansClasses) {
      plansGrid.className = originalPlansClasses;
    }
    if (addonsGrid && originalAddonsClasses) {
      addonsGrid.className = originalAddonsClasses;
    }

    setTimeout(() => {
      clickedButton.classList.remove("loading");

      toggleElement.style.filter = "brightness(1.2)";
      setTimeout(() => {
        toggleElement.style.filter = "brightness(1)";
      }, 300);
    }, 500);

    forceStyleReapplication();
    console.log(
      `✨ Idioma cambiado a ${newLanguage.toUpperCase()} con efectos premium`
    );
  } catch (error) {
    console.error("Error cambiando idioma:", error);

    toggleElement.setAttribute("data-active-lang", currentLanguage);
    updateLanguageToggleState();
    clickedButton.classList.remove("loading");
  } finally {
    showLoadingState(false);
  }
}

// ============================================================================
// PROYECTOS Y FUNCIONALIDADES EXISTENTES (PRESERVADO)
// ============================================================================

const projectsData = [
  {
    image: "assets/images/chill-chess-club-layout.jpg",
    title: "Chill Chess Club",
    short_description:
      "SPA for online chess courses with an AI-assisted, personalized in...",
    full_description:
      "Plataforma web para un club de ajedrez, diseñada para fomentar la comunidad. Incluye un visor de partidas PGN interactivo y un diseño elegante que invita a la concentración y al juego. ",
    liveUrl: "https://elsantin.github.io/chill-chess-club/",
    repoUrl: "https://github.com/elsantin/chill-chess-club",
    tech_card: [
      {
        type: "icon",
        value: "fab fa-html5",
        color: "#E34F26",
        name: "HTML5",
      },
      {
        type: "icon",
        value: "fab fa-css3-alt",
        color: "#1572B6",
        name: "CSS3",
      },
      {
        type: "icon",
        value: "fab fa-js-square",
        color: "#F7DF1E",
        name: "JavaScript",
      },
      { type: "image", value: "assets/images/p5-logo.png", name: "p5.js" },
    ],
    tech_modal: [
      {
        type: "icon",
        value: "fab fa-html5",
        color: "#E34F26",
        name: "HTML5",
      },
      {
        type: "icon",
        value: "fab fa-css3-alt",
        color: "#1572B6",
        name: "CSS3",
      },
      {
        type: "icon",
        value: "fab fa-js-square",
        color: "#F7DF1E",
        name: "JavaScript",
      },
      { type: "image", value: "assets/images/p5-logo.png", name: "p5.js" },
    ],
  },
  {
    image: "assets/images/dra-hanoi-online-layout.jpg",
    title: "Dra. Hanoi Online",
    short_description:
      "Professional website for Dr. Hanoi, showcasing services and facil...",
    full_description:
      "Sitio web profesional y cálido para una ginecóloga obstetra. El diseño prioriza la confianza y la facilidad de contacto, presentando la información médica de forma clara y accesible para las pacientes. ",
    liveUrl: "https://elsantin.github.io/dra.hanoi.online/",
    repoUrl: "https://github.com/elsantin/dra.hanoi.online",
    tech_card: [
      {
        type: "icon",
        value: "fab fa-html5",
        color: "#E34F26",
        name: "HTML5",
      },
      {
        type: "icon",
        value: "fab fa-css3-alt",
        color: "#1572B6",
        name: "CSS3",
      },
      {
        type: "icon",
        value: "fab fa-js-square",
        color: "#F7DF1E",
        name: "JavaScript",
      },
    ],
    tech_modal: [
      {
        type: "icon",
        value: "fab fa-html5",
        color: "#E34F26",
        name: "HTML5",
      },
      {
        type: "icon",
        value: "fab fa-css3-alt",
        color: "#1572B6",
        name: "CSS3",
      },
      {
        type: "icon",
        value: "fab fa-js-square",
        color: "#F7DF1E",
        name: "JavaScript",
      },
    ],
  },
  {
    image: "assets/images/santiago-narvaez-portfolio-layout.jpg",
    title: "Santiago Narvaez: AI Art",
    short_description:
      "Visual exploration at the intersection of imagination and artificial...",
    full_description:
      "Portafolio artístico personal para la exhibición de obras generadas con IA. La interfaz es minimalista e inmersiva, cediendo todo el protagonismo a las piezas de arte digital y su impacto visual.",
    liveUrl: "https://elsantin.github.io/santiago-narvaez-portfolio/",
    repoUrl: "https://github.com/elsantin/santiago-narvaez-portfolio",
    tech_card: [
      {
        type: "icon",
        value: "fab fa-html5",
        color: "#E34F26",
        name: "HTML5",
      },
      {
        type: "icon",
        value: "fab fa-css3-alt",
        color: "#1572B6",
        name: "CSS3",
      },
      {
        type: "icon",
        value: "fab fa-js-square",
        color: "#F7DF1E",
        name: "JavaScript",
      },
    ],
    tech_modal: [
      {
        type: "icon",
        value: "fab fa-html5",
        color: "#E34F26",
        name: "HTML5",
      },
      {
        type: "icon",
        value: "fab fa-css3-alt",
        color: "#1572B6",
        name: "CSS3",
      },
      {
        type: "icon",
        value: "fab fa-js-square",
        color: "#F7DF1E",
        name: "JavaScript",
      },
    ],
  },
  {
    image: "assets/images/veridia-layout.jpg",
    title: "Sitio Web Veridia",
    short_description:
      "Official SPA for Veridia, showcasing intelligent automation soluti...",
    full_description:
      "Landing page corporativa para una startup tecnológica. El diseño es moderno, limpio y está enfocado en comunicar eficiencia y automatización, guiando al usuario hacia la propuesta de valor principal.",
    liveUrl: "https://elsantin.github.io/veridia/",
    repoUrl: "https://github.com/elsantin/veridia",
    tech_card: [
      {
        type: "icon",
        value: "fab fa-html5",
        color: "#E34F26",
        name: "HTML5",
      },
      {
        type: "icon",
        value: "fab fa-css3-alt",
        color: "#1572B6",
        name: "CSS3",
      },
      {
        type: "icon",
        value: "fab fa-js-square",
        color: "#F7DF1E",
        name: "JavaScript",
      },
    ],
    tech_modal: [
      {
        type: "icon",
        value: "fab fa-html5",
        color: "#E34F26",
        name: "HTML5",
      },
      {
        type: "icon",
        value: "fab fa-css3-alt",
        color: "#1572B6",
        name: "CSS3",
      },
      {
        type: "icon",
        value: "fab fa-js-square",
        color: "#F7DF1E",
        name: "JavaScript",
      },
    ],
  },
];

function populateProjectCards() {
  const projectGrid = document.getElementById("project-grid");
  if (!projectGrid) return;

  const projectCards = projectGrid.querySelectorAll(".project-card");
  projectCards.forEach((card, index) => {
    const project = projectsData[index];
    if (!project) return;

    const descriptionEl = card.querySelector(".project-card-description");
    if (descriptionEl) descriptionEl.textContent = project.short_description;

    const iconsContainer = card.querySelector(".project-card-tech-icons");
    if (iconsContainer) renderTechIcons(project.tech_card, iconsContainer);
  });
}

function renderTechIcons(techArray, container) {
  if (!container) return;
  container.innerHTML = "";
  techArray.forEach((techItem) => {
    if (techItem.type === "icon") {
      const icon = document.createElement("i");
      icon.className = techItem.value;
      icon.style.color = techItem.color;
      icon.title = techItem.name;
      container.appendChild(icon);
    } else if (techItem.type === "image") {
      const img = document.createElement("img");
      img.src = techItem.value;
      img.className = "tech-icon-img";
      img.alt = techItem.name;
      img.title = techItem.name;
      container.appendChild(img);
    }
  });
}

function initializeProjectModal() {
  const modal = document.getElementById("project-modal");
  if (!modal) return;

  const projectCards = document.querySelectorAll(".project-card");
  const closeModalBtn = document.getElementById("close-modal-btn");
  const modalPrevBtn = document.getElementById("modal-prev-project");
  const modalNextBtn = document.getElementById("modal-next-project");

  let currentProjectIndex = 0;

  const openModal = (index) => {
    currentProjectIndex = index;
    const project = projectsData[currentProjectIndex];
    if (!project) return;

    document.getElementById("modal-project-image").src = project.image;
    document.getElementById("modal-project-title").textContent = project.title;
    document.getElementById("modal-project-description").textContent =
      project.full_description;
    document.getElementById("modal-project-live-url").href = project.liveUrl;
    document.getElementById("modal-project-repo-url").href = project.repoUrl;

    const modalIconsContainer = document.getElementById(
      "modal-tech-icons-outside-image"
    );

    renderTechIcons(project.tech_modal, modalIconsContainer);

    modal.classList.add("modal-active");
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    modal.classList.remove("modal-active");
    document.body.style.overflow = "";
  };

  const nextProject = () =>
    openModal((currentProjectIndex + 1) % projectsData.length);
  const prevProject = () =>
    openModal(
      (currentProjectIndex - 1 + projectsData.length) % projectsData.length
    );

  projectCards.forEach((card, index) =>
    card.addEventListener("click", () => openModal(index))
  );
  modalPrevBtn?.addEventListener("click", prevProject);
  modalNextBtn?.addEventListener("click", nextProject);
  closeModalBtn?.addEventListener("click", closeModal);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener("keydown", (e) => {
    if (modal.classList.contains("modal-active")) {
      if (e.key === "ArrowRight") nextProject();
      if (e.key === "ArrowLeft") prevProject();
      if (e.key === "Escape") closeModal();
    }
  });
}

function initializeHamburgerMenu() {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");

  if (hamburger && navLinks) {
    // Toggle del menú principal
    hamburger.addEventListener("click", (e) => {
      e.stopPropagation();
      navLinks.classList.toggle("active");
      hamburger.classList.toggle("active");
    });

    // Cerrar menú al hacer click en cualquier enlace o botón de idioma
    navLinks.addEventListener("click", (e) => {
      if (
        e.target.tagName === "A" ||
        e.target.classList.contains("nav-lang-btn")
      ) {
        navLinks.classList.remove("active");
        hamburger.classList.remove("active");
      }
    });

    // Cerrar menú al hacer click fuera del área de navegación
    document.addEventListener("click", (e) => {
      if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
        navLinks.classList.remove("active");
        hamburger.classList.remove("active");
      }
    });

    // Cerrar menú al hacer scroll (UX móvil moderna)
    let scrollTimeout;
    window.addEventListener("scroll", () => {
      if (navLinks.classList.contains("active")) {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
          navLinks.classList.remove("active");
          hamburger.classList.remove("active");
        }, 100);
      }
    });

    console.log("Menu hamburguesa inteligente inicializado");
  }
}

function initializeGoToTopButton() {
  const goToTopBtn = document.getElementById("goToTopBtn");
  if (!goToTopBtn) {
    console.warn("Botón ir arriba no encontrado en HTML");
    return;
  }

  window.addEventListener("scroll", function () {
    if (
      document.body.scrollTop > 400 ||
      document.documentElement.scrollTop > 400
    ) {
      goToTopBtn.classList.add("visible");
    } else {
      goToTopBtn.classList.remove("visible");
    }
  });

  goToTopBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  console.log("Botón ir arriba inicializado");
}

function initializeCopyEmail() {
  const copyEmailBtn = document.getElementById("copy-email-btn");
  if (!copyEmailBtn) return;

  const emailToCopy = copyEmailBtn.getAttribute("data-email");
  const originalIcon = copyEmailBtn.querySelector("i");
  let feedbackSpan = copyEmailBtn.querySelector(".copy-feedback");

  if (!feedbackSpan) {
    feedbackSpan = document.createElement("span");
    feedbackSpan.className = "copy-feedback";
    feedbackSpan.textContent = "Copiado! ";
    copyEmailBtn.appendChild(feedbackSpan);
  }

  copyEmailBtn.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(emailToCopy);
      feedbackSpan.classList.add("visible");
      if (originalIcon) originalIcon.className = "fas fa-check";
      setTimeout(() => {
        feedbackSpan.classList.remove("visible");
        if (originalIcon) originalIcon.className = "fas fa-copy";
      }, 2000);
    } catch (err) {
      console.error("No se pudo copiar el email: ", err);
    }
  });

  console.log("Funcionalidad copiar email inicializada");
}

function updateCurrentYear() {
  const yearSpan = document.getElementById("current-year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
    console.log("Año actualizado");
  }
}

// ============================================================================
// ESTILOS CSS
// ============================================================================

// Aplicar estilos CSS (VERSION ULTRA MINIMA - SOLO SELECTOR)
function addLanguageStyles() {
  if (document.getElementById("language-styles")) return;

  const styleElement = document.createElement("style");
  styleElement.id = "language-styles";
  styleElement.textContent = `
    /* SOLO selector de idiomas - NADA MÁS */
    #languageToggle {
      margin-left: 20px;
    }

    .nav-lang-btn {
      padding: 6px 14px;
      border: none;
      border-radius: 18px;
      background: transparent;
      color: rgba(255, 255, 255, 0.75);
      cursor: pointer;
      font-weight: 500;
      font-size: 12px;
      transition: all 0.25s ease;
    }

    .nav-lang-btn:hover {
      color: #ffffff;
      background: rgba(255, 255, 255, 0.1);
    }

    .nav-lang-btn.active {
      background: rgba(255, 255, 255, 0.2);
      color: #ffffff;
      font-weight: 600;
    }
  `;

  document.head.appendChild(styleElement);
}

// Crear y agregar barra de progreso
function initializeScrollProgress() {
  const progressBar = document.createElement("div");
  progressBar.className = "scroll-progress";
  document.body.appendChild(progressBar);

  window.addEventListener("scroll", () => {
    const winScroll = document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (winScroll / height) * 100;
    progressBar.style.width = Math.min(scrolled, 100) + "%";
  });
}

// ============================================================================
// INICIALIZACIÓN CONSOLIDADA - ÚNICA Y DEFINITIVA
// ============================================================================

document.addEventListener("DOMContentLoaded", async function () {
  console.log("Inicializando elsantin Labs...");

  try {
    await initializeLanguage();
    addLanguageStyles();
    createLanguageToggle();

    await Promise.all([loadServicesFromSanity(), loadAddOnsFromSanity()]);

    populateProjectCards();
    initializeProjectModal();
    initializeHamburgerMenu();
    initializeGoToTopButton();
    initializeCopyEmail();
    updateCurrentYear();
    initializeScrollProgress();
    initScrollAnimations();

    isInitialized = true;
    console.log("elsantin Labs inicializado exitosamente");
  } catch (error) {
    console.error("Error crítico en inicialización:", error);
  }
});

// ============================================================================
// DEBUGGING
// ============================================================================

window.addEventListener("error", (e) => {
  console.error("Error global capturado:", {
    message: e.message,
    filename: e.filename,
    lineno: e.lineno,
    colno: e.colno,
    error: e.error,
  });
});

window.quickCheck = function () {
  const results = {
    languageToggle: !!document.getElementById("languageToggle"),
    goToTopBtn: !!document.getElementById("goToTopBtn"),
    serviceCards: document.querySelectorAll(".plan-card").length,
    addOnCards: document.querySelectorAll(".addon-card").length,
    projectCards: document.querySelectorAll(".project-card").length,
    sanityConnected: typeof getServices !== "undefined",
    currentLang: currentLanguage,
    initialized: isInitialized,
    plansGrid: !!document.querySelector(".plans-grid"),
    addonsGrid: !!document.querySelector(".addons-grid"),
  };

  console.log("=== VERIFICACIÓN RÁPIDA ===");
  console.table(results);

  const status =
    results.languageToggle &&
    results.goToTopBtn &&
    results.sanityConnected &&
    results.plansGrid
      ? "✅ SISTEMA OPERATIVO"
      : "❌ PROBLEMAS DETECTADOS";

  console.log(status);

  // Verificación adicional del grid
  const plansGrid = document.querySelector(".plans-grid");
  if (plansGrid) {
    console.log("📊 Grid Info:", {
      display: window.getComputedStyle(plansGrid).display,
      columns: window.getComputedStyle(plansGrid).gridTemplateColumns,
      children: plansGrid.children.length,
    });
  }

  return results;
};

console.log(
  "scripts.js cargado correctamente - Version Final Unificada 2025-01-21"
);
console.log("Función disponible: quickCheck() - Verificación rápida de estado");

// === BARRA DE PROGRESO DORADA ===
function initializeScrollProgress() {
  const existingBar = document.querySelector(".scroll-progress");
  if (existingBar) {
    existingBar.remove();
  }

  const progressBar = document.createElement("div");
  progressBar.className = "scroll-progress";
  document.body.appendChild(progressBar);

  window.addEventListener("scroll", () => {
    const winScroll = document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (winScroll / height) * 100;
    progressBar.style.width = Math.min(scrolled, 100) + "%";
  });

  console.log("✨ Barra de progreso dorada inicializada");
}

// === ANIMACIONES SCROLL ===
function initScrollAnimations() {
  const elements = document.querySelectorAll(
    ".plan-card, .project-card, .process-step, .testimonial"
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("animate-in");
          }, index * 150);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }
  );

  elements.forEach((el) => {
    el.classList.add("scroll-animate");
    observer.observe(el);
  });

  console.log(
    `✨ Animaciones scroll inicializadas para ${elements.length} elementos`
  );
}
