import React from 'react';
import './NavButton.css';

function NavButton(props) {
return (
    <div 
      className='NavButton'>
      {props.children}
      <p>{props.text}</p>
    </div>
    ) 
};    

export default NavButton;