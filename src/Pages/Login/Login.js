import React, { useState } from "react";
import { useAuth } from "../../hooks/auth/auth.js";

import PersonIcon from "../../Icons/PersonIcon.js";
import KeyIcon from "../../Icons/KeyIcon.js";

import "./Login.css";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [response, setResponse] = useState("");
    const { login } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(username, password);
        const res = await login({ username, password });
        setResponse(res);
    };

    return (
        <div className="Login">
            <form onSubmit={handleSubmit}>
                <span className="formTitle">ועד בית</span>
                <div>
                    <PersonIcon
                        fillColor={"gray"}
                        height={"24px"}
                        width={"24px"}
                    />{" "}
                    שם משתמש:
                </div>
                <input
                    type="text"
                    placeholder="שם משתמש"
                    onChange={(e) => setUsername(e.target.value)}
                />
                <div>
                    <KeyIcon
                        fillColor={"gray"}
                        height={"40px"}
                        width={"40px"}
                    />
                    סיסמה:
                </div>
                <input
                    type="password"
                    placeholder="סיסמה"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <div className="response-message">{response}</div>
                <button type="submit" className="submitButton">
                    כניסה
                </button>
            </form>
        </div>
    );
}

export default Login;
