import { useState } from 'react';
import Mole from './Mole';
import EmptySlot from './EmptySlot';

const MoleContainer = ({ setScore, score }) => {
    const [theMole, setTheMole] = useState(false);

    const handleClick = () => {
        setScore(score + 1);
        setTheMole(false);
    };

    const displayMole = theMole ? (
        <Mole setScore={setScore} toggle={setTheMole} handleClick={handleClick} />
    ) : (
        <EmptySlot toggle={setTheMole} />
    );

    return (
        <div style={{ display: 'inline-block', width: '30vw' }}>
            {displayMole}
        </div>
    );
};

export default MoleContainer;
