import React, { useState} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useCookies } from 'react-cookie'; 
import { bindActionCreators } from "@reduxjs/toolkit";
// We use cookies to save the token we create for the user.

// Components:
import Presentation from "../Presentation/Presentation";

import { inputError } from '../Types/index';
import { actionCreators } from "../../redux/actions";
import { State } from "../../redux/reducers";
import { AppDispatch } from "../../redux/store";


// Observation: If we use hooks, we don't have to specify the type of the state.

const validator = (input) => {
    let errors: inputError = {
        email: null,
        password: null,
    };
    let testEmail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
    if(!input.email) errors.email = 'Enter your email';
    else if(!testEmail.test(input.email)) errors.email = 'Please enter a valid email'
    if (!input.password) errors.password = 'Enter your password';
    else if (input.password.length < 8) errors.password = 'La contraseña debe contener 8 digitos minimo';
    else if (input.password.length > 20) errors.password = 'La contraseña debe contener 20 digitos maximo';
    // Errors: Email y contraseña no coinciden
    return errors;
}

const Login = () : JSX.Element => {
    const dispatch: AppDispatch = useDispatch();
    // const { loginUser } = actionCreators
    const { loginUser} = bindActionCreators(actionCreators, dispatch);
    const token = useSelector((state: State) => state.loginUser.token);
    const [cookies, setCookie] = useCookies(['token']);
    
    //componentWillUnmount:
    // useEffect(() => {
    //     dispatch(clearAuthError())
    //     return () => {
    //         dispatch(clearAuthError());
    //     };
    // }, []);

    // useEffect(() => {
    //     if(token !== '') {
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

    //Handle que almacena en input lo que introduce el usuario:
    const handleChange = (e) => {
        const result = validator({...input, [e.target.name]: e.target.value});
        setInput ({...input, [e.target.name]: e.target.value});
        setErrors(result);
        // dispatch(clearAuthError())
    }

    //Handle para que el usuario pueda ingresar:
    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log('inputHandleSubmit', input);
        dispatch(loginUser(input));
        // if(!autherr){
        //     closeLoginModal()
        // }
    }

    return (
        <div>
            <Presentation />
            <div>

            </div>
        </div>
    )
};

export default Login;