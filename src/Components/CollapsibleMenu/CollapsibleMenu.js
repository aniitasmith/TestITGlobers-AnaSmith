import './CollapsibleMenu.css';
import { GiPillow } from 'react-icons/gi';
import { SlUmbrella, SlBag } from 'react-icons/sl';
import { MdBackpack } from 'react-icons/md';
import { useSelector } from 'react-redux';

const CollapsibleMenu = (props) => {
  const counter = useSelector((state) => state.counter);

  return (
  <ul 
    className='collapsible-menu'>
      <li>
        <GiPillow></GiPillow>
        <span>Pufi Puff</span>
      </li>
      <li>
        <SlUmbrella></SlUmbrella>
        <span>Pufi Rain</span>
      </li>
      <li>
        <SlBag></SlBag>
        <span>Pufi Cart</span>
      </li>
      <li>
        <MdBackpack></MdBackpack>
        <span>Pufi Nap</span>
      </li>
      <li>
        <div className='nav-control'>Mi cuenta
        </div>
      </li>
      <li>
        <div className='nav-control'>
          Mi compra ( {counter} )
        </div>
      </li>
  </ul>
  ) 
};    

export default CollapsibleMenu;