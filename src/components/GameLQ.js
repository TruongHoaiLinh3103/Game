import React, { useState } from 'react';
import copy from 'copy-to-clipboard';
import { FaCopy } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import "../styles/game.scss";
import axios from 'axios';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '../redux/action/Login';
import { toast } from 'react-toastify';

const GameLQ = (props) => {
    const [editProfile, setEdProfile] = useState(false);
    const [img, setImg] = useState("https://i.pinimg.com/originals/65/7e/9c/657e9c89d676a72f89f89b250dbe8f14.jpg");
    const [uid, setUID] = useState("4302483086443633");
    const [bio, setBio] = useState("Văn tế hội");
    const user = props.dataUser[0].username;
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
    const saveNewProfile = () => {
        const data = {
            img: img,
            bio: bio,
            uid: uid,
            username: user
        }
        axios.post("http://localhost:4000/account", data).then((res) => {
            if(res.data.error){
                toast.error(res.data.error);
            }
        })
        setEdProfile(0)
    }
    const copyUID = () => {
        copy('4302483086443633');
    }
    return (
        <>
            <div className='aov'>
                <div className='aovData'>
                    <div className='aovAvatarAndUID'>
                        <div className='aovAvatarAndUID-Avatar'>
                            <img src={img} alt="aov avatar" />
                        </div>
                        <div className='aovAvatarAndUID-UID'>
                            <p>{uid}</p>
                        </div>
                        <div className='aovAvatarAndUID-Copy' onClick={() => copyUID()}>
                            <FaCopy />
                            <button>Sao chép</button>
                        </div>
                    </div>
                    <div className='AovProfile'>
                        <div className='AovProfile-Name'>
                            <h3>{user}</h3>
                            <button onClick={() => openEditProfile()}><CiEdit /></button>
                        </div>
                        <p><i>{bio}</i></p>
                        <div className='AovProfile-Rank'>
                            <p><b>Hạng</b></p>
                            <div className='Rank_title'>
                                <p><b>Cao thủ</b></p>
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
                                và nó cũng là mật khẩu để đăng nhập
                                </span>
                            </div>
                        </div>
                        <div className='Profile-edit_box-b'>
                            <label>Tên</label>
                            <div className='edit_box-b'>
                                <input type='text' defaultValue={user} disabled/>
                                <span className='edit_box-b_quost'>
                                Tên không thể thay đổi 
                                và nó cũng là tài khoản để đăng nhập
                                </span>
                            </div>
                        </div>
                        <div className='Profile-edit_box-b'>
                            <label>Tiểu sử</label>
                            <div className='edit_box-b'>
                                <textarea value={bio} minLength={0} maxLength={300} onChange={(e) => setBio(e.target.value)}/>
                                <span className='edit_box-b_quost'>{bio.length}/300</span>
                            </div>
                        </div>
                        <div className='Profile-edit_box-e'>
                            <div className='edit_box-e_btn'>
                                <button onClick={() => closeEditProfile()}>Hủy</button>
                                <button onClick={() => saveNewProfile()}>Lưu</button>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(GameLQ);