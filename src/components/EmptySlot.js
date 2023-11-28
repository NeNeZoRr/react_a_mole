import React, { useEffect } from "react";
import MoleHill from '../molehill.png';

const EmptySlot = (props) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            props.toggle(true);
        }, Math.ceil(Math.random() * 5000));

        return () => clearTimeout(timer);
    }, [props]);

    return (
        <div>
            <img style={{ width: '30vw' }} src={MoleHill} alt="MoleHill" />
        </div>
    );
};

export default EmptySlot;
