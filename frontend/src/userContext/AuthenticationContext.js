import React, { useState, createContext } from 'react'
const AuthenticationAPI = createContext()

export function AuthenticationContext({ children }) {
    const [login, setLogin] = useState(true)
    return (
        <AuthenticationAPI.Provider value={{ login, setLogin }}>
            {children}
        </AuthenticationAPI.Provider>
    )
}

export default AuthenticationAPI
