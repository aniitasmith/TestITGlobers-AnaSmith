import './NavButton.css';

const NavButton = (props) => {
return (
    <div 
      className='NavButton'>
      {props.children}
      <p>{props.text}</p>
    </div>
    ) 
};    

export default NavButton;