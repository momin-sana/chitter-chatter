import { Avatar } from "@material-ui/core";
import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import db from "../../Components/Firebase/firebase";
import "./Sidebar.css";

function SidebarChat({ id, name, addNewChat }) {
    const [seed, setSeed] = useState("");
    //   const [messages, setMessages] = useState("");


    // to show the lastest message send from chat to sidebar
    //   useEffect(() => {
    //     if (id) {
    //       db.collection("rooms")
    //         .doc(id)
    //         .collection("messages")
    //         .orderBy("timestamp", "desc")
    //         .onSnapshot((snapshot) =>
    //           setMessages(snapshot.docs.map((doc) => doc.data()))
    //         );
    //     }
    //   }, [id]);



    // for random avatar 
    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, []);



    // creating new chat room and adding
    const createChat = () => {
        const roomName = prompt("Please enter name for chat");

        if (roomName) {
            db.collection("rooms").add({
                name: roomName,
            });
        }
    };

    return !addNewChat ? (
        // linking to chat room
        <
        Link to = { `rooms/${id}` } >
        <
        div className = "sidebarChat" >
        <
        Avatar src = { `https://avatars.dicebear.com/api/avataaars/${seed}.svg` }
        /> <
        div className = "sidebarChat-info" >
        <
        h2 > { name } < /h2> {
            /*
                        to get and show the first line of lastest message send 
                        <p>{messages[0].message} </p>
                    */
        } <
        /div> <
        /div> <
        /Link>

    ) : (
        // OR creating new chat room
        <
        div onClick = { createChat }
        className = "sidebarChat" >
        <
        h2 > Add New Chat < /h2> <
        /div>
    );
}
export default SidebarChat;