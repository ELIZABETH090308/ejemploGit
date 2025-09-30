// Lista de URLs de imágenes
const imageUrls = [
    'https://picsum.photos/id/1015/800/400',
    'https://picsum.photos/id/1025/800/400',
    'https://picsum.photos/id/1035/800/400',
    'https://picsum.photos/id/1045/800/400'
  ];
  
  const carouselImages = document.getElementById('carouselImages');
  
  // Crear y añadir imágenes al carrusel
  imageUrls.forEach(url => {
    const img = document.createElement('img');
    img.src = url;
    carouselImages.appendChild(img);
  });
  
  let currentIndex = 0;
  
  function showImage(index) {
    const totalImages = imageUrls.length;
    if (index >= totalImages) currentIndex = 0;
    else if (index < 0) currentIndex = totalImages - 1;
    else currentIndex = index;
  
    const offset = -currentIndex * 100;
    carouselImages.style.transform = `translateX(${offset}%)`;
  }
  
  document.getElementById('prevBtn').addEventListener('click', () => {
    showImage(currentIndex - 1);
  });
  
  document.getElementById('nextBtn').addEventListener('click', () => {
    showImage(currentIndex + 1);
  });
  
  // Mostrar la primera imagen al cargar
  showImage(currentIndex);
  