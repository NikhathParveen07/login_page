import React from "react";
import { useLocation } from "react-router-dom";

export default function Main() {

    const location = useLocation();
    const userName = location.state && location.state.userName;

    return (
        <div>
            <h1>Hello! {userName}</h1>
        </div>
    );
}