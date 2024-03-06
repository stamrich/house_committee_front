import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../auth/auth.jsx";

export const ProtectRoutes = () => {
    const { cookies } = useAuth();

    return cookies.accessToken || cookies.refreshToken ? (
        <Outlet />
    ) : (
        <Navigate to="/login" exact />
    );
};
