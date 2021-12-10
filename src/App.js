import logo from './logo.svg';
import './App.css';
import React from 'react';
import "tailwindcss/tailwind.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from './AppPages/Login';
import Home from './AppPages/Home';

function App() {
    return ( <
        Router >
        <
        div className = "App" >
        <
        header className = "mt-12" >
        <
        h1 > Chitter Chatter < /h1> <
        nav >
        <
        Routes >
        <
        Route path = "/home"
        element = { < Home / > }
        /> <
        Route path = "/"
        element = { < Login / > }
        /> <
        /Routes> <
        /nav> <
        /header> <
        /div> <
        /Router> 
    );
}

export default App;