import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./AppPages/Sidebar/Sidebar";
import Chat from "./AppPages/Chat/Chat";
import Login from "./AppPages/Login/Login";

function App() {
    const [user, setUser] = useState(null);

    return ( <
        div className = "app" > {!user ? ( //if there's no user then open login page
                <
                Login / >
            ) : ( <
                div className = "app-body" >
                <
                Router >
                <
                Sidebar / >
                <
                Routes >
                <
                Route path = "/rooms/:roomId"
                element = { < Chat / > }
                /> <
                /Routes> <
                /Router> <
                /div>
            )
        } <
        /div>
    );
}

export default App;