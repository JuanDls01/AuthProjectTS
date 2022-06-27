import React, { useState} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useCookies } from 'react-cookie'; 
import { bindActionCreators } from "@reduxjs/toolkit";
// We use cookies to save the token we create for the user.

// Components:
import Presentation from "../Presentation/Presentation";
import style from './Login.module.css'

import {InputLogin, InputLoginErr} from "../Types/index";
import { actionCreators } from "../../redux/actions";
import { State } from "../../redux/reducers";
import { AppDispatch } from "../../redux/store";
import { LoginValidator } from "../Utils/Validators";
import { Link } from "react-router-dom";

const Login = () : JSX.Element => {
    const dispatch: AppDispatch = useDispatch();
    // const { loginUser } = actionCreators
    const { loginUser } = bindActionCreators(actionCreators, dispatch);
    const token = useSelector((state: State) => state.loginUser.token);
    const [cookies, setCookie] = useCookies(['token']);
    
    //componentWillUnmount: When the component unmount restart the error Auth
    // useEffect(() => {
    //     dispatch(clearAuthError())
    //     return () => {
    //         dispatch(clearAuthError());
    //     };
    // }, []);


    // useEffect(() => {
    //     if(token) {
    //         setCookie('token', token, { path: '/' });
    //         navigate('/');
    //         // closeLoginModal()
    //     }
    // }, [token]);

    //Local States:
    const [input, setInput] = useState<InputLogin>({
        email: '',
        password: '',
    });
    const [errors, setErrors] = useState<InputLoginErr>({
        emailErr: null,
        passwordErr: null
    });

    // events documentation: https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/forms_and_events/
    //Handle que almacena en input lo que introduce el usuario:
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const result = LoginValidator({...input, [e.target.name]: e.target.value});
        setInput ({...input, [e.target.name]: e.target.value});
        setErrors(result);
        // dispatch(clearAuthError())
    }

    //Handle para que el usuario pueda ingresar:
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(await loginUser(input));
    }

    return (
        <div>
            <Presentation />
            <div className={style.formContainner}>
                <h1>Login</h1>
                <p>You can login with your registered account or quik login with your Google account</p>
                <form className={style.formContent} onSubmit={(e) => handleSubmit(e)}>
                    <div className={style.inputContainner}>
                        {/* Email */}
                        <label htmlFor="emailInput">Email:</label>
                        <input
                            type={'email'}
                            name={'email'}
                            id={'email'}
                            className={style.input}
                            placeholder={'Email'}
                            value={input['email']}
                            // autoFocus={autoFocus}
                            onChange={handleChange}
                        />
                        {errors['emailErr'] ? <div className={style.error}>{errors['emailErr']}</div> : null}
                    </div>
                    <div className={style.inputContainner}>
                        {/* Password */}
                        <label htmlFor="passwordInput">Password:</label>
                        <input
                            type={'password'}
                            name={'password'}
                            id={'password'}
                            className={style.input}
                            placeholder={'Password'}
                            value={input['password']}
                            // autoFocus={autoFocus}
                            onChange={handleChange}
                        />
                        {errors['passwordErr'] ? <div className={style.error}>{errors['passwordErr']}</div> : null}
                    </div>
                    <button type="submit">Login</button>
                    <div className={style.linkRedirect}>
                        Don't have an account? <Link to='register'>Create one!</Link>
                    </div>
                </form>
                
            </div>
        </div>
    )
};

export default Login;