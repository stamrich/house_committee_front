import { UserProvider } from "./auth/auth.jsx";

const AppProvider = ({ children }) => (
    <>
        <UserProvider>{children}</UserProvider>
    </>
);

export default AppProvider;
