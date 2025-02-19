let slidePosition = 0;
const slides = document.getElementsByClassName('carousel-item');
let totalSlides = slides.length;

function nextReview() {
    if (slidePosition == totalSlides - 1) {
        slidePosition = 0; 
    } else {
        slidePosition++;
    }

    updateSlidePosition();
}

function previousReview() {
    if (slidePosition == 0) {
        slidePosition = 0;
    } else {
        slidePosition--;
    }
    
    updateSlidePosition();
}

function updateSlidePosition() {
    for (let slide of slides) {
        slide.classList.remove('visible');
        slide.classList.add('hidden');
    }

    slides[slidePosition].classList.add('visible');
}