let menuBtn = document.querySelector(".menu-btn");
let ulnav = document.querySelector(".ulnav");

menuBtn.addEventListener("click", function () {
  menuBtn.classList.toggle("active");
  ulnav.classList.toggle("active");
});
