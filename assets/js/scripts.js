// (function() { ... })(); es una IIFE (Immediately Invoked Function Expression).
// Esto crea un ámbito privado para nuestro código, protegiéndolo de conflictos.
(function () {
  "use strict"; // Activa el modo estricto de JavaScript.

  // COMENTARIO_ESTRATÉGICO (DIAGNÓSTICO):
  // Si ves este mensaje en la consola del navegador (F12), significa que
  // el archivo correcto se ha cargado. Si no lo ves, el navegador usa caché.
  console.log("✅ Hotfix Script v2 Cargado Correctamente");

  const portfolioProjects = [
    {
      title: "Chill Chess Club",
      description:
        "Una aplicación web interactiva para entusiastas del ajedrez, con análisis de partidas y puzzles diarios. El objetivo era crear una comunidad online vibrante y un recurso educativo.",
      image: "assets/images/chill-chess-club-layout.jpg",
      technologies: ["HTML", "CSS", "JavaScript"],
      liveUrl: "#",
      repoUrl: "#",
    },
    {
      title: "Dra. Hanoi Online",
      description:
        "Sitio web profesional para una ginecóloga obstetra, enfocado en la presentación de servicios, perfil médico y un blog informativo. Se priorizó un diseño limpio, profesional y que generara confianza.",
      image: "assets/images/dra-hanoi-online-layout.jpg",
      technologies: ["HTML", "CSS", "JavaScript"],
      liveUrl: "#",
      repoUrl: "#",
    },
    {
      title: "Santiago Narváez: AI Art Portfolio",
      description:
        "Un portafolio artístico y experimental para mostrar obras generadas con IA. Se utilizó p5.js para crear efectos visuales interactivos que complementan las piezas de arte digital.",
      image: "assets/images/santiago-narvaez-portfolio-layout.jpg",
      technologies: ["HTML", "CSS", "p5.js"],
      liveUrl: "#",
      repoUrl: "#",
    },
    {
      title: "Sitio Web Veridia",
      description:
        "Página de aterrizaje para un proyecto de tecnología sostenible. El diseño busca transmitir innovación y ecología a través de una interfaz limpia y animaciones sutiles.",
      image: "assets/images/veridia-layout.jpg",
      technologies: ["HTML", "CSS", "JavaScript"],
      liveUrl: "#",
      repoUrl: "#",
    },
  ];

  document.addEventListener("DOMContentLoaded", () => {
    const currentYearElement = document.getElementById("current-year");
    if (currentYearElement) {
      currentYearElement.textContent = new Date().getFullYear();
    }

    const header = document.querySelector("header");
    if (header) {
      window.addEventListener("scroll", () => {
        header.classList.toggle("scrolled", window.scrollY > 50);
      });
    }

    const goToTopBtn = document.getElementById("go-to-top");
    if (goToTopBtn) {
      window.addEventListener("scroll", () => {
        goToTopBtn.classList.toggle("visible", window.scrollY > 300);
      });
      goToTopBtn.addEventListener("click", (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }

    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("nav-links");
    if (hamburger && navLinks) {
      hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navLinks.classList.toggle("active");
      });
    }

    const projectGrid = document.getElementById("project-grid");
    const modal = document.getElementById("project-modal");

    if (!projectGrid || !modal) {
      return;
    }

    const allProjectCards = Array.from(
      projectGrid.querySelectorAll(".project-card")
    );
    const closeModalBtn = document.getElementById("close-modal-btn");
    const modalPrevBtn = document.getElementById("modal-prev-project");
    const modalNextBtn = document.getElementById("modal-next-project");

    let currentProjectIndex = 0;

    const renderTechIcons = (container, techsArray) => {
      if (!container || !techsArray) return;
      container.innerHTML = "";
      const iconMap = {
        html: '<i class="fab fa-html5" title="HTML5" style="color: #e34f26;"></i>',
        css: '<i class="fab fa-css3-alt" title="CSS3" style="color: #1572b6;"></i>',
        javascript:
          '<i class="fab fa-js-square" title="JavaScript" style="color: #f7df1e;"></i>',
        "p5.js":
          '<i class="fas fa-palette" title="p5.js" style="color: #ed225d;"></i>',
      };
      techsArray.forEach((tech) => {
        const key = tech.toLowerCase();
        if (iconMap[key]) {
          container.innerHTML += iconMap[key];
        }
      });
    };

    allProjectCards.forEach((card, index) => {
      const projectData = portfolioProjects[index];
      if (projectData) {
        const techContainer = card.querySelector(".project-card-tech-icons");
        renderTechIcons(techContainer, projectData.technologies);
      }
    });

    const updateModalContent = (projectIndex) => {
      const project = portfolioProjects[projectIndex];
      if (!project) return;

      modal.querySelector("#modal-project-image").src = project.image;
      modal.querySelector(
        "#modal-project-image"
      ).alt = `Imagen de ${project.title}`;
      modal.querySelector("#modal-project-title").textContent = project.title;
      modal.querySelector("#modal-project-description").textContent =
        project.description;

      const modalTechIconsContainer = modal.querySelector(
        "#modal-tech-icons-outside-image"
      );
      renderTechIcons(modalTechIconsContainer, project.technologies);

      const liveLink = modal.querySelector("#modal-project-live-url");
      liveLink.href = project.liveUrl;
      liveLink.style.display =
        project.liveUrl && project.liveUrl !== "#" ? "inline-block" : "none";

      const repoLink = modal.querySelector("#modal-project-repo-url");
      repoLink.href = project.repoUrl;
      repoLink.style.display =
        project.repoUrl && project.repoUrl !== "#" ? "inline-block" : "none";
    };

    const openModal = (projectIndex) => {
      currentProjectIndex = projectIndex;
      updateModalContent(currentProjectIndex);
      modal.classList.add("modal-active");
      document.body.style.overflow = "hidden";
    };

    const closeModal = () => {
      modal.classList.remove("modal-active");
      document.body.style.overflow = "auto";
    };

    const navigateProject = (direction) => {
      currentProjectIndex += direction;
      if (currentProjectIndex < 0) {
        currentProjectIndex = portfolioProjects.length - 1;
      } else if (currentProjectIndex >= portfolioProjects.length) {
        currentProjectIndex = 0;
      }
      updateModalContent(currentProjectIndex);
    };

    projectGrid.addEventListener("click", (event) => {
      const clickedCard = event.target.closest(".project-card");
      if (clickedCard) {
        const cardIndex = allProjectCards.indexOf(clickedCard);
        if (cardIndex > -1) {
          openModal(cardIndex);
        }
      }
    });

    closeModalBtn.addEventListener("click", closeModal);
    modalPrevBtn.addEventListener("click", () => navigateProject(-1));
    modalNextBtn.addEventListener("click", () => navigateProject(1));

    modal.addEventListener("click", (event) => {
      if (event.target === modal) {
        closeModal();
      }
    });

    document.addEventListener("keydown", (event) => {
      if (modal.classList.contains("modal-active")) {
        if (event.key === "Escape") closeModal();
        if (event.key === "ArrowLeft") navigateProject(-1);
        if (event.key === "ArrowRight") navigateProject(1);
      }
    });
  });
})();
