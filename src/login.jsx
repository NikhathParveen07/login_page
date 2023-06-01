import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./config/firebase";
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';


export default function Login() {
    const navigate = useNavigate();
    const [userDetails, setDetails]  = useState({
        email: "",
        password: ""
    })
    
    function handleChange(event){
        const {name, value} = event.target;

        setDetails(preVal => {
            return {
              ...preVal,
                [name]: value
            }
        });

    }

    const handleSubmit = async (event) =>{
        try{
            event.preventDefault();
           await signInWithEmailAndPassword(auth, userDetails.email, userDetails.password)
            navigate("/main")
        }
        catch(err){
            console.log(err.message)
        }
    }

    return (
        <div className="form">
            <form >
                <h2>Log-in</h2> <br />
                <label>UserId <br />
                <input 
                    type="email"
                    name="email"
                    value={userDetails.email} 
                    onChange={handleChange}
                /> <br />
                </label>
                <label>Password <br />
                <input 
                    name="password"
                    onChange={handleChange}
                    type="password" 
                    value={userDetails.password}
                /> <br />
                </label>
                <input className = "button" 
                    type="submit" 
                    onClick = {handleSubmit} 
                /><br />
                <label className="checkBox">
                    <input type = "checkbox" />
                    <span>Remember Me</span>
                </label><br />
               
                <ArrowCircleLeftIcon className = "icon" onClick = {() => navigate("/")}/>
            </form>
        </div>
    )
}