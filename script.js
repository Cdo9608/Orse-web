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


const header = document.querySelector('.site-header');
const heroSection = document.querySelector('#home');

function updateHeaderState() {
  if (!header || !heroSection) return;


  const heroBottom = heroSection.getBoundingClientRect().bottom;


  if (heroBottom <= header.offsetHeight + 40) {
    document.body.classList.remove('on-hero');
  } else {
    document.body.classList.add('on-hero');
  }
}


window.addEventListener('load', updateHeaderState);

window.addEventListener('scroll', updateHeaderState);

window.addEventListener('resize', updateHeaderState);


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
        'imgs/branding/branding_4/branding4.2.png',
        'imgs/branding/branding_4/branding4.3.png',
        'imgs/branding/branding_4/branding4.4.png',        
      ]
    }
  ],



  'DiseÃ±o Editorial': [
  
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

      mains: [],

      mockups: [
        'imgs/logos/logo_1.png',
        'imgs/logos/logo_2.jpg',
        'imgs/logos/logo_3.png',
        'imgs/logos/logo_4.jpg',
        'imgs/logos/logo_5.jpg',
        'imgs/logos/logo_6.png',
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

      mains: [],

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



  

  'IlustraciÃ³n': [
    {

      mains: [],

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



  'DiseÃ±o Textil': [
    {

      mains: [],

      mockups: [
        'imgs/textil/textil1.1.png',
        'imgs/textil/textil2.1.png',
        'imgs/textil/textil3.1.png',
        'imgs/textil/textil4.1.png',
        'imgs/textil/textil5.1.png',
        'imgs/textil/textil6.1.png',
        'imgs/textil/textil8.1.png',
        'imgs/textil/textil9.1.png',
        'imgs/textil/textil11.1.png',

        'imgs/textil/textil1.png',
        'imgs/textil/textil2.png',
        'imgs/textil/textil3.png',
        'imgs/textil/textil4.png',
        'imgs/textil/textil5.png',
        'imgs/textil/textil6.png',
        'imgs/textil/textil8.png',
        'imgs/textil/textil9.png',
        'imgs/textil/textil10.png',
        'imgs/textil/textil11.png',
        'imgs/textil/textil12.png'

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


function openPortfolioModal(categoryName) {
  currentCategory = categoryName;
  currentSlide = 0;

  renderModalSlide();
  startAutoSlide();

  modalEl.style.display = 'flex';
}


function closePortfolioModal() {
  modalEl.style.display = 'none';
  stopAutoSlide();
}


function renderModalSlide() {
  const slides = portfolioData[currentCategory];
  if (!slides || !slides.length) return;

  const slide = slides[currentSlide];


  titleEl.textContent = currentCategory;

  const pmBody = document.querySelector('.pm-body');


  pmBody.classList.remove('pm-grid-only');
  mainImagesEl.innerHTML = '';
  mockupsEl.innerHTML = '';


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

    pmBody.classList.add('pm-grid-only');

    slide.mockups.forEach(src => {
      const img = document.createElement('img');
      img.src = src;
      img.className = 'pm-mockup';
      mockupsEl.appendChild(img);
    });
  }



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


  enableImageZoom();
}



function startAutoSlide() {
  stopAutoSlide();
  slideTimer = setInterval(() => {
    const slides = portfolioData[currentCategory];
    if (!slides || !slides.length) return;
    currentSlide = (currentSlide + 1) % slides.length;
    renderModalSlide();
  }, 15000);   
}

function stopAutoSlide() {
  if (slideTimer) {
    clearInterval(slideTimer);
    slideTimer = null;
  }
}


function changeCategory(step) {
  const idx = portfolioCategories.indexOf(currentCategory);
  if (idx === -1) return;
  const newIndex = (idx + step + portfolioCategories.length) % portfolioCategories.length;
  currentCategory = portfolioCategories[newIndex];
  currentSlide = 0;
  renderModalSlide();
  startAutoSlide();
}


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


document.querySelectorAll('.work-box').forEach(box => {
  box.addEventListener('click', () => {
    const cat = box.dataset.category;
    if (cat && portfolioData[cat]) {
      openPortfolioModal(cat);
    }
  });
});


btnClose.addEventListener('click', closePortfolioModal);
backdropEl.addEventListener('click', closePortfolioModal);

btnPrevCat.addEventListener('click', () => changeCategory(-1));
btnNextCat.addEventListener('click', () => changeCategory(1));


document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modalEl.style.display === 'flex') {
    closePortfolioModal();
  }
});



function enableImageZoom() {
  const viewer    = document.getElementById("image-viewer");
  const viewerImg = document.getElementById("iv-img");
  const closeBtn  = document.getElementById("iv-close");

  document.querySelectorAll(".pm-main-image").forEach(img => {

    if (img.dataset.zoomBound === "1") return;
    img.dataset.zoomBound = "1";

    img.style.cursor = "zoom-in";
    img.addEventListener("click", () => {
      viewerImg.src = img.src;
      viewer.style.display = "flex";
    });
  });


  closeBtn.onclick = () => {
    viewer.style.display = "none";
  };


  viewer.onclick = (e) => {
    if (e.target === viewer) {
      viewer.style.display = "none";
    }
  };


  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      viewer.style.display = "none";
    }
  });
}


const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".main-nav a");

function activateMenuOnScroll() {
  let scrollPos = window.scrollY + 150; 

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
  const slides = document.querySelectorAll(".contact-photo");
  const dots = document.querySelectorAll(".slider-dot");
  let currentSlide = 0;
  let sliderInterval;


  function goToSlide(index) {

    slides.forEach(slide => slide.classList.remove("active"));
    dots.forEach(dot => dot.classList.remove("active"));


    slides[index].classList.add("active");
    dots[index].classList.add("active");

    currentSlide = index;
  }


  function nextSlide() {
    let next = (currentSlide + 1) % slides.length;
    goToSlide(next);
  }


  function startAutoSlide() {
    sliderInterval = setInterval(nextSlide, 5000);
  }


  function stopAutoSlide() {
    clearInterval(sliderInterval);
  }


  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      stopAutoSlide();
      goToSlide(index);
      startAutoSlide(); 
    });
  });


  startAutoSlide();

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      stopAutoSlide();
    } else {
      startAutoSlide();
    }
  });
});



document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".contact-form");
  const successMsg = document.getElementById("contact-success");

  if (!form || !successMsg) return;

  form.addEventListener("submit", function () {
    successMsg.style.display = "block";

    setTimeout(() => {
      successMsg.style.display = "none";
    }, 4000);
  });
});




document.addEventListener('DOMContentLoaded', function() {

  function protegerImagenes(imagenes) {
    imagenes.forEach(img => {
      if (img) {

        img.addEventListener('contextmenu', function(e) {
          e.preventDefault();
          return false;
        });
        

        img.addEventListener('dragstart', function(e) {
          e.preventDefault();
          return false;
        });
        

        img.addEventListener('mousedown', function(e) {
          if (e.button === 2) { 
            e.preventDefault();
            return false;
          }
        });
      }
    });
  }


  const contactPhotos = document.querySelectorAll('.contact-photo');
  protegerImagenes(contactPhotos);


  const aboutImage = document.querySelector('.about-image img');
  if (aboutImage) {
    protegerImagenes([aboutImage]);
  }


  const portfolioMainImages = document.querySelectorAll('.pm-main-image');
  const portfolioMockups = document.querySelectorAll('.pm-mockup');
  
  protegerImagenes(portfolioMainImages);
  protegerImagenes(portfolioMockups);


  const observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      if (mutation.addedNodes.length) {
        // Proteger nuevas imÃ¡genes del modal cuando se abra
        const newMainImages = document.querySelectorAll('.pm-main-image');
        const newMockups = document.querySelectorAll('.pm-mockup');
        
        protegerImagenes(newMainImages);
        protegerImagenes(newMockups);
      }
    });
  });


  const modalBody = document.querySelector('.pm-body');
  if (modalBody) {
    observer.observe(modalBody, {
      childList: true,
      subtree: true
    });
  }


  const modalEl = document.getElementById('portfolio-modal');
  if (modalEl) {
    modalEl.addEventListener('click', function() {
      setTimeout(() => {
        const allImages = document.querySelectorAll('.pm-main-image, .pm-mockup');
        protegerImagenes(allImages);
      }, 100);
    });
  }

});





document.addEventListener('DOMContentLoaded', function() {
  
  const carouselItems = document.querySelectorAll('.carousel-track img, .carousel-track video');
  const progressBar = document.querySelector('.carousel-progress-bar');
  const currentCounter = document.querySelector('.carousel-counter .current');
  const totalCounter = document.querySelector('.carousel-counter .total');
  
  if (!carouselItems.length) return;
  
  let currentIndex = 0;
  const totalItems = carouselItems.length;
  const imageDuration = 2000; 
  let progressInterval;
  let slideTimeout;
  let isVideoPlaying = false;
  

  if (totalCounter) {
    totalCounter.textContent = totalItems;
  }
  
  function updateCarousel() {
    carouselItems.forEach(item => {
      item.classList.remove('active');
      if (item.tagName === 'VIDEO') {
        item.pause();
        item.currentTime = 0;
      }
    });
    

    const currentItem = carouselItems[currentIndex];
    currentItem.classList.add('active');
    

    if (currentCounter) {
      currentCounter.textContent = currentIndex + 1;
    }
    

    let duration = imageDuration;
    
    if (currentItem.tagName === 'VIDEO') {
      isVideoPlaying = true;
      currentItem.play();
      

      if (currentItem.duration && !isNaN(currentItem.duration)) {
        duration = currentItem.duration * 1000;
      } else {
        currentItem.addEventListener('loadedmetadata', function() {
          duration = this.duration * 1000;
          startSlideTimer(duration);
        }, { once: true });
        return; 
      }
    } else {
      isVideoPlaying = false;
    }
    
    startSlideTimer(duration);
    startProgress(duration);
  }
  
  function startProgress(duration) {
    let progress = 0;
    const increment = 100 / (duration / 100);
    
    clearInterval(progressInterval);
    
    if (progressBar) {
      progressBar.style.width = '0%';
    }
    
    progressInterval = setInterval(() => {
      progress += increment;
      if (progressBar) {
        progressBar.style.width = Math.min(progress, 100) + '%';
      }
      if (progress >= 100) {
        clearInterval(progressInterval);
      }
    }, 100);
  }
  
  function startSlideTimer(duration) {
    clearTimeout(slideTimeout);
    
    slideTimeout = setTimeout(() => {
      nextSlide();
    }, duration);
  }
  
  function nextSlide() {
    currentIndex = (currentIndex + 1) % totalItems;
    updateCarousel();
  }
  
  function stopCarousel() {
    clearTimeout(slideTimeout);
    clearInterval(progressInterval);
    
    const currentItem = carouselItems[currentIndex];
    if (currentItem && currentItem.tagName === 'VIDEO') {
      currentItem.pause();
    }
  }
  
  function resumeCarousel() {
    const currentItem = carouselItems[currentIndex];
    
    if (currentItem.tagName === 'VIDEO') {
      currentItem.play();
      const remainingTime = (currentItem.duration - currentItem.currentTime) * 1000;
      startSlideTimer(remainingTime);
      startProgress(remainingTime);
    } else {
      startSlideTimer(imageDuration);
      startProgress(imageDuration);
    }
  }
  

  updateCarousel();
  

  const carousel = document.querySelector('.blog-about-carousel');
  if (carousel) {
    carousel.addEventListener('mouseenter', stopCarousel);
    carousel.addEventListener('mouseleave', resumeCarousel);
  }
  
  carouselItems.forEach(item => {
    if (item.tagName === 'VIDEO') {
      item.addEventListener('ended', () => {
        if (item.classList.contains('active')) {
          nextSlide();
        }
      });
    }
  });
  
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      stopCarousel();
    } else {
      resumeCarousel();
    }
  });
  
});




document.addEventListener('DOMContentLoaded', function () {
  const btnVerTodo   = document.querySelector('.blog-about-btn');
  const expModal     = document.getElementById('exp-modal');
  const expClose     = document.querySelector('.exp-modal-close');
  const expBackdrop  = document.querySelector('.exp-modal-backdrop');
  const expGallery   = document.getElementById('exp-gallery');


  const carouselItems = document.querySelectorAll(
    '.blog-about-carousel .carousel-track img, .blog-about-carousel .carousel-track video'
  );

  if (!btnVerTodo || !expModal || !expGallery || !carouselItems.length) return;

  function openExpModal() {

    expGallery.innerHTML = '';

    carouselItems.forEach(item => {
      if (item.tagName === 'IMG') {

        const img = document.createElement('img');
        img.src = item.src;
        img.alt = item.alt || '';
        expGallery.appendChild(img);
      } else if (item.tagName === 'VIDEO') {
       
        const video = document.createElement('video');
        video.controls = true;
        video.muted = false;

        const source = item.querySelector('source');
        if (source) {
          const s = document.createElement('source');
          s.src = source.src;
          s.type = source.type;
          video.appendChild(s);
        } else if (item.src) {
          video.src = item.src;
        }

        expGallery.appendChild(video);
      }
    });

    expModal.style.display = 'flex';
    document.body.style.overflow = 'hidden'; 
  }

  function closeExpModal() {
    expModal.style.display = 'none';
    document.body.style.overflow = '';
  }

  btnVerTodo.addEventListener('click', openExpModal);
  expClose.addEventListener('click', closeExpModal);
  expBackdrop.addEventListener('click', closeExpModal);


  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && expModal.style.display === 'flex') {
      closeExpModal();
    }
  });
});




document.addEventListener('DOMContentLoaded', function() {
  
  const track = document.querySelector('.video-carousel-track');
  const prevBtn = document.querySelector('.video-prev');
  const nextBtn = document.querySelector('.video-next');
  const dots = document.querySelectorAll('.video-dot');
  const items = document.querySelectorAll('.video-item');
  const videos = document.querySelectorAll('.video-item video');
  
  if (!track || !items.length) return;
  
  let currentIndex = 0;
  
  function updateCarousel() {
    const itemWidth = items[0].offsetWidth;
    const offset = currentIndex * itemWidth;
    track.style.transform = `translateX(-${offset}px)`;
    
    dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === currentIndex);
    });
    

    videos.forEach(video => {
      video.pause();
      video.currentTime = 0;
    });
    

    const currentVideo = videos[currentIndex];
    if (currentVideo) {

      
     
      currentVideo.onended = () => {
        nextSlide();
      };
    }
  }
  
  function goToSlide(index) {
    currentIndex = Math.max(0, Math.min(index, items.length - 1));
    updateCarousel();
  }
  
  function nextSlide() {
    if (currentIndex >= items.length - 1) {
      goToSlide(0);
    } else {
      goToSlide(currentIndex + 1);
    }
  }
  
  function prevSlide() {
    if (currentIndex <= 0) {
      goToSlide(items.length - 1);
    } else {
      goToSlide(currentIndex - 1);
    }
  }
  
 
  if (prevBtn) {
    prevBtn.addEventListener('click', prevSlide);
  }
  
  if (nextBtn) {
    nextBtn.addEventListener('click', nextSlide);
  }
  

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      goToSlide(index);
    });
  });
  

  updateCarousel();
  
});



document.addEventListener('DOMContentLoaded', function() {
  const openBtn = document.getElementById('openPoliciesModal');
  const closeBtn = document.getElementById('closePoliciesModal');
  const modal = document.getElementById('policiesModal');

  if (!openBtn || !closeBtn || !modal) return;

  openBtn.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  });

  closeBtn.addEventListener('click', () => {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
});





// Modal Videofolio
document.addEventListener('DOMContentLoaded', function() {
  const openBtn = document.getElementById('openVideofolio');
  const modal = document.getElementById('videofolio-modal');
  const closeBtn = document.querySelector('.vf-close');
  const backdrop = document.querySelector('.vf-backdrop');

  if (!openBtn || !modal || !closeBtn || !backdrop) return;

  function openModal() {
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = '';
    
    // Pausar todos los videos cuando se cierra el modal
    const iframes = modal.querySelectorAll('iframe');
    iframes.forEach(iframe => {
      const src = iframe.src;
      iframe.src = src; // Recarga el iframe para detener el video
    });
  }

  openBtn.addEventListener('click', openModal);
  closeBtn.addEventListener('click', closeModal);
  backdrop.addEventListener('click', closeModal);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'flex') {
      closeModal();
    }
  });
});

