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
                            <video loop controls poster={item.poster}>
                                <source src={item.video} type="video/webm; codecs=&quot;vp9&quot;" />
                            </video>
                        </div>
                        <div className='_Char-profile'>
                            <h3>{item.name}</h3>
                            <div className='_Char-profile_Skill'>
                                <p>{item.skill1.name}</p>
                                <div className='_Skill-img'>
                                    <img src={item.skill1.img} alt='skill1'/>
                                </div>
                            </div>
                            <div className='_Char-profile_Skill'>
                                <p>{item.skill2.name}</p>
                                <div className='_Skill-img'>
                                    <img src={item.skill2.img} alt='skill1'/>
                                </div>
                            </div>
                            <div className='_Char-profile_Skill'>
                                <p>{item.skill3.name}</p>
                                <div className='_Skill-img'>
                                    <img src={item.skill3.img} alt='skill1'/>
                                </div>
                            </div>
                            <div className='_Char-profile_Skill'>
                                <p>{item.skill4.name}</p>
                                <div className='_Skill-img'>
                                    <img src={item.skill4.img} alt='skill1'/>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    );
};

export default CharacterLQ;