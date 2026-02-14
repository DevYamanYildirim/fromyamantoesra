initPhotos();

function initPhotos() {
  const photoCards = document.querySelectorAll('.photo-card');

  const images = [
    './images/esra-1.jpg',
    './images/esra-2.jpg',
    './images/esra-3.jpg',
    './images/esra-4.jpg',
    './images/esra-5.jpg',
    './images/esra-6.jpg',
    './images/esra-7.jpg',
    './images/esra-8.jpg',
    './images/esra-9.jpg',
    './images/esra-10.jpg',
    './images/esra-11.jpg',
    './images/esra-12.jpg',
    './images/esra-13.jpg',
  ];

  photoCards.forEach((card) => {
    const randomName = images[Math.floor(Math.random() * images.length)];
    console.log(randomName);

    const img = document.createElement('img');
    img.src = randomName;
    img.alt = '';

    img.style.width = '100%';
    img.style.height = '100%';
    img.style.objectFit = 'cover';

    card.textContent = '';
    card.appendChild(img);
  });
}
