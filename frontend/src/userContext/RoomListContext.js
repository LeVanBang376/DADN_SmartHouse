import React, { useState, createContext } from 'react'
import AuthenticationAPI from './AuthenticationContext'
const RoomListAPI = createContext()
export function RoomListContext({ children }) {
    const [roomList, setRoomList] = useState([])
    const { userDbId } = React.useContext(AuthenticationAPI)
    const getRooms = () => {
        if (userDbId != "") {
            fetch('http://172.17.13.131:3333/getrooms', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    userDbId: userDbId,
                })
            })
                .then(res => res.json()).then(
                    data => {
                        if (!data.error)
                            setRoomList(data)
                    }
                )
        }
    }


    React.useEffect(() => {
        getRooms()
    }, [userDbId])

    return (
        <RoomListAPI.Provider
            value={{
                roomList,
                setRoomList,
            }}>
            {children}
        </RoomListAPI.Provider>
    )
}

export default RoomListAPI
