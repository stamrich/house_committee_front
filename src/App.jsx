import { Routes, Route } from "react-router-dom";

//Pages
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";

//Context
import { ProtectRoutes } from "./Hooks/protectRoutes/protectRoutes.jsx";

//Styles
import "./App.css";

function App() {
    return (
        <div className="App">
            <Routes>
                {/* <Route path="/*" element={<Navigate to="home" exact />} /> */}
                <Route path="/login" element={<Login />} />

                <Route element={<ProtectRoutes />}>
                    <Route path="/*" element={<Home />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
