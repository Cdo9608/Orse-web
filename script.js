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
        'imgs/branding/branding_1/poster_teatro.png',
        'imgs/branding/branding_2/equilibra_tu_bienestar.png'
      ],
      mockups: [
        'imgs/branding/branding_1/branding1.1.png',
        'imgs/branding/branding_1/branding1.3.png',
        'imgs/branding/branding_1/branding1.4.png',
        'imgs/branding/branding_2/branding2.1.png',
        'imgs/branding/branding_2/branding2.4.png',
        'imgs/branding/branding_2/branding2.3.png',
      ]
    },
    {
      mains: [
        'imgs/branding/branding_3/evento_aforo.png',
        'imgs/branding/branding_4/segana_coffee.png'
      ],
      mockups: [
        'imgs/branding/branding_3/branding3.2.png',
        'imgs/branding/branding_3/branding3.4.png',
        'imgs/branding/branding_3/branding3.1.png',
        'imgs/branding/branding_4/branding4.1.png',
        'imgs/branding/branding_4/branding4.3.png',
        'imgs/branding/branding_4/branding4.4.png',        
      ]
    }
  ],



  'Diseño Editorial': [
    {
      mains: [
        'imgs/editorial/editorial_1/editorial_1.png',
        'imgs/editorial/editorial_2/editorial_2.png'
      ],
      mockups: [
        'imgs/editorial/editorial_1/editorial_1.1.png',
        'imgs/editorial/editorial_1/editorial_1.2.png',
        'imgs/editorial/editorial_1/editorial_1.3.png',
        'imgs/editorial/editorial_2/editorial_2.1.png',
        'imgs/editorial/editorial_2/editorial_2.2.png',
        'imgs/editorial/editorial_2/editorial_2.3.png',
      ]
    },
    {

      mains: [
        'imgs/editorial/editorial_3/editorial_3.png',
        'imgs/editorial/editorial_4/editorial_4.png'
      ],
      mockups: [
        'imgs/editorial/editorial_3/editorial_3.1.png',
        'imgs/editorial/editorial_3/editorial_3.2.png',
        'imgs/editorial/editorial_3/editorial_3.3.png',
        'imgs/editorial/editorial_4/editorial_4.1.png',
        'imgs/editorial/editorial_4/editorial_4.2.png',
        'imgs/editorial/editorial_4/editorial_4.3.png',
     ]
    },
    {
     mains: [
        'imgs/editorial/editorial_5/editorial_5.png',
        'imgs/editorial/editorial_6/editorial_6.png'
      ],
      mockups: [
        'imgs/editorial/editorial_5/editorial_5.1.png',
        'imgs/editorial/editorial_5/editorial_5.2.png',
        'imgs/editorial/editorial_5/editorial_5.3.png',
        'imgs/editorial/editorial_6/editorial_6.1.png',
        'imgs/editorial/editorial_6/editorial_6.2.png',
        'imgs/editorial/editorial_6/editorial_6.3.png',

     ]
    },
    {
     mains: [
        'imgs/editorial/editorial_7/editorial_7.png'
      ],
      mockups: [
        'imgs/editorial/editorial_7/editorial_7.1.png',
        'imgs/editorial/editorial_7/editorial_7.2.png',
        'imgs/editorial/editorial_7/editorial_7.3.jpg',

      ]
    }
  ],





  'Logos': [
    {
      // sin imágenes grandes
      mains: [],
      // solo cuadritos tipo mockup
      mockups: [
        'imgs/logos/logo_1.png',
        'imgs/logos/logo_2.jpg',
        'imgs/logos/logo_3.png',
        'imgs/logos/logo_4.jpg',
        'imgs/logos/logo_5.jpg',
        'imgs/logos/logo_6.jpg',
        'imgs/logos/logo_7.png',
        'imgs/logos/logo_8.jpg',
        'imgs/logos/logo_9.png',
        'imgs/logos/logo_10.png',
        'imgs/logos/logo_11.png',
        'imgs/logos/logo_12.jpg',
        'imgs/logos/logo_13.png',
        'imgs/logos/logo_14.png',
        'imgs/logos/logo_15.png',

      ]
    }
  ],



  'Social Media': [
    {
      // sin imágenes grandes
      mains: [],
      // solo cuadritos tipo mockup
      mockups: [
        'imgs/social_media/social_media_1.png',
        'imgs/social_media/social_media_2.png',
        'imgs/social_media/social_media_3.png',
        'imgs/social_media/social_media_4.png',
        'imgs/social_media/social_media_5.png',
        'imgs/social_media/social_media_6.png',
        'imgs/social_media/social_media_7.png',
        'imgs/social_media/social_media_8.png',
        'imgs/social_media/social_media_9.png',
        'imgs/social_media/social_media_10.png',
        'imgs/social_media/social_media_11.png',
        'imgs/social_media/social_media_12.png',
        'imgs/social_media/social_media_13.png',
        'imgs/social_media/social_media_14.png',
        'imgs/social_media/social_media_15.png',
        'imgs/social_media/social_media_16.png',
        'imgs/social_media/social_media_17.png',
        'imgs/social_media/social_media_18.png',
        'imgs/social_media/social_media_19.png',
        'imgs/social_media/social_media_20.png',
        'imgs/social_media/social_media_21.jpg',
        'imgs/social_media/social_media_22.png',
        'imgs/social_media/social_media_23.png',
        'imgs/social_media/social_media_24.jpg',
        'imgs/social_media/social_media_25.png',
        'imgs/social_media/social_media_26.jpg'

      ] 
    }
  ],



  

  'Ilustración': [
    {
      // sin imágenes grandes
      mains: [],
      // solo cuadritos tipo mockup
      mockups: [
        'imgs/ilustracion/ilustracion_1.png',
        'imgs/ilustracion/ilustracion_2.png',
        'imgs/ilustracion/ilustracion_3.png',
        'imgs/ilustracion/ilustracion_4.png',
        'imgs/ilustracion/ilustracion_5.png',
        'imgs/ilustracion/ilustracion_6.png',
        'imgs/ilustracion/ilustracion_7.png',
        'imgs/ilustracion/ilustracion_8.png',
        'imgs/ilustracion/ilustracion_9.png',
        'imgs/ilustracion/ilustracion_10.png',
        'imgs/ilustracion/ilustracion_11.png',
        'imgs/ilustracion/ilustracion_12.png',
        'imgs/ilustracion/ilustracion_13.png',
        'imgs/ilustracion/ilustracion_14.png',
        'imgs/ilustracion/ilustracion_15.png',
        'imgs/ilustracion/ilustracion_16.png',
        'imgs/ilustracion/ilustracion_17.png',
        'imgs/ilustracion/ilustracion_18.png',
        'imgs/ilustracion/ilustracion_19.png',
        'imgs/ilustracion/ilustracion_20.png',
        'imgs/ilustracion/ilustracion_21.png',
        'imgs/ilustracion/ilustracion_22.png',
        'imgs/ilustracion/ilustracion_23.png',
        'imgs/ilustracion/ilustracion_24.png',
        'imgs/ilustracion/ilustracion_25.png',
        'imgs/ilustracion/ilustracion_26.png',
        'imgs/ilustracion/ilustracion_27.png',
        'imgs/ilustracion/ilustracion_28.png',
        'imgs/ilustracion/ilustracion_29.png',
        'imgs/ilustracion/ilustracion_30.png'


      ] 
    }
  ],


  'Diseño Textil': [
    {
      mains: [
        'imgs/branding/1.0 Póster teatro.png',
        'imgs/branding/1.0 Póster teatro.png'
      ],
      mockups: [
        'imgs/branding/3.jpg',
        'imgs/branding/1.0 Póster teatro.png'
      ]
    }
  ],


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

  const pmBody = document.querySelector('.pm-body');

  // limpiamos estados anteriores
  pmBody.classList.remove('pm-grid-only');
  mainImagesEl.innerHTML = '';
  mockupsEl.innerHTML = '';

  // Si hay imágenes principales → layout normal
  if (slide.mains && slide.mains.length > 0) {
    slide.mains.forEach(src => {
      const img = document.createElement('img');
      img.src = src;
      img.className = 'pm-main-image';
      mainImagesEl.appendChild(img);
    });

    slide.mockups.forEach(src => {
      const img = document.createElement('img');
      img.src = src;
      img.className = 'pm-mockup';
      mockupsEl.appendChild(img);
    });

  } else {
    // === MODO LOGOS: solo mockups, sin imágenes grandes ===
    pmBody.classList.add('pm-grid-only');

    slide.mockups.forEach(src => {
      const img = document.createElement('img');
      img.src = src;
      img.className = 'pm-mockup';
      mockupsEl.appendChild(img);
    });
  }


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
  }, 15000);   // 10 segundos
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

// ==== Flechas del carrusel (abajo, junto a las barritas) ====
const btnSlidePrev = document.querySelector('.pm-prev-slide');
const btnSlideNext = document.querySelector('.pm-next-slide');

if (btnSlidePrev && btnSlideNext) {
  btnSlidePrev.addEventListener('click', () => {
    const slides = portfolioData[currentCategory];
    if (!slides || !slides.length) return;
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    renderModalSlide();
    startAutoSlide();
  });

  btnSlideNext.addEventListener('click', () => {
    const slides = portfolioData[currentCategory];
    if (!slides || !slides.length) return;
    currentSlide = (currentSlide + 1) % slides.length;
    renderModalSlide();
    startAutoSlide();
  });
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


// ==== SCROLL SPY PARA ILUMINAR MENÚ ====
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".main-nav a");

function activateMenuOnScroll() {
  let scrollPos = window.scrollY + 150; // margen para activar antes

  sections.forEach(section => {
    let top = section.offsetTop;
    let height = section.offsetHeight;
    let id = section.getAttribute("id");

    if (scrollPos >= top && scrollPos < top + height) {
      navLinks.forEach(link => link.classList.remove("active"));
      
      let activeLink = document.querySelector(`.main-nav a[href="#${id}"]`);
      if (activeLink) activeLink.classList.add("active");
    }
  });
}

window.addEventListener("scroll", activateMenuOnScroll);



document.addEventListener("DOMContentLoaded", function () {
  
  const form = document.querySelector(".contact-form");
  const successMsg = document.getElementById("contact-success");

  if (!form || !successMsg) {
    console.log("Formulario o mensaje no encontrado");
    return;
  }

  form.addEventListener("submit", function () {
    successMsg.style.display = "block";

    setTimeout(() => {
      successMsg.style.display = "none";
    }, 4000);
  });

});




