import React from 'react';
import './Footer.css';
import { AiFillFacebook, AiFillTwitterCircle, AiFillInstagram } from 'react-icons/ai';
import DataWeb from '../../Images/DATAWEB.jpg';
import Shield from '../../Images/shield.jpg';

const Footer = () => (
<>
  <div className='footer'>
    <p className='main-title-footer'> Pufi </p>
    <div className='main-index-footer'>
      <div className='list-footer'>
        <p> Pufi Rain </p>
        <p> Pufi Puff </p>
        <p> Pufi Cart </p>
        <p> Pufi Nap </p>
      </div>
      <div className='separator-footer'></div>
      <div className='list-footer'>
        <p> Contacto </p>
        <p> Ayuda </p>
        <p> Cómo comprar </p>
        <p> Términos & Condiciones </p>
      </div>
      <div className='separator-footer'></div>
      <div>
        <p className='list-footer'> compra 100% segura</p>
        <div className='container-guarantee'>
          <img className='size-img' src={DataWeb} alt='img' />
          <img className='size-img' src={Shield} alt='img' />
          <p className='purchase-guarantee'> COMPRÁ CON <br/> LA GARANTIA <br/> DE PUFI</p>
        </div>
      </div>
      <div className='separator-footer'></div>
      <div className='social-media'>
        <p className='list-footer'> síguenos en </p>
        <a 
          href='https://www.linkedin.com/in/anac-smith/'>
          <AiFillFacebook className='icon-social-media'></AiFillFacebook >
        </a> 
        <a 
          href='https://www.linkedin.com/in/anac-smith/'>
          <AiFillTwitterCircle className='icon-social-media'></AiFillTwitterCircle>
        </a> 
        <a 
          href='https://www.linkedin.com/in/anac-smith/'> 
          <AiFillInstagram className='icon-social-media'></AiFillInstagram>
        </a>
      </div>
    </div>
  </div>
  <div class='separator-copyright'>
          <hr/>
        </div>
  <p className='copyright-text'> PUFI Copyright 2017 - Todos los derechos reservados </p>
</>
);

export default Footer;