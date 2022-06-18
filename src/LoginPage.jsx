import React from "react";
import { useState } from "react";
import axios from 'axios';
import './login.css';

const initialValues = {
    email: "",
    password: ""
}

const LoginPage = () => {


    const [user, setUser] = useState(initialValues);

    const [display, setDisplay] = useState(`alert alert-success hide`);

    const [response, setResponse] = useState('');

    const url = `https://reqres.in/api/login`;

    const getData = async ()=> {
       return await axios.post(url, user)
    };

    const onValueChange = (e)=> {
        setUser({...user, [e.target.name]: e.target.value });
    }

    const handleClick = async (e)=> {
        e.preventDefault();
        if(user.password === ""){
            setDisplay(`alert alert-danger show`);
            setResponse(`Missing Password`)
        }
        else{
            setDisplay(`alert alert-success show`);
            setResponse(`QpwL5tke4Pnpja7X4`);
             await getData();
        }
    }


    return (
        <>
            <div className="mainContainer">
                <div className="formContainer">
                    <div className="formHeader">
                        <div className="formHeading">
                            Welcome Back
                        </div>
                        <div className="formSubHeading">
                            Sub-title text goes here
                        </div>
                    </div>
                    <form className="myForm" action="">
                        <div className="formBox">
                            <input type="email" className="email" placeholder="Email Address *" onChange={(e) => onValueChange(e)} name="email" />
                            <input type="password" className="password" placeholder="Password *" onChange={(e) => onValueChange(e)} name="password" />
                            <input type="submit" className="login-btn" value="Login" onClick={(e) => handleClick(e)} />
                            <div className="rPass">
                                <input type="checkbox" className="check" /> <span className="rpass">Remember Password</span>
                                <span className="fpass">Forgot Password?</span>
                            </div>
                            
                        </div>
                        <div className={display}>{response}</div>
                    </form>
                </div>
                <div className="imgContainer">
                    <img src="https://cdn.dribbble.com/users/1568450/screenshots/5454412/work_dark_3_dribbble-01-01_4x.png" alt="Office" />
                </div>
            </div>
        </>
    )
};

export default LoginPage;