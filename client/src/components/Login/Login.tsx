import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useCookies } from 'react-cookie'; 
// We use cookies to save the token we create for the user.


// Components:
import Presentation from "../Presentation/Presentation";

// Observation: If we use hooks, we don't have to specify the type of the state.

const Login = () : JSX.Element => {
    const dispatch = useDispatch();
    const [cookies, setCookie] = useCookies(['token']);
    return (
        <div>
            <Presentation />
            <div>

            </div>
        </div>
    )
};

export default Login;