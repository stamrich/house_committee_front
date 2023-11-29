import { createContext, useContext, useMemo } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import api from "../../services/api";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const navigate = useNavigate();
    const [cookies, setCookies, removeCookie] = useCookies();

    const login = async ({ username, password }) => {
        try {
            const res = await axios.post("/api/login", {
                username: username,
                password: password,
            });
            console.log("res:");
            console.log(res);
            setCookies("token", res.data.accessToken); // your token
            setCookies("name", res.data.username); // optional data

            navigate("/");
        } catch (error) {
            console.log(error);
        }
    };

    const logout = () => {
        ["token", "name"].forEach((obj) => removeCookie(obj)); // remove data save in cookies
        navigate("/login");
    };

    const value = useMemo(
        () => ({
            cookies,
            login,
            logout,
        }),
        // eslint-disable-next-line
        [cookies]
    );

    return (
        <UserContext.Provider value={value}>{children}</UserContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(UserContext);
};
