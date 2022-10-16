import '../HorizontalSection/HorizontalSection.css';
import { HiChevronRight } from 'react-icons/hi';
import ShopButton from '../ShopButtton/ShopButton';

const HorizontalSection = (props) => {
  // Determinar si se debe invertir el orden de los elementos del componente.
  const isInverted = `${(props.inverted ? 'inverted' : '').trimEnd()}`;
  
  return (
    <section className={`container-section ${isInverted}`}>
      <figure className='main-image'>
        <img 
          src={require(`../../Images/${props.image}.jpg`)}
          alt={`Img ${props.image}`}
        />
        <div className='floating top'>
          {props.showButton === 'true' ? <ShopButton></ShopButton> : null}
        </div>   
      </figure>
      <div className={`text-container ${isInverted}`}>
        <img 
          className='product-img' 
          src={require(`../../Images/${props.image} Producto.png`)}
          alt={`Img ${props.image} Producto`}
        />
        <h1 className= 'title-container'>
           <strong>{props.title}</strong>
        </h1>
        <div className='text-separator'>
          <hr/>
        </div>
        <p className= 'subtitle'>
          Descripción del producto. <br/> Este es un texto simulado.
        </p>
        <div className='action-container'>
          <HiChevronRight className='action-icon'></HiChevronRight> 
          <div className='button-text-container'>VER MÁS</div> 
        </div>
      </div>
    </section>
  );
}

export default HorizontalSection;