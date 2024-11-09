const slides = document.querySelectorAll(".menu-food div");
let slideIndex = 0;
document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider() {
    if (slides.length > 0) {
        showSlides(slideIndex);
        setInterval(nextslide, 3000); 
    }
}

function showSlides(index) {
    slideIndex = index % slides.length;
    slides.forEach(slide => {
        slide.classList.remove("displayslide");
    });

    for (let i = 0; i < 3; i++) {
        const slideToShow = (slideIndex + i) % slides.length;
        slides[slideToShow].classList.add("displayslide");
    }
}

function nextslide() {
    slideIndex ++;
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    showSlides(slideIndex);
}
