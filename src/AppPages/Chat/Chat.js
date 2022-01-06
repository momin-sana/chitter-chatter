import { Avatar, IconButton } from "@material-ui/core";
import {
    AttachFile,
    InsertEmoticon,
    Mic,
    MoreVert,
    SearchOutlined,
} from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import db from "../../Components/Firebase/firebase";
import "./Chat.css";

function Chat() {
    const [input, setInput] = useState("");
    const [seed, setSeed] = useState("");
    const [roomName, setRoomName] = useState("");
    const { roomId } = useParams();


    //to get the specific roomName from firebase and display on chat.js
    useEffect(() => {
        // if there's a roomId then go into the collection-rooms then go to specific document and use the roomId of that document and take the snapshoot to set RoomName and pull data from snapshot to get the room Name
        if (roomId) {
            db.collection("rooms")
                .doc(roomId)
                .onSnapshot((snapshot) =>
                    setRoomName(snapshot.data().name)
                );
        }
    }, [roomId]); //here roomId is the dependency, which means everytime roomId changes we will get new messages/name with the help of included function for this roomId



    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, [roomId]);

    const sendMessage = (e) => {
        e.preventDefault();
        setInput("");
    };

    return ( <
        div className = "chat" >
        <
        div className = "chat-header" >
        <
        Avatar src = { `https://avatars.dicebear.com/api/avataaars/${seed}.svg` }
        /> <
        div className = "chat-headerInfo" >
        <
        h3 > { roomName } < /h3>  <
        p > Last seen at... < /p> <
        /div>

        <
        div className = "chat-headerRight" >
        <
        IconButton >
        <
        SearchOutlined / >
        <
        /IconButton> <
        IconButton >
        <
        AttachFile / >
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
        div className = "chat-body" >
        <
        div className = { `chat-message ${true && "chat-reciever"}` } >
        <
        p >
        <
        span className = "chat-name" > Sana Momin < /span>Hello <
        span className = "chat-timestamp" > Time < /span> <
        /p> <
        /div> <
        /div>

        <
        div className = "chat-footer" >
        <
        InsertEmoticon / >
        <
        form >
        <
        input value = { input }
        onChange = {
            (e) => setInput(e.target.value) }
        type = "text"
        placeholder = "Type a message" /
        >
        <
        button onClick = { sendMessage }
        type = "submit" >
        Send a message <
        /button> <
        /form> <
        Mic / >
        <
        /div> <
        /div>
    );
}

export default Chat;