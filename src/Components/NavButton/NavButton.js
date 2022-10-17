import './NavButton.css';

const NavButton = (props) => {
return (
  <div 
    className='nav-button'>
    {props.children}
    <p>{props.text}</p>
  </div>
  ) 
};    

export default NavButton;