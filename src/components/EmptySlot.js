import React, { useEffect, useState } from 'react';
import MoleHill from '../molehill.png';

const EmptySlot = (props) => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const randSeconds = Math.ceil(Math.random() * 5000);
        const timer = setTimeout(() => {
            setIsVisible(false);
            props.setDisplayMole(false);
        }, randSeconds);

        return () => clearTimeout(timer);
    }, [props.setDisplayMole]);

    return isVisible ? (
        <div className="empty-slot">
            <img src={MoleHill} alt="Empty Mole Hill" />
        </div>
    ) : null;
};

export default EmptySlot;
