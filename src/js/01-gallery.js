const galleryContainer = document.querySelector('.gallery');
const galleryItems = [
    {
      smallImage: 'https://pixabay.com/get/g9c375af0c078eb2dbad85fa080b3d4d4b109da93bccda04dc214b89f9b28038f3431066073852129b0e5ee5719b60885_640.jpg',
      largeImage: 'https://pixabay.com/get/g67d778e5128bae99a352561121f379b52e93f887a1f4a90f8c2f362eaf6ea85e2823f226c2afc31bf37b275e18793e9d521b8301519410895bf91bd90662bae3_1280.jpg',
      description: 'Image 1',
    },
    {
      smallImage: 'https://pixabay.com/get/gad1b03c1fdc3d69b0b0f5baf88adceb37437923ee2961067585a3536648746fd4497508bac7d62d1d216692a7d426a9e_640.jpg',
      largeImage: 'https://pixabay.com/get/gca3a5285af7f5241a45c815a395870190c284889205c6c6ac21221515a0d6ce37f4cf4f5d7299630adc87dd7226412d60f05f98340aa31d553f623340948bc40_1280.jpg',
      description: 'Image 2'
    },
    {
      smallImage: 'https://pixabay.com/get/g525ca81bf3f718c75668ce0369bb9091a3b79ce8271b55d868f03975b6c22fa0c6e9b92330533a28d4466aad3813e238_640.jpg',
      largeImage: 'https://pixabay.com/get/g08c02e22b033226d669477e962e0f38030cb9beec85d28fd90f72826e0319cfcceb04517c2ea9e7e255d343c12e4e3438c1d839333a66d4d65df49eb2c4d9aee_1280.jpg',
      description: 'Image 3'
    },
    {
      smallImage: 'https://pixabay.com/get/ge41dc1fc245b88872e5602e84e21e17861b6186f0cf1700f70c79dda830a04db114535ecbdb15e5f521b0a34d151fb94_640.jpg',
      largeImage: 'https://pixabay.com/get/gf7b73ced5f81bdd43184e387435a750642b61b6287798427051bf147a252c65848245eb0276330d4dd577ab98a75b743_1280.jpg',
      description: 'Image 4'
    },
    {
      smallImage: 'https://pixabay.com/get/g611e89cfb3a051de92e368929a6ea1dcb0ab4701ac22fabcb60816ea71952dd4be13f9e4a7adde36fde93541c0afc58b_640.jpg',
      largeImage: 'https://pixabay.com/get/g91ea99be8d77295bf0c5b5538a480706b2d6255cb1164eb1791638fa911c547c6ba0f46fd7ed3a5d3c8d5715239614762fa27248633012e421776e5967c83b18_1280.jpg',
      description: 'Image 5'
    },
    {
      smallImage: 'https://pixabay.com/get/ge9ed6c0029acaa595764163dabf9017f4d842cb8680f637172fd5b104bace11e1072e9feee4b80c517b4c6b6fedd5e1d_640.jpg',
      largeImage: 'https://pixabay.com/get/g21719c02608a0956610498ed70c9ae483f43ef6cdb56a284e912d7a3640d98782467b428bad782367e9b58bd14861a5c2d1956c158d5d21b2d155e05f34b4dcf_1280.jpg',
      description: 'Image 6'
    },
    {
      smallImage: 'https://pixabay.com/get/g81c8f521fc1d9950b407c0b8ca80b5d4a649d4cd55d3d4b10bef9885dfad136ccceddd7cd0f96e1c5e2ec32958b5c2b7_640.jpg',
      largeImage: 'https://pixabay.com/get/gcb644338aedc733737cf51d6877a174ff2aefa483c2e642113a138c5924c59e6fda42c58caad5d3fc9a98c12ab59242690805fd8aa7c1fed14c3582417949201_1280.jpg',
      description: 'Image 7'
    },
    {
      smallImage: 'https://pixabay.com/get/g5292a04f67d274cc68acae27ac8992fd2748391f552ea9cdaa22e8068b23c7bfdec8b3a8a6243894c76904f1c747d895_640.jpg',
      largeImage: 'https://pixabay.com/get/g02d0799c5ca9f7f42aced9146b84e4f0c300755cd9d6959899dc03063ff08e3412c64c582f42e5eec8effcbc4ef2505d6b24ae6982fe5c21bdaa602aa515ebfa_1280.jpg',
      description: 'Image 8'
    },
    {
      smallImage: 'https://pixabay.com/get/gafc6d890bb4638392d90c93c04244335d58daf5817769d5d7dcb7f5e6d10565f0cc3f812d08ff1a310d8023c1fb8753b_640.jpg',
      largeImage: 'https://pixabay.com/get/g1ec053bf52184c78a2aa753427f081f145912c19b646041be489c5d163588ddec0dce985aa07353362d482fec912a77d67a33a7c59cdcb7dbefce5e5b3e001cc_1280.jpg',
      description: 'Image 9'
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