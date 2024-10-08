import React, { useState } from 'react';
import '../styles/grid.scss';
import '../styles/form.scss';
// import axios from "axios";
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '../redux/action/Login';
import { toast } from 'react-toastify';

const Login = (props) => {
    
    const [useName, setUseName] = useState("")
    const [password, setPassword] = useState("")

    // USERNAME
    // const user = () => {
    //     if(!useName){
    //         toast.error("Vui lòng nhập Username !")
    //         return 0;
    //     }
    //     else{
    //         var isValid = (temp) =>{
    //             let regex = /@([A-Za-z0-9_]{1,15})/
    //             return regex.test(temp);
    //         }
    //         if(isValid(useName) === false){
    //             toast.warning("Thêm ký tự '@' trước Username")
    //             return 0
    //         }
    //         else{
    //             return 1;
    //         } 
    //     }
    // }

    // PASSWORD
    // const pass = () => {
    //     if(!password){
    //         toast.error("Vui lòng nhập mật khẩu!")
    //         return 0;
    //     }
    //     else{
    //         return 1;
    //     }
    // }

     // SIGN IN
    // const metho = () => {
    //     if(user() === 1 && pass() === 1){
    //         const data = {username: useName, password: password};
    //         axios.post("http://localhost:4000/auth/login",data).then(res => {
    //             if(res.data.error){  
    //                 toast.error(res.data.error)
    //             }
    //             else{
    //                 let temp = {
    //                         id: Math.floor(Math.random() * 100000),
    //                         username: useName,
    //                 }
    //                 if(props.dataUser.length > 0){
    //                     for(let i = 0; i < props.dataUser.length; i++){
    //                         props.deleteUser(props.dataUser[i])
    //                     }
    //                     if(sessionStorage.getItem("accessToken")){
    //                         sessionStorage.removeItem("accessToken");
    //                     } 
    //                 }else{
    //                     sessionStorage.setItem("accessToken", res.data)
    //                     props.addUser(temp);
    //                     props.checkNumber(2);
    //                 }
    //             }
    //         })
    //     }
    // }

    const metho = () => {
        if(useName === ""){
            toast.error("Vui lòng nhập tài khoản!")
        }else{
            if(useName === "Trăm năm mươi vạn"){
                if(password === ""){
                    toast.error("Vui lòng nhập mật khẩu!");
                }else{
                    if(password === "811317775"){
                        let temp = {
                            id: Math.floor(Math.random() * 100000),
                            username: "Trăm năm mươi vạn",
                        }
                        if(props.dataUser.length > 0){
                            for(let i = 0; i < props.dataUser.length; i++){
                                props.deleteUser(props.dataUser[i])
                            }
                            if(sessionStorage.getItem("accessToken")){
                                sessionStorage.removeItem("accessToken");
                            } 
                        }else{
                            sessionStorage.setItem("accessToken", "811317775")
                            props.addUser(temp);
                            props.checkNumber(2);
                        }
                    }else{
                        toast.error("Mật khẩu không chính xác!")
                    }
                }
            }else{
                toast.error("Tài khoản không chính xác!")
            }
        }
    }

    // NEXT PAGE SIGN UP
    // const signUp = () => {
    //     props.checkNumber(1);
    // }

    //NEXT PAGE CHANGE PASS
    // const changePassword = () => {
    //     props.checkNumber(3);
    // }
    return (
        <div className='grid__colum12 backGroundColorFooter'>
            <div className="form-container">
                <p className="titleLoginAndRegister">Login</p>
                <form className="form">
                    <div className="input-group">
                        <label htmlFor="username">Username</label>
                        {/* <input type="text" name="username" id="username" placeholder="" value={useName} 
                        onChange={(e) => setUseName(e.target.value)}
                        onBlur={() => user()} */}
                        <input type="text" name="username" id="username" placeholder="" value={useName} 
                        onChange={(e) => setUseName(e.target.value)}
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        {/* <input type="password" name="password" id="password" placeholder="" value={password} 
                        onChange={(e) => setPassword(e.target.value)}
                        onBlur={() => pass()} */}
                        <input type="password" name="password" id="password" placeholder="" value={password} 
                        onChange={(e) => setPassword(e.target.value)}
                        />
                        {/*<div className="forgot">
                            <a hrel="noopener noreferrer" href="#" onClick={() => changePassword()}>Change Password ?</a>
                        </div>*/}
                    </div>
                    <a onClick={() => metho()}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Sign in
                    </a>
                </form>
                <div className="social-message">
                    <div className="line"></div>
                    <p className="message">Login with social accounts</p>
                    <div className="line"></div>
                </div>
                <div className="social-icons">
                    <button aria-label="Log in with Google" className="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                            <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                        </svg>
                    </button>
                </div>
                {/* <p className="signup">Don't have an account?
                    <a rel="noopener noreferrer" href="#" onClick={() => signUp()}> Sign up</a>
                </p> */}
            </div>
        </div>
    );
};

export default connect(mapStateToProps , mapDispatchToProps)(Login);