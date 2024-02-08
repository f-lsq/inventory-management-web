document.addEventListener("DOMContentLoaded", function () {
  // SCRIPT FOR SIDEBAR TOGGLE
  const menuBtn = document.querySelector("#menuBtn");
  const navbar = document.querySelector("#navbar");

  menuBtn.addEventListener("click", function () {
    navbar.classList.toggle('active')
  });

  // SCRIPT FOR DARKMODE TOGGLE
  // const darkMode = document.querySelector("#darkMode");
  // const body = document.querySelector("body");
  // darkMode.addEventListener("click", function(){
  //   body.classList.toggle("dark-mode");
  // }); 
})