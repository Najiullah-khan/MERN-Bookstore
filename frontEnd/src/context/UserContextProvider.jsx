import React, { createContext, useContext, useState, useEffect } from 'react';

// Create the auth context
export const AuthContext = createContext();

// Define the context provider component
function UserContextProvider({ children }) {
    const initialAuth = localStorage.getItem("user");
    const [auth, setAuth] = useState(
        initialAuth ? JSON.parse(initialAuth) : undefined
    );

    // Persist auth state to localStorage when it changes
    useEffect(() => {
        if (auth) {
            localStorage.setItem("user", JSON.stringify(auth));
        } else {
            localStorage.removeItem("user");
        }
    }, [auth]);

    return (
        <AuthContext.Provider value={[ auth, setAuth ]}>
            {children}
        </AuthContext.Provider>
    );
}

// Custom hook to use auth context
export const useAuth = () => useContext(AuthContext);

export default UserContextProvider;
