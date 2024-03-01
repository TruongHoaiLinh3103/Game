import React, { useState } from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import "../styles/navbar.scss";
import { connect } from 'react-redux';
import { mapDispatchToProps, mapStateToProps } from "../redux/action/Login";

const Navbar = (props) => {
    const user = props.dataUser[0];
    const [menu, setMenu] = useState(false);
    const history = useNavigate()
    const logOut = () => {
        sessionStorage.removeItem("accessToken");
        props.deleteUser(user);
        props.checkNumber(0);
    }
    return (
        <div>
            <nav className="navbar">
                {/* SEARCH */}
                <div className="navbar-search">
                    <input type='text' placeholder='Search'/>
                    <button><i className="fas fa-search"></i></button>
                </div>
                {/* NAVIGATION MENU */}
                <div className="menu">
                    <li><NavLink to="/" activeclassname="selected" exact="true"><i className="fa-solid fa-house"></i>Trang chủ</NavLink></li>
                    <li onClick={() => setMenu(true)}><NavLink to="#" activeclassname="selected"><i className="fas fa-caret-down"></i>Mục lục</NavLink></li>
                    <li><NavLink to="/friend" activeclassname="selected"><i className="fa-solid fa-heart"></i>Bạn bè</NavLink></li>
                    <li><NavLink to="/profile" activeclassname="selected"><i className="fas fa-user-circle"></i>Hồ sơ</NavLink></li>
                    <div className="Account">
                        {sessionStorage.getItem("accessToken") &&
                            <li><NavLink to="#" onClick={() => logOut()}><i className="fas fa-sign-out-alt"></i>Đăng xuất</NavLink></li>
                        }
                    </div>
                </div>
                {/* CATEGORY */}
                <div className='Category-overlay' 
                    style={{display: menu ? "flex" : "none"}} 
                    onClick={() => setMenu(false)}
                >
                    <div className='Category-overlay_box'>
                        <div className='Category-overlay_item' onClick={() => history("/mess")} >Tin nhắn</div>
                        <div className='Category-overlay_item' onClick={() => history("/group")}>Nhóm chat</div>
                        <div className='Category-overlay_item' onClick={() => history("/livestream")}>Livestream</div>
                    </div>
                </div>
                {/* USING CHECKBOX HACK */}
                <label htmlFor="nav__bars" className="nav__bars">
                    <i className="fa-solid fa-bars"></i>
                </label>
                <input type="checkbox" hidden name="" id="nav__bars" />
                <div className="nav__bars-box">
                    <label htmlFor="nav__bars" className="navbar__overlay"></label>
                    <div className="navbar__body">
                        <ul className="bars__box-nav">
                            <li><NavLink to="/"><i className="fa-solid fa-house"></i>Trang chủ</NavLink></li>
                            <li className="listProductHidden"><NavLink to="#" style={{cursor: "pointer"}}><i className="fa-solid fa-hand-holding-heart"></i>Danh mục</NavLink>
                            <div className="all__product">
                                <ul>
                                    <li><NavLink to="/mess">Tin nhắn</NavLink></li>
                                    <li><NavLink to="/group">Nhóm chat</NavLink></li>
                                    <li><NavLink to="/livestream">Livestream</NavLink></li>
                                </ul>
                            </div>
                            </li>
                            <li><NavLink to="/friend"><i className="fa-solid fa-heart"></i>Bạn bè</NavLink></li>
                            <li><NavLink to="/profile"><i className="fas fa-user-circle"></i>Hồ sơ</NavLink></li>
                            {sessionStorage.getItem("accessToken") && 
                                <li><NavLink to="#" onClick={() => logOut()}><i className="fas fa-sign-out-alt"></i>Đăng xuất</NavLink></li>
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);