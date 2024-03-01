import React, { useState } from 'react';
import '../styles/form.scss'
import { toast } from 'react-toastify';
import axios from "axios";

const Register = (props) => {
    const [fullname, setFullName] = useState("");
    const [useName, setUseName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    // FULLNAME
    const name = () => {
        if(!fullname){
            toast.error("Please enter your full name!")
            return 0;
        }
        else{
            const isValid = (temp) =>{
                let regex = /([A-Za-z_]{1,15})/
                return regex.test(temp);
            }
            if(isValid(fullname) === false){
                toast.warning("The name has only alphanumeric characters!")
                return 0
            }
            else{
                return 1;
            } 
        }
    }

    // USERNAME
    const user = () => {
        if(!useName){
            toast.error("Please enter Username!")
            return 0;
        }
        else{
            const isValid = (temp) =>{
                let regex = /@([A-Za-z0-9_]{1,15})/
                return regex.test(temp);
            }
            if(isValid(useName) === false){
                toast.warning("Add '@' character before Username!")
                return 0
            }
            else{
                return 1;
            } 
        }
    }
    
    // EMAIL
    const mail = () => {
        if(!email){
            toast.error("Please enter Email!")
            return 0;
        }
        else{
            const isValid = (temp) =>{
                let regex =  /^([A-Za-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
                return regex.test(temp);
            }
            if(isValid(email) === false){
                toast.warning("The email entered is incorrect!")
                return 0
            }
            else{
                return 1;
            } 
        }
    }

    // PASSWORD
    const pass = () => {
        if(!password){
            toast.error("Please enter a password!")
            return 0;
        }
        else{
            const isValid = (temp) =>{
                let regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
                return regex.test(temp);
            }
            if(isValid(password) === false){
                toast.warning("Minimum password 8 characters, at least 1 letter, 1 number and 1 special character!")
                return 0;
            }
            else{
                return 1;
            } 
        }
    }

    // CONFIRM PASSWORD
    const confirm = () => {
        if(!confirmPassword){
            toast.error("Please enter verification password!")
            return 0;
        }
        else{
            if(confirmPassword !== password){
                toast.warning("Invalid verification password!")
                return 0;
            }
            else{
                return 1;
            } 
        }
    }

    // SIGN UP
    const click = () => {
        const data = {
            fullname: fullname,
            username: useName,
            email: email,
            password: password,
        }
        const account = {
            img: "https://i.pinimg.com/originals/5e/57/c8/5e57c8344039bc815bd95d8b6abec92d.jpg",
            bio: "Chưa có tiểu sử",
            fullname: fullname,
            username: useName,
        }
        if(name() === 1 && 
        user() === 1 && 
        mail() === 1 && 
        pass() === 1 &&  
        confirm() === 1){
            axios.post("http://localhost:4000/account", account)
            axios.post("http://localhost:4000/auth", data).then(res => {
                if(res.data.error){
                    toast.error(res.data.error)
                }else{
                    toast.success(res.data)
                    setConfirmPassword("");
                    setEmail("");
                    setFullName("");
                    setPassword("");
                    setUseName("");
                    props.checkNumber(0)
                }
            })
        }
    }
    // NEXT PAGE SIGN IN
    const signIn = () => {
        props.checkNumber(0);
    }
    
    return (   
        <div className='backGroundColorFooter'>
            <div className="form-container">
                <p className="titleLoginAndRegister">Register</p>
                <form className="form">
                    <div className="input-group">
                        <label htmlFor="fullname">Fullname</label>
                        <input type="text" name="fullname" id="fullname" placeholder=""
                        value={fullname}
                        onChange={(e) => setFullName(e.target.value)}
                        onBlur={() => name()}
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" id="username" placeholder=""
                        value={useName}
                        onChange={(e) => setUseName(e.target.value)}
                        onBlur={() => user()}
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" placeholder=""
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onBlur={() => mail()}
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" placeholder=""
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        onBlur={() => pass()}
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input type="password" name="confirmPassword" id="confirmPassword" placeholder=""
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        onBlur={() => confirm()}
                        />
                    </div>
                    <a onClick={() => click()}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Sign up
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
                <p className="signup">Already have an acount ?
                    <a rel="noopener noreferrer" href="#" onClick={() => signIn()}> Sign in</a>
                </p>
            </div>
        </div>
    );
};

export default Register;