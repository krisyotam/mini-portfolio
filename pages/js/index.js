fetch('/pages/json/index.json')
.then(response => response.json())
.then(data => {
    const imageRow = document.getElementById('image-row');
    data.images.forEach(image => {
        const imageContainer = document.createElement('div');
        imageContainer.classList.add('image-container');

        imageContainer.innerHTML = `
            <img src="${image.src}" alt="${image.alt}" class="image">
            <a href="${image.link}" class="aesthetic-text">${image.text}</a>
        `;

        imageRow.appendChild(imageContainer);
    });
})
.catch(error => console.error('Error loading images:', error));