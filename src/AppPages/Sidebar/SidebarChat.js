import { Avatar } from "@material-ui/core";
import React, { useEffect } from "react";
import { useState } from "react";
import "./Sidebar.css";

function SidebarChat({ addNewChat }) {
    const [seed, setSeed] = useState("");

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, []);

    const createChat = () => {
        const roomName = prompt("Please enter name for chat");

        if (roomName) {
            // do some database stuff..
        }
    };

    return !addNewChat ? ( <
        div className = "sidebarChat" >
        <
        Avatar src = { `https://avatars.dicebear.com/api/avataaars/${seed}.svg` }
        /> <
        div className = "sidebarChat-info" >
        <
        h2 > Room Name < /h2> <
        p > Last Message... < /p> <
        /div> <
        /div>
    ) : ( <
        div onClick = { createChat }
        className = "sidebarChat" >
        <
        h2 > Add New ChatRoom < /h2> <
        /div>
    );
}

export default SidebarChat;