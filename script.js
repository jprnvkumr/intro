const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");
const header = document.querySelector("header");

// Toggle menu
toggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});

// Close menu on link click
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
  });
});

// Close menu when clicking outside
document.addEventListener("click", (e) => {
  if (!nav.contains(e.target) && !toggle.contains(e.target)) {
    nav.classList.remove("active");
  }
});

// Smooth scroll (header safe)
document.querySelectorAll("nav a").forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));
    const offset = header.offsetHeight;

    window.scrollTo({
      top: target.offsetTop - offset - 10,
      behavior: "smooth"
    });

    // Highlight section
    target.classList.add("highlight");
    setTimeout(() => target.classList.remove("highlight"), 800);
  });
});

// Active section tracking
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - header.offsetHeight - 20;

    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active-link");

    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active-link");
    }
  });
});
