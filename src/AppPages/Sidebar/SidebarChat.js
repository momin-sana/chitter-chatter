import { Avatar } from '@material-ui/core';
import React, { useEffect } from 'react'
import { useState } from 'react';
import "./Sidebar.css";

function SidebarChat() {
    const [seed, setSeed] = useState('');

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, [])

    return ( <
        div >
        <
        Avatar src = { `https://avatars.dicebear.com/api/avataaars/${seed}.svg` }
        /> <
        div className = "sidebarChat-info" >
        <
        h2 > Room Name < /h2> <
        p > Last Message... < /p> <
        /div> <
        /div>
    )
}

export default SidebarChat;