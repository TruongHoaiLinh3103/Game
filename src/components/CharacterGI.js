import React, { useState } from 'react';
import {GI} from "../story/GI";
import "../styles/charactergi.scss";

const CharacterGI = () => {
    const [char, setChar] = useState(1);
    return (
        <div className='CharacterGI'>
            <div className='CharacterGI-avatar' >
                {GI.map((item) => {
                    return(
                        <div className={`-avatar_ic ${char === item.id ? "select" : ""}`} onClick={() => setChar(item.id)}>
                            <img src={item.avatar} alt={item.name} key={item.id} title={item.name}/>
                        </div>
                    )
                })}
            </div>
            {GI.map((item) => {
                return(
                    <div key={item.id}>
                        {char === item.id && 
                            <>
                                <div className='CharacterGI-build'>
                                    <img src={item.build} alt={item.name}/>
                                </div>
                                <div className='CharacterGI-build'>
                                    <img src={item.img} alt={item.name}/>
                                </div>
                            </>
                        }
                    </div>
                )
            })}
        </div>
    );
};

export default CharacterGI;