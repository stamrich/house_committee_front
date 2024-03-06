import { createContext, useEffect, useState } from "react";

import { useAuth } from "../Hooks/auth/auth";

export const UsersInfoContext = createContext(null);

function UsersInfoContextProvider({ children }) {
    const [currentBuilding, setCurrentBuilding] = useState({
        id: 0,
        address: "כל הבניינים",
    });
    const [allBuildings, setAllBuildings] = useState([
        { id: 0, address: "כל הבניינים" },
    ]);
    const { axiosApi } = useAuth();

    useEffect(() => {
        const fetchAllData = async () => {
            try {
                const res = await axiosApi.get(`/info/allBuildings`);
                setAllBuildings([
                    { id: 0, address: "כל הבניינים" },
                    ...res.data,
                ]);
            } catch (error) {
                console.log(error);
            }
        };
        fetchAllData(); // eslint-disable-next-line
    }, []);

    const allUsersInfo = {
        allBuildings: allBuildings,
        updateCurrentBuilding: { currentBuilding, setCurrentBuilding },
    };

    return (
        <UsersInfoContext.Provider value={allUsersInfo}>
            {children}
        </UsersInfoContext.Provider>
    );
}

export default UsersInfoContextProvider;
