import React, { useState, createContext } from 'react'
const AuthenticationAPI = createContext()

export function AuthenticationContext({ children }) {
    const [login, setLogin] = useState(false)
    const [userDbId, setUserDbId] = useState("")
    return (
        <AuthenticationAPI.Provider value={{ login, setLogin, userDbId, setUserDbId }}>
            {children}
        </AuthenticationAPI.Provider>
    )
}

export default AuthenticationAPI
