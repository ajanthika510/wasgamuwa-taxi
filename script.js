// script.js – minimal interactivity for carousel and form validation
document.addEventListener('DOMContentLoaded', () => {
  // Carousel functionality
  const track = document.querySelector('.carousel-track');
  const slides = Array.from(track.children);
  const prevBtn = document.querySelector('.carousel-btn.prev');
  const nextBtn = document.querySelector('.carousel-btn.next');
  let currentIndex = 0;

  const updateCarousel = () => {
    const slideWidth = slides[0].getBoundingClientRect().width + parseFloat(getComputedStyle(slides[0]).marginRight);
    track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  };

  prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    }
  });

  nextBtn.addEventListener('click', () => {
    if (currentIndex < slides.length - 1) {
      currentIndex++;
      updateCarousel();
    }
  });

  // Simple form validation
  const form = document.getElementById('booking-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    // Basic HTML5 validation already enforced, just show a thank‑you alert
    alert('Thank you! Your request has been received. We will contact you shortly.');
    form.reset();
  });
});
