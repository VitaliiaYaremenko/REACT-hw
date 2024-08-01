import React, { createContext, useContext, useState } from "react";
import Cookies from 'js-cookie';


const AuthContext = createContext();
 const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(Cookies.get('token') || null);
    const login = (userToken) => {
        setToken(userToken);
        Cookies.set('token', userToken, { expires: 7 });
    };
    const logout = () => {
        setToken(null);
        Cookies.remove('token');
    };
    const isAuthenticated = !!token;
    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};

export default AuthProvider;
