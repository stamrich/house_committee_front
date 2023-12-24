import React, { useState } from "react";
import { useAuth } from "../../hooks/auth/auth.js";

import PersonIcon from "../../Icons/PersonIcon.js";
import KeyIcon from "../../Icons/KeyIcon.js";
import EyeIcon from "../../Icons/EyeIcon.js";

import "./Login.css";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [response, setResponse] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const { login } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(username, password);
        const res = await login({ username, password });
        setResponse(res);
    };

    return (
        <div className="Login">
            <div className="my-login-box">
                <div className="square" style={{ "--i": 0 }}></div>
                <div className="square" style={{ "--i": 1 }}></div>
                <div className="square" style={{ "--i": 2 }}></div>
                <div className="square" style={{ "--i": 3 }}></div>
                <div className="square" style={{ "--i": 4 }}></div>
                <form onSubmit={handleSubmit} className="box-shadow">
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
                    <div className="password-input-box">
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="סיסמה"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <div
                            className="eye-icon"
                            onClick={() => {
                                setShowPassword((old) => !old);
                            }}>
                            <EyeIcon height="20" width="20" fillColor="black" />
                        </div>
                    </div>
                    <div className="response-message">{response}</div>
                    <button type="submit" className="button">
                        כניסה
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Login;
