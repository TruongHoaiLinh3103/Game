import React from 'react';
import '../styles/characterlq.scss';
import { AOV } from '../story/AOV';
import UseFetchAOS from '../utils/useFetchAOS';

const CharacterLQ = () => {
    UseFetchAOS()
    return (
        <div className='CharacterLQ'>
            {AOV.map((item) => {
                return(
                    <div key={item.id} className='CharacterLQ_Char' data-aos="fade-up" data-aos-anchor-placement="center-bottom">
                        <div className='_Char-video'>
                            <img src={item.poster} alt={item.name}/>
                        </div>
                        <div className='_Char-profile'>
                            <h3>{item.name}</h3>
                            <div className='_Char-profile_Skill'>
                                <div className='_Skill-img'>
                                    <img src={item.skill1.img} alt='skill1'/>
                                </div>
                                <div className='_Skill-img'>
                                    <img src={item.skill2.img} alt='skill2'/>
                                </div>
                                <div className='_Skill-img'>
                                    <img src={item.skill3.img} alt='skill3'/>
                                </div>
                                <div className='_Skill-img'>
                                    <img src={item.skill4.img} alt='skill4'/>
                                </div>
                            </div>
                            {/* <div className='_Char-profile_Skill'>
                                <p>{item.skill1.name}</p>
                                <div className='_Skill-img'>
                                    <img src={item.skill1.img} alt='skill1'/>
                                </div>
                            </div>
                            <div className='_Char-profile_Skill'>
                                <p>{item.skill2.name}</p>
                                <div className='_Skill-img'>
                                    <img src={item.skill2.img} alt='skill2'/>
                                </div>
                            </div>
                            <div className='_Char-profile_Skill'>
                                <p>{item.skill3.name}</p>
                                <div className='_Skill-img'>
                                    <img src={item.skill3.img} alt='skill3'/>
                                </div>
                            </div>
                            <div className='_Char-profile_Skill'>
                                <p>{item.skill4.name}</p>
                                <div className='_Skill-img'>
                                    <img src={item.skill4.img} alt='skill4'/>
                                </div>
                            </div> */}
                        </div>
                    </div>
                )
            })}
        </div>
    );
};

export default CharacterLQ;