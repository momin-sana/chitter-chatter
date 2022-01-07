import React from "react";
import "./Chat.css";

const ChatMessage = (props) => {
    const { text, uid, photoURL } = props.messages;
    return ( <
        div className = "chat-body" >
        <
        img src = { photoURL }
        /> <p> {text} </p >
        <
        /div>
    );
};

export default ChatMessage;