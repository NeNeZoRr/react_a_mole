import { useEffect } from 'react';
import moleImg from '../mole.png';

function Mole(props) {
  useEffect(() => {
    const baseTimeout = 2000; 
    const randomFactor = Math.random() * 1000;

    const timer = setTimeout(() => {
      props.setDisplayMole(false);
    }, baseTimeout + randomFactor);

    return () => clearTimeout(timer);
  }, [props]);

  return (
    <div>
      <img
        style={{ width: '30vw' }}
        src={moleImg}
        alt="Mole"
        onClick={props.handleClick}
      />
    </div>
  );
}

export default Mole;
