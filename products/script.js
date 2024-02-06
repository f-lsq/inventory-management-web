let menuBtn = document.querySelector("#menuBtn");
let navbar = document.querySelector("#navbar");

menuBtn.addEventListener("click", function(){
  navbar.classList.toggle('active')
});