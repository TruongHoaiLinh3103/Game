import React from 'react';
import '../styles/characterlq.scss';
import { AOV } from '../story/AOV';

const CharacterLQ = () => {
    return (
        <div className='CharacterLQ'>
            {AOV.map((item) => {
                return(
                    <div key={item.id} className='CharacterLQ_Char'>
                        <div className='_Char-video'>
                            <video autoPlay loop muted controls>
                                <source src={item.video} type="video/webm; codecs=&quot;vp9&quot;" />
                            </video>
                        </div>
                        <h3 style={{color: "white"}}>{item.name}</h3>
                    </div>
                )
            })}
        </div>
    );
};

export default CharacterLQ;