import { Button } from "@material-ui/core";
import React from "react";
import "./Login.css";

const Login = () => {
    const signIn = () => {};

    return ( <
        div className = "login" >
        <
        div className = "login-container" >
        <
        div className = "login-text" >
        <
        h3 > Sign in to < /h3> <
        h1 > Chitter Chatter < /h1> <
        /div>

        <
        Button onClick = { signIn } > Sign In with Google < /Button> <
        /div> <
        /div>
    );
};

export default Login;