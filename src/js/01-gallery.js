
const galleryItems = [
    {
      smallImage: 'https://images.pexels.com/photos/1619317/pexels-photo-1619317.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      largeImage: 'https://kaikucaffelatte.com/blog/wp-content/uploads/2020/03/shutterstock_510679489-scaled-e1648037045335.jpg',
      description: 'Image 1'
    },
    {
      smallImage: 'https://images.pexels.com/photos/1619317/pexels-photo-1619317.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      largeImage: 'https://images.pexels.com/photos/1619317/pexels-photo-1619317.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      description: 'Image 2'
    },
    {
      smallImage: 'https://images.pexels.com/photos/1619317/pexels-photo-1619317.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      largeImage: 'https://images.pexels.com/photos/1619317/pexels-photo-1619317.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      description: 'Image 3'
    }
  ];
  
  const gallery = document.querySelector('.gallery');
  
  // Crear y renderizar los elementos de la galería
  galleryItems.forEach(item => {
    const listItem = document.createElement('li');
    listItem.classList.add('gallery__item');
  
    const link = document.createElement('a');
    link.classList.add('gallery__link');
    link.href = item.largeImage;
    link.setAttribute('data-source', item.largeImage);
    link.setAttribute('alt', item.description);
  
    const image = document.createElement('img');
    image.classList.add('gallery__image');
    image.src = item.smallImage;
  
    link.appendChild(image);
    listItem.appendChild(link);
    gallery.appendChild(listItem);
  });
  
  // Delegación de eventos a la lista de la galería
  gallery.addEventListener('click', event => {
    event.preventDefault();
  
    if (event.target.tagName === 'IMG') {
      const largeImageURL = event.target.dataset.source;
      const instance = basicLightbox.create(`<img src="${largeImageURL}">`);
      instance.show();
    }
  });
  
  // Cerrar la ventana modal con la tecla Escape
  document.addEventListener('keydown', event => {
    const instance = basicLightbox.getInstance();
  
    if (event.key === 'Escape' && instance.visible()) {
      instance.close();
    }
  });