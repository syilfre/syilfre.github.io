const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const navAnchors = document.querySelectorAll(".nav-links a");
const mediaCards = document.querySelectorAll("[data-youtube-url]");
const yearNode = document.getElementById("year");
const scopeForm = document.getElementById("scopeForm");
const formStatus = document.getElementById("formStatus");
const scopeSummary = document.getElementById("scopeSummary");

if (yearNode) {
  yearNode.textContent = String(new Date().getFullYear());
}

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    document.body.classList.toggle("menu-open", isOpen);
  });

  navAnchors.forEach((anchor) => {
    anchor.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      document.body.classList.remove("menu-open");
    });
  });
}

const sectionLinks = Array.from(navAnchors).filter((anchor) => anchor.hash);
const sections = sectionLinks
  .map((anchor) => document.querySelector(anchor.hash))
  .filter(Boolean);

if (sections.length > 0) {
  const setActiveLink = (id) => {
    sectionLinks.forEach((anchor) => {
      const isActive = anchor.hash === `#${id}`;
      anchor.classList.toggle("active", isActive);
      if (isActive) {
        anchor.setAttribute("aria-current", "page");
      } else {
        anchor.removeAttribute("aria-current");
      }
    });
  };

  const navObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveLink(entry.target.id);
        }
      });
    },
    {
      rootMargin: "-36% 0px -54% 0px",
      threshold: 0,
    }
  );

  sections.forEach((section) => navObserver.observe(section));
}

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

mediaCards.forEach((card) => {
  const videoId = getYouTubeId(card.getAttribute("data-youtube-url"));

  if (videoId) {
    card.style.setProperty("--thumb", `url("https://img.youtube.com/vi/${videoId}/hqdefault.jpg")`);
  }
});

if (scopeForm && formStatus && scopeSummary) {
  scopeForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(scopeForm);
    const summaryLines = [
      "Commission Scope",
      `Name or studio: ${formData.get("name") || ""}`,
      `Discord: ${formData.get("discord") || ""}`,
      `Project type: ${formData.get("projectType") || ""}`,
      `Payment method: ${formData.get("paymentMethod") || ""}`,
      `Budget: ${formData.get("budget") || ""}`,
      `Deadline: ${formData.get("deadline") || ""}`,
      "",
      "Scope and references:",
      formData.get("scope") || "",
    ];

    scopeSummary.value = summaryLines.join("\n");
    scopeSummary.hidden = false;
    scopeSummary.focus();
    scopeSummary.select();
    formStatus.textContent = "Scope summary ready. Send it on Discord for a quote.";
  });
}
