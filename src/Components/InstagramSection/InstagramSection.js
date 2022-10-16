import '../InstagramSection/InstagramSection.css';
import Reel from '../Reel/Reel';
import Inst1 from '../../Images/Inst1.jpg';
import Inst2 from '../../Images/Inst2.jpg';
import Inst3 from '../../Images/Inst3.jpg';
import Inst4 from '../../Images/Inst4.jpg';
import Inst5 from '../../Images/Inst5.jpg';
import Inst6 from '../../Images/Inst6.jpg';

const InstagramSection = () => {
  const fila1= [Inst1, Inst2, Inst3];
  const fila2= [Inst4, Inst5, Inst6];

  return (
    <div className='ig-section-container'>
      <div className="ig-text-container">
        <p className="ig-subtitle">INSTAGRAM</p>
        <p className="ig-title">#ESPUFI</p>
      </div>
      <div className="ig-photos-container">
          <Reel images={fila1}></Reel>
          <Reel images={fila2}></Reel>
      </div>
    </div>
  );
}

export default InstagramSection;