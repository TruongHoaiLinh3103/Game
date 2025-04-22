import React from 'react';
import Chess from './Chess';
import "../styles/play.scss";
import Joker from './Joker';

const Play = () => {
    return (
        <div className='play'>
            <Chess/>
            <Joker/>
        </div>
    );
};

export default Play;