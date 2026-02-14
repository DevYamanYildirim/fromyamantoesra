initPhotos();

function initPhotos() {
  const photoCards = document.querySelectorAll('.photo-card');

  const images = [
    './images/photo1.jpg',
    './images/photo2.jpg',
    './images/photo3.jpg',
  ];

  photoCards.forEach((card) => {
    const randomImage = images[Math.floor(Math.random() * images.length)];

    card.style.backgroundImage = `url(${randomImage})`;
    card.style.backgroundSize = 'cover';
    card.style.backgroundPosition = 'center';
  });
}
