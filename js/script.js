// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
const hamburgerMenu = document.querySelector("#hamburger-menu");

// Ketika hamburger menu diklik
hamburgerMenu.addEventListener("click", function (e) {
  e.preventDefault();

  navbarNav.classList.toggle("active");

  console.log("Hamburger diklik!");
});

// Klik di luar sidebar untuk menghilangkan nav
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
