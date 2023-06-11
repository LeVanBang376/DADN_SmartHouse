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
    const [message, setMessage] = useState('')
    const message0 = useRef('')
    const message1 = useRef('')
    const message2 = useRef('')
    React.useEffect(() => {
        if (roomID == 0) {
            setMessage(message0.current)
        } else if (roomID == 1) {
            setMessage(message1.current)
        } else setMessage(message2.current)
        currentRoom.current = roomID
    }, [roomID])
    const onMessageArrived = (message) => {
        var str = message.payloadString
        if (str[str.indexOf('\"ID\"') + 5] == '0') {
            message0.current = str
        } else if (str[str.indexOf('\"ID\"') + 5] == '1') {
            message1.current = str
        } else {
            message2.current = str
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
                message
            }}>
            {children}
        </UserAPI.Provider>
    )
}

export default UserAPI