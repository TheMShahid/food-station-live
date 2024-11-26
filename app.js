// setup date
const date = (document.getElementById("date").innerHTML =
  new Date().getFullYear());

// setup nav
const nav = document.getElementById("navbar");
const navBtn = document.getElementById("nav-btn");
const navClose = document.getElementById("nav-close");

// show nav
navBtn.addEventListener("click", function () {
  nav.classList.add("showNave");
});

// close nav
navClose.addEventListener("click", function () {
  nav.classList.remove("showNave");
});
