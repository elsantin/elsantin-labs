document.addEventListener("DOMContentLoaded", function () {
  // --- DATOS CENTRALIZADOS DE PROYECTOS ---
  const projectsData = [
    {
      image: "assets/images/chill-chess-club-layout.jpg",
      title: "Chill Chess Club",
      short_description:
        "SPA for online chess courses with an AI-assisted, personalized in...",
      full_description:
        "Plataforma web para un club de ajedrez, diseñada para fomentar la comunidad. Incluye un visor de partidas PGN interactivo y un diseño elegante que invita a la concentración y al juego.",
      liveUrl: "https://elsantin.github.io/chill-chess-club/",
      repoUrl: "https://github.com/elsantin/chill-chess-club",

      // COMENTARIO_ESTRATÉGICO: Corregido. Ahora 'tech_card' incluye el logo de p5.js.
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
        "Sitio web profesional y cálido para una ginecóloga obstetra. El diseño prioriza la confianza y la facilidad de contacto, presentando la información médica de forma clara y accesible para las pacientes.",
      liveUrl: "https://elsantin.github.io/dra-hanoi-online/",
      repoUrl: "https://github.com/elsantin/dra-hanoi-online",
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
      title: "Santiago Narváez: AI Art",
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

  const modal = document.getElementById("project-modal");
  if (modal) {
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
      document.getElementById("modal-project-title").textContent =
        project.title;
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
    modalPrevBtn.addEventListener("click", prevProject);
    modalNextBtn.addEventListener("click", nextProject);
    closeModalBtn.addEventListener("click", closeModal);
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

  populateProjectCards();

  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");
  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      hamburger.classList.toggle("active");
    });
  }

  const goToTopBtn = document.getElementById("goToTopBtn");
  if (goToTopBtn) {
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
  }

  const copyEmailBtn = document.getElementById("copy-email-btn");
  if (copyEmailBtn) {
    const feedbackSpan = document.createElement("span");
    feedbackSpan.className = "copy-feedback";
    feedbackSpan.textContent = "¡Copiado!";
    copyEmailBtn.appendChild(feedbackSpan);
    const emailToCopy = copyEmailBtn.getAttribute("data-email");
    const originalIcon = copyEmailBtn.querySelector("i");
    copyEmailBtn.addEventListener("click", () => {
      const textArea = document.createElement("textarea");
      textArea.value = emailToCopy;
      textArea.style.position = "fixed";
      textArea.style.opacity = "0";
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      try {
        document.execCommand("copy");
        feedbackSpan.classList.add("visible");
        originalIcon.className = "fas fa-check";
        setTimeout(() => {
          feedbackSpan.classList.remove("visible");
          originalIcon.className = "fas fa-copy";
        }, 2000);
      } catch (err) {
        console.error("No se pudo copiar el email: ", err);
      }
      document.body.removeChild(textArea);
    });
  }

  const yearSpan = document.getElementById("current-year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});
