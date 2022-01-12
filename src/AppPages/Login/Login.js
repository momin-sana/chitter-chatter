import { Button } from "@material-ui/core";
import React from "react";
import "./Login.css";
import { auth, provider } from "../../Components/Firebase/firebase";
// import { useNavigate } from "react-router-dom";
// import { useAuthState } from "react-firebase-hooks/auth";
import { useStateValue } from "../../StateProvider";
import { actionTypes } from "../../reducer";

function Login() {
    const [{}, dispatch] = useStateValue();

    const signIn = (e) => {
        // google authentication
        auth
            .signInWithPopup(provider)
            .then((result) => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                })
            })
            .catch((error) => alert(error.message));
    };
    return ( <
        div className = "login" >
        <
        div className = "login-container" >
        <
        div className = "login-text" >
        <
        h3 > Sign in to < /h3> <
        h1 > Chitter Chatter < /h1> <
        /div> <
        Button onClick = { signIn } >
        Sign In with Google <
        /Button> <
        /div> <
        /div>
    );
}

export default Login;