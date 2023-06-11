import React, { useState, createContext } from 'react'
const UserHelperAPI = createContext()

export function UserHelperContext({ children }) {
    const [isChoosed, setIsChoosed] = useState(0)
    return (
        <UserHelperAPI.Provider
            value={{
                isChoosed,
                setIsChoosed
            }}>
            {children}
        </UserHelperAPI.Provider>
    )
}

export default UserHelperAPI