import React from 'react'
import { View, Text, SafeAreaView, ScrollView, Pressable } from 'react-native'
import SensorItem from '../../components/sensorItem/SensorItem'
import DeviceItem from '../../components/deviceItem/DeviceItem'
import DeviceDetail from '../../components/deviceDetail/DeviceDetail'
import styles from './styles'
import DeviceListAPI from '../../userContext/DeviceContext'
import SensorListAPI from '../../userContext/SensorContext'
import UserHelperAPI from '../../userContext/UserHelperContext'

export default function RoomDetail({ route }) {
    const { deviceList } = React.useContext(DeviceListAPI)
    const { sensorList } = React.useContext(SensorListAPI)
    const { setIsChoosed } = React.useContext(UserHelperAPI)
    const devices = deviceList.filter(device => device.roomId === route.params.ID)
    const sensors = sensorList.filter(sensor => sensor.roomId === route.params.ID)
    const [name, setName] = React.useState(devices.length > 0 ? devices[0].deviceName : '')
    const [type, setType] = React.useState(devices.length > 0 ? devices[0].deviceType : '')
    const [relay, setRelay] = React.useState(devices.length > 0 ? devices[0].relay : '')
    const choose = (device) => {
        setName(device.deviceName)
        setType(device.deviceType)
        setRelay(device.relay)
        setIsChoosed(device.relay)
    }
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <Text style={styles.headerText}>Cảm biến</Text>
            <SafeAreaView style={{ height: 195 }}>
                <ScrollView>
                    <View style={styles.sensorContainer}>
                        {
                            sensors.map((sensor, number) => (
                                <SensorItem key={number} id={route.params.ID} name={sensor.sensorName} type={sensor.sensorType} addSensor={false} />
                            ))
                        }
                        <SensorItem id={route.params.ID} addSensor={true} />
                    </View>
                </ScrollView>
            </SafeAreaView>

            <View style={styles.line}></View>
            <Text style={styles.headerText}>Thiết bị</Text>
            <SafeAreaView style={styles.scrollView}>
                <ScrollView horizontal={true} >
                    {
                        devices.map((device, number) =>
                        (
                            <Pressable onPress={() => choose(device)}>
                                <DeviceItem key={number} id={device.relay} name={device.deviceName} type={device.deviceType} addDevice={false} />
                            </Pressable>
                        ))
                    }
                    <Pressable >
                        <DeviceItem addDevice={true} />
                    </Pressable>
                </ScrollView>
            </SafeAreaView>
            <View style={styles.line2}></View>
            <View style={styles.deviceDetail}>
                <DeviceDetail name={name} type={type} relay={relay} id={route.params.ID} roomName={route.params.name} />
            </View>
        </View >
    )
}
