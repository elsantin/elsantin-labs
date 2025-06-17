// (function() { ... })(); es una IIFE (Immediately Invoked Function Expression).
// Esto crea un ámbito privado para nuestro código, protegiéndolo de conflictos.
(function () {
  "use strict"; // Activa el modo estricto de JavaScript.

  document.addEventListener("DOMContentLoaded", () => {
    // --- 1. ACTUALIZAR EL AÑO EN EL FOOTER ---
    const currentYearElement = document.getElementById("current-year");
    if (currentYearElement) {
      currentYearElement.textContent = new Date().getFullYear();
    }

    // --- 2. HEADER CON EFECTO "GLASSMORPHISM" AL HACER SCROLL ---
    const header = document.querySelector("header");
    if (header) {
      window.addEventListener("scroll", () => {
        header.classList.toggle("scrolled", window.scrollY > 50);
      });
    }

    // --- 3. LÓGICA DEL BOTÓN "GO-TO-TOP" ---
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

    // --- 4. FUNCIONALIDAD DEL MENÚ MÓVIL (HAMBURGER) ---
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("nav-links");
    if (hamburger && navLinks) {
      hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navLinks.classList.toggle("active");
      });
    }

    // --- 5. FUNCIONALIDAD DEL MODAL DE PROYECTOS ---
    const projectGrid = document.getElementById("project-grid");
    const modal = document.getElementById("project-modal");

    if (!projectGrid || !modal) {
      console.error(
        "Portfolio grid or modal element not found. Modal functionality disabled."
      );
      return;
    }

    const allProjectCards = Array.from(
      projectGrid.querySelectorAll(".project-card")
    );
    const closeModalBtn = document.getElementById("close-modal-btn");
    const modalPrevBtn = document.getElementById("modal-prev-project");
    const modalNextBtn = document.getElementById("modal-next-project");

    let currentProjectIndex = 0;

    const renderTechIcons = (container, techsString) => {
      if (!container || !techsString) return;
      container.innerHTML = "";
      const techs = techsString.split(",").map((t) => t.trim().toLowerCase());
      const iconMap = {
        html: '<i class="fab fa-html5" title="HTML5" style="color: #e34f26;"></i>',
        css: '<i class="fab fa-css3-alt" title="CSS3" style="color: #1572b6;"></i>',
        javascript:
          '<i class="fab fa-js-square" title="JavaScript" style="color: #f7df1e;"></i>',
        "p5.js":
          '<i class="fas fa-palette" title="p5.js" style="color: #ed225d;"></i>',
      };
      techs.forEach((tech) => {
        if (iconMap[tech]) {
          container.innerHTML += iconMap[tech];
        }
      });
    };

    // COMENTARIO ESTRATÉGICO: Esta función lee los atributos simplificados del HTML.
    // JavaScript convierte 'data-title' a `dataset.title` automáticamente.
    const updateModalContent = (projectCard) => {
      if (!projectCard) return;

      const title = projectCard.dataset.title || "Título del Proyecto";
      const description =
        projectCard.dataset.description || "Descripción no disponible.";
      const imageSrc = projectCard.dataset.image || "";
      const technologies = projectCard.dataset.technologies || "";
      const liveUrl = projectCard.dataset.liveUrl || "#";
      const repoUrl = projectCard.dataset.repoUrl || "#";

      modal.querySelector("#modal-project-image").src = imageSrc;
      modal.querySelector("#modal-project-image").alt = `Imagen de ${title}`;
      modal.querySelector("#modal-project-title").textContent = title;
      modal.querySelector("#modal-project-description").textContent =
        description;

      const modalTechIconsContainer = modal.querySelector(
        "#modal-tech-icons-outside-image"
      );
      renderTechIcons(modalTechIconsContainer, technologies);

      const liveLink = modal.querySelector("#modal-project-live-url");
      liveLink.href = liveUrl;
      liveLink.style.display =
        liveUrl && liveUrl !== "#" ? "inline-block" : "none";

      const repoLink = modal.querySelector("#modal-project-repo-url");
      repoLink.href = repoUrl;
      repoLink.style.display =
        repoUrl && repoUrl !== "#" ? "inline-block" : "none";
    };

    const openModal = (clickedCard) => {
      currentProjectIndex = allProjectCards.indexOf(clickedCard);
      updateModalContent(clickedCard);
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
        currentProjectIndex = allProjectCards.length - 1;
      } else if (currentProjectIndex >= allProjectCards.length) {
        currentProjectIndex = 0;
      }
      updateModalContent(allProjectCards[currentProjectIndex]);
    };

    projectGrid.addEventListener("click", (event) => {
      const projectCard = event.target.closest(".project-card");
      if (projectCard) {
        openModal(projectCard);
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

    // Renderiza los íconos en las tarjetas al cargar la página.
    allProjectCards.forEach((card) => {
      const techContainer = card.querySelector(".project-card-tech-icons");
      const technologies = card.dataset.technologies;
      renderTechIcons(techContainer, technologies);
    });
  });
})();
