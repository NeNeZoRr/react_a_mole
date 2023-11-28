import React, { useEffect } from 'react';
import MoleHill from '../molehill.png';

const EmptySlot = ({ setDisplayMole }) => {
    useEffect(() => {
        const randSeconds = Math.ceil(Math.random() * 5000);
        const timer = setTimeout(() => {
            setDisplayMole(false);
        }, randSeconds);

        return () => clearTimeout(timer);
    }, [setDisplayMole]); 

    return (
        <div className="empty-slot">
            <img src={MoleHill} alt="Empty Mole Hill" />
        </div>
    );
};

export default EmptySlot;
