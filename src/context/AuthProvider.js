import { useState } from "react";
import AuthContext  from "./Authcontext";

export default AuthProvider = ({ children }) => {
    const [myRole, setMyRole] = useState('')
    const [myUser, setMyUser] = useState('')
    const [activeType, setActiveType] = useState('')

    // const login = () => {
    //     setIsAuthenticated(true);
    // };

    // const logout = () => {
    //     setIsAuthenticated(false);
    // };

    return (
        <AuthContext.Provider value={{ myRole, setMyRole, myUser, setMyUser, activeType, setActiveType }}>
            {children}
        </AuthContext.Provider>
    );
};