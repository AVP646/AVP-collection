
// navigation bar code

const menulist = document.querySelector(".menu");
const navbarSlider = document.querySelector(".navbar-slider");
const navLinks = document.querySelectorAll("li a");

menulist.addEventListener("click", () => {
  navbarSlider.style.opacity = navbarSlider.style.opacity === "1" ? "0" : "1";
  navLinks.forEach(
    (link) =>
      (link.style.display =
        navbarSlider.style.opacity === "1" ? "block" : "none")
  );
});

// here its end

// this is image slider
let container = document.querySelector(".con2");
let right2 = document.querySelector(".right");
let left2 = document.querySelector(".left");
let box = document.querySelectorAll(".box");
let sno = 1;
right2.addEventListener("click", () => {
  if (sno < box.length) {
    container.style.transform = `translateX(-${sno * 25}%)`;
    sno++;
  } else {
    container.style.transform = `translateX(0px)`;
    sno = 1;
  }
});

left2.addEventListener("click", () => {
  if (sno > 1) {
    container.style.transform = `translateX(-${(sno - 2) * 25}%)`;
    sno--;
  } else {
    container.style.transform = `translateX(-${(box.length - 1) * 25}%)`;
    sno = box.length;
  }
});

// here is the end of image slider function code
menulist.addEventListener("click", () => {
  if (sno == 1) {
    navbar_slider.style.opacity = 1;
    sno++;
  } else {
    navbar_slider.style.opacity = 0;
    sno = 1;
  }
});

// ct text box
const boxes = document.querySelectorAll(".sp-1, .sp-2, .sp-3");

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    boxes.forEach((otherBox) => {
      otherBox.classList.remove("changeColor");
    });
    box.classList.add("changeColor");
  });
});



// watch items code 

let back = document.querySelector('#back');
let next = document.querySelector('#next');
let img = document.querySelector('.gallery');

img.addEventListener("wheel" ,(evt) =>{
  evt.preventDefault();
  img.scrollLeft += evt.deltaY;
});

next.addEventListener("click" ,()=>{
  img.style.scrollBehavior = "smooth";
  img.scrollLeft += 640;
});


back.addEventListener("click" ,()=>{
  img.style.scrollBehavior = "smooth";
  img.scrollLeft -= 640;
})