
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
  const main = document.getElementById('index');
  setTimeout(() => {
    main.classList.add('visible');
  }, 2); // pequeño delay para asegurar render previo a transición
});

// OPCIONES NAVEGADOR
// document.addEventListener("DOMContentLoaded", () => {
//   const nav = document.getElementById("mainNav");
//   const sentinel = document.getElementById("navSentinel");
//   if (!nav || !sentinel) return;

//   const observer = new IntersectionObserver(
//     (entries) => {
//       entries.forEach(entry => {
//         if (!entry.isIntersecting) {
//           // 👇 solo cuando el sentinel "sube" detrás del nav sticky
//           nav.classList.remove("expanded");
//           nav.classList.add("compact");
//         } else {
//           // 👇 cuando volvemos hacia arriba
//           nav.classList.remove("compact");
//           nav.classList.add("expanded");
//         }
//       });
//     },
//     { threshold: 0 }
//   );

//   observer.observe(sentinel);
// });

// #mainNav {
//   transition: padding .8s ease, background-color .8s ease, box-shadow .8s ease;
//   background: rgba(255, 255, 255, 0);
//   /* backdrop-filter: blur(6px); */
//   padding: 0.5rem;
//   transition: background 0.6s ease;

//   overflow: hidden; /* recorta el pseudo-elemento */
//   padding: 2rem;
//   border-radius: 1rem;
 
  
// }


// #mainNav::before {
//   content: "";
//   position: absolute;
//   inset: 0;
//   backdrop-filter: blur(20px);
//   -webkit-backdrop-filter: blur(20px);

//   /* Aquí viene la magia: gradiente como máscara */
//   -webkit-mask-image: linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0));
//   -webkit-mask-repeat: no-repeat;
//   -webkit-mask-size: cover;

//   mask-image: linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0));
//   mask-repeat: no-repeat;
//   mask-size: cover;

//   pointer-events: none; /* no bloquea interacción */
//   z-index: 1;
// }

// #bigLogo {
//   transition: max-width .8s ease, opacity .8s ease;
//   transform-origin: left center;  /* ayuda a que el scale se sienta natural al compactar */
//   z-index: 2;
// }



// .nav-intro,
// #navLinks {
//   transition: opacity .8s ease, transform .8s ease;
//   z-index: 2;
// }

// /* Estado expanded (solo valores) */
// #mainNav.expanded {
//   padding-left: 7em;
//   padding-right: 7em;
//   background: none;
//   box-shadow: none;

//   display: flex;
//   flex-direction: column;
//   align-items: stretch ;
// }

// #mainNav.expanded #bigLogo {
//   max-width: 100vw;
//   /* transform: scale(1); */
//   opacity: 1;
// }

// #mainNav.expanded .logo {
//   width: 100%;
// }

// #mainNav.expanded .nav-intro {
//   opacity: 1;
//   transform: translateY(0);
// }

// #mainNav.expanded #navLinks {
//   opacity: 0;
//   pointer-events: none;
//   transform: translateY(-10em);
  
// }

// /* Estado compact (solo valores) */
// #mainNav.compact {
//   margin: 0;
//   display: flex;
//   flex-direction: row;
//   align-items:flex-start;
//   padding-top: 0.5rem;
//   justify-content: space-between;
//   padding: 3em;
// }

// #mainNav.compact #bigLogo {
//   /* transform: scale(1) translateX(0%); */
//   opacity: 1;
//   max-width: 22vw;
// }

// #mainNav.compact .nav-intro {
//   opacity: 0;
//   transform: translateY(-20px);
// }

// #mainNav.compact #navLinks {
//   opacity: 1;
//   pointer-events: auto;
//   transform: translateY(0em);  
// }



document.addEventListener("DOMContentLoaded", () => {
  const navFloating = document.getElementById("navFloating");
  const sentinel = document.getElementById("navSentinel");

  if (!navFloating || !sentinel) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) {
          navFloating.classList.add("compact");
          navFloating.classList.remove("expanded");
        } else {
          navFloating.classList.add("expanded");
          navFloating.classList.remove("compact");
        }
      });
    },
    { threshold: 0 }
  );

  observer.observe(sentinel);
});