import React, { useState, useEffect, startTransition } from 'react'
import { Text, View, Button, StyleSheet } from "react-native";
import Sensor_item from "../../components/sonsor_item/Sensor_item";
import styles from "./styles";

import AsyncStorage from '@react-native-async-storage/async-storage';
import init from 'react_native_mqtt';

init({
    size: 10000,
    storageBackend: AsyncStorage,
    defaultExpires: 1000 * 3600 * 24,
    enableCache: true,
    reconnect: true,
    sync: {}
});

const sensorScreen = () => {
    const [temp, setTemp] = useState('...')
    const [humid, setHumid] = useState('...')
    const [light, setLight] = useState('...')
    const [value, setValue] = useState('')
    const onMessageArrived = (message) => {
        var str = message.payloadString
        var x = "\nTopic : " + message.topic + "\nMessage : " + str;
        setTemp(str.slice(6, 7))
        setHumid(str.slice(str.indexOf('HUMID') + 7, str.indexOf(',\"LIGHT')))
        setLight(str.slice(str.indexOf('LIGHT') + 7, str.indexOf('}')))
        console.log(str)
    }

    function onConnect() {
        console.log("onConnect");
        client.subscribe('smart_home_data');
    }

    function onConnectionLost(responseObject) {
        if (responseObject.errorCode !== 0) {
            console.log("onConnectionLost:" + responseObject.errorMessage);
        }
    }
    const client = new Paho.MQTT.Client('broker.hivemq.com', 8000, 'DADN');
    client.onMessageArrived = onMessageArrived;
    client.connect({ onSuccess: onConnect, useSSL: false });
    client.onConnectionLost = onConnectionLost;
    return (
        <View style={styles.container} >
            <Sensor_item type="temperature-high" temp={temp} humid={humid} light={light} name="Nhiệt độ" />
            <Sensor_item type="light-up" temp={temp} humid={humid} light={light} name="Ánh sáng" />
            <Sensor_item type="rainy-outline" temp={temp} humid={humid} light={light} name="Độ ẩm" />
        </View>
    )
}

export default sensorScreen

