
<<<<<<< HEAD
// this is navabar slider script 
===
let left = document.querySelector(".left");

let right = document.querySelector(".right");

let slider = document.querySelector(".slider");

let image = document.querySelectorAll(".image");

let no = 1;

right.addEventListener("click", () => {
  if (no < image.length) {
    slider.style.transform = `translateX(-${no * 1250}px)`;

    no++;
  } else {
    slider.style.transform = `translateX(0px)`;

    no = 1;
  }
});

left.addEventListener("click", () => {
  if (no > 1) {
    slider.style.transform = `translateX(-${(no - 2) * 1264}px)`;

    no--;
  } else {
    slider.style.transform = `translateX(-${(image.length - 1) * 1264}px)`;

    no = image.length;
  }
});

// here is the end of image slider function code

let info = document.querySelector(".info");
let info2 = document.querySelector(".info2");
let info3 = document.querySelector(".info3");
let info4 = document.querySelector(".info4");


let infoNo = 0;

right.addEventListener('click', () => {
    if (infoNo == 0) {
        info.style.opacity = 0;
        info2.style.opacity = 1;
        infoNo++;
    }
    else if (infoNo == 1) {
        info2.style.opacity = 0;
        info3.style.opacity = 1;
        infoNo++
    }
    else if (infoNo == 2) {
        info3.style.opacity = 0;
        info4.style.opacity = 1;
        infoNo++;
    }
    else {
        info4.style.opacity = 0;
        info.style.opacity = 1;
        infoNo = 0;
    }
})



left.addEventListener('click', () => {
    if (infoNo == 0) {
        info.style.opacity = 0;
        info4.style.opacity = 1;
        infoNo = 3;
    }
    else if (infoNo == 3) {
        info4.style.opacity = 0;
        info3.style.opacity = 1;
        infoNo--;
    }
    else if (infoNo == 2) {
        info3.style.opacity = 0;
        info2.style.opacity = 1;
        infoNo--;
    }
    else {
        info2.style.opacity = 0;
        info.style.opacity = 1;
        infoNo = 0;
    }
})



// navigation bar code
>>>>>>> 47acc633d5f0021cdc0b24e8d77cc51889675d75

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
=======
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
>>>>>>> 47acc633d5f0021cdc0b24e8d77cc51889675d75
