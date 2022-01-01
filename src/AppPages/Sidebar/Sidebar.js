import React from "react";
import "./Sidebar.css";
import { Avatar, IconButton } from "@material-ui/core";
import { Chat, DonutLarge, MoreVert, SearchOutlined } from "@material-ui/icons";
import SidebarChat from "./SidebarChat";

const Sidebar = () => {
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
        /div>

        <
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
        /div>

        <
        div className = "sidebar-chats" >
        <
        SidebarChat addNewChat / >
        <
        SidebarChat / >
        <
        SidebarChat / >
        <
        SidebarChat / >
        <
        SidebarChat / >
        <
        SidebarChat / >
        <
        SidebarChat / >
        <
        SidebarChat / >
        <
        SidebarChat / >
        <
        SidebarChat / >
        <
        SidebarChat / >
        <
        SidebarChat / >
        <
        SidebarChat / >
        <
        SidebarChat / >
        <
        SidebarChat / >
        <
        SidebarChat / >
        <
        SidebarChat / >
        <
        /div> <
        /div>
    );
};

export default Sidebar;