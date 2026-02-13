
const burger = document.getElementById("burger");
const nav = document.getElementById("navLinks");
const overlay = document.getElementById("overlay");

burger.onclick = () => {
  burger.classList.toggle("active");
  nav.classList.toggle("active");
  overlay.classList.toggle("active");
};

overlay.onclick = () => {
  burger.classList.remove("active");
  nav.classList.remove("active");
  overlay.classList.remove("active");
};

