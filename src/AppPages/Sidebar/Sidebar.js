import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import { Avatar, IconButton } from "@material-ui/core";
import {
    Chat,
    DonutLarge,
    MoreVert,
    SearchOutlined,
} from "@material-ui/icons";
import SidebarChat from "./SidebarChat";
import db from "../../Components/Firebase/firebase";

const Sidebar = () => {
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        console.log("this is sidebar");
        const unsubscribe = db.collection("rooms").onSnapshot((snapshot) =>
            setRooms(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data(),
                }))
            )
        );
        // cleanup function. once done with above work use this for best practice
        return () => {
            unsubscribe();
        }
    }, []);

    return ( <
        div className = "sidebar" >
        <
        div className = "sidebar-header" >
        <
        div className = "sidebar-headerAvatar" >
        <
        Avatar / >
        <
        /div> <
        div className = "sidebar-headerRight" >
        <
        IconButton >
        <
        DonutLarge / >
        <
        /IconButton> <
        IconButton >
        <
        Chat / >
        <
        /IconButton> <
        IconButton >
        <
        MoreVert / >
        <
        /IconButton> <
        /div> <
        /div> <
        div className = "sidebar-search" >
        <
        div className = "sidebar_searchContainer" >
        <
        SearchOutlined / >
        <
        input placeholder = "Search or start
        new chat "
        type = "text" /
        >
        <
        /div> <
        /div> <
        div className = "sidebar-chats" >
        <
        SidebarChat addNewChat / >

        {
            rooms.map((room) => ( <
                SidebarChat key = { room.id }
                id = { room.id }
                name = { room.data.name }
                />
            ))
        } <
        /div> <
        /div>
    );
};

export default Sidebar;