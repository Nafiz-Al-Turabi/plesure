const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");
const mobileMenu = document.getElementById("mobileMenu");
const overlay = document.getElementById("overlay");
const navbar = document.querySelector("nav");
const body = document.body;

function openMenu() {
  mobileMenu.classList.remove("-translate-x-full");
  overlay.classList.remove("hidden");
  body.classList.add("overflow-hidden"); 
}

function closeMenu() {
  mobileMenu.classList.add("-translate-x-full");
  overlay.classList.add("hidden");
  body.classList.remove("overflow-hidden");
}

// Sticky navbar with animation on scroll
function handleNavbarScroll() {
  if (!navbar) return;
  
  if (window.scrollY > 50) {
    navbar.classList.add("nav-scrolled");
    navbar.classList.remove("nav-top");
  } else {
    navbar.classList.add("nav-top");
    navbar.classList.remove("nav-scrolled");
  }
}

window.addEventListener("scroll", handleNavbarScroll, { passive: true });

if (menuBtn) menuBtn.addEventListener("click", openMenu);
if (closeBtn) closeBtn.addEventListener("click", closeMenu);
if (overlay) overlay.addEventListener("click", closeMenu);
