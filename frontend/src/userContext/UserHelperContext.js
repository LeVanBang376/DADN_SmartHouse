import React, { useState, createContext } from 'react'
const UserHelperAPI = createContext()

export function UserHelperContext({ children }) {
    const [isChoosed, setIsChoosed] = useState(0)
    // const [temp, setTemp] = useState('...')
    // const [humid, setHumid] = useState('...')
    // const [light, setLight] = useState('...')
    // const [temp1, setTemp1] = useState('...')
    // const [humid1, setHumid1] = useState('...')
    // const [light1, setLight1] = useState('...')
    // const [temp2, setTemp2] = useState('...')
    // const [humid2, setHumid2] = useState('...')
    // const [light2, setLight2] = useState('...')
    // const [relay0, setRelay0] = useState({ relay_0: 'false', relay_1: 'false' })
    // const [relay1, setRelay1] = useState({ relay_0: 'false', relay_1: 'false' })
    // const [relay2, setRelay2] = useState({ relay_0: 'false', relay_1: 'false' })
    return (
        <UserHelperAPI.Provider
            value={{
                // temp,
                // humid,
                // light,
                // setTemp,
                // setHumid,
                // setLight,
                // temp1,
                // humid1,
                // light1,
                // setTemp1,
                // setHumid1,
                // setLight1,
                // temp2,
                // humid2,
                // light2,
                // setTemp2,
                // setHumid2,
                // setLight2,
                // relay0,
                // relay1,
                // relay2,
                // setRelay0,
                // setRelay1,
                // setRelay2,
                isChoosed,
                setIsChoosed
            }}>
            {children}
        </UserHelperAPI.Provider>
    )
}

export default UserHelperAPI