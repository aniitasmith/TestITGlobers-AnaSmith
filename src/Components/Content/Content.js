import React from 'react';
import './Content.css';
import Carousel from '../Carousel/Carousel';
import NavBar from '../NavBar/NavBar';
import HorizontalSection from '../HorizontalSection/HorizontalSection.js';
import ShopButton from '../ShopButtton/ShopButton.js'

const Content = () => {
 return (
  <>
    <div className='content'>
      <NavBar></NavBar> 
      <div className='carousel-container'>
        <Carousel></Carousel>
        <div className='text-carousel'>
          <p> ESTAR CÓMODO, </p>
          <p> NUNCA FUE TAN FÁCIL. </p>
          <ShopButton></ShopButton>
        </div>
      </div>
    </div>
    <HorizontalSection image='Section1' title='Pufi RAIN' showButton='true'> </HorizontalSection>
    <HorizontalSection image='Section2' title='Pufi PUFF' showButton='false' inverted={true}> </HorizontalSection>
    <HorizontalSection image='Section3' title='Pufi CART' showButton='false'> </HorizontalSection>
    <HorizontalSection image='Section4' title='Pufi NAP' showButton='false' inverted={true}> </HorizontalSection>
  </>
  )
  
};
export default Content;