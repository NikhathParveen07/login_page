import React from "react";
import { useNavigate } from "react-router-dom";

export default function Start() {
    let navigate = useNavigate();
    return (
        <div className="container">
            <h1>WELCOME</h1>
            <button className="button1" onClick={() => navigate("/signup")}> SignUp </button>
            <button className="button1" onClick={() => navigate("/login")}> LogIn </button>
            
    
        </div>
    )
}