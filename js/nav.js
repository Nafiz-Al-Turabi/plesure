const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");
const mobileMenu = document.getElementById("mobileMenu");
const overlay = document.getElementById("overlay");
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

menuBtn.addEventListener("click", openMenu);
closeBtn.addEventListener("click", closeMenu);
overlay.addEventListener("click", closeMenu);
