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
  