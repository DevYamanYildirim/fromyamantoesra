initPhotos();
let totalTry = 0;

function initPhotos() {
  const photoCards = document.querySelectorAll('.photo-card');
  const titleDiv = document.getElementById('title');

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

  const visibleImages = images.slice(0, photoCards.length);
  const totalCorrect = visibleImages.filter((src) =>
    src.includes('esra'),
  ).length;
  let correctSelections = 0;

  photoCards.forEach((card, index) => {
    card.classList.remove('locked', 'border-wrong', 'border-true');
    card.classList.add('border');

    const img = document.createElement('img');
    img.src = visibleImages[index];
    img.alt = '';
    img.classList.add('photo-img');

    const svg = document.createElement('img');
    svg.style.opacity = '0';
    svg.classList.add('result-icon');

    if (!visibleImages[index].includes('esra')) {
      img.style.filter = 'brightness(0.5)';
      svg.src = './svg/x-circle.svg';
    } else {
      img.style.filter = '';
      svg.src = './svg/check-circle.svg';
    }

    card.textContent = '';
    card.appendChild(img);
    card.appendChild(svg);

    img.addEventListener('click', () => {
      if (card.classList.contains('locked')) return;
      card.classList.add('locked');

      svg.style.opacity = '1';
      card.classList.remove('border');

      const isEsra = visibleImages[index].includes('esra');

      if (!isEsra) {
        card.classList.add('border-wrong');
        titleDiv.textContent = 'wrong...';
        titleDiv.style.color = 'rgb(255, 0, 0)';
      } else {
        card.classList.add('border-true');
        titleDiv.textContent = 'correct!';
        titleDiv.style.color = 'rgb(34, 197, 94)';

        correctSelections++;

        if (correctSelections === totalCorrect) {
          totalTry++;
          if (totalTry === 3) {
            const photoDiv = document.getElementById('photoDiv');
            titleDiv.textContent = 'you did it!';
            photoDiv.innerHTML = '';
          } else {
            setTimeout(initPhotos, 500);
          }
        }
      }

      titleDiv.classList.remove('animate');
      void titleDiv.offsetWidth;
      titleDiv.classList.add('animate');
    });
  });
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
