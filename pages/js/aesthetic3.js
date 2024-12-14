// Fetch the JSON data from the specified file
fetch('/pages/json/aesthetic3.json')
  .then(response => response.json())
  .then(data => {
    const galleryContainer = document.querySelector('.gallery-container');
    
    // Loop through each item in the gallery data and create HTML elements
    data.gallery.forEach(item => {
      const galleryItem = document.createElement('div');
      galleryItem.classList.add('gallery-item');
      
      galleryItem.innerHTML = `
        <img src="${item.src}" alt="${item.alt}">
        <div class="image-info">
          <h3 class="image-title">${item.title}</h3>
          <p class="image-description">${item.description}</p>
        </div>
      `;
      
      galleryContainer.appendChild(galleryItem);
    });
  })
  .catch(error => console.error('Error loading gallery data:', error));
