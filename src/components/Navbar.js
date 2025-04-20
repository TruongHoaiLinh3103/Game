import React, { useState } from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import "../styles/navbar.scss";
import { useSelector, useDispatch } from 'react-redux';
import GameGI from "./GameGI"
import GameLQ from './GameLQ';
import { GiCardPickup } from "react-icons/gi";
import { IoMdMusicalNotes } from "react-icons/io";
import { GiKnifeThrust } from "react-icons/gi";
import { DELETE__USER } from '../redux/reducer/rootUser';

const Navbar = (props) => {
    const user = useSelector((state) => state.user.user);
    const dispatch = useDispatch();
    const [menu, setMenu] = useState(false);
    const router = useNavigate();
    const logOut = () => {
        sessionStorage.removeItem("accessToken");
        dispatch(DELETE__USER(user[0]));
        props.checkNumber(0);
    }
    return (
        <div>
            <nav className="navbar">
                <div className='navbar-logo'>
                    <GiCardPickup title='Thị' onClick={() => router('/play')} />
                    <IoMdMusicalNotes title='Thính' onClick={() => router('/song')}/>
                    <GiKnifeThrust title='Khứu' onClick={() => router('/sport')}/>
                    {/* <h2><NavLink to="/" activeclassname="selected" exact="true">{user[0].username}</NavLink></h2> */}
                </div>
                {/* NAVIGATION MENU */}
                <div className="menu">
                    {window.location.pathname === "/" ? <li onClick={() => setMenu(true)}><NavLink to="#" activeclassname="selected"><i className="fa-solid fa-gamepad"></i><span>Tài khoản</span></NavLink></li> 
                    : <li onClick={() => router("/")}><NavLink to="#" activeclassname="selected"><i className="fa-solid fa-gamepad"></i><span>Trò chơi</span></NavLink></li>}
                    <div className="Account">
                        {sessionStorage.getItem("accessToken") &&
                            <li><NavLink to="#" onClick={() => logOut()}><i className="fas fa-sign-out-alt"></i><span>Đăng xuất</span></NavLink></li>
                        }
                    </div>
                </div>
                {/* CATEGORY */}
                <div className='Category-overlay' 
                    style={{display: menu ? "flex" : "none"}}
                >
                    {menu &&
                    <div className='Category-overlay_box'>
                        <GameGI />
                        <GameLQ />
                        <h4 onClick={() => setMenu(false)}>x</h4>
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

export default Navbar;