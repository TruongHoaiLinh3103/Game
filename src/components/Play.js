import React, { useState } from 'react';
import Chess from './Chess';
import "../styles/play.scss";
import Joker from './Joker';

const Play = () => {
    const [more, setMore] = useState(true);
    return (
        <div className='play'>
            <Chess Check={more}/>
            <Joker More={setMore}/>
        </div>
    );
};

export default Play;