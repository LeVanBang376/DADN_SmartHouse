import React from 'react'
import { View, Text, SafeAreaView, ScrollView, Pressable } from 'react-native'
import SensorItem from '../../components/sensorItem/SensorItem'
import DeviceItem from '../../components/deviceItem/DeviceItem'
import DeviceDetail from '../../components/deviceDetail/DeviceDetail'
import styles from './styles'
import DeviceListAPI from '../../userContext/DeviceContext'
import UserHelperAPI from '../../userContext/UserHelperContext'

export default function RoomDetail({ route }) {
    const { deviceList } = React.useContext(DeviceListAPI)
    const { setIsChoosed } = React.useContext(UserHelperAPI)
    const devices = deviceList[route.params.ID]
    const [id, setId] = React.useState(devices.length > 0 ? devices[0].ID : '')
    const [name, setName] = React.useState(devices.length > 0 ? devices[0].name : '')
    const [type, setType] = React.useState(devices.length > 0 ? devices[0].type : '')
    const choose = (device) => {
        setName(device.name)
        setType(device.type)
        setId(device.ID)
        setIsChoosed(device.ID)
    }
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <Text style={styles.headerText}>Cảm biến</Text>

            {route.params.ID == 0 ?
                (<View style={styles.sensorContainer}>
                    <SensorItem type='temp' id={route.params.ID} />
                    <SensorItem type='humid' id={route.params.ID} />
                    <SensorItem type='light' id={route.params.ID} />
                </View>
                ) :
                [route.params.ID == 1 ?
                    (
                        <View style={styles.sensorContainer}>
                            <SensorItem type='temp' id={route.params.ID} />
                            <SensorItem type='humid' id={route.params.ID} />
                            <SensorItem type='light' id={route.params.ID} />
                        </View>
                    ) :
                    (
                        <View style={styles.sensorContainer}>
                            <SensorItem type='temp' id={route.params.ID} />
                            <SensorItem type='humid' id={route.params.ID} />
                            <SensorItem type='light' id={route.params.ID} />
                        </View>
                    )
                ]

            }


            <View style={styles.line}></View>
            <Text style={styles.headerText}>Thiết bị</Text>
            <SafeAreaView style={styles.scrollView}>
                <ScrollView horizontal={true} >
                    {
                        devices.map((device, number) =>
                        (
                            <Pressable onPress={() => choose(device)}>
                                <DeviceItem key={number} id={device.ID} name={device.name} type={device.type} />
                            </Pressable>
                        ))
                    }
                </ScrollView>
            </SafeAreaView>
            <View style={styles.line2}></View>
            <View style={styles.deviceDetail}>
                <DeviceDetail name={name} type={type} id={route.params.ID} />
            </View>
        </View>
    )
}
