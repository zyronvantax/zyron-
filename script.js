const elements = document.querySelectorAll(
  ".badge, .hero h1, .hero-text > p, .hero-actions, .hero-card"
);

elements.forEach((element, index) => {
  element.style.opacity = "0";
  element.style.transform = "translateY(24px)";
  element.style.transition = `
    opacity 0.7s ease ${index * 0.12}s,
    transform 0.7s ease ${index * 0.12}s
  `;
});

window.addEventListener("load", () => {
  elements.forEach((element) => {
    element.style.opacity = "1";
    element.style.transform = "translateY(0)";
  });
});

const revealElements = document.querySelectorAll(
  ".section-heading, .service-card, .about-text, .about-card div, .contact-box"
);

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.15,
  }
);

revealElements.forEach((element, index) => {
  element.classList.add("reveal");
  element.style.transitionDelay = `${index * 0.12}s`;
  revealObserver.observe(element);
});
