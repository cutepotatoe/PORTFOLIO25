
// ANIMACIÓN INTRO TO INDEX
const loadingcont = document.getElementById('loadingcont');
let hasTransitioned = false; // Para evitar múltiples llamadas

function transitionToIndex() {
  if (hasTransitioned) return;
  hasTransitioned = true;

  loadingcont.classList.add('slide-up');

  setTimeout(() => {
    window.location.href = "home.html";
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


// IMG TRAIL SCRIPT

document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".trail-container");

  const config = {
    imageCount: 35,
    imageLifespan: 900,
    removalDelay: 50,
    mouseThreshold: 100,
    scrollThreshold: 50,
    idleCursorInterval: 300,
    inDuration: 750,
    outDuration: 1000,
    inEasing: "cubic-bezier(.07,.5,.5,1)",
    outEasing: "cubic-bezier(.87, 0, .13, 1)",
  };

  const images = [
    "img/graphics/shine pink.svg",
    "img/graphics/shine black.svg",
    "img/graphics/shine lila.svg",
    "img/snaps/snaps img 1.jpg",
    "img/snaps/snaps img 2.jpg",
    "img/snaps/snaps img 3.jpg",
    "img/snaps/snaps img 4.jpg",
    "img/snaps/snaps img 5.jpg",
    "img/snaps/snaps img 6.jpg",
    "img/snaps/snaps img 7.jpg",
    "img/snaps/snaps img 8.jpg",
    "img/snaps/snaps img 9.jpg",
    "img/snaps/snaps img 10.jpg",
    "img/snaps/snaps img 11.jpg",
    "img/snaps/snaps img 12.jpg",
    "img/snaps/snaps img 13.jpg",
    "img/snaps/snaps img 14.jpg",
    "img/snaps/snaps img 15.jpg",
    "img/snaps/snaps img 16.jpg",
    "img/snaps/snaps img 17.jpg",
    "img/snaps/snaps img 18.jpg",
    "img/snaps/snaps img 19.jpg",
    "img/snaps/snaps img 20.jpg",
    "img/snaps/snaps img 21.jpg",
    "img/snaps/snaps img 22.jpg",
    "img/snaps/snaps img 23.jpg",
    "img/snaps/snaps img 24.jpg",
    "img/snaps/snaps img 25.jpg",
    "img/snaps/snaps img 26.jpg",
    "img/snaps/snaps img 27.jpg",
    "img/snaps/snaps img 28.jpg",
    "img/snaps/snaps img 29.jpg",
    "img/snaps/snaps img 30.jpg",
    "img/snaps/snaps img 31.jpg",
    "img/snaps/snaps img 32.jpg",
    "img/snaps/snaps img 33.jpg",
    "img/snaps/snaps img 34.jpg",
    "img/snaps/snaps img 35.jpg",
    "img/snaps/snaps img 36.jpg",
    "img/snaps/snaps img 37.jpg",
    "img/snaps/snaps img 38.jpg",
    "img/snaps/snaps img 39.jpg",
    "img/snaps/snaps img 40.jpg",
    "img/snaps/snaps img 41.jpg",
    "img/snaps/snaps img 42.jpg",
    "img/snaps/snaps img 43.jpg",
    "img/snaps/snaps img 44.jpg",
    "img/snaps/snaps img 45.jpg",
    "img/snaps/snaps img 46.jpg",
    "img/snaps/snaps img 47.jpg",
    "img/snaps/snaps img 48.jpg",
    "img/snaps/snaps img 49.jpg",
    "img/snaps/snaps img 50.jpg",
    "img/snaps/snaps img 51.jpg",
    "img/snaps/snaps img 52.jpg",
    "img/snaps/snaps img 53.jpg",
    "img/snaps/snaps img 54.jpg",
    "img/snaps/snaps img 55.jpg",
    "img/snaps/snaps img 56.jpg",
    "img/snaps/snaps img 57.jpg",
    "img/snaps/snaps img 58.jpg",
    "img/snaps/snaps img 59.jpg",
    "img/snaps/snaps img 60.jpg",
    "img/snaps/snaps img 61.jpg",
    "img/snaps/snaps img 62.jpg",
    "img/snaps/snaps img 63.jpg",
    "img/snaps/snaps img 64.jpg",
    "img/snaps/snaps img 65.jpg",
    "img/snaps/snaps img 66.jpg",
    "img/snaps/snaps img 67.jpg",
    "img/snaps/snaps img 68.jpg",
    "img/snaps/snaps img 69.jpg",
    "img/snaps/snaps img 70.jpg",
    "img/snaps/snaps img 71.jpg",
    "img/snaps/snaps img 72.jpg",
    "img/snaps/snaps img 73.jpg",
    "img/snaps/snaps img 74.jpg",
    "img/snaps/snaps img 75.jpg",
    "img/snaps/snaps img 76.jpg",
    "img/snaps/snaps img 77.jpg",
  ];
  const trail = [];

  let mouseX = 0,
    mouseY = 0,
    lastMouseX = 0,
    lastMouseY = 0;
  let isMoving = false,
    isCursorInContainer = false;
  let lastRemovalTime = 0,
    lastSteadyImageTime = 0,
    lastScrollTime = 0;
  let isScrolling = false,
    scrollTicking = false;

  const isInContainer = (x, y) => {
    const rect = container.getBoundingClientRect();
    return x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom;
  };

  const setInitialMousePos = (event) => {
    mouseX = event.clientX;
    mouseY = event.clientY;
    lastMouseX = mouseX;
    lastMouseY = mouseY;
    isCursorInContainer = isInContainer(mouseX, mouseY);
    document.removeEventListener("mouseover", setInitialMousePos, false);
  };
  document.addEventListener("mouseover", setInitialMousePos, false);

  const hasMovedEnough = () => {
    const distance = Math.hypot(mouseX - lastMouseX, mouseY - lastMouseY);
    return distance > config.mouseThreshold;
  };

  const createTrailImage = () => {
    if (!isCursorInContainer) return;

    const now = Date.now();

    if (isMoving && hasMovedEnough()) {
      lastMouseX = mouseX;
      lastMouseY = mouseY;
      createImage();
      return;
    }

    if (!isMoving && now - lastSteadyImageTime >= config.idleCursorInterval) {
      lastSteadyImageTime = now;
      createImage();
    }
  };

  const createImage = () => {
    const img = document.createElement("img");
    img.classList.add("trail-img");

    const randomIndex = Math.floor(Math.random() * images.length);
    const rotation = (Math.random() - 0.5) * 50;
    img.src = images[randomIndex];

    const rect = container.getBoundingClientRect();
    const relativeX = mouseX - rect.left;
    const relativeY = mouseY - rect.top;

    img.style.left = `${relativeX}px`;
    img.style.top = `${relativeY}px`;
    img.style.transform = `translate(-50%, -50%) rotate(${rotation}deg) scale(0)`;
    img.style.transition = `transform ${config.inDuration}ms ${config.inEasing}`;

    container.appendChild(img);

    requestAnimationFrame(() => {
      img.style.transform = `translate(-50%, -50%) rotate(${rotation}deg) scale(1)`;
    });

    trail.push({
      element: img,
      rotation,
      removeTime: Date.now() + config.imageLifespan,
    });
  };

  const createScrollTrailImage = () => {
    if (!isCursorInContainer) return;

    lastMouseX += (config.mouseThreshold + 10) * (Math.random() > 0.5 ? 1 : -1);
    lastMouseY += (config.mouseThreshold + 10) * (Math.random() > 0.5 ? 1 : -1);

    createImage();

    lastMouseX = mouseX;
    lastMouseY = mouseY;
  };

  const removeOldImages = () => {
    const now = Date.now();
    if (now - lastRemovalTime < config.removalDelay || trail.length === 0) return;

    const oldestImage = trail[0];
    if (now >= oldestImage.removeTime) {
      const imgToRemove = trail.shift();

      imgToRemove.element.style.transition = `transform ${config.outDuration}ms ${config.outEasing}`;
      imgToRemove.element.style.transform = `translate(-50%, -50%) rotate(${imgToRemove.rotation}deg) scale(0)`;

      lastRemovalTime = now;

      setTimeout(() => {
        if (imgToRemove.element.parentNode) {
          imgToRemove.element.parentNode.removeChild(imgToRemove.element);
        }
      }, config.outDuration);
    }
  };

  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    isCursorInContainer = isInContainer(mouseX, mouseY);

    if (isCursorInContainer) {
      isMoving = true;
      clearTimeout(window.moveTimeout);
      window.moveTimeout = setTimeout(() => {
        isMoving = false;
      }, 100);
    }
  });

  window.addEventListener("scroll", () => {
    isCursorInContainer = isInContainer(mouseX, mouseY);

    if (isCursorInContainer) {
      isMoving = true;
      lastMouseX += (Math.random() - 0.5) * 10;

      clearTimeout(window.scrollTimeout);
      window.scrollTimeout = setTimeout(() => {
        isMoving = false;
      }, 100);
    }
  });

  window.addEventListener("scroll", () => {
    const now = Date.now();
    isScrolling = true;

    if (now - lastScrollTime < config.scrollThreshold) return;
    lastScrollTime = now;

    if (!scrollTicking) {
      requestAnimationFrame(() => {
        if (isScrolling) {
          createScrollTrailImage();
          isScrolling = false;
        }
        scrollTicking = false;
      });
      scrollTicking = true;
    }
  });

  const animate = () => {
    createTrailImage();
    removeOldImages();
    requestAnimationFrame(animate);
  };
  animate();
});


// EFECTO PPARALLAS ILUSTRACIONES CONTACT

document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".parallax-item");

  let targetX = 0, targetY = 0;   // posición deseada (según ratón)
  let currentX = 0, currentY = 0; // posición suavizada
  const easing = 0.02; // cuanto más bajo, más suave/inercial

  document.addEventListener("mousemove", (e) => {
    const { innerWidth, innerHeight } = window;
    targetX = (e.clientX / innerWidth - 0.5) * 2; // -1 a 1
    targetY = (e.clientY / innerHeight - 0.5) * 2;
  });

  function animate() {
    // Interpolación suave (lerp)
    currentX += (targetX - currentX) * easing;
    currentY += (targetY - currentY) * easing;

    items.forEach((item) => {
      const depth = item.dataset.depth;
      const moveX = currentX * depth;
      const moveY = currentY * depth;
      item.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });

    requestAnimationFrame(animate);
  }

  animate();
});
