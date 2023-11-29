import { UserProvider } from "./auth/auth.js";

const AppProvider = ({ children }) => (
    <>
        <UserProvider>{children}</UserProvider>
    </>
);

export default AppProvider;
