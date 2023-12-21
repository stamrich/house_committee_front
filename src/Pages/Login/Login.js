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
            <div class="my-login-box">
                <div className="square" style={{ "--i": 0 }}></div>
                <div className="square" style={{ "--i": 1 }}></div>
                <div className="square" style={{ "--i": 2 }}></div>
                <div className="square" style={{ "--i": 3 }}></div>
                <div className="square" style={{ "--i": 4 }}></div>
                <form onSubmit={handleSubmit}>
                    <span className="form-title">ועד הבית המרכזי</span>
                    <div className="input-label">
                        <PersonIcon
                            fillColor={"black"}
                            height={"24px"}
                            width={"40px"}
                        />{" "}
                        שם משתמש:
                    </div>
                    <input
                        type="text"
                        placeholder="שם משתמש"
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <div className="input-label">
                        <KeyIcon
                            fillColor={"black"}
                            height={"35px"}
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
        </div>
    );
}

export default Login;
