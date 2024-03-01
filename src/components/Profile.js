import React, { useEffect, useState } from 'react';
import "../styles/profile.scss";
import axios from 'axios';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '../redux/action/Login';

const Profile = (props) => {
    const [editProfile, setEdProfile] = useState(0);
    const [ profileDetail, setProfileDetail ] = useState({});
    const user = props.dataUser[0].username;
    const openEditProfile = () => {
        setEdProfile(1)
    }
    useEffect(() => {
        axios.get(`http://localhost:4000/account/${user}`).then((res) => {
            if(res && res.data){
                setProfileDetail(res.data);
            }
        })
    })
    const Data = Object.keys(profileDetail).length === 0
    return (
        <>
            {!Data &&
                <div className='Profile'>
                    <div className='Profile-detail'>
                        <div className='Profile-detail_img'>
                            <img src={profileDetail.img} alt='avatar'/>
                        </div>
                        <div className='Profile-name'>
                            <h2>{profileDetail.username}</h2>
                            <h3>{profileDetail.fullname}</h3>
                            <div className='Profile-update'>
                                <button onClick={() => openEditProfile()}><i className="far fa-edit"></i> Sửa hồ sơ</button>
                                <button onClick={() => setEdProfile(2)}><i className="fas fa-upload"></i> Tải lên</button>
                            </div>
                        </div>
                    </div>
                    <div className='Profile-odther'>
                        <p><b>1213</b> Bạn bè</p>
                        <p><b>10</b> video</p>
                        <p><b>834</b> Like</p>
                    </div>
                    <div className='Profile-text'>
                        {profileDetail.bio}
                    </div>

                    {/* Sửa hồ sơ */}
                    <div className='Profile-edit' style={{display : editProfile === 1 ? "flex" : "none"}}>
                        <div className='Profile-edit_box'>
                            <div className='Profile-edit_box-h'>
                                <p>Sửa hồ sơ</p>
                                <p onClick={() => setEdProfile(0)}>X</p>
                            </div>
                            <div className='Profile-edit_box-b'>
                                <label>Ảnh</label>
                                <div className='edit_box-b'>
                                    <div className='edit_box-b_img'>
                                        <img src={profileDetail.img} alt='avtar'/>
                                        <span><i className="far fa-edit"></i></span>
                                    </div>
                                </div>
                            </div>
                            <div className='Profile-edit_box-b'>
                                <label>ID</label>
                                <div className='edit_box-b'>
                                    <input type='text' disabled value={profileDetail.username}/>
                                    <span className='edit_box-b_quost'>
                                    ID không thể thay đổi 
                                    và nó cũng là tên tài khoản để đăng nhập
                                    </span>
                                </div>
                            </div>
                            <div className='Profile-edit_box-b'>
                                <label>Tên</label>
                                <div className='edit_box-b'>
                                    <input type='text' value={profileDetail.fullname}/>
                                </div>
                            </div>
                            <div className='Profile-edit_box-b'>
                                <label>Tiểu sử</label>
                                <div className='edit_box-b'>
                                    <textarea value={profileDetail.bio} />
                                    <span className='edit_box-b_quost'>8/100</span>
                                </div>
                            </div>
                            <div className='Profile-edit_box-e'>
                                <div className='edit_box-e_btn'>
                                    <button onClick={() => setEdProfile(0)}>Hủy</button>
                                    <button>Lưu</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Tải lên */}
                    <div className='Profile-edit' style={{display : editProfile === 2 ? "flex" : "none"}}>
                        <div className='Profile-edit_box'>
                            <div className='Profile-edit_box-h'>
                                <p>Tải lên</p>
                                <p onClick={() => setEdProfile(0)}>X</p>
                            </div>
                            <div className='Profile-edit_box-b'>
                                <label>Ảnh</label>
                                <div className='edit_box-b'>
                                    <div className='edit_box-b_img'>
                                        <img src={profileDetail.img} alt='avtar'/>
                                        <span><i className="far fa-edit"></i></span>
                                    </div>
                                </div>
                            </div>
                            <div className='Profile-edit_box-b'>
                                <label>ID</label>
                                <div className='edit_box-b'>
                                    <input type='text' disabled value={profileDetail.username}/>
                                    <span className='edit_box-b_quost'>
                                    ID không thể thay đổi 
                                    và nó cũng là tên tài khoản để đăng nhập
                                    </span>
                                </div>
                            </div>
                            <div className='Profile-edit_box-b'>
                                <label>Tên</label>
                                <div className='edit_box-b'>
                                    <input type='text' value={profileDetail.fullname}/>
                                </div>
                            </div>
                            <div className='Profile-edit_box-b'>
                                <label>Tiểu sử</label>
                                <div className='edit_box-b'>
                                    <textarea value={profileDetail.bio} />
                                    <span className='edit_box-b_quost'>8/100</span>
                                </div>
                            </div>
                            <div className='Profile-edit_box-e'>
                                <div className='edit_box-e_btn'>
                                    <button onClick={() => setEdProfile(0)}>Hủy</button>
                                    <button>Tải lên</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);