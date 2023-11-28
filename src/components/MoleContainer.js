import React, { useState } from 'react';
import Mole from './Mole';
import EmptySlot from './EmptySlot';

function MoleContainer({ score, setScore }) {
    const [displayMole, setDisplayMole] = useState(false);

    const handleMoleClick = () => {
        setScore(prevScore => prevScore + 1);
        setDisplayMole(false);
    };

    const moleOrEmptySlot = displayMole ? (
        <Mole
            setScore={setScore}
            score={score}
            handleClick={handleMoleClick}
        />
    ) : (
        <EmptySlot setDisplayMole={setDisplayMole} />
    );

    return <div className="mole-container">{moleOrEmptySlot}</div>;
}

export default MoleContainer;
