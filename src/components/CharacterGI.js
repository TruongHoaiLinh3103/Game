import React, { useState } from 'react';
import {GI} from "../story/GI";
import "../styles/charactergi.scss";
import '../styles/loadinggi.scss';
import UseFetchAOS from '../utils/useFetchAOS';
import { toast } from 'react-toastify';

const CharacterGI = () => {
    const [char, setChar] = useState(1);
    const [loading, setLoading] = useState(0);
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
                            <>
                                <div className='CharacterGI-build' style={{display : loading === item.id ? "block" : "none"}} onLoad={() => setLoading(item.id)}>
                                    <img src={item.img} alt={item.name} data-aos="zoom-in"/>
                                </div>
                                <div style={{display : loading  !== item.id ? "flex" : "none"}} className='CharacterGI-build_ld'>
                                    <span className="loaderGI"></span>
                                </div>
                            </>
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
                                    <h5>Kỹ năng thiên phú</h5>
                                    <div className='skill-Talents'>
                                        <div className='Talents-box'>
                                            <div onClick={() => toast(item.skill1.text, {autoClose: 20000})} className= "-item_skile" style={{backgroundImage: `url(${item.skill1.img})`}}>
                                                <h5>{item.skill1.name}</h5>
                                            </div>
                                            <div onClick={() => toast(item.skill2.text, {autoClose: 20000})} className= "-item_skile" style={{backgroundImage: `url(${item.skill2.img})`}}>
                                                <h5>{item.skill2.name}</h5>
                                            </div>
                                            <div onClick={() => toast(item.skill3.text, {autoClose: 20000})} className= "-item_skile" style={{backgroundImage: `url(${item.skill3.img})`}}>
                                                <h5>{item.skill3.name}</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <h5>Kỹ năng bị động</h5>
                                    <div className='skill-Passives'>
                                        <div className='Passives-box'>
                                            <div onClick={() => toast(item.skill4.text, {autoClose: 20000})} className= "-item_skile" style={{backgroundImage: `url(${item.skill4.img})`}}>
                                                <h5>{item.skill4.name}</h5>
                                            </div>
                                            <div onClick={() => toast(item.skill5.text, {autoClose: 20000})} className= "-item_skile" style={{backgroundImage: `url(${item.skill5.img})`}}>
                                                <h5>{item.skill5.name}</h5>
                                            </div>
                                            <div onClick={() => toast(item.skill6.text, {autoClose: 20000})} className= "-item_skile" style={{backgroundImage: `url(${item.skill6.img})`}}>
                                                <h5>{item.skill6.name}</h5>
                                            </div>
                                            {item.skill7 && <div onClick={() => toast(item.skill7.text, {autoClose: 20000})} className= "-item_skile" style={{backgroundImage: `url(${item.skill7.img})`}}>
                                                <h5>{item.skill7.name}</h5>
                                            </div>}
                                        </div>
                                    </div>
                                    <h4>Cung mệnh</h4>
                                    <div className='skill-Constellations'>
                                        <div className='skill-Constellations-item'>
                                            <div onClick={() => toast(item.cm1.text, {autoClose: 20000})} className= "-item_skile" style={{backgroundImage: `url(${item.cm1.img})`}}>
                                                <h5>{item.cm1.name}</h5>
                                            </div>
                                            <div onClick={() => toast(item.cm2.text, {autoClose: 20000})} className= "-item_skile" style={{backgroundImage: `url(${item.cm2.img})`}}>
                                                <h5>{item.cm2.name}</h5>
                                            </div>
                                            <div onClick={() => toast(item.cm3.text, {autoClose: 20000})} className= "-item_skile" style={{backgroundImage: `url(${item.cm3.img})`}}>
                                                <h5>{item.cm3.name}</h5>
                                            </div>
                                            <div onClick={() => toast(item.cm4.text, {autoClose: 20000})} className= "-item_skile" style={{backgroundImage: `url(${item.cm4.img})`}}>
                                                <h5>{item.cm4.name}</h5>
                                            </div>
                                            <div onClick={() => toast(item.cm5.text, {autoClose: 20000})} className= "-item_skile" style={{backgroundImage: `url(${item.cm5.img})`}}>
                                                <h5>{item.cm5.name}</h5>
                                            </div>
                                            <div onClick={() => toast(item.cm6.text, {autoClose: 20000})} className= "-item_skile" style={{backgroundImage: `url(${item.cm6.img})`}}>
                                                <h5>{item.cm6.name}</h5>
                                            </div>
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