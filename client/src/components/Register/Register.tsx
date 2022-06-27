import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';

// Components:
import Presentation from "../Presentation/Presentation";
import style from './Register.module.css'

const Register = () : JSX.Element => {

    return (
        <div>
            <Presentation />
            <div className={style.formContainner}>
                <h1>Register</h1>
                <p>Enter your user details below</p>
                <form className={style.formContent}>
                    {/* <div className={style.inputContainner}>
                        Email
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
                    </div> */}
                </form>
            </div>
            
            
        </div>
    )
};

export default Register;