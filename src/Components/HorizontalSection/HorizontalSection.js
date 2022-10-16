import React from 'react';
import '../HorizontalSection/HorizontalSection.css';
import ShopButton from '../ShopButtton/ShopButton';
import { HiChevronRight } from 'react-icons/hi';

const HorizontalSection = (props) => {
  
  return (
    <div className={`container-section ${props.inverted ? 'inverted' : ''}`}>
      <div className='main-image'>
        <img 
          src={require(`../../Images/${props.image}.jpg`)}
          alt={`Img ${props.image}`}/> 
        <div className='floating top'>
          {props.showButton === 'true' ? <ShopButton></ShopButton> : null}
        </div>   
      </div>
      <div className={`container-text ${props.inverted ? 'inverted-text' : ''}`}>
        <img 
          className='product-img' 
          src={require(`../../Images/${props.image} Producto.png`)}
          alt={`Img ${props.image} Producto`}/>
        <p className= 'title-container'>
           <strong>{props.title}</strong>
        </p>
        <div class='text-separator'>
          <hr/>
        </div>
        <p className= 'subtitle-container'> Descripción del producto. <br/> Este es un texto simulado. </p>
        <div className='button-container'>
          <HiChevronRight className='icon-more'></HiChevronRight> 
          <div className='button-container-text'>VER MÁS
          </div> 
        </div>
      </div>
    </div>
  );
}

export default HorizontalSection;