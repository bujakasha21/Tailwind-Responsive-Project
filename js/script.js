const hamburgerMenu = document.getElementById("menu-btn");
const btn = document.getElementById("menu");

hamburgerMenu.addEventListener("click", () => {
  hamburgerMenu.classList.toggle("open");
  btn.classList.toggle("flex");
  btn.classList.toggle("hidden");
});
