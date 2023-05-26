import React from "react";
import Start from "./start";
import SignUp from "./Sign_up";
import Login from "./login";
import Main from "./main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
    return (
        <Router >
            <Routes>
                <Route path="/" element={<Start />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/login" element={<Login />} />
                <Route path="/main" element={<Main />} />
            </Routes>
        </Router>
    )
}

export default App;