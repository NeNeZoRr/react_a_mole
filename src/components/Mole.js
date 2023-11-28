import { useEffect } from 'react';
import moleImg from '../mole.png';

const Mole = ({ toggle, handleClick }) => {
    useEffect(() => {
        const timer = setTimeout(() => toggle(false), Math.ceil(Math.random() * 10000));
        return () => clearTimeout(timer);
    }, [toggle]);

    return (
        <div>
            <img style={{ width: '30vw' }} src={moleImg} onClick={handleClick} />
        </div>
    );
};

export default Mole;
