
// Al hacer scroll por primera vez, baja al contenido y elimina la sección de carga
function onFirstScroll() {
  const loadingSection = document.getElementById('loading-section');

  // Scroll automático a la siguiente sección
  const nextSection = document.getElementById('main-content');
  nextSection.scrollIntoView({ behavior: 'smooth' });

  // Elimina la sección de carga después de moverse
  setTimeout(() => {
    loadingSection.remove();
  }, 1000); // Espera 1s para asegurar que el scroll se complete

  window.removeEventListener('scroll', onFirstScroll);
}

window.addEventListener('scroll', onFirstScroll, { once: true });



// delay para el video intro logo
window.addEventListener('DOMContentLoaded', () => {
  const video = document.getElementById('bg-video');

  // Espera 2 segundos (2000 ms) y luego reproduce
  setTimeout(() => {
    video.play();
  }, 1500);
});