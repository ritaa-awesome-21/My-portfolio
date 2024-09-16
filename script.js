// Smooth scroll for navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  function showSkills(category) {
    // Hide all skill content
    var contents = document.querySelectorAll('.skill-content');
    contents.forEach(function(content) {
      content.style.display = 'none';
    });
  
    // Show the selected skill content
    var selectedContent = document.getElementById(category);
    if (selectedContent) {
      selectedContent.style.display = 'block';
    }
  }
  
  // Optionally, show no content by default or a specific tab
  document.addEventListener('DOMContentLoaded', function() {
    // Optionally, show the first tab by default
    // showSkills('tech');
  });

  let currentSlide = {
    certifications: 0,
    experiences: 0
  };
  
  function moveToNextSlide(section) {
    const slides = document.querySelectorAll(`#${section} .slide`);
    const totalSlides = slides.length;
    currentSlide[section] = (currentSlide[section] === totalSlides - 1) ? 0 : currentSlide[section] + 1;
    updateSliderPosition(section);
  }
  
  function moveToPrevSlide(section) {
    const slides = document.querySelectorAll(`#${section} .slide`);
    const totalSlides = slides.length;
    currentSlide[section] = (currentSlide[section] === 0) ? totalSlides - 1 : currentSlide[section] - 1;
    updateSliderPosition(section);
  }
  
  function updateSliderPosition(section) {
    const sliderWrapper = document.querySelector(`#${section} .slider-wrapper`);
    const slideWidth = document.querySelector(`#${section} .slide`).clientWidth;
    sliderWrapper.style.transform = `translateX(${-currentSlide[section] * slideWidth}px)`;
  }
  
  