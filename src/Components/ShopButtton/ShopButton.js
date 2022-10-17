import { useDispatch } from 'react-redux';
import { actions } from '../../store/index';
import './ShopButton.css';

// Incrementa la cantidad de items en el NavBar (Mi compra).
// Despacha una action al store de REDUX que realiza este cambio. 
const ShopButton = () => {
  const dispatch =useDispatch();
  const increment = () => {
    dispatch(actions.increment())};

  return (
    <button className='button-shop' onClick={increment}>SHOP</button>
  )
 };

export default ShopButton;
