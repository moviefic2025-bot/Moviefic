window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("intro").style.display = "none";
    document.querySelector("header").style.display = "flex";
  }, 3000); // 3 seconds intro
});

// Toggle mobile nav
const hamburger = document.querySelector(".hamburger");
const mobileNav = document.querySelector(".mobile-nav");

hamburger.addEventListener("click", () => {
  if (mobileNav.style.display === "flex") {
    mobileNav.style.display = "none";
  } else {
    mobileNav.style.display = "flex";
  }
});