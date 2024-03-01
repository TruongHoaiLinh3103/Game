import React, { useRef } from 'react';
import "../styles/form.scss";
import { toast } from 'react-toastify';
import axios from 'axios';


const ChangePass = (props) => {
    const oldPassword = useRef("");
    const newPassword = useRef("");
    const username = useRef("");
    const confirmNewPassword = useRef("");
    const isValid = (temp) => {
        let regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
        return regex.test(temp);
    }
    const change = () => {
        if(username.current.value === ""){
            username.current.focus();
        }else if(oldPassword.current.value === ""){
            oldPassword.current.focus();
        }else if(newPassword.current.value === ""){
            newPassword.current.focus();
        }else if(confirmNewPassword.current.value === ""){
            confirmNewPassword.current.focus()
        }else{
            if(isValid(newPassword.current.value) === false){
                toast.warning("Minimum password 8 characters, at least 1 letter, 1 number and 1 special character!");
                newPassword.current.value = "";
                newPassword.current.focus();
                confirmNewPassword.current.value = "";
            }else if(confirmNewPassword.current.value !== newPassword.current.value){
                toast.error("Invalid confirmation!");
                confirmNewPassword.current.value = "";
                confirmNewPassword.current.focus();
            }else{
                const data = {
                    username: username.current.value,
                    oldPassword: oldPassword.current.value,
                    newPassword: newPassword.current.value,
                }
                axios.patch("http://localhost:4000/auth/changepassword", data).then((res) => {
                    if (res.data.error) {
                        toast.error(res.data.error);
                        oldPassword.current.value = "";
                        oldPassword.current.focus();
                    }
                    else{
                        toast.success(res.data.success)
                    }
                });
            }
        }
    }
    return (
        <div className='grid__colum12 backGroundColorFooter'>
            <div className="form-container">
                <p className="titleLoginAndRegister">Change the password</p>
                <form className="form">
                    <div className="input-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" id="username" placeholder="" ref={username}/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" placeholder="" ref={oldPassword} />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">New password</label>
                        <input type="password" name="password" id="password" placeholder="" ref={newPassword} />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Confirm new password</label>
                        <input type="password" name="password" id="password" placeholder="" ref={confirmNewPassword} />
                    </div>
                    <a onClick={() => change()}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Change the password
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
                <p className="signup">
                    <a rel="noopener noreferrer" href="#" onClick={() => props.checkNumber(1)}> Sign up</a>
                    <a style={{marginLeft: "10px"}} rel="noopener noreferrer" href="#" onClick={() => props.checkNumber(0)}> Sign in</a>
                </p>
            </div>
        </div>
    );
};

export default ChangePass;