import React from 'react'
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
const PublisherAPI = React.createContext()
export function PublisherContext({ children }) {
    function onConnectPublish() {
        console.log("Publisher: onConnect");

    }
    function onConnectionLostPublish(responseObject) {
        if (responseObject.errorCode !== 0) {
            console.log("Publisher onConnectionLost:" + responseObject.errorMessage);

        }
    }
    var clientPublish = new Paho.MQTT.Client('broker.hivemq.com', 8000, "Publisher:" + Math.round(Math.random(100000000, 1000000000) * 1000000000));
    clientPublish.connect({ onSuccess: onConnectPublish, useSSL: false });
    clientPublish.onConnectionLost = onConnectionLostPublish;
    const publishCommand = (command) => {
        clientPublish.publish('smart_home_command', command)
        console.log(command)
    }
    return (
        <PublisherAPI.Provider value={{ publishCommand }}>
            {children}
        </PublisherAPI.Provider>
    )
}
export default PublisherAPI
