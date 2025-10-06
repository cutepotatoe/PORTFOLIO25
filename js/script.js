
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
    imageLifespan: 750,
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
