import React, { useState} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useCookies } from 'react-cookie'; 
import { bindActionCreators } from "@reduxjs/toolkit";
// We use cookies to save the token we create for the user.

// Components:
import Presentation from "../Presentation/Presentation";
import style from './Login.module.css'

import {InputLogin} from "../Types/index";
import { actionCreators } from "../../redux/actions";
import { State } from "../../redux/reducers";
import { AppDispatch } from "../../redux/store";
import { LoginValidator } from "../Utils/Validators";

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

    //Info del Usuario:
    const [input, setInput] = useState({
        email: '',
        password: '',
    });

    //Guardo posibles errores:
    const [errors, setErrors] = useState({});

    // events documentation: https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/forms_and_events/
    //Handle que almacena en input lo que introduce el usuario:
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const result = LoginValidator({...input, [e.target.name]: e.target.value});
        setInput ({...input, [e.target.name]: e.target.value});
        setErrors(result);
        // dispatch(clearAuthError())
    }

    //Handle para que el usuario pueda ingresar:
    const handleSubmit = async (e: React.FormEvent<HTMLInputElement>) => {
        e.preventDefault();
        // console.log('inputHandleSubmit', input);
        dispatch(await loginUser(input));
        // if(!autherr){
        //     closeLoginModal()
        // }
    }

    return (
        <div>
            <Presentation />
            <div className={style.formContainner}>
                <h1>Login</h1>
                <p>You can login with your registered account or quik login with your Google account</p>
            </div>
        </div>
    )
};

export default Login;