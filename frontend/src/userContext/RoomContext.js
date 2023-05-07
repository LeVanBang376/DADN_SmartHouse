import React, { useState, createContext } from 'react'
const RoomAPI = createContext()
export function RoomContext({ children }) {
    const [roomID, setRoomID] = useState(0)
    return (
        <RoomAPI.Provider
            value={{
                roomID,
                setRoomID
            }}>
            {children}
        </RoomAPI.Provider>
    )
}

export default RoomAPI
