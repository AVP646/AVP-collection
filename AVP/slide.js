
// navigation bar code


let menulist = document.querySelector('.menu');
let navbar_slider = document.querySelector('.navbar-slider');

let navabarNo = 1;

menulist.addEventListener("click", () => {
  navbarSlider.style.opacity = navbarSlider.style.opacity === '1' ? '0' : '1';
  navLinks.forEach(link => link.style.display = navbarSlider.style.opacity === '1' ? 'block' : 'none');
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
menulist.addEventListener("click" ,() => {
 if(sno == 1){
     navbar_slider.style.opacity = 1;
     sno++;
 }else{
     navbar_slider.style.opacity = 0; 
     sno = 1;
 }
})


// ct text box


const box1 = document.querySelector('.sp-1');
const box2 = document.querySelector('.sp-2');
const box3 = document.querySelector('.sp-3');

box1.addEventListener('click', () => {
    if (box1.classList.contains('changeColor')) {
        box1.classList.add('changeColor');
        box2.classList.remove('changeColor');
        box3.classList.remove('changeColor');
    } else {
        box1.classList.add('changeColor');
        box2.classList.remove('changeColor');
        box3.classList.remove('changeColor');
    }
});

box2.addEventListener('click', () => {
    if (box2.classList.contains('changeColor')) {
        box2.classList.add('changeColor');
        box1.classList.remove('changeColor');
        box3.classList.remove('changeColor');
    } else {
        box2.classList.add('changeColor');
        box1.classList.remove('changeColor');
        box3.classList.remove('changeColor');
    }
});

box3.addEventListener('click', () => {
    if (box3.classList.contains('changeColor')) {
        box3.classList.add('changeColor');
        box1.classList.remove('changeColor');
        box2.classList.remove('changeColor');
    } else {
        box3.classList.add('changeColor');
        box1.classList.remove('changeColor');
        box2.classList.remove('changeColor');
    }
});
