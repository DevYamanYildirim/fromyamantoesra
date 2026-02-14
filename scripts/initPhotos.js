initPhotos();

function initPhotos() {
  const photoCards = document.querySelectorAll('.photo-card');

  let images = [
    './images/download (1).jpeg',
    './images/download (2).jpeg',
    './images/download (3).jpeg',
    './images/download (4).jpeg',
    './images/download (5).jpeg',
    './images/download (6).jpeg',
    './images/download.jpeg',
    './images/esra-1.jpeg',
    './images/esra-2.jpeg',
    './images/esra-3.jpeg',
    './images/esra-4.jpeg',
    './images/esra-5.jpeg',
    './images/esra-6.jpeg',
    './images/esra-7.jpeg',
    './images/esra-8.jpeg',
    './images/esra-9.jpeg',
    './images/esra-10.jpeg',
    './images/esra-11.jpeg',
    './images/esra-12.jpeg',
    './images/esra-13.jpeg',
    './images/images (1).jpeg',
    './images/images (2).jpeg',
    './images/images (3).jpeg',
    './images/images (4).jpeg',
    './images/images (5).jpeg',
    './images/images.jpeg',
  ];

  images = shuffle(images);

  photoCards.forEach((card, index) => {
    const img = document.createElement('img');
    img.src = images[index];
    img.alt = '';

    img.classList.add('photo-img');

    if (!images[index].includes('esra')) {
      img.style.filter = 'brightness(0.5)';
    }

    card.textContent = '';
    card.appendChild(img);
  });
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
