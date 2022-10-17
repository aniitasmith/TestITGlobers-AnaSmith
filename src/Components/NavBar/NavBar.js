import { useState } from 'react';
import { useSelector } from 'react-redux';
import './NavBar.css';
import { GiPillow, GiHamburgerMenu } from 'react-icons/gi';
import { SlUmbrella, SlBag } from 'react-icons/sl';
import { MdBackpack } from 'react-icons/md';
import { FaChevronDown } from 'react-icons/fa';
import NavButton from '../NavButton/NavButton';
import CollapsibleMenu from '../CollapsibleMenu/CollapsibleMenu';

const NavBar = () => {
  // Traer el estado del contador desde el store de REDUX.
  const counter = useSelector((state) => state.counter);

  // Muestra/oculta el menu desplegable en la version mobile.
  const [ displayMenu, setDisplayMenu ] = useState(false);

  const handleDisplayMenuClick = () => {
    setDisplayMenu(!displayMenu);
  }

  return (
    <div className='nav floating'>
      <h1 className='main-text'>Pufi</h1>
      <div className='main-menu'>
        <GiHamburgerMenu
          className='img-menu collapsible-menu-button'
          onClick={handleDisplayMenuClick}
        ></GiHamburgerMenu>
        <div className={`menu-${displayMenu ? 'shown' : 'hidden'}`}>
          <CollapsibleMenu></CollapsibleMenu>
        </div>
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
        <div className='nav-control'>Mi cuenta
        <FaChevronDown className='icon-down'></FaChevronDown>
        </div>
        <div className='separator-small'></div>
        <div className='nav-control'>
          Mi compra ( {counter} )
        </div>
      </div>
    </div>
  )

};
export default NavBar;