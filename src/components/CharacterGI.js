import React, { useState } from 'react';
import {GI} from "../story/GI";
import "../styles/charactergi.scss";
import UseFetchAOS from '../utils/useFetchAOS';

const CharacterGI = () => {
    const [char, setChar] = useState(1);
    UseFetchAOS()
    return (
        <div className='CharacterGI'>
            <h3 className='CharacterGI-h3'>Genshin Impact</h3>
            <div className='CharacterGI-avatar' data-aos="fade-right">
                {GI.map((item) => {
                    return(
                        <div className={`-avatar_ic ${char === item.id ? "select" : ""}`} onClick={() => setChar(item.id)} key={item.id} style={{backgroundImage: `url(${item.back})`, backgroundRepeat: "no-repeat"}}>
                            <img src={item.avatar} alt={item.name} title={item.name}/>
                        </div>
                    )
                })}
            </div>
            {GI.map((item) => {
                return(
                    <div key={item.id}>
                        {char === item.id && 
                            <div className='CharacterGI-build'>
                                <img src={item.img} alt={item.name} data-aos="zoom-in"/>
                            </div>
                        }
                    </div>
                )
            })}
            {GI.map((item) => {
                return(
                    <div key={item.id} className='CharacterGI-profile'>
                        {char === item.id && 
                            <div className='-profile_delta'>
                                <div className='-profile_img' style={{backgroundImage: `url(${item.back})`, backgroundRepeat: "no-repeat"}}>
                                    <img src={item.avatar} alt={item.name} title={item.name}/>
                                </div>
                                <div className='-profile_p'>
                                    <h4>{item.name}</h4>
                                    <p>{item.story}</p>
                                </div>
                            </div>
                        }
                    </div>
                )
            })}
        </div>
    );
};

export default CharacterGI;