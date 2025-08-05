
// Al hacer scroll por primera vez, baja al contenido y elimina la sección de carga
function onFirstScroll() {
  const loadingSection = document.getElementById('loading-section');

  // Scroll automático a la siguiente sección
  const nextSection = document.getElementById('main-content');
  nextSection.scrollIntoView({ behavior: 'smooth' });

  // Elimina la sección de carga después de moverse
  setTimeout(() => {
    loadingSection.remove();
  }, 2000); // Espera 1s para asegurar que el scroll se complete

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


// SCRIPT PARA NAV BAR INTRO
const transitionLogo = document.getElementById("transitionLogo");
const navbarLogo = document.getElementById("navbarLogo");
const mainHeader = document.getElementById("mainHeader");

let isInNavState = false;

function morphToNavbar() {
    const bigRect = transitionLogo.getBoundingClientRect();
    const smallRect = navbarLogo.getBoundingClientRect();

    const scaleX = smallRect.width / bigRect.width;
    const scaleY = smallRect.height / bigRect.height;
    const translateX = smallRect.left - bigRect.left;
    const translateY = smallRect.top - bigRect.top;

    // Fix logo in place
    transitionLogo.style.position = "fixed";
    transitionLogo.style.top = `${bigRect.top}px`;
    transitionLogo.style.left = `${bigRect.left}px`;
    transitionLogo.style.width = `${bigRect.width}px`;
    transitionLogo.style.height = `${bigRect.height}px`;
    transitionLogo.style.zIndex = "1001";

    requestAnimationFrame(() => {
    transitionLogo.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scaleX}, ${scaleY})`;
    });

    mainHeader.classList.add("visible");
    isInNavState = true;
}

function revertMorph() {
    transitionLogo.style.transform = `translate(0px, 0px) scale(1)`;
    mainHeader.classList.remove("visible");

    setTimeout(() => {
    transitionLogo.style.position = "relative";
    transitionLogo.style.top = "";
    transitionLogo.style.left = "";
    transitionLogo.style.width = "";
    transitionLogo.style.height = "";
    transitionLogo.style.transform = "none";
    }, 800);

    isInNavState = false;
}

// Observe when hero leaves screen
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
    if (!entry.isIntersecting && !isInNavState) {
        morphToNavbar();
    } else if (entry.isIntersecting && isInNavState) {
        revertMorph();
    }
    });
}, { threshold: 0.1 });

observer.observe(document.getElementById("hero"));