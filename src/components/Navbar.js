import React, { useState } from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import "../styles/navbar.scss";
import { connect } from 'react-redux';
import { mapDispatchToProps, mapStateToProps } from "../redux/action/Login";
import GameGI from "./GameGI"
import GameLQ from './GameLQ';

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
                <div className='navbar-logo'>
                    <h2>Thủy Tùy Thiên Khứ</h2>
                </div>
                {/* NAVIGATION MENU */}
                <div className="menu">
                    <li><NavLink to="/" activeclassname="selected" exact="true"><i className="fa-solid fa-house"></i><span>Trang chủ</span></NavLink></li>
                    <li onClick={() => setMenu(true)}><NavLink to="#" activeclassname="selected"><i className="fa-solid fa-gamepad"></i><span>Trò chơi</span></NavLink></li>
                    <div className="Account">
                        {sessionStorage.getItem("accessToken") &&
                            <li><NavLink to="#" onClick={() => logOut()}><i className="fas fa-sign-out-alt"></i><span>Đăng xuất</span></NavLink></li>
                        }
                    </div>
                </div>
                {/* CATEGORY */}
                <div className='Category-overlay' 
                    style={{display: menu ? "flex" : "none"}} 
                    onClick={() => setMenu(false)}
                >
                    {menu &&
                    <div className='Category-overlay_box'>
                        <GameGI />
                        <GameLQ />
                    </div>}
                </div>
                {/* USING CHECKBOX HACK */}
                {/* <label htmlFor="nav__bars" className="nav__bars">
                    <i className="fa-solid fa-bars"></i>
                </label>
                <input type="checkbox" hidden name="" id="nav__bars" />
                <div className="nav__bars-box">
                    <label htmlFor="nav__bars" className="navbar__overlay"></label>
                    <div className="navbar__body">
                        <ul className="bars__box-nav">
                            <li><NavLink to="/"><i className="fa-solid fa-house"></i>Trang chủ</NavLink></li>
                            <li className="listProductHidden"><NavLink to="#" style={{cursor: "pointer"}}><i className="fa-solid fa-gamepad"></i>Game</NavLink>
                            <div className="all__product">
                                <ul>
                                    <li><NavLink to="/genshin">Genshin Impact</NavLink></li>
                                    <li><NavLink to="/aov">Liên Quân</NavLink></li>
                                </ul>
                            </div>
                            </li>
                            {sessionStorage.getItem("accessToken") && 
                                <li><NavLink to="#" onClick={() => logOut()}><i className="fas fa-sign-out-alt"></i>Đăng xuất</NavLink></li>
                            }
                        </ul>
                    </div>
                </div> */}
            </nav>
        </div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);