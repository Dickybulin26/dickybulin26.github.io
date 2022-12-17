let btn = document.querySelector(".btn");
let drop = document.querySelector(".drop");
let subMenu = drop.querySelectorAll("a");

//dropdown subMenu
btn.addEventListener("click", () => {
  btn.classList.add("click");
  drop.classList.add("active");
});
 
subMenu.forEach((menu) => {
  menu.addEventListener("click", () => {
    btn.innerHTML = menu.innerHTML;
    drop.classList.remove("active");
    btn.classList.remove("click");
  });
});

//sticky navbar
let nav = document.querySelector("nav");
let pageY = nav.offsetTop;

window.addEventListener("scroll", () => {
  if (window.pageYOffset >= pageY) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
});
