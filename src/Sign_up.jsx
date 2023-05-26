import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from "./config/firebase";
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';

export default function SignUp() {
    let navigate = useNavigate();
    const [user, setUser] = useState({
        uname: "",
        email: "",
        phone: "",
        password: ""
    });

    function handleChange(event) {
        const { name, value } = event.target;

        setUser(preValue => {
            return {
              ...preValue,
                [name]: value
            };
        });
    }

    const handleSubmit = async (event) => {
        try {
            event.preventDefault();
            const registeredUser = await createUserWithEmailAndPassword(auth, user.email, user.password);
            console.log(registeredUser.user);
            navigate("/main", { state: { userName: user.uname} });
        }catch (error) {
            console.log(error.message);
        }
    }

    return (
        <div className="form">
            <form>
                <h2>Sign-Up</h2>
                <label>Enter your name: <br />
                    <input 
                        onChange={handleChange}
                        type="text" 
                        name="uname"
                        value={user.uname}
                    /> <br />
                </label>
                <label>Enter your Email: <br />
                    <input 
                        onChange={handleChange}
                        type="email" 
                        name="email"
                        value={user.email}
                    /> <br />
                </label>
                <label>Enter your Phone Number: <br />
                    <input 
                        onChange={handleChange}
                        type="tel" 
                        name="phone"
                        value={user.phone}
                    /> <br /> 
                </label>
                <label>Enter your Password: <br />
                    <input
                        onChange={handleChange}
                        type="password" 
                        name="password"
                        value={user.password} /> <br />
                </label>
                <input className = "button" 
                    type="submit" 
                    onClick = {handleSubmit} 
                />
            <ArrowCircleLeftIcon onClick = {() => navigate("/")}/>

            </form>
        </div>
    )
}

