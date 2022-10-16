import React from 'react';
import ImageGallery from 'react-image-gallery';
import Carousel1 from '../../Images/Carousel1.jpg';
import Carousel2 from '../../Images/Carousel2.jpg';
import Carousel3 from '../../Images/Carousel3.jpg';

const images = [
  { srcSet: Carousel1, },
  { srcSet: Carousel2, },
  { srcSet: Carousel3, },
];

function Carousel() {
  return (
    <ImageGallery 
      items={images} 
      showFullscreenButton={false} 
      showPlayButton={false} showBullets={true}
  />
  );
}

export default Carousel;