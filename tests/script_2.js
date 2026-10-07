let currentIndex = 0;

const track = document.getElementById("track");
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;

function updateCarousel() {
  track.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextSlide() {
  if (currentIndex < totalSlides - 1) {
    currentIndex++;
    updateCarousel();
  }
}

function prevSlide() {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  }
}
