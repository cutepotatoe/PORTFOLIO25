
// ANIMACIÓN INTRO TO INDEX
const loadingcont = document.getElementById('loadingcont');
let hasTransitioned = false; // Para evitar múltiples llamadas

function transitionToIndex() {
  if (hasTransitioned) return;
  hasTransitioned = true;

  loadingcont.classList.add('slide-up');

  setTimeout(() => {
    window.location.href = "index.html";
  }, 1000); // igual al CSS
}

// Detectar scroll o swipe
function handleScroll(e) {
  // Para scroll de mouse
  if (e.deltaY > 30) {
    transitionToIndex();
  }
}

// Para touch (móviles)
let touchStartY = null;
function handleTouchStart(e) {
  touchStartY = e.touches[0].clientY;
}

function handleTouchMove(e) {
  if (touchStartY === null) return;
  const currentY = e.touches[0].clientY;
  const diff = touchStartY - currentY;

  if (diff > 30) {
    transitionToIndex();
  }
}

// Listeners
window.addEventListener('wheel', handleScroll, { passive: true });
window.addEventListener('touchstart', handleTouchStart, { passive: true });
window.addEventListener('touchmove', handleTouchMove, { passive: true });




// delay para el video intro logo
window.addEventListener('DOMContentLoaded', () => {
  const video = document.getElementById('bg-video');

  // Espera 2 segundos (2000 ms) y luego reproduce
  if (video) {  // solo corre si existe el video
    setTimeout(() => {
      video.play();
    }, 1500);
  }

});

// INDEX

// SCRIPT PARA ENTRADA INDEX
window.addEventListener('DOMContentLoaded', () => {
  const main = document.getElementById('mainContent');
  setTimeout(() => {
    main.classList.add('visible');
  }, 2); // pequeño delay para asegurar render previo a transición
});

// OPCIONES NAVEGADOR
document.addEventListener("DOMContentLoaded", () => {
  const nav = document.getElementById("mainNav");
  const sentinel = document.getElementById("navSentinel");
  if (!nav || !sentinel) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) {
          // 👇 solo cuando el sentinel "sube" detrás del nav sticky
          nav.classList.remove("expanded");
          nav.classList.add("compact");
        } else {
          // 👇 cuando volvemos hacia arriba
          nav.classList.remove("compact");
          nav.classList.add("expanded");
        }
      });
    },
    { threshold: 0 }
  );

  observer.observe(sentinel);
});


// SCRIPT PARA MENÚ DE SCROLL HORIZONTAL

const scroller = document.getElementById('scroll-menu');

scroller.addEventListener('wheel', (evt) => {
  // Si el mouse está sobre el div, el scroll vertical se convierte en horizontal
  evt.preventDefault();
  scroller.scrollLeft += evt.deltaY; 
});

