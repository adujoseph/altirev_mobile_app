import { useState } from "react";
import AuthContext  from "./Authcontext";

export default AuthProvider = ({ children }) => {
    const [myRole, setMyRole] = useState('')
    const [myUser, setMyUser] = useState('')
    const [activeType, setActiveType] = useState('')
    const [videoLink, setVideoLink] = useState('')
    const [audioLink, setAudioLink] = useState('')

    return (
        <AuthContext.Provider value={{ myRole, setMyRole, myUser, setMyUser, activeType, setActiveType, videoLink, setVideoLink, audioLink, setAudioLink }}>
            {children}
        </AuthContext.Provider>
    );
};