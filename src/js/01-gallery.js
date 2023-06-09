const galleryContainer = document.querySelector('.gallery');
const galleryItems = [
  
  {
    smallImage: 'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',
    largeImage:  'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
      smallImage: 'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
      largeImage: 'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
      description: 'Container Haulage Freight',
    },
    {
      smallImage: 'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
      largeImage: 'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
      description: 'Aerial Beach View',
    },
    {
      smallImage: 'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
      largeImage: 'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
      description: 'Flower Blooms',
    },
    {
      smallImage: 'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
      largeImage: 'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
      description: 'Alpine Mountains',
    },
    {
      smallImage:  'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
      largeImage: 'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
      description: 'Mountain Lake Sailing',
    },
    {
      smallImage:  'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
      largeImage: 'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
      description: 'Alpine Spring Meadows',
    },
    {
      smallImage: 'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
      largeImage: 'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
      description: 'Nature Landscape',
    },
    {
      smallImage: 'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
      largeImage: 'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
      description: 'Lighthouse Coast Sea',
    }
  ];
  
  const gallery = document.querySelector('.gallery');
  
  // Crear y renderizar los elementos de la galería 
  const createGalleryItem = galleryItems.map(
    ({ smallImage, largeImage, description }) =>
      `<div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${smallImage}"
      data-source="${largeImage}"
      alt="${description}"
    />
  </a>
</div>`
  )
  .join('');
galleryContainer.insertAdjacentHTML('beforeend', createGalleryItem);
galleryContainer.addEventListener('click', onOpenModalClick);
  
 // Delegación de eventos a la lista de la galería
function onOpenModalClick(event) {
  event.preventDefault();
  console.log(event.target);
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  const instance = basicLightbox.create(`
    <div class="modal">
        <img src= "${event.target.dataset.source}"/>
    </div>
`);
  instance.show();
  window.addEventListener('keydown', onCloseModalClick);
  instance.element().addEventListener('click', onCloseModalClick);
  function onCloseModalClick(event) {
    if (event.code === 'Escape' || event.target.nodeName === 'IMG') {
      instance.close();
      window.removeEventListener('keydown', onCloseModalClick);
    }
  }
}