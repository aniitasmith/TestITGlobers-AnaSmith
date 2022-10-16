import './Header.css';
import Carousel from '../Carousel/Carousel';
import NavBar from '../NavBar/NavBar';
import ShopButton from '../ShopButtton/ShopButton.js'

const Header = () => {
 return (
  <>
    <div className='header'>
      <NavBar></NavBar> 
      <div className='carousel-container'>
        <Carousel></Carousel>
        <div className='text-carousel'>
          <p>ESTAR CÓMODO,</p>
          <p>NUNCA FUE TAN FÁCIL.</p>
          <ShopButton></ShopButton>
        </div>
      </div>
    </div>
  </>
  )
};
export default Header;