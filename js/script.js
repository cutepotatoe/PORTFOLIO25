
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

