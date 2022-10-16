import './NavBar.css';
import { GiPillow } from 'react-icons/gi';
import { SlUmbrella, SlBag } from 'react-icons/sl';
import { MdBackpack } from 'react-icons/md';
import { FaChevronDown } from 'react-icons/fa';
import NavButton from '../NavButton/NavButton';

const NavBar = () => {
  return (
    <div className='nav floating'>
      <h1 className='main-text'>Pufi</h1>
      <div className='main-menu'>
        <NavButton text='Pufi Puff'>
          <GiPillow className='img-menu'></GiPillow>
        </NavButton>
        <span className='separator'></span>
        <NavButton text='Pufi Rain'>
          <SlUmbrella className='img-menu'></SlUmbrella>
        </NavButton>
        <span className='separator'></span>
        <NavButton text='Pufi Cart'>
          <SlBag className='img-menu'></SlBag>
        </NavButton>
        <span className='separator'></span>
        <NavButton text='Pufi Nap'>
          <MdBackpack className='img-menu'></MdBackpack>
        </NavButton>
      </div>
      <div className='main-account'>
        <div className='nav-control'> Mi cuenta
        <FaChevronDown className='icon-down'></FaChevronDown>
        </div>
        <div className='separator-small'></div>
        <div className='nav-control'> Mi compra </div>
      </div>
    </div>
  )

};
export default NavBar;