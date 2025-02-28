// Slideshow Functionality
let slideIndex = 1;
showSlides(slideIndex);

// Next/Previous Controls
function changeSlide(n) {
  showSlides(slideIndex += n);
}

// Thumbnail/Dot Controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let slides = document.querySelectorAll(".gallery-slide");
  let dots = document.querySelectorAll(".dot");

  if (n > slides.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = slides.length; }

  // Hide all slides
  slides.forEach(slide => {
    slide.style.display = "none";
  });

  // Remove active class from all dots
  dots.forEach(dot => {
    dot.classList.remove("active");
  });

  // Show the current slide and activate the corresponding dot
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].classList.add("active");
}

// Auto-advance slideshow every 5 seconds
setInterval(() => {
  changeSlide(1);
}, 2000);



let images = [
  "url('images/Screenshot 2025-02-27 214122.png')",
  "url('images/Screenshot 2025-02-27 214213.png')",
  "url('images/Screenshot 2025-02-27 214230.png')"
];

let index = 0;

function changeBackground() {
  document.querySelector(".hero").style.backgroundImage = images[index];

  index = (index + 1) % images.length; // Loops back to first image after the last
}

setInterval(changeBackground, 2000); // Change every 2 seconds
