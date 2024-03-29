// sideBar button
function openSide(){
document.getElementById("sideBar").style.width = "40%";
}
function closeSide(){
document.getElementById("sideBar").style.width = "0";
}
// end sideBar button

// SideDrop
var toggleStatus = 1;
function toggleDrop(){
if (toggleStatus == 1){
    document.getElementById("sideDrop").style.height = "auto";
    toggleStatus = 0;
} else if (toggleStatus == 0) {
    document.getElementById("sideDrop").style.height = "0";
    toggleStatus = 1;
}
}

var toggleStatusTwo = 1;
function toggleDropTwo(){
if(toggleStatusTwo == 1){
    document.getElementById("sideDropTwo").style.height = "auto";
    toggleStatusTwo = 0;
}else if (toggleStatusTwo == 0){
    document.getElementById("sideDropTwo").style.height = "0";
    toggleStatusTwo = 1;
}
}
// End SideDrop

// Carousel
const sliders = document.querySelectorAll(".slider");

sliders.forEach((slider, indx) => {
    slider.style.transform = `translateX(${indx * 100}%)`;
});

let curSlider = 0;
let maxSlider = sliders.length - 1;
let containerCarousel = document.querySelector(".carousel");

// autoSlider
window.onload = function (){
    autoSlider = setInterval(function () {
        if (curSlider === maxSlider){
            curSlider = 0;
        } else {
            curSlider++;
        }

        dots.forEach(dot=>{
            dot.classList.remove("dot-active");
          });       
        dots[curSlider].classList.add("dot-active");
        sliders.forEach((slider, indx) => {
            slider.style.transform = `translateX(${100 * (indx - curSlider)}%)`;
        });
    }, 5000);

    containerCarousel.addEventListener("mouseenter", pause);
    containerCarousel.addEventListener("mouseleave", resume);
};

pause = () => {
    clearInterval(autoSlider);
}

resume = () => {
    clearInterval(autoSlider);
    autoSlider = setInterval(function () {
        if (curSlider === maxSlider){
            curSlider = 0;
        } else {
            curSlider++;
        }

        dots.forEach(dot=>{
            dot.classList.remove("dot-active");
          });       
        dots[curSlider].classList.add("dot-active");
        sliders.forEach((slider, indx) => {
            slider.style.transform = `translateX(${100 * (indx - curSlider)}%)`;
        });
    }, 5000);
}

// swipe
containerCarousel.addEventListener('touchstart', handleTouchStart, false);
containerCarousel.addEventListener('touchmove', handleTouchMove, false);

var xDown = null;
var yDown = null;

function getTouches(evt) {
    return evt.touches ||
            evt.originalEvent.touches;
}

function handleTouchStart(evt) {
    const firstTouch = getTouches(evt)[0];
    xDown = firstTouch.clientX;
    yDown = firstTouch.clientY;
}

function handleTouchMove(evt) {
    if (! xDown || !yDown) {
        return;
    }

    var xUp = evt.touches[0].clientX;
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if ( Math.abs( xDiff ) >  Math.abs( yDiff )) {
        if ( xDiff > 0 ) {
            // swipeRight
            if (curSlider === maxSlider){
                curSlider = 0;
            } else {
                curSlider++;
            }

            pause();
            setTimeout(resume, 3000);
        
            dots.forEach(dot=>{
                dot.classList.remove("dot-active");
              });       
            dots[curSlider].classList.add("dot-active");
        
            sliders.forEach((slider, indx) => {
                slider.style.transform = `translateX(${100 * (indx - curSlider)}%)`;
            });
        } else {
            // leftSwipe
            if (curSlider === 0){
                curSlider = maxSlider;
            } else {
                curSlider--;
            }
        
            dots.forEach(dot=>{
                dot.classList.remove("dot-active");
              });       
              dots[curSlider].classList.add("dot-active");
            sliders.forEach((slider, indx) => {
                slider.style.transform = `translateX(${100 * (indx - curSlider)}%)`;
            });
        }
    }
    // resetValue
    xDown = null;
    yDown = null;
}

// nextButton
const nextSlider = document.querySelector(".btn-next");
nextSlider.addEventListener("click", function(){
    if (curSlider === maxSlider){
        curSlider = 0;
    } else {
        curSlider++;
    }

    dots.forEach(dot=>{
        dot.classList.remove("dot-active");
      });       
    dots[curSlider].classList.add("dot-active");

    sliders.forEach((slider, indx) => {
        slider.style.transform = `translateX(${100 * (indx - curSlider)}%)`;
    });
});

// prevButton
const prevSlider = document.querySelector(".btn-prev");
prevSlider.addEventListener("click", function(){
    if (curSlider === 0){
        curSlider = maxSlider;
    } else {
        curSlider--;
    }

    dots.forEach(dot=>{
        dot.classList.remove("dot-active");
      });       
      dots[curSlider].classList.add("dot-active");
    sliders.forEach((slider, indx) => {
        slider.style.transform = `translateX(${100 * (indx - curSlider)}%)`;
    });
});

// dots
const dotContainer=document.querySelector('.dots');
sliders.forEach(slider => {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    dotContainer.appendChild(dot);
});

const dots = document.querySelectorAll(".dot");
dots[curSlider].classList.add("dot-active");
dots.forEach((dot, indx) => {
    dot.addEventListener("click", function(){
        curSlider = indx;
        pause();
        setTimeout(resume, 3000);
        sliders.forEach((slider, indx) => {
            slider.style.transform = `translateX(${100 * (indx - curSlider)}%)`;
        });
        dots.forEach(dot=>{
            dot.classList.remove("dot-active");
        });
        dots[curSlider].classList.add("dot-active");
    })
});

// swipe
// sliders.addEventListener("mousedown", touch);
// sliders.addEventListener("mouseup", release);

// function touch() {
//     clearInterval(autoSlider);
//     sliders.addEventListener("mousemove", function() {
//         if (curSlider === maxSlider){
//             curSlider = 0;
//         } else {
//             curSlider++;
//         }
    
//         dots.forEach(dot=>{
//             dot.classList.remove("dot-active");
//           });       
//         dots[curSlider].classList.add("dot-active");
    
//         sliders.forEach((slider, indx) => {
//             slider.style.transform = `translateX(${100 * (indx - curSlider)}%)`;
//         });
//     });
// }

// function release() {
//     setTimeout(resume, 3000);
// }

// End Carousel

// Content
const newsSliders = document.querySelectorAll(".news-item");
newsSliders.forEach((slider, indx) => {
    slider.style.transform = `translateX(${indx * 110}%)`;
});

let curNews = 0;
let maxNews = newsSliders.length - 3;

// const phone = window.matchMedia("(max-width: 760px)");
// phone.addListener(panjang);
// function panjang(e){
//     if(e.matches){
//         maxNews = newsSliders.length - 1;
//     };
// };

const nextNews = document.querySelector(".news-next");
nextNews.addEventListener("click", function(){
    if (curNews === maxNews){
        curNews = 0;
    } else {
        curNews++;
    }

    newsSliders.forEach((slider, indx) => {
        slider.style.transform = `translateX(${110 * (indx - curNews)}%)`;
    });
});

const prevNews = document.querySelector(".news-prev");
prevNews.addEventListener("click", function(){
    if (curNews === 0){
        curNews = maxNews;
    } else {
        curNews--;
    }

    newsSliders.forEach((slider, indx) => {
        slider.style.transform = `translateX(${110 * (indx - curNews)}%)`;
    });
});

// ContentFigures
const figuresSliders = document.querySelectorAll(".figures-item");
figuresSliders.forEach((slider, indx) => {
    slider.style.transform = `translateX(${indx * 110}%)`;
});

let curFigures = 0;
let maxFigures = newsSliders.length - 3;

// const phone = window.matchMedia("(max-width: 760px)");
// phone.addListener(panjang);
// function panjang(e){
//     if(e.matches){
//         maxNews = newsSliders.length - 1;
//     };
// };

const nextFigures = document.querySelector(".figures-next");
nextFigures.addEventListener("click", function(){
    if (curFigures === maxFigures){
        curFigures = 0;
    } else {
        curFigures++;
    }

    figuresSliders.forEach((slider, indx) => {
        slider.style.transform = `translateX(${110 * (indx - curFigures)}%)`;
    });
});

const prevFigures = document.querySelector(".figures-prev");
prevFigures.addEventListener("click", function(){
    if (curFigures === 0){
        curFigures = maxFigures;
    } else {
        curFigures--;
    }

    figuresSliders.forEach((slider, indx) => {
        slider.style.transform = `translateX(${110 * (indx - curFigures)}%)`;
    });
});
