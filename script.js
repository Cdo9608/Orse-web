// === ROTACIÓN DE PALABRAS (tu código existente) ===
const words = ["Creando", "Diseñando"];
let index = 0;

const rotating = document.getElementById("rotating-word");

setInterval(() => {
  rotating.style.transform = "translateY(20px)";
  rotating.style.opacity = "0";

  setTimeout(() => {
    index = (index + 1) % words.length;
    rotating.textContent = words[index];
    rotating.style.transform = "translateY(-20px)";
  }, 400);

  setTimeout(() => {
    rotating.style.opacity = "1";
    rotating.style.transform = "translateY(0)";
  }, 700);

}, 2500);



// ===============================
// HEADER TRANSPARENTE SOLO EN HOME
// ===============================
const header = document.querySelector('.site-header');
const heroSection = document.querySelector('#home');

function updateHeaderState() {
  if (!header || !heroSection) return;

  // parte baja del hero respecto a la ventana
  const heroBottom = heroSection.getBoundingClientRect().bottom;

  // cuando ya saliste del hero, quita la clase
  if (heroBottom <= header.offsetHeight + 40) {
    document.body.classList.remove('on-hero');
  } else {
    document.body.classList.add('on-hero');
  }
}

// al cargar la página
window.addEventListener('load', updateHeaderState);
// al hacer scroll
window.addEventListener('scroll', updateHeaderState);
// por si cambias tamaño de ventana
window.addEventListener('resize', updateHeaderState);



// =======================================
//  MODAL PORTAFOLIO / OBRAS
// =======================================

/* ============================
   PORTAFOLIO: MODAL + SLIDES
   ============================ */

// Datos de ejemplo: cambia las rutas por tus imágenes reales.
// Cada categoría tiene un array de "slides".
// Cada slide: 2 imágenes principales + varios mockups.
const portfolioData = {



  'Branding': [
    {
      mains: [
        'imgs/Branding/branding_1/poster_teatro.png',
        'imgs/Branding/branding_2/Equilibra_tu_bienestar.png'
      ],
      mockups: [
        'imgs/Branding/branding_1/Branding 1.1.png',
        'imgs/Branding/branding_1/Branding 1.3.png',
        'imgs/Branding/branding_1/Branding 1.4.png',
        'imgs/Branding/branding_2/Branding 2.1.png',
        'imgs/Branding/branding_2/Branding 2.4.png',
        'imgs/Branding/branding_2/Branding 2.3.png',
      ]
    },
    {
      mains: [
        'imgs/Branding/branding_3/EVENTO AFRO.png',
        'imgs/Branding/branding_4/Segana Coffee.png'
      ],
      mockups: [
        'imgs/Branding/branding_3/Branding3.2.png',
        'imgs/Branding/branding_3/Branding3.4.png',
        'imgs/Branding/branding_3/Branding3.1.png',
        'imgs/Branding/branding_4/Branding 4.1.png',
        'imgs/Branding/branding_4/Branding 4.3.png',
        'imgs/Branding/branding_4/Branding 4.4.png',        
      ]
    }
  ],








  'Afiches': [
    {
      mains: [
        'imgs/Branding/1.0 Póster teatro.png',
        'imgs/Branding/1.0 Póster teatro.png'
      ],
      mockups: [
        'imgs/Branding/3.jpg',
        'imgs/Branding/1.0 Póster teatro.png',
        'imgs/Branding/1.0 Póster teatro.png'
      ]
    }
  ],

  'Social Media': [
    {
      mains: [
        'imgs/Branding/1.0 Póster teatro.png',
        'imgs/Branding/1.0 Póster teatro.png'
      ],
      mockups: [
        'imgs/Branding/3.jpg',
        'imgs/Branding/1.0 Póster teatro.png',
        'imgs/Branding/1.0 Póster teatro.png'
      ]
    }
  ],

  'Packaging': [
    {
      mains: [
        'imgs/Branding/1.0 Póster teatro.png',
        'imgs/Branding/1.0 Póster teatro.png'
      ],
      mockups: [
        'imgs/Branding/3.jpg',
        'imgs/Branding/1.0 Póster teatro.png'
      ]
    }
  ],

  'Editorial': [
    {
      mains: [
        'imgs/Branding/1.0 Póster teatro.png',
        'imgs/Branding/1.0 Póster teatro.png'
      ],
      mockups: [
        'imgs/Branding/3.jpg',
        'imgs/Branding/1.0 Póster teatro.png'
      ]
    }
  ],

  'Ilustración': [
    {
      mains: [
        'imgs/Branding/1.0 Póster teatro.png',
        'imgs/Branding/1.0 Póster teatro.png'
      ],
      mockups: [
        'imgs/Branding/1.0 Póster teatro.png',
        'imgs/Branding/1.0 Póster teatro.png'
      ]
    }
  ]
};

const portfolioCategories = Object.keys(portfolioData);

const modalEl       = document.getElementById('portfolio-modal');
const titleEl       = document.getElementById('pm-title');
const mainImagesEl  = document.getElementById('pm-main-images');
const mockupsEl     = document.getElementById('pm-mockups');
const dotsEl        = document.getElementById('pm-dots');

const btnClose      = document.querySelector('.pm-close');
const btnPrevCat    = document.querySelector('.pm-prev-cat');
const btnNextCat    = document.querySelector('.pm-next-cat');
const backdropEl    = document.querySelector('.pm-backdrop');

let currentCategory = null;
let currentSlide    = 0;
let slideTimer      = null;

/* Abre el modal en una categoría */
function openPortfolioModal(categoryName) {
  currentCategory = categoryName;
  currentSlide = 0;

  renderModalSlide();
  startAutoSlide();

  modalEl.style.display = 'flex';
}

/* Cierra el modal */
function closePortfolioModal() {
  modalEl.style.display = 'none';
  stopAutoSlide();
}

/* Render de un slide */
function renderModalSlide() {
  const slides = portfolioData[currentCategory];
  if (!slides || !slides.length) return;

  const slide = slides[currentSlide];

  // Título
  titleEl.textContent = currentCategory;

  // Imágenes principales
  mainImagesEl.innerHTML = '';
  slide.mains.forEach(src => {
    const img = document.createElement('img');
    img.src = src;
    img.className = 'pm-main-image';
    mainImagesEl.appendChild(img);
  });

  // Mockups
  mockupsEl.innerHTML = '';
  slide.mockups.forEach(src => {
    const img = document.createElement('img');
    img.src = src;
    img.className = 'pm-mockup';
    mockupsEl.appendChild(img);
  });

  // Dots
  dotsEl.innerHTML = '';
  slides.forEach((_, idx) => {
    const dot = document.createElement('button');
    dot.type = 'button';
    dot.className = 'pm-dot' + (idx === currentSlide ? ' active' : '');
    dot.addEventListener('click', () => {
      currentSlide = idx;
      renderModalSlide();
      startAutoSlide();
    });
    dotsEl.appendChild(dot);
  });

  // 👇👇 IMPORTANTE: activar zoom después de crear las imágenes
  enableImageZoom();
}






/* Auto slide dentro de la categoría actual */
function startAutoSlide() {
  stopAutoSlide();
  slideTimer = setInterval(() => {
    const slides = portfolioData[currentCategory];
    if (!slides || !slides.length) return;
    currentSlide = (currentSlide + 1) % slides.length;
    renderModalSlide();
  }, 10000);   // 10 segundos
}

function stopAutoSlide() {
  if (slideTimer) {
    clearInterval(slideTimer);
    slideTimer = null;
  }
}

/* Cambio de categoría con flechas */
function changeCategory(step) {
  const idx = portfolioCategories.indexOf(currentCategory);
  if (idx === -1) return;
  const newIndex = (idx + step + portfolioCategories.length) % portfolioCategories.length;
  currentCategory = portfolioCategories[newIndex];
  currentSlide = 0;
  renderModalSlide();
  startAutoSlide();
}

/* Eventos de los cuadros en PORTAFOLIO */
document.querySelectorAll('.work-box').forEach(box => {
  box.addEventListener('click', () => {
    const cat = box.dataset.category;
    if (cat && portfolioData[cat]) {
      openPortfolioModal(cat);
    }
  });
});

/* Eventos de cierre y flechas */
btnClose.addEventListener('click', closePortfolioModal);
backdropEl.addEventListener('click', closePortfolioModal);

btnPrevCat.addEventListener('click', () => changeCategory(-1));
btnNextCat.addEventListener('click', () => changeCategory(1));

/* Opcional: cerrar con ESC */
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modalEl.style.display === 'flex') {
    closePortfolioModal();
  }
});


/* ================================
   VISOR DE IMAGEN EN GRANDE
================================ */
// ===============================
// ZOOM SOLO PARA LAS MAIN-IMAGE
// ===============================

// ===============================
// ZOOM SOLO PARA LAS MAIN-IMAGE
// ===============================

function enableImageZoom() {
  const viewer    = document.getElementById("image-viewer");
  const viewerImg = document.getElementById("iv-img");
  const closeBtn  = document.getElementById("iv-close");

  // SOLO las imágenes principales
  document.querySelectorAll(".pm-main-image").forEach(img => {
    // Evita agregar el mismo listener muchas veces
    if (img.dataset.zoomBound === "1") return;
    img.dataset.zoomBound = "1";

    img.style.cursor = "zoom-in";
    img.addEventListener("click", () => {
      viewerImg.src = img.src;
      viewer.style.display = "flex";
    });
  });

  // Cerrar con la X
  closeBtn.onclick = () => {
    viewer.style.display = "none";
  };

  // Cerrar haciendo click fuera de la imagen
  viewer.onclick = (e) => {
    if (e.target === viewer) {
      viewer.style.display = "none";
    }
  };

  // Cerrar con ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      viewer.style.display = "none";
    }
  });
}
