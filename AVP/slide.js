
let left = document.querySelector(".left");
let right = document.querySelector(".right");
let slider = document.querySelector(".slider");
let image = document.querySelectorAll(".image");

let no = 1;

right.addEventListener("click", () => {
    if (no < image.length) {
        slider.style.transform = `translateX(-${no * 1250}px)`;
        no++;
    }
    else {
        slider.style.transform = `translateX(0px)`;
        no = 1;
    }

})


left.addEventListener("click", () => {
    if (no > 1) {
        slider.style.transform = `translateX(-${(no - 2) * 1264}px)`;
        no--;
    }
    else {
        slider.style.transform = `translateX(-${(image.length - 1) * 1264}px)`;
        no = image.length;
    }

})

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

let menulist = document.querySelector('.menu');
let navbar_slider = document.querySelector('.navbar-slider');

let sno = 1;

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
