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
                            <>
                                <div className='-profile_delta'>
                                    <div className='-profile_img' style={{backgroundImage: `url(${item.back})`, backgroundRepeat: "no-repeat"}}>
                                        <img src={item.avatar} alt={item.name} title={item.name}/>
                                    </div>
                                    <div className='-profile_p'>
                                        <h4>{item.name}</h4>
                                        <p>{item.story}</p>
                                    </div>
                                </div>
                                <div className='-profile_skills'>
                                    <h4>Kỹ năng</h4>
                                    <div className='skill-Talents'>
                                        <h5>Kỹ năng thiên phú</h5>
                                        <div className='Talents-box'>
                                            <div className= "-item_skile" style={{backgroundImage: `url(${item.skill1.img})`}}>
                                                <h5>{item.skill1.name}</h5>
                                            </div>
                                            <div className= "-item_skile" style={{backgroundImage: `url(${item.skill2.img})`}}>
                                                <h5>{item.skill2.name}</h5>
                                            </div>
                                            <div className= "-item_skile" style={{backgroundImage: `url(${item.skill3.img})`}}>
                                                <h5>{item.skill3.name}</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='skill-Passives'>
                                        <h5>Kỹ năng bị động</h5>
                                        <div className='Passives-box'>
                                            <div className= "-item_skile" style={{backgroundImage: `url(${item.skill4.img})`}}>
                                                <h5>{item.skill4.name}</h5>
                                            </div>
                                            <div className= "-item_skile" style={{backgroundImage: `url(${item.skill5.img})`}}>
                                                <h5>{item.skill5.name}</h5>
                                            </div>
                                            <div className= "-item_skile" style={{backgroundImage: `url(${item.skill6.img})`}}>
                                                <h5>{item.skill6.name}</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <h4>Cung mệnh</h4>
                                    <div className='skill-Constellations'>
                                        <div className= "-item_skile" style={{backgroundImage: `url(${item.cm1.img})`}}>
                                            <h5>{item.cm1.name}</h5>
                                        </div>
                                        <div className= "-item_skile" style={{backgroundImage: `url(${item.cm2.img})`}}>
                                            <h5>{item.cm2.name}</h5>
                                        </div>
                                        <div className= "-item_skile" style={{backgroundImage: `url(${item.cm3.img})`}}>
                                            <h5>{item.cm3.name}</h5>
                                        </div>
                                        <div className= "-item_skile" style={{backgroundImage: `url(${item.cm4.img})`}}>
                                            <h5>{item.cm4.name}</h5>
                                        </div>
                                        <div className= "-item_skile" style={{backgroundImage: `url(${item.cm5.img})`}}>
                                            <h5>{item.cm5.name}</h5>
                                        </div>
                                        <div className= "-item_skile" style={{backgroundImage: `url(${item.cm6.img})`}}>
                                            <h5>{item.cm6.name}</h5>
                                        </div>
                                    </div>
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