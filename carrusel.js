// carousel.js

// Array de imágenes
const images = ['img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg'];

// Índice actual de la imagen mostrada
let currentIndex = 0;

// Elemento de la imagen del carrusel
const carouselImage = document.getElementById('carousel-image');

// Botones de avanzar y retroceder
const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');

// Función para actualizar la imagen del carrusel
function updateImage() {
    carouselImage.src = images[currentIndex];
}

// Función para avanzar en el carrusel
function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
}

// Función para retroceder en el carrusel
function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
}

// Event listeners para los botones
nextButton.addEventListener('click', nextImage);
prevButton.addEventListener('click', prevImage);

// Inicializa el carrusel con la primera imagen
updateImage();