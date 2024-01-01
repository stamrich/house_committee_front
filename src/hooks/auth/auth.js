import { createContext, useContext, useMemo } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import api from "../../services/api";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const navigate = useNavigate();
    const [cookies, setCookies, removeCookie] = useCookies();

    const axiosApi = axios.create({
        baseURL: "/api/",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            authorization: cookies.refreshToken,
        },
    });

    // const axiosApiDownload = axios.create({
    //     baseURL: "http://localhost:5000/api/",
    //     headers: {
    //         Accept: "application/json",
    //         "Content-Type": "application/json",
    //         authorization: cookies.refreshToken,
    //     },
    // });

    axiosApi.interceptors.response.use(
        function (response) {
            return response;
        },
        function (error) {
            console.log(error.response !== undefined);
            let res = error.response;
            if (error.response !== undefined) {
                if (res.status === 401) {
                    logout();
                }
                console.error(
                    "Looks like there was a problem. Status Code: " + res.status
                );
            }
            return Promise.reject(error);
        }
    );

    const login = async ({ username, password }) => {
        try {
            const res = await axiosApi.post("/login", {
                username: username,
                password: password,
            });
            setCookies("accessToken", res.data.accessToken); // your token
            setCookies("refreshToken", res.data.accessToken); // your token
            setCookies("name", res.data.fullName);

            navigate("/");
        } catch (error) {
            console.log(error);
            if (error.response !== undefined) {
                if (error.response.status === 400) {
                    return "שם משתמש או הסיסמה שגויים";
                }
            }
            return "משהו השתבש, תנסה שוב מאוחר יותר";
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
            axiosApi,
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
