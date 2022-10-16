import './Footer.css';
import { AiFillFacebook, AiFillTwitterCircle, AiFillInstagram } from 'react-icons/ai';
import DataWeb from '../../Images/DATAWEB.jpg';
import Shield from '../../Images/shield.jpg';

const Footer = () => (
<>
  <footer>
    <p className='logo'>Pufi</p>
    <div className='index'>
      <section>
        <p>Pufi Rain</p>
        <p>Pufi Puff</p>
        <p>Pufi Cart</p>
        <p>Pufi Nap</p>
      </section>
      <span className='footer-separator'></span>
      <section>
        <p>Contacto</p>
        <p>Ayuda</p>
        <p>Cómo comprar</p>
        <p>Términos & Condiciones</p>
      </section>
      <span className='footer-separator'></span>
      <div>
        <section>compra 100% segura</section>
        <div className='warranty-container'>
          <img className='size-img' src={DataWeb} alt='img'/>
          <img className='size-img' src={Shield} alt='img'/>
          <p className='warranty-purchase'>COMPRÁ CON <br/> LA GARANTIA <br/> DE PUFI</p>
        </div>
      </div>
      <span className='footer-separator'></span>
      <span className='social-media'>
        <section className='section'>síguenos en</section>
        <a 
          href='https://www.linkedin.com/in/anac-smith/' target='_blank' rel='noreferrer'>
          <AiFillFacebook className='icon-social-media'></AiFillFacebook >
        </a> 
        <a 
          href='https://www.linkedin.com/in/anac-smith/' target='_blank' rel='noreferrer'>
          <AiFillTwitterCircle className='icon-social-media'></AiFillTwitterCircle>
        </a> 
        <a 
          href='https://www.linkedin.com/in/anac-smith/' target='_blank' rel='noreferrer'> 
          <AiFillInstagram className='icon-social-media'></AiFillInstagram>
        </a>
      </span>
    </div>
  </footer>
  <div className='copyright-section'>
    <hr/>
    <p className='copyright-text'> PUFI Copyright 2017 - Todos los derechos reservados </p>
  </div>
</>
);

export default Footer;