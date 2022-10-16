import './Reel.css';

const Reel = (props) => {
  // Retornar tags img de cada imagen proporcionada al componente.
  const reelImgMap = props.images.map( (image, index) => (
    <img className="size-inst" src={image} alt='ig-reel-img' key={index}/>
  ));

  return (
    <figure>
      {reelImgMap}
    </figure>
  );
}

export default Reel;