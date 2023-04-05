import React, { useState, createContext } from 'react'
const DeviceListAPI = createContext()
export function DeviceContext({ children }) {
    const [roomList, setRoomList] = useState([{ ID: 0, name: 'Trung tâm', type: 'home' }, { ID: 1, name: 'Phòng bếp', type: 'kitchen' }, { ID: 2, name: 'Phòng ngủ', type: 'bedroom' }])
    const [deviceList, setDeviceList] = useState([[{ ID: 0, name: 'Bóng đèn 0', type: 'bulb' }, { ID: 1, name: 'Quạt 0', type: 'fan' }],
    [{ ID: 0, name: 'Bóng đèn 1', type: 'bulb' }, { ID: 1, name: 'Quạt 1', type: 'fan' }],
    [{ ID: 0, name: 'Bóng đèn 2', type: 'bulb' }, { ID: 1, name: 'Quạt 2', type: 'fan' }]])
    return (
        <DeviceListAPI.Provider
            value={{
                roomList,
                deviceList,
            }}>
            {children}
        </DeviceListAPI.Provider>
    )
}

export default DeviceListAPI
