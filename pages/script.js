// Select the content area and navigation buttons
const content = document.querySelector('.content');
const prevButton = document.querySelector('.nav-button:first-child');
const nextButton = document.querySelector('.nav-button:last-child');

// Scroll the content to the left by 150px when the "Previous" button is clicked
prevButton.addEventListener('click', () => {
  content.scrollBy({
    left: -150, // Scroll left by 150px
    behavior: 'smooth' // Smooth scrolling effect
  });
});

// Scroll the content to the right by 150px when the "Next" button is clicked
nextButton.addEventListener('click', () => {
  content.scrollBy({
    left: 150, // Scroll right by 150px
    behavior: 'smooth' // Smooth scrolling effect
  });
});
