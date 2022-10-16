import ImageGallery from 'react-image-gallery';
import Carousel1 from '../../Images/Carousel1.jpg';
import Carousel2 from '../../Images/Carousel2.jpg';
import Carousel3 from '../../Images/Carousel3.jpg';

// Preparar las imágenes con la configuracion que ImageGallery necesita.
const images = [
  { srcSet: Carousel1, },
  { srcSet: Carousel2, },
  { srcSet: Carousel3, },
];

const Carousel = () => {
  return (
    <ImageGallery 
      items={images} 
      showFullscreenButton={false} 
      showPlayButton={false}
      showBullets={true}
    />
  );
}

export default Carousel;