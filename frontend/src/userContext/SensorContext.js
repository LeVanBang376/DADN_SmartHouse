import React, { useState, createContext } from 'react'
import AuthenticationAPI from './AuthenticationContext'
const SensorListAPI = createContext()
export function SensorContext({ children }) {
    const [sensorList, setSensorList] = useState([])
    const { userDbId } = React.useContext(AuthenticationAPI)
    const getSensors = () => {
        if (userDbId != "") {
            fetch('http://172.17.13.131:3333/getsensors', {
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
                            setSensorList(data)
                    }
                )
        }

    }

    React.useEffect(() => {
        getSensors()
    }, [userDbId])

    return (
        <SensorListAPI.Provider
            value={{
                sensorList,
                setSensorList
            }}>
            {children}
        </SensorListAPI.Provider>
    )
}

export default SensorListAPI
