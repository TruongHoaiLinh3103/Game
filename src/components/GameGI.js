import React, { useState } from 'react';
import copy from 'copy-to-clipboard';
import { FaCopy } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import "../styles/game.scss";
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '../redux/action/Login';

const GameGI = () => {
    const [editProfile, setEdProfile] = useState(false);
    const [img, setImg] = useState("https://i.pinimg.com/originals/c8/59/52/c859520d09bfca54fed367c431dab7b5.jpg");
    const [uid, setUID] = useState("811317775");
    const [bio, setBio] = useState("Trăm năm mươi vạn");
    const openEditProfile = () => {
        setEdProfile(true);
        setImg(img);
        setUID(uid);
        setBio(bio);
    }
    const uploadAvatar = (e) => {
        const img = e.target.files[0]
        const reader = new FileReader()
        if (img && img.type.match('image.*')) {
            reader.readAsDataURL(img);
            reader.onloadend = function (e) {
                setImg(reader.result)
            }
        }
    }
    const closeEditProfile = () => {
        setEdProfile(false);
    }
    const copyUID = () => {
        copy('811317775/𝔶𝔲');
    }
    return (
        <>
            <div className='Genshin'>
                <div className='GenshinData'>
                    <div className='genAvatarAndUID'>
                        <div className='genAvatarAndUID-Avatar'>
                            <img src={img} alt="genshin avatar" />
                        </div>
                        <div className='genAvatarAndUID-UID'>
                            <p>{uid}</p>
                        </div>
                        <div className='genAvatarAndUID-Copy' onClick={() => copyUID()}>
                            <FaCopy />
                            <button>Sao chép</button>
                        </div>
                    </div>
                    <div className='GenshinProfile'>
                        <div className='GenshinProfile-Name'>
                            <h3>𝔶𝔲</h3>
                            <button onClick={() => openEditProfile()}><CiEdit /></button>
                        </div>
                        <p><i>{bio}</i></p>
                        <div className='GenshinProfile-Rank'>
                            <p><b>Mạo Hiểm</b></p>
                            <div className='Rank_title'>
                                <p><b>60</b></p>
                                <button>!</button>
                            </div>
                        </div>
                        <div className='GenshinProfile-Exp'>
                            <div className='GenshinProfile-Exp_detail'>
                                <p>Exp</p>
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
            </div>
            {/* Sửa hồ sơ */}
            {editProfile && 
                <div className='Profile-edit' style={{display : editProfile ? "flex" : "none"}}>
                    <div className='Profile-edit_box'>
                        <div className='Profile-edit_box-h'>
                            <p>Sửa hồ sơ</p>
                            <p onClick={() => closeEditProfile()}>X</p>
                        </div>
                        <div className='Profile-edit_box-b'>
                            <label>Ảnh</label>
                            <div className='edit_box-b'>
                                <div className='edit_box-b_img'>
                                    <img src={img} alt='avtar'/>
                                    <label htmlFor='avatar'><i className="far fa-edit"></i></label>
                                    <input type="file" name="avatar" id='avatar' accept='image/png, image/jpeg, image/jpg, image/jfif' onChange={(e) => uploadAvatar(e)}/>
                                </div>
                            </div>
                        </div>
                        <div className='Profile-edit_box-b'>
                            <label>UID</label>
                            <div className='edit_box-b'>
                                <input type='text' disabled defaultValue={uid}/>
                                <span className='edit_box-b_quost'>
                                UID không thể thay đổi
                                </span>
                            </div>
                        </div>
                        <div className='Profile-edit_box-b'>
                            <label>Tài khoản</label>
                            <div className='edit_box-b'>
                                <input type='text' defaultValue="phontranq@gmail.com" disabled/>
                            </div>
                        </div>
                        <div className='Profile-edit_box-b'>
                            <label>Mật khẩu</label>
                            <div className='edit_box-b'>
                                <textarea defaultValue="31032003xyz" minLength={0} maxLength={300} disabled/>
                                <span className='edit_box-b_quost'>{"31032003xyz".length}/300</span>
                            </div>
                        </div>
                        <div className='Profile-edit_box-e'>
                            <div className='edit_box-e_btn'>
                                <button onClick={() => closeEditProfile()}>Thoát</button>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(GameGI);