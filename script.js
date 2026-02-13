const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("show");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

const navItems = document.querySelectorAll(".nav-links a");
navItems.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("show");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

const aboutSection = document.querySelector("#about");
const aboutLink = document.querySelector('.nav-links a[href="#about"]');

const showAbout = () => {
  if (!aboutSection) {
    return;
  }

  aboutSection.classList.remove("is-hidden");
  aboutSection.setAttribute("aria-hidden", "false");
};

if (aboutLink) {
  aboutLink.addEventListener("click", (event) => {
    event.preventDefault();
    showAbout();
    aboutSection.scrollIntoView({ behavior: "smooth" });
  });
}

