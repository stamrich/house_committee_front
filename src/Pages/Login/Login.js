import React, { useState } from "react";
import { useAuth } from "../../hooks/auth/auth.js";

import "./Login.css";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { login } = useAuth();

    // //not relevant for here but still useful
    // const logout = () => {
    //     setUser(null);
    //     cookies.remove("jwt_authorization");
    // };

    // // const login = (jwt_token) => {
    // //     const decode = jwtDecode(jwt_token);

    // //     cookies.set("jwt_authorization", jwt_token, {
    // //         expires: new Date(decode.exp * 1000),
    // //     });
    // // };

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     try {
    //         const res = await axios.post("/login", {
    //             username,
    //             password,
    //         });
    //         login(res.data.accessToken);
    //         console.log(res);
    //         setUser(res.data);
    //         console.log(user);
    //     } catch (err) {
    //         console.log(err);
    //     }
    // };
    // useEffect(() => {
    //     console.log("trying to return home");
    //     navigator("/");
    // }, [user]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(username, password);
        login({ username, password });
    };

    return (
        <div className="Login">
            <form onSubmit={handleSubmit}>
                <span className="formTitle">ועד בית</span>
                <input
                    type="text"
                    placeholder="מייל"
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="סיסמה"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit" className="submitButton">
                    כניסה
                </button>
            </form>
        </div>
    );
}

export default Login;
