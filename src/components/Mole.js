import { useEffect } from 'react';
import moleImg from '../mole.png';

function Mole({ setDisplayMole, handleClick }) {
    useEffect(() => {
        const baseTimeout = 2000;
        const randomFactor = Math.random() * 1000;

        const timer = setTimeout(() => {
            setDisplayMole(false);
        }, baseTimeout + randomFactor);

        return () => clearTimeout(timer);
    }, [setDisplayMole]);

    return (
        <div>
            <img
                style={{ width: '30vw' }}
                src={moleImg}
                alt="Mole"
                onClick={handleClick}
            />
        </div>
    );
}

export default Mole;
