(function () {
  "use strict";

  // COMENTARIO_ESTRATÉGICO (HOTFIX):
  // La información de los proyectos ha sido actualizada con las descripciones y enlaces finales.
  // Este es el "Single Source of Truth" definitivo para el contenido del portafolio.
  const portfolioProjects = [
    {
      title: "Chill Chess Club",
      description:
        "SPA bilingüe para una academia de ajedrez online. Promueve un método de enseñanza moderno asistido por IA e incluye un formulario para consultas y registro. Desarrollado con HTML5, CSS3 y JavaScript.",
      image: "assets/images/chill-chess-club-layout.jpg",
      technologies: ["HTML", "CSS", "JavaScript"],
      liveUrl: "https://elsantin.github.io/chill-chess-club/",
      repoUrl: "https://github.com/elsantin/chill-chess-club",
    },
    {
      title: "Dra. Hanoi Online",
      description:
        "Sitio web profesional para una ginecóloga obstetra, enfocado en la presentación de servicios médicos y la interacción con pacientes. Presenta un diseño limpio, responsivo y facilita la solicitud de citas.",
      image: "assets/images/dra-hanoi-online-layout.jpg",
      technologies: ["HTML", "CSS", "JavaScript"],
      liveUrl: "https://elsantin.github.io/dra.hanoi.online/",
      repoUrl: "https://github.com/elsantin/dra.hanoi.online",
    },
    {
      title: "Santiago Narváez: AI Art",
      description:
        "Portafolio web personal que exhibe creaciones visuales y fotografías. Ofrece una galería inmersiva con una estética que combina arte tradicional y tecnología, incluyendo elementos interactivos con p5.js.",
      image: "assets/images/santiago-narvaez-portfolio-layout.jpg",
      technologies: ["HTML", "CSS", "JavaScript", "p5.js"],
      liveUrl: "https://elsantin.github.io/santiago-narvaez-portfolio/",
      repoUrl: "https://github.com/elsantin/santiago-narvaez-portfolio",
    },
    {
      title: "Sitio Web Veridia",
      description:
        "Web oficial para Veridia, empresa de automatización inteligente. Presenta sus servicios (IPA, RPA, IA) y metodología a través de un diseño moderno y un formulario de captación de leads.",
      image: "assets/images/veridia-layout.jpg",
      technologies: ["HTML", "CSS", "JavaScript"],
      liveUrl: "https://elsantin.github.io/veridia/",
      repoUrl: "https://github.com/elsantin/veridia",
    },
  ];

  document.addEventListener("DOMContentLoaded", () => {
    // Diagnóstico para verificar la carga del script
    console.log("✅ Hotfix Final Script (con icono p5.js real) Cargado");

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
      console.error("Error: Elementos del portafolio no encontrados.");
      return;
    }

    const allProjectCards = Array.from(
      projectGrid.querySelectorAll(".project-card")
    );
    const closeModalBtn = document.getElementById("close-modal-btn");
    const modalPrevBtn = document.getElementById("modal-prev-project");
    const modalNextBtn = document.getElementById("modal-next-project");

    let currentProjectIndex = 0;

    // COMENTARIO_ESTRATÉGICO: La función ahora usa una etiqueta <img> para p5.js
    // cuando detecta esa tecnología, en lugar de un ícono de FontAwesome.
    const renderTechIcons = (container, techsArray) => {
      if (!container || !techsArray) return;
      container.innerHTML = "";
      const iconMap = {
        html: '<i class="fab fa-html5" title="HTML5" style="color: #e34f26;"></i>',
        css: '<i class="fab fa-css3-alt" title="CSS3" style="color: #1572b6;"></i>',
        javascript:
          '<i class="fab fa-js-square" title="JavaScript" style="color: #f7df1e;"></i>',
        "p5.js":
          '<img src="assets/images/p5-logo.png" alt="p5.js logo" title="p5.js" style="height: 24px; width: auto;">',
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
        const titleElement = card.querySelector(".project-card-title");
        if (titleElement) {
          titleElement.textContent = projectData.title;
        }
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
