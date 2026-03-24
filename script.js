const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const navAnchors = document.querySelectorAll(".nav-links a");
const revealItems = document.querySelectorAll(".reveal");
const yearNode = document.getElementById("year");
const counterNodes = document.querySelectorAll("[data-counter]");

if (yearNode) {
  yearNode.textContent = String(new Date().getFullYear());
}

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  navAnchors.forEach((anchor) => {
    anchor.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.18,
    rootMargin: "0px 0px -40px 0px",
  }
);

revealItems.forEach((item) => revealObserver.observe(item));

const animateCounter = (node) => {
  const target = Number(node.getAttribute("data-counter"));
  if (!Number.isFinite(target)) {
    return;
  }

  const duration = 1450;
  const start = performance.now();

  const run = (now) => {
    const progress = Math.min((now - start) / duration, 1);
    const value = Math.floor(progress * target);
    node.textContent = String(value);
    if (progress < 1) {
      requestAnimationFrame(run);
    } else {
      node.textContent = String(target);
    }
  };

  requestAnimationFrame(run);
};

const counterObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        counterObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.55,
  }
);

counterNodes.forEach((node) => counterObserver.observe(node));
