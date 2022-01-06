import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./AppPages/Sidebar/Sidebar";
import Chat from "./AppPages/Chat/Chat";
import Login from "./AppPages/Login/Login";
import { useStateValue } from "./StateProvider";

function App() {
    const [{user}, dispatch]=useStateValue();

  return (
    <div className="app">
      {!user ? ( //if there's no user then open login page
        <Login />
      ) : (
        <div className="app-body">
          <Router>
            <Sidebar />
            <Routes>
              <Route path="/rooms/:roomId" element={<Chat />} />
            <Route path="/" element={<Chat />}></Route>
              </Routes>
          </Router>
        </div>
      )}
    </div>
  );
}

export default App;
