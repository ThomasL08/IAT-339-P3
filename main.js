const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");
const menu = document.querySelector(".nav__menu");

// open nav menu
menuBtn.addEventListener("click", () => {
  menu.style.display = "block";
  closeBtn.style.display = "inline-block";
  menuBtn.style.display = "none";
});

// close nav menu
const closeNav = () => {
  menu.style.display = "none";
  closeBtn.style.display = "none";
  menuBtn.style.display = "inline-block";
};

closeBtn.addEventListener("click", closeNav);

// close nav menu when menu items are clicked

if (window.innerWidth < 1024) {
  document.querySelectorAll(".nav__menu li a").forEach((navItem) => {
    navItem.addEventListener("click", closeNav);
  });
}
// change navbar styles on scroll
window.addEventListener("scroll", () => {
  document
    .querySelector("nav")
    .classList.toggle("window-scroll", window.scrollY > 0);
});
window.addEventListener('load', function() {
  setTimeout(function(){
    var preloader = document.querySelector('.preloader');
    preloader.classList.add('preloader-finish');
    setTimeout(function(){
      preloader.style.display = 'none';
    }, 500); // 0.5 seconds delay before hiding the preloader
  }, 6400); // 5 seconds delay before hiding the preloader
});
