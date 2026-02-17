// public/js/hero-slider.js
let slideIndex = 1;
let autoSlideInterval;

function showSlides(n) {
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");

  if (n > slides.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = slides.length; }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

function plusSlides(n) {
  showSlides(slideIndex += n);
  resetAutoSlide(); // Reset timer on manual navigation
}

function currentSlide(n) {
  showSlides(slideIndex = n);
  resetAutoSlide();
}

function autoSlide() {
  plusSlides(1);
}

function resetAutoSlide() {
  clearInterval(autoSlideInterval);
  autoSlideInterval = setInterval(autoSlide, 5000); // Change image every 5 seconds
}

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  showSlides(slideIndex);
  autoSlideInterval = setInterval(autoSlide, 5000);
});