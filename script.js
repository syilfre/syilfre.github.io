const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const navAnchors = document.querySelectorAll(".nav-links a");
const revealItems = document.querySelectorAll(".reveal");
const yearNode = document.getElementById("year");
const counterNodes = document.querySelectorAll("[data-counter]");
const youtubePlayers = document.querySelectorAll("[data-youtube-url]");

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

const getYouTubeId = (url) => {
  if (!url) {
    return null;
  }

  try {
    const parsed = new URL(url);
    const host = parsed.hostname.replace("www.", "");
    const pathParts = parsed.pathname.split("/").filter(Boolean);

    if (host === "youtu.be") {
      return pathParts[0] || null;
    }

    if (host.endsWith("youtube.com")) {
      if (parsed.pathname === "/watch") {
        return parsed.searchParams.get("v");
      }

      if (pathParts[0] === "embed" || pathParts[0] === "shorts") {
        return pathParts[1] || null;
      }
    }
  } catch {
    return null;
  }

  return null;
};

youtubePlayers.forEach((player) => {
  const url = player.getAttribute("data-youtube-url")?.trim();
  const title = player.getAttribute("data-video-title") || "Gameplay video";
  const videoId = getYouTubeId(url);

  if (!url || !videoId) {
    player.classList.add("is-empty");
    return;
  }

  player.style.setProperty("--thumb", `url("https://img.youtube.com/vi/${videoId}/hqdefault.jpg")`);
  player.replaceChildren();

  const button = document.createElement("button");
  button.className = "video-play";
  button.type = "button";
  button.setAttribute("aria-label", `Play ${title}`);

  const icon = document.createElement("span");
  icon.className = "play-icon";
  icon.setAttribute("aria-hidden", "true");

  const label = document.createElement("span");
  label.className = "video-title";
  label.textContent = title;

  button.append(icon, label);

  button.addEventListener("click", () => {
    const iframe = document.createElement("iframe");
    const playerOrigin = window.location.origin && window.location.origin !== "null"
      ? `&origin=${encodeURIComponent(window.location.origin)}`
      : "";

    iframe.title = title;
    iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&playsinline=1${playerOrigin}`;
    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    iframe.referrerPolicy = "strict-origin-when-cross-origin";
    iframe.allowFullscreen = true;

    player.classList.add("is-playing");
    player.replaceChildren(iframe);
  });

  player.append(button);
});
