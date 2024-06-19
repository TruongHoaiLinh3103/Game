import React, { useState } from 'react';
import copy from 'copy-to-clipboard';
import { FaCopy } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import { GiCharacter } from "react-icons/gi";
import { FaMap } from "react-icons/fa";
import "../styles/game.scss";
import { useLocation } from 'react-router-dom';
import MapLQ from './MapLQ';
import CharacterLQ from './CharacterLQ';

const Genshin = () => {
    const [mapLQ, setMapLQ] = useState(true)
    const path = useLocation();
    const copyUID = () => {
        if(path.pathname === '/genshin'){
            copy('811317775');
        }else{
            copy('4302483086443633');
        }
        // Copy with options
        // copy('811317775', {
        //     debug: true,
        //     message: 'Press #{key} to copy',
        // });
    }
    return (
        <>
            {path.pathname === '/genshin' && 
                <div className='Genshin'>
                    <div className='GenshinData'>
                        <div className='genAvatarAndUID'>
                            <div className='genAvatarAndUID-Avatar'>
                                <img src='https://i.pinimg.com/originals/06/37/e9/0637e9bc727e0ce261310db9b7c7d41a.jpg' alt="genshin avatar" />
                            </div>
                            <div className='genAvatarAndUID-UID'>
                                <p>UID: 811317775</p>
                            </div>
                            <div className='genAvatarAndUID-Copy' onClick={() => copyUID()}>
                                <FaCopy />
                                <button>Sao chép</button>
                            </div>
                        </div>
                        <div className='GenshinProfile'>
                            <div className='GenshinProfile-Name'>
                                <h3>Yu</h3>
                                <button><CiEdit /></button>
                            </div>
                            <p><i>Đậu phụ rán lung linh</i></p>
                            <div className='GenshinProfile-Rank'>
                                <p><b>Hạng Mạo Hiểm</b></p>
                                <div className='Rank_title'>
                                    <p><b>60</b></p>
                                    <button>!</button>
                                </div>
                            </div>
                            <div className='GenshinProfile-Exp'>
                                <div className='GenshinProfile-Exp_detail'>
                                    <p>Exp Mạo Hiểm</p>
                                    <p>100%</p>
                                </div>
                                <hr></hr>
                            </div>
                            <div className='GenshinProfile-Lever'>
                                <p><b>Cấp Thế Giới</b></p>
                                <div className='Lever-title'>
                                    <p><b>8</b></p>
                                    <button>!</button>
                                </div>
                            </div>
                            <p><b>Ngày 31 tháng 03</b></p>
                        </div>
                    </div>
                    <div className='GenshinMenu'>
                        <div className='GenshinMenu_tab'>Nhân Vật
                            <GiCharacter />
                        </div>
                        <div className='GenshinMenu_tab'>Bản Đồ
                            <FaMap />
                        </div>
                    </div>
                </div>
            }
            {path.pathname === '/aov' &&
                <>
                    <div className='aov'>
                        <div className='aovData'>
                            <div className='aovAvatarAndUID'>
                                <div className='aovAvatarAndUID-Avatar'>
                                    <img src='https://i.pinimg.com/originals/2e/c2/8d/2ec28d4754b4848c040f600bac849ff6.webp' alt="aov avatar" />
                                </div>
                                <div className='aovAvatarAndUID-UID'>
                                    <p>UID: 4302483086443633</p>
                                </div>
                                <div className='aovAvatarAndUID-Copy' onClick={() => copyUID()}>
                                    <FaCopy />
                                    <button>Sao chép</button>
                                </div>
                            </div>
                            <div className='AovProfile'>
                                <div className='AovProfile-Name'>
                                    <h3>Yu</h3>
                                    <button><CiEdit /></button>
                                </div>
                                <p><i>Đậu phụ rán lung linh</i></p>
                                <div className='AovProfile-Rank'>
                                    <p><b>Hạng</b></p>
                                    <div className='Rank_title'>
                                        <p><b>Chiến Tướng</b></p>
                                        <button>!</button>
                                    </div>
                                </div>
                                <div className='AovProfile-Exp'>
                                    <div className='AovProfile-Exp_detail'>
                                        <p>Exp Chiến Đấu</p>
                                        <p>100%</p>
                                    </div>
                                    <hr></hr>
                                </div>
                                <div className='AovProfile-Lever'>
                                    <p><b>Cấp</b></p>
                                    <div className='Lever-title'>
                                        <p><b>30</b></p>
                                        <button>!</button>
                                    </div>
                                </div>
                                <p><b>Ngày 31 tháng 03</b></p>
                            </div>
                        </div>
                        <div className='AovMenu'>
                            <div className='AovMenu_tab' onClick={() => setMapLQ(true)}>Nhân Vật
                                <GiCharacter />
                            </div>
                            <div className='AovMenu_tab' onClick={() => setMapLQ(false)}>Bản Đồ
                                <FaMap />
                            </div>
                        </div>
                    </div>
                    {mapLQ ? <CharacterLQ/> : <MapLQ/>}
                </>
            }
        </>
    );
};

export default Genshin;