import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Sidebar from "./AppPages/Sidebar/Sidebar";
import Chat from "./AppPages/Chat/Chat";
// import Home from "./view/Home";
// import Hero from "./view/Hero";

function App() {
    return ( <
        div className = "app" >
        <
        div className = "app-body" >
        <
        Sidebar / >
        <
        Chat / >

        <
        /div> <
        /div>

    );
}

export default App;

// <Router>
//   <Routes>
//     <Route
//       path="/"
//       element={
//         <>
//           <Header />
//           <Hero />
//         </>
//       }
//     />
//     <Route path="/channels" element={<Home />} />
//   </Routes>
// </Router>