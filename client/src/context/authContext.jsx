/*
* Keep track of user state through all the pages of application
*/
import axios from "axios";
import { createContext, useEffect, useState } from "react";


export const AuthContext = createContext();

// children are components that we're wrapping ctx provide
export const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(
      JSON.parse(localStorage.getItem("user") || null)
    );
    
    const login = async(inputs) => {
        const res = await axios.post("/auth/login", inputs);
        setCurrentUser(res.data);
    };

    const logout = async(inputs) => {
        await axios.post("/auth/logout");
        setCurrentUser(null);
    };

    // update localStorage each time user changes
    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(currentUser));
    }, [currentUser]);

    return (
        <AuthContext.Provider value={{ currentUser, login, logout }}>
            { children }
        </AuthContext.Provider>
    )
}
