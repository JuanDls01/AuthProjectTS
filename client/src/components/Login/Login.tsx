import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useCookies } from 'react-cookie'; 
// We use cookies to save the token we create for the user.
import actionsCreators from "../../redux/actions";


// Components:
import Presentation from "../Presentation/Presentation";
// import loginToken from "../../redux/actions/loginToken";

// Observation: If we use hooks, we don't have to specify the type of the state.

const Login = () : JSX.Element => {
    const dispatch = useDispatch();
    const [cookies, setCookie] = useCookies(['token']);
    const {loginToken} = actionsCreators;
    const token = {bodyToken: cookies.token}

    useEffect(() => {
        if (cookies.token) dispatch(loginToken(token))
    })
    return (
        <div>
            <Presentation />
            <div>

            </div>
        </div>
    )
};

export default Login;