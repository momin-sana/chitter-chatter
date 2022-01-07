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
import db, { auth } from "../../Components/Firebase/firebase";
import { useStateValue } from "../../StateProvider";
import "./Chat.css";
import ChatMessage from "./ChatMessage";
import firebase from "firebase/compat/app";

function Chat() {
    const [input, setInput] = useState("");
    const [seed, setSeed] = useState("");
    const [roomName, setRoomName] = useState("");
    const { roomId } = useParams();
    const [messages, setMessages] = useState([]);
    const [{ user }, dispatch] = useStateValue();

    //to get the specific roomName from firebase and display on chat.js
    useEffect(() => {
        // if there's a roomId then go into the collection-rooms then go to specific document and use the roomId of that document and take the snapshoot to set RoomName and pull data from snapshot to get the room Name
        if (roomId) {
            db.collection("rooms")
                .doc(roomId)
                .onSnapshot((snapshot) => setRoomName(snapshot.data().name));

            db.collection("rooms")
                .doc(roomId)
                .collection("messages")
                .orderBy("timestamp", "asc")
                .onSnapshot((snapshot) =>
                    setMessages(snapshot.docs.map((doc) => doc.data()))
                );
        }
    }, [roomId]); //here roomId is the dependency, which means everytime roomId changes we will get new messages/name with the help of included function for this roomId

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, [roomId]);

    const sendMessage = async(e) => {
        e.preventDefault();
        console.log("You typed input : ", input);
        const { uid, photoURL } = auth.currentUser;

        await db.collection("rooms").doc(roomId).collection("messages").add({
            message: input,
            name: user.displayName,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            uid,
            photoURL,
        });
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
        h3 > { roomName } < /h3> 

        {
            /*
                    <p> 
                        Last seen {""}
                        {new Date(
                          messages[messages.length -1].
                          timestamp.toDate()
                        ).toUTCString} 
                      </p>
                    */
        }

        <
        /div> <
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
        div className = "chat-body" > {
            messages && messages.map((message) => ( <
                p className = { `chat-message ${message.name === user.uid && "chat-reciever"}` } >
                <
                span className = "chat-name" > { message.user } < /span> { message.message } <
                span className = "chat-timestamp" >

                { new Date(message.timestamp.toDate()).toUTCString() } <
                /span>

                <
                /p>
            ))
        } <
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