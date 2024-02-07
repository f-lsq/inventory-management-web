document.addEventListener("DOMContentLoaded", function () {
  // SCRIPT FOR SIDEBAR TOGGLE
  let menuBtn = document.querySelector("#menuBtn");
  let navbar = document.querySelector("#navbar");

  menuBtn.addEventListener("click", function () {
    navbar.classList.toggle('active')
  });
})