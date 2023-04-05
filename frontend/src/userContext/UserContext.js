import React, { useState, createContext, useRef } from 'react'
import RoomAPI from './RoomContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import init from 'react_native_mqtt';
init({
    size: 10000,
    storageBackend: AsyncStorage,
    defaultExpires: 1000 * 3600 * 24,
    enableCache: true,
    reconnect: false,
    sync: {}
});

const UserAPI = createContext()
export function UserContext({ children }) {
    const { roomID } = React.useContext(RoomAPI)
    const currentRoom = useRef(0)
    const [message, setMessage] = useState('{\"ID\":0,\"TEMP\":...,\"HUMID\":...,\"LIGHT\":...,\"RELAY_0\":false,\"RELAY_1\":true}')
    const message0 = useRef('{\"ID\":0,\"TEMP\":...,\"HUMID\":...,\"LIGHT\":...,\"RELAY_0\":false,\"RELAY_1\":true}')
    const message1 = useRef('{\"ID\":1,\"TEMP\":...,\"HUMID\":...,\"LIGHT\":...,\"RELAY_0\":false,\"RELAY_1\":true}')
    const message2 = useRef('{\"ID\":2,\"TEMP\":...,\"HUMID\":...,\"LIGHT\":...,\"RELAY_0\":false,\"RELAY_1\":true}')
    const [devicesState, setDevicesState] = useState({ 'dv0_0': 'false', 'dv0_1': 'true', 'dv1_0': 'false', 'dv1_1': 'false', 'dv2_0': 'false', 'dv2_1': 'false', })
    console.log(devicesState)
    React.useEffect(() => {
        if (roomID == 0) {
            setMessage(message0.current)
        } else if (roomID == 1) {
            setMessage(message1.current)
        } else setMessage(message2.current)
        currentRoom.current = roomID
    }, [roomID])
    console.log(devicesState)
    const onMessageArrived = (message) => {
        var str = message.payloadString
        if (str[str.indexOf('\"ID\"') + 5] == '0') {
            message0.current = str
            const help = devicesState
            help['dv0_0'] = str.slice(str.indexOf('RELAY_0') + 9, str.indexOf(',\"RELAY_1'))
            help['dv0_1'] = str.slice(str.indexOf('RELAY_1') + 9, str.indexOf('}'))
            setDevicesState(help)
        } else if (str[str.indexOf('\"ID\"') + 5] == '1') {
            message1.current = str
            const help = devicesState
            help['dv1_0'] = str.slice(str.indexOf('RELAY_0') + 9, str.indexOf(',\"RELAY_1'))
            help['dv1_1'] = str.slice(str.indexOf('RELAY_1') + 9, str.indexOf('}'))
            setDevicesState(help)
        } else {
            message2.current = str
            const help = devicesState
            help['dv2_0'] = str.slice(str.indexOf('RELAY_0') + 9, str.indexOf(',\"RELAY_1'))
            help['dv2_1'] = str.slice(str.indexOf('RELAY_1') + 9, str.indexOf('}'))
            setDevicesState(help)
        }
        { currentRoom.current == 0 ? setMessage(message0.current) : [currentRoom.current == 1 ? setMessage(message1.current) : setMessage(message2.current)] }
    }

    React.useEffect(() => {
        function onConnect() {
            console.log("Subscriber: onConnect");
            client.subscribe('smart_home_data');

        }
        function onConnectionLost(responseObject) {
            if (responseObject.errorCode !== 0) {
                console.log("Subscriber onConnectionLost:" + responseObject.errorMessage);

            }
        }
        const client = new Paho.MQTT.Client('broker.hivemq.com', 8000, "Subscriber:" + Math.round(Math.random(100000000, 1000000000) * 1000000000))
        client.connect({ onSuccess: onConnect, useSSL: false });
        client.onMessageArrived = onMessageArrived;
        client.onConnectionLost = onConnectionLost;
    }, [])


    return (
        <UserAPI.Provider
            value={{
                message,
                devicesState,
                setDevicesState
            }}>
            {children}
        </UserAPI.Provider>
    )
}

export default UserAPI