// navigation bar code

let menulist = document.querySelector('.menu');
let navbar_slider = document.querySelector('.navbar-slider');

let navabarNo = 1;

menulist.addEventListener("click", () => {
    if (navabarNo == 1) {
        navbar_slider.style.opacity = 1;
        navabarNo++;
    } else {
        navbar_slider.style.opacity = 0;
        navabarNo = 1;
    }

})

// here its end 

// this is image slider 
let container = document.querySelector('.con2');
let right = document.querySelector('.right');
let left = document.querySelector(".left");
let box = document.querySelectorAll('.box');
let sno = 1;
right.addEventListener('click', () => {
    if (sno < box.length) {
        container.style.transform = `translateX(-${sno * 25}%)`;
        sno++;
    }
    else {
        container.style.transform = `translateX(0px)`;
        sno = 1;
    }
})


left.addEventListener('click', () => {
    if (sno > 1) {
        container.style.transform = `translateX(-${(sno - 2) * 25}%)`;
        sno--;
    }
    else {
        container.style.transform = `translateX(-${(box.length - 1) * 25}%)`;
        sno = box.length;
    }
})

// here is the end of image slider function code
