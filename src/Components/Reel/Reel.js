import React from 'react';
import './Reel.css';

function Reel (props) {
  const reelImgMap = props.images.map( (image) => (
    <img className="size-inst" src={image} alt='ig-reel-img'/>
  ));

  return (
    <div>
      {reelImgMap}
    </div>
  );
}

export default Reel;