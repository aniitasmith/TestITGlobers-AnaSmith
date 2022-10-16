import React from 'react';
import NavButton from '../NavButton/NavButton';
import './NavBar.css';
import { GiPillow } from 'react-icons/gi';
import { SlUmbrella, SlBag } from 'react-icons/sl';
import { MdBackpack } from 'react-icons/md';
import { FaChevronDown } from 'react-icons/fa';


const NavBar = (props) => {

  return (
    <div className='nav-bar floating'>
      <h1 className='main-text'> Pufi </h1>
      <div className='main-menu'>
        <NavButton text='Pufi Puff'>
          <GiPillow className='img-menu'></GiPillow>
        </NavButton>
        <div className='separator'></div>
        <NavButton text='Pufi Rain'>
          <SlUmbrella className='img-menu'></SlUmbrella>
        </NavButton>
        <div className='separator'></div>
        <NavButton text='Pufi Cart'>
          <SlBag className='img-menu'></SlBag>
        </NavButton>
        <div className='separator'></div>
        <NavButton text='Pufi Nap'>
          <MdBackpack className='img-menu'></MdBackpack>
        </NavButton>
      </div>
      <div className='main-account'>
        <div className='dropdown'> Mi cuenta
        <FaChevronDown className='icon-down'></FaChevronDown>
        </div>
        <div className='separator-account'></div>
        <div className='dropdown'> Mi compra </div>
      </div>
    </div>
  )

};
export default NavBar;