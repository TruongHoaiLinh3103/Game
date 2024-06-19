import React, { useEffect, useState } from 'react';
import "../styles/profile.scss";
import axios from 'axios';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '../redux/action/Login';
import { toast } from 'react-toastify';

const Profile = (props) => {
    const [editProfile, setEdProfile] = useState(0);
    const [ profileDetail, setProfileDetail ] = useState({});
    const [img, setImg] = useState("");
    const [fullname, setFullname] = useState("");
    const [bio, setBio] = useState("");
    const user = props.dataUser[0].username;
    const openEditProfile = (item) => {
        setEdProfile(1);
        setImg(item.img);
        setFullname(item.fullname);
        setBio(item.bio);
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
        setEdProfile(0);
    }
    const saveNewProfile = () => {
        const data = {
            img: img,
            bio: bio,
            fullname: fullname,
            username: user
        }
        axios.post("http://localhost:4000/account", data).then((res) => {
            if(res.data.error){
                toast.error(res.data.error);
            }
        })
        setEdProfile(0)
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
                                <button onClick={() => openEditProfile(profileDetail)}><i className="far fa-edit"></i> Sửa hồ sơ</button>
                                <button onClick={() => setEdProfile(2)}><i className="fas fa-upload"></i> Tải lên</button>
                            </div>
                        </div>
                    </div>
                    <div className='Profile-odther'>
                        <p><b>1213</b> Bạn bè</p>
                        <p><b>10</b> video</p>
                        <p><b>834</b> Like</p>
                    </div>
                    <div className='Profile-text' dangerouslySetInnerHTML={{__html: profileDetail.bio}}></div>

                    {/* Sửa hồ sơ */}
                    <div className='Profile-edit' style={{display : editProfile === 1 ? "flex" : "none"}}>
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
                                <label>ID</label>
                                <div className='edit_box-b'>
                                    <input type='text' disabled defaultValue={profileDetail.username}/>
                                    <span className='edit_box-b_quost'>
                                    ID không thể thay đổi 
                                    và nó cũng là tên tài khoản để đăng nhập
                                    </span>
                                </div>
                            </div>
                            <div className='Profile-edit_box-b'>
                                <label>Tên</label>
                                <div className='edit_box-b'>
                                    <input type='text' value={fullname} onChange={(e) => setFullname(e.target.value)}/>
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