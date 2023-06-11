import React, { useState } from 'react'
import { View, Text, Pressable, Switch, Modal, SafeAreaView, TextInput } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient';
import SelectDropdown from 'react-native-select-dropdown'
import UserHelperAPI from '../../userContext/UserHelperContext';
import PublisherAPI from '../../userContext/PublisherContext';
import UserAPI from '../../userContext/UserContext';
import styles from './styles'
import DeviceListAPI from '../../userContext/DeviceContext';
import ActivityListAPI from '../../userContext/ActivityContext';
import RoomAPI from '../../userContext/RoomContext';
import AuthenticationAPI from '../../userContext/AuthenticationContext';
const Tab = createBottomTabNavigator();

function State({ route }) {
    const roomID = route.params.id
    const { userDbId } = React.useContext(AuthenticationAPI)
    const { isChoosed } = React.useContext(UserHelperAPI)
    const { message } = React.useContext(UserAPI)
    const { deviceList, setDeviceList } = React.useContext(DeviceListAPI)
    const { publishCommand } = React.useContext(PublisherAPI)
    const { activityList, setActivityList } = React.useContext(ActivityListAPI)
    const [device, setDevice] = React.useState(deviceList.filter(device => device.roomId == roomID && device.relay == isChoosed))
    React.useEffect(() => {
        setDevice(deviceList.filter(device => device.roomId == roomID && device.relay == isChoosed))
    }, [isChoosed])


    const autoWithSensor = (mes) => {
        deviceList.map(deviceElement => {
            if (deviceElement.sensorAuto == 'on') {
                if (deviceElement.state == 'on') {
                    if (deviceElement.deviceType == 'fan' && Number(mes.slice(mes.indexOf('TEMP') + 6, mes.indexOf(',\"HUMID'))) <= Number(deviceElement.offSensor)) {
                        fetch('http://172.17.13.131:3333/changedevice2', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({
                                deviceName: deviceElement.deviceName,
                                userDbId: userDbId,
                                roomId: roomID,
                                state: 'off',
                                timeAuto: deviceElement.timeAuto,
                                sensorAuto: deviceElement.sensorAuto,
                                onHour: deviceElement.onHour,
                                onMin: deviceElement.onMin,
                                offHour: deviceElement.offHour,
                                offMin: deviceElement.offMin,
                                onSensor: deviceElement.onSensor,
                                offSensor: deviceElement.offSensor,
                            })
                        })
                            .then(res => res.json()).then(
                                data => {
                                    updatedDeviceList = deviceList.map(element => {
                                        if (element.deviceName == deviceElement.deviceName && element.roomId == roomID) {
                                            return {
                                                ...element,
                                                state: 'off'
                                            }
                                        } else return element
                                    })
                                    setDeviceList(updatedDeviceList)
                                }
                            )
                    } else if (deviceElement.deviceType == 'bulb' && Number(mes.slice(mes.indexOf('LIGHT') + 7, mes.indexOf(',\"RELAY'))) >= Number(deviceElement.offSensor)) {
                        fetch('http://172.17.13.131:3333/changedevice2', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({
                                deviceName: deviceElement.deviceName,
                                userDbId: userDbId,
                                roomId: roomID,
                                state: 'off',
                                timeAuto: deviceElement.timeAuto,
                                sensorAuto: deviceElement.sensorAuto,
                                onHour: deviceElement.onHour,
                                onMin: deviceElement.onMin,
                                offHour: deviceElement.offHour,
                                offMin: deviceElement.offMin,
                                onSensor: deviceElement.onSensor,
                                offSensor: deviceElement.offSensor,
                            })
                        })
                            .then(res => res.json()).then(
                                data => {
                                    updatedDeviceList = deviceList.map(element => {
                                        if (element.deviceName == deviceElement.deviceName && element.roomId == roomID) {
                                            return {
                                                ...element,
                                                state: 'off'
                                            }
                                        } else return element
                                    })
                                    setDeviceList(updatedDeviceList)
                                }
                            )
                    }
                } else {
                    if (deviceElement.deviceType == 'fan' && Number(mes.slice(mes.indexOf('TEMP') + 6, mes.indexOf(',\"HUMID'))) >= Number(deviceElement.onSensor)) {
                        fetch('http://172.17.13.131:3333/changedevice2', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({
                                deviceName: deviceElement.deviceName,
                                userDbId: userDbId,
                                roomId: roomID,
                                state: 'on',
                                timeAuto: deviceElement.timeAuto,
                                sensorAuto: deviceElement.sensorAuto,
                                onHour: deviceElement.onHour,
                                onMin: deviceElement.onMin,
                                offHour: deviceElement.offHour,
                                offMin: deviceElement.offMin,
                                onSensor: deviceElement.onSensor,
                                offSensor: deviceElement.offSensor,
                            })
                        })
                            .then(res => res.json()).then(
                                data => {
                                    updatedDeviceList = deviceList.map(element => {
                                        if (element.deviceName == deviceElement.deviceName && element.roomId == roomID) {
                                            return {
                                                ...element,
                                                state: 'on'
                                            }
                                        } else return element
                                    })
                                    setDeviceList(updatedDeviceList)
                                }
                            )
                    } else if (deviceElement.deviceType == 'bulb' && Number(mes.slice(mes.indexOf('LIGHT') + 7, mes.indexOf(',\"RELAY'))) <= Number(deviceElement.onSensor)) {
                        fetch('http://172.17.13.131:3333/changedevice2', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({
                                deviceName: deviceElement.deviceName,
                                userDbId: userDbId,
                                roomId: roomID,
                                state: 'on',
                                timeAuto: deviceElement.timeAuto,
                                sensorAuto: deviceElement.sensorAuto,
                                onHour: deviceElement.onHour,
                                onMin: deviceElement.onMin,
                                offHour: deviceElement.offHour,
                                offMin: deviceElement.offMin,
                                onSensor: deviceElement.onSensor,
                                offSensor: deviceElement.offSensor,
                            })
                        })
                            .then(res => res.json()).then(
                                data => {
                                    updatedDeviceList = deviceList.map(element => {
                                        if (element.deviceName == deviceElement.deviceName && element.roomId == roomID) {
                                            return {
                                                ...element,
                                                state: 'on'
                                            }
                                        } else return element
                                    })
                                    setDeviceList(updatedDeviceList)
                                }
                            )
                    }
                }
            }
        })
    }


    React.useEffect(() => {
        var firstDevice = deviceList.filter(element => element.roomId == roomID && element.relay == 0)
        var secondDevice = deviceList.filter(element => element.roomId == roomID && element.relay == 1)
        // Lấy dữ liệu từ thiết bị 0
        if (message.slice(message.indexOf('RELAY_0') + 9, message.indexOf(',\"RELAY_1')) == "true") {
            if (firstDevice[0] && firstDevice[0].state == 'off') {
                fetch('http://172.17.13.131:3333/changedevice2', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        deviceName: firstDevice[0].deviceName,
                        userDbId: userDbId,
                        roomId: roomID,
                        state: 'on',
                        timeAuto: firstDevice[0].timeAuto,
                        sensorAuto: firstDevice[0].sensorAuto,
                        onHour: firstDevice[0].onHour,
                        onMin: firstDevice[0].onMin,
                        offHour: firstDevice[0].offHour,
                        offMin: firstDevice[0].offMin,
                        onSensor: firstDevice[0].onSensor,
                        offSensor: firstDevice[0].offSensor,
                    })
                })
                    .then(res => res.json()).then(
                        data => {
                            updatedDeviceList = deviceList.map(element => {
                                if (element.deviceName == firstDevice[0].deviceName && element.roomId == roomID) {
                                    return {
                                        ...element,
                                        state: 'on'
                                    }
                                } else return element
                            })
                            setDeviceList(updatedDeviceList)
                        }
                    )
            }
        } else if (message.slice(message.indexOf('RELAY_0') + 9, message.indexOf(',\"RELAY_1')) == "false") {
            if (firstDevice[0] && firstDevice[0].state == 'on') {
                fetch('http://172.17.13.131:3333/changedevice2', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        deviceName: firstDevice[0].deviceName,
                        userDbId: userDbId,
                        roomId: roomID,
                        state: 'off',
                        timeAuto: firstDevice[0].timeAuto,
                        sensorAuto: firstDevice[0].sensorAuto,
                        onHour: firstDevice[0].onHour,
                        onMin: firstDevice[0].onMin,
                        offHour: firstDevice[0].offHour,
                        offMin: firstDevice[0].offMin,
                        onSensor: firstDevice[0].onSensor,
                        offSensor: firstDevice[0].offSensor,
                    })
                })
                    .then(res => res.json()).then(
                        data => {
                            updatedDeviceList = deviceList.map(element => {
                                if (element.deviceName == firstDevice[0].deviceName && element.roomId == roomID) {
                                    return {
                                        ...element,
                                        state: 'off'
                                    }
                                } else return element
                            })
                            setDeviceList(updatedDeviceList)
                        }
                    )
            }
        }

        // Lấy dữ liệu từ thiết bị 1
        if (message.slice(message.indexOf('RELAY_1') + 9, message.indexOf('}')) == "true") {

            if (secondDevice[0] && secondDevice[0].state == 'off') {
                fetch('http://172.17.13.131:3333/changedevice2', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        deviceName: secondDevice[0].deviceName,
                        userDbId: userDbId,
                        roomId: roomID,
                        state: 'on',
                        timeAuto: secondDevice[0].timeAuto,
                        sensorAuto: secondDevice[0].sensorAuto,
                        onHour: secondDevice[0].onHour,
                        onMin: secondDevice[0].onMin,
                        offHour: secondDevice[0].offHour,
                        offMin: secondDevice[0].offMin,
                        onSensor: secondDevice[0].onSensor,
                        offSensor: secondDevice[0].offSensor,
                    })
                })
                    .then(res => res.json()).then(
                        data => {
                            updatedDeviceList = deviceList.map(element => {
                                if (element.deviceName == secondDevice[0].deviceName && element.roomId == roomID) {
                                    return {
                                        ...element,
                                        state: 'on'
                                    }
                                } else return element
                            })
                            setDeviceList(updatedDeviceList)
                        }
                    )
            }
        } else if (message.slice(message.indexOf('RELAY_1') + 9, message.indexOf('}')) == "false") {
            if (secondDevice[0] && secondDevice[0].state == 'on') {
                fetch('http://172.17.13.131:3333/changedevice2', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        deviceName: secondDevice[0].deviceName,
                        userDbId: userDbId,
                        roomId: roomID,
                        state: 'off',
                        timeAuto: secondDevice[0].timeAuto,
                        sensorAuto: secondDevice[0].sensorAuto,
                        onHour: secondDevice[0].onHour,
                        onMin: secondDevice[0].onMin,
                        offHour: secondDevice[0].offHour,
                        offMin: secondDevice[0].offMin,
                        onSensor: secondDevice[0].onSensor,
                        offSensor: secondDevice[0].offSensor,
                    })
                })
                    .then(res => res.json()).then(
                        data => {
                            updatedDeviceList = deviceList.map(element => {
                                if (element.deviceName == secondDevice[0].deviceName && element.roomId == roomID) {
                                    return {
                                        ...element,
                                        state: 'off'
                                    }
                                } else return element
                            })
                            setDeviceList(updatedDeviceList)
                        }
                    )
            }
        }
        autoWithSensor(message)
    }, [message])

    const saveActivity = (deviceState) => {
        fetch('http://172.17.13.131:3333/addactivity', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                deviceName: device[0].deviceName,
                userDbId: userDbId,
                roomName: route.params.name,
                state: deviceState,
                date: new Date().getDate(),
                month: new Date().getMonth() + 1,
                year: new Date().getFullYear(),
                hour: new Date().getHours(),
                minute: new Date().getMinutes(),
                second: new Date().getSeconds()
            })
        })
            .then(res => res.json()).then(
                data => {
                    setActivityList([...activityList, {
                        deviceName: device[0].deviceName,
                        userDbId: userDbId,
                        roomName: route.params.name,
                        state: deviceState,
                        date: new Date().getDate(),
                        month: new Date().getMonth() + 1,
                        year: new Date().getFullYear(),
                        hour: new Date().getHours(),
                        minute: new Date().getMinutes(),
                        second: new Date().getSeconds()
                    }])
                }
            )
    }

    const changeStateDevice = (state) => {
        fetch('http://172.17.13.131:3333/changedevice2', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                deviceName: device[0].deviceName,
                userDbId: userDbId,
                roomId: roomID,
                state: state,
                timeAuto: device[0].timeAuto,
                sensorAuto: device[0].sensorAuto,
                onHour: device[0].onHour,
                onMin: device[0].onMin,
                offHour: device[0].offHour,
                offMin: device[0].offMin,
                onSensor: device[0].onSensor,
                offSensor: device[0].offSensor,
            })
        })
            .then(res => res.json()).then(
                data => {
                    setDevice([{ ...device[0], state: state }])
                    updatedDeviceList = deviceList.map(element => {
                        if (element.deviceName == device[0].deviceName && element.roomId == roomID) {
                            return {
                                ...element,
                                state: state
                            }
                        } else return element
                    })
                    setDeviceList(updatedDeviceList)
                }
            )
    }
    const handlePress = () => {
        if (device[0] && device[0].state == 'on') {
            changeStateDevice('off')
            saveActivity('off')
            publishCommand('{\"ID\":' + roomID + ',\"RELAY\":' + isChoosed + ',\"VALUE\":0}')
        } else {
            changeStateDevice('on')
            saveActivity('on')
            publishCommand('{\"ID\":' + roomID + ',\"RELAY\":' + isChoosed + ',\"VALUE\":1}')
        }
    }
    return (
        <View style={styles.whiteContainer}>
            {device[0] && device[0].state == 'on' ?
                (
                    <Pressable onPress={() => handlePress()}>
                        <LinearGradient
                            // Button Linear Gradient
                            colors={['#3366FF', '#6699FF']}
                            start={[0, 0]}
                            end={[1, 1]}
                            style={styles.bigCircle}>
                            <LinearGradient
                                // Button Linear Gradient
                                colors={['#FFFFFF', '#EAEAEA']}
                                start={[0, 0]}
                                end={[1, 1]}
                                style={styles.smallCircle}>
                                <Ionicons
                                    name='md-power-sharp'
                                    size={90}
                                    style={styles.powerIconOn}
                                />
                            </LinearGradient>
                        </LinearGradient>
                    </Pressable>
                ) :
                (
                    <Pressable onPress={() => handlePress()}>
                        <LinearGradient
                            // Button Linear Gradient
                            colors={['#F3F3F3', '#FFFFFF']}
                            start={[0, 0]}
                            end={[1, 1]}
                            style={styles.bigCircle}>
                            <LinearGradient
                                // Button Linear Gradient
                                colors={['#FFFFFF', '#EAEAEA']}
                                start={[0, 0]}
                                end={[1, 1]}
                                style={styles.smallCircle}>
                                <Ionicons
                                    name='md-power-sharp'
                                    size={90}
                                    style={styles.powerIconOff}
                                />
                            </LinearGradient>
                        </LinearGradient>
                    </Pressable>
                )
            }

        </View>
    )
}

function Auto({ route }) {
    const { deviceList, setDeviceList } = React.useContext(DeviceListAPI)
    const { userDbId } = React.useContext(AuthenticationAPI)
    const { isChoosed } = React.useContext(UserHelperAPI)
    const { roomID } = React.useContext(RoomAPI)
    const [device, setDevice] = React.useState(deviceList.filter(device => device.roomId == roomID && device.relay == isChoosed))

    const toggleSwitch1 = () => {
        activeTimeAuto()
        setIsEnabled1(previousState => !previousState);

    }
    const toggleSwitch2 = () => {
        activeSensorAuto()
        setIsEnabled2(previousState => !previousState);

    }
    const [isEnabled1, setIsEnabled1] = useState(device[0].timeAuto == 'on' ? true : false);
    const [isEnabled2, setIsEnabled2] = useState(device[0].sensorAuto == 'on' ? true : false);
    const [modalVisible, setModalVisible] = useState(false);
    const [autoType, setAutoType] = useState('Tự động theo thời gian')
    const [onSensor, setOnSensor] = useState(device[0].onSensor)
    const [offSensor, setOffSensor] = useState(device[0].offSensor)
    const [tempOnSensor, setTempOnSensor] = useState(device[0].onSensor)
    const [tempOffSensor, setTempOffSensor] = useState(device[0].offSensor)

    const [onHour, setOnHour] = useState(device[0].onHour)
    const [onMin, setOnMin] = useState(device[0].onMin)
    const [offHour, setOffHour] = useState(device[0].offHour)
    const [offMin, setOffMin] = useState(device[0].offMin)

    const [tempOnHour, setTempOnHour] = useState(device[0].onHour)
    const [tempOnMin, setTempOnMin] = useState(device[0].onMin)
    const [tempOffHour, setTempOffHour] = useState(device[0].offHour)
    const [tempOffMin, setTempOffMin] = useState(device[0].offMin)

    React.useEffect(() => {
        setDevice(deviceList.filter(device => device.roomId == roomID && device.relay == isChoosed))
    }, [isChoosed])
    React.useEffect(() => {
        console.log(isChoosed)

        console.log(device)
        setOnHour(device[0].onHour)
        setOffHour(device[0].offHour)
        setOffMin(device[0].offMin)
        setOnMin(device[0].onMin)
        setOnSensor(device[0].onSensor)
        setOffSensor(device[0].offSensor)

        setTempOnHour(device[0].onHour)
        setTempOffHour(device[0].offHour)
        setTempOffMin(device[0].offMin)
        setTempOnMin(device[0].onMin)
        setTempOnSensor(device[0].onSensor)
        setTempOffSensor(device[0].offSensor)

        if (device[0].timeAuto == "on") {
            setIsEnabled1(true)
        } else setIsEnabled1(false)

        if (device[0].sensorAuto == "on") {
            setIsEnabled2(true)
        } else setIsEnabled2(false)
    }, [device])

    const changeSensorAuto = () => {
        fetch('http://172.17.13.131:3333/changedevice2', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                roomId: roomID,
                userDbId: userDbId,
                deviceName: device[0].deviceName,
                state: device[0].state,
                timeAuto: isEnabled1 == true ? "on" : "off",
                sensorAuto: isEnabled2 == true ? "on" : "off",
                onHour: onHour,
                onMin: onMin,
                offHour: offHour,
                offMin: offMin,
                onSensor: tempOnSensor,
                offSensor: tempOffSensor,
            })
        })
            .then(res => res.json()).then(
                data => {
                    const updatedDeviceList = deviceList.map(element => {
                        if (element.deviceName == device[0].deviceName && element.roomId == device[0].roomId) {
                            return {
                                ...element,
                                timeAuto: isEnabled1 == true ? "on" : "off",
                                sensorAuto: isEnabled2 == true ? "on" : "off",
                                onHour: onHour,
                                onMin: onMin,
                                offHour: offHour,
                                offMin: offMin,
                                onSensor: tempOnSensor,
                                offSensor: tempOffSensor,
                            }
                        } else return element
                    })
                    setDeviceList(updatedDeviceList)
                    setOnSensor(tempOnSensor)
                    setOffSensor(tempOffSensor)
                }
            )
        setModalVisible(!modalVisible)
    }

    const activeTimeAuto = () => {
        fetch('http://172.17.13.131:3333/changedevice2', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                roomId: roomID,
                userDbId: userDbId,
                deviceName: device[0].deviceName,
                state: device[0].state,
                timeAuto: isEnabled1 == true ? "off" : "on",
                sensorAuto: isEnabled2 == true ? "on" : "off",
                onHour: onHour,
                onMin: onMin,
                offHour: offHour,
                offMin: offMin,
                onSensor: onSensor,
                offSensor: offSensor,
            })
        })
            .then(res => res.json()).then(
                data => {
                    const updatedDeviceList = deviceList.map(element => {
                        if (element.deviceName == device[0].deviceName && element.roomId == device[0].roomId) {
                            return {
                                ...element,
                                timeAuto: isEnabled1 == true ? "off" : "on",
                                sensorAuto: isEnabled2 == true ? "on" : "off",
                                onHour: onHour,
                                onMin: onMin,
                                offHour: offHour,
                                offMin: offMin,
                                onSensor: onSensor,
                                offSensor: offSensor,
                            }
                        } else return element
                    })
                    setDeviceList(updatedDeviceList)
                    setOnSensor(tempOnSensor)
                    setOffSensor(tempOffSensor)
                }
            )
    }

    const activeSensorAuto = () => {
        fetch('http://172.17.13.131:3333/changedevice2', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                roomId: roomID,
                userDbId: userDbId,
                deviceName: device[0].deviceName,
                state: device[0].state,
                timeAuto: isEnabled1 == true ? "on" : "off",
                sensorAuto: isEnabled2 == true ? "off" : "on",
                onHour: onHour,
                onMin: onMin,
                offHour: offHour,
                offMin: offMin,
                onSensor: onSensor,
                offSensor: offSensor,
            })
        })
            .then(res => res.json()).then(
                data => {
                    const updatedDeviceList = deviceList.map(element => {
                        if (element.deviceName == device[0].deviceName && element.roomId == device[0].roomId) {
                            return {
                                ...element,
                                timeAuto: isEnabled1 == true ? "on" : "off",
                                sensorAuto: isEnabled2 == true ? "off" : "on",
                                onHour: onHour,
                                onMin: onMin,
                                offHour: offHour,
                                offMin: offMin,
                                onSensor: onSensor,
                                offSensor: offSensor,
                            }
                        } else return element
                    })
                    setDeviceList(updatedDeviceList)
                    setOnSensor(tempOnSensor)
                    setOffSensor(tempOffSensor)
                }
            )
    }

    const changeTimeAuto = () => {
        fetch('http://172.17.13.131:3333/changedevice2', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                roomId: roomID,
                userDbId: userDbId,
                deviceName: device[0].deviceName,
                state: device[0].state,
                timeAuto: isEnabled1 == true ? "on" : "off",
                sensorAuto: isEnabled2 == true ? "on" : "off",
                onHour: tempOnHour,
                onMin: tempOnMin,
                offHour: tempOffHour,
                offMin: tempOffMin,
                onSensor: onSensor,
                offSensor: offSensor,
            })
        })
            .then(res => res.json()).then(
                data => {
                    const updatedDeviceList = deviceList.map(element => {
                        if (element.deviceName == device[0].deviceName && element.roomId == device[0].roomId) {
                            return {
                                ...element,
                                timeAuto: isEnabled1 == true ? "on" : "off",
                                sensorAuto: isEnabled2 == true ? "on" : "off",
                                onHour: tempOnHour,
                                onMin: tempOnMin,
                                offHour: tempOffHour,
                                offMin: tempOffMin,
                                onSensor: onSensor,
                                offSensor: offSensor,
                            }
                        } else return element
                    })
                    setDeviceList(updatedDeviceList)
                    setOnHour(tempOnHour)
                    setOnMin(tempOnMin)
                    setOffHour(tempOffHour)
                    setOffMin(tempOffMin)
                }
            )
        setModalVisible(!modalVisible)
    }

    const cancelSensorAuto = () => {
        setTempOnSensor(onSensor)
        setTempOffSensor(offSensor)
        setModalVisible(!modalVisible)
    }

    const cancelTimeAuto = () => {
        setTempOnHour(onHour)
        setTempOnMin(onMin)
        setTempOffMin(offMin)
        setTempOffHour(offHour)
        setModalVisible(!modalVisible)
    }

    return (
        <View style={styles.whiteContainer}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>{route.params.roomName} - {device[0].deviceName}</Text>
                        <Text style={styles.autoText}>{autoType}</Text>
                        {autoType == 'Tự động theo thời gian' ?
                            (
                                <View>
                                    <View style={styles.inputTimeContainer}>
                                        <View style={{ marginLeft: 50 }}>
                                            <Text style={{ fontSize: 18 }}>Bật:</Text>
                                        </View>
                                        <View style={{ width: 60 }}>
                                            <SafeAreaView>
                                                <TextInput
                                                    style={styles.onInput}
                                                    onChangeText={setTempOnHour}
                                                    value={String(tempOnHour)}
                                                />
                                            </SafeAreaView>
                                        </View>
                                        <Text>:</Text>
                                        <View style={{ width: 60 }}>
                                            <SafeAreaView>
                                                <TextInput
                                                    style={styles.onInput}
                                                    onChangeText={setTempOnMin}
                                                    value={String(tempOnMin)}
                                                />
                                            </SafeAreaView>
                                        </View>
                                    </View>
                                    <View style={styles.inputTimeContainer}>
                                        <View style={{ marginLeft: 50 }}>
                                            <Text style={{ fontSize: 18 }}>Tắt:</Text>
                                        </View>
                                        <View style={{ width: 60 }}>
                                            <SafeAreaView>
                                                <TextInput
                                                    style={styles.onInput}
                                                    onChangeText={setTempOffHour}
                                                    value={String(tempOffHour)}
                                                />
                                            </SafeAreaView>
                                        </View>
                                        <Text>:</Text>
                                        <View style={{ width: 60 }}>
                                            <SafeAreaView>
                                                <TextInput
                                                    style={styles.onInput}
                                                    onChangeText={setTempOffMin}
                                                    value={String(tempOffMin)}
                                                />
                                            </SafeAreaView>
                                        </View>
                                    </View>
                                </View>
                            )
                            : (
                                <View>
                                    <View style={styles.inputSensorContainer}>
                                        <View style={{ flex: 2 }}>
                                            <Text style={{ fontSize: 18 }}>Bật:</Text>
                                        </View>
                                        <View style={{ flex: 12 }}>
                                            <SafeAreaView>
                                                <TextInput
                                                    style={styles.onInput}
                                                    onChangeText={setTempOnSensor}
                                                    value={String(tempOnSensor)}
                                                />
                                            </SafeAreaView>
                                        </View>
                                    </View>
                                    <View style={styles.inputSensorContainer}>
                                        <View style={{ flex: 2 }}>
                                            <Text style={{ fontSize: 18 }}>Tắt:</Text>
                                        </View>
                                        <View style={{ flex: 12 }}>
                                            <SafeAreaView>
                                                <TextInput
                                                    style={styles.onInput}
                                                    onChangeText={setTempOffSensor}
                                                    value={String(tempOffSensor)}
                                                />
                                            </SafeAreaView>
                                        </View>
                                    </View>
                                </View>
                            )
                        }
                        <View style={styles.buttonContainer}>
                            <View >
                                {autoType == 'Tự động theo thời gian' ?
                                    (
                                        <Pressable
                                            style={[styles.button, styles.cancelButtonClose]}
                                            onPress={() => cancelTimeAuto()}>
                                            <Text style={styles.textStyle}>Hủy bỏ</Text>
                                        </Pressable>
                                    ) :
                                    (
                                        <Pressable
                                            style={[styles.button, styles.cancelButtonClose]}
                                            onPress={() => cancelSensorAuto()}>
                                            <Text style={styles.textStyle}>Hủy bỏ</Text>
                                        </Pressable>
                                    )
                                }
                            </View>
                            <View >
                                {autoType == 'Tự động theo thời gian' ?
                                    (
                                        <Pressable
                                            style={[styles.button, styles.buttonClose]}
                                            onPress={() => changeTimeAuto()}>
                                            <Text style={styles.textStyle}>Đồng ý</Text>
                                        </Pressable>
                                    ) :
                                    (<Pressable
                                        style={[styles.button, styles.buttonClose]}
                                        onPress={() => changeSensorAuto()}>
                                        <Text style={styles.textStyle}>Đồng ý</Text>
                                    </Pressable>
                                    )
                                }
                            </View>

                        </View>

                    </View>
                </View>
            </Modal>
            <View style={styles.autoContainer}>
                <View style={styles.topContainer}>
                    <View style={styles.textContainer}>
                        <Text style={styles.textLeft1}>Tự động</Text>
                        <Text style={styles.textLeft2}>theo thời gian</Text>
                    </View>
                    <View style={styles.switchContainer}>
                        <Switch
                            trackColor={{ false: '#767577', true: '#81b0ff' }}
                            thumbColor={isEnabled1 ? '#4067F1' : '#f4f3f4'}
                            style={{ transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }] }}
                            onValueChange={toggleSwitch1}
                            value={isEnabled1}
                        />
                    </View>
                </View>
                <View style={styles.bottomContainer}>
                    <View style={styles.time}>
                        <Text style={styles.onOff}>Bật:</Text>
                        <Text style={styles.timeText}>{Number(onHour) < 10 ? "0" + String(onHour) : onHour}:{Number(onMin) < 10 ? "0" + String(onMin) : onMin}</Text>
                    </View>
                    <View style={styles.time}>
                        <Text style={styles.onOff}>Tắt:</Text>
                        <Text style={styles.timeText}>{Number(offHour) < 10 ? "0" + String(offHour) : offHour}:{Number(offMin) < 10 ? "0" + String(offMin) : offMin}</Text>
                    </View>
                    <View style={styles.fixContainer2}>
                        <Pressable onPress={() => { setAutoType('Tự động theo thời gian'); setModalVisible(true) }}>
                            <Text style={styles.fixText}>Sửa</Text>
                        </Pressable>
                    </View>
                </View>
            </View>

            <View style={styles.autoContainer}>
                <View style={styles.topContainer}>
                    <View style={styles.textContainer}>
                        <Text style={styles.textLeft1}>Tự động</Text>
                        <Text style={styles.textLeft2}>theo cảm biến</Text>
                    </View>
                    <View style={styles.switchContainer}>
                        <Switch
                            trackColor={{ false: '#767577', true: '#81b0ff' }}
                            thumbColor={isEnabled2 ? '#4067F1' : '#f4f3f4'}
                            style={{ transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }] }}
                            onValueChange={toggleSwitch2}
                            value={isEnabled2}
                        />
                    </View>
                </View>
                <View style={styles.bottomContainer}>
                    <View style={styles.time}>
                        <Text style={styles.onOff}>Bật:</Text>
                        <Text style={styles.timeText}>{onSensor}</Text>
                        <Text style={styles.unit}>{device[0].deviceType == "fan" ? "°C" : "%"}</Text>
                    </View>
                    <View style={styles.time}>
                        <Text style={styles.onOff}>Tắt:</Text>
                        <Text style={styles.timeText}>{offSensor}</Text>
                        <Text style={styles.unit}>{device[0].deviceType == "fan" ? "°C" : "%"}</Text>
                    </View>
                    <View style={styles.fixContainer2}>
                        <Pressable onPress={() => { setAutoType('Tự động theo cảm biến'); setModalVisible(true) }}>
                            <Text style={styles.fixText}>Sửa</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default function DeviceDetail(props) {
    const { setIsChoosed } = React.useContext(UserHelperAPI)
    const { userDbId } = React.useContext(AuthenticationAPI)
    const { deviceList, setDeviceList } = React.useContext(DeviceListAPI)
    const [changeDeviceModalVisible, setChangeDeviceModalVisible] = useState(false);
    const deviceTypes = ["Quạt", "Bóng đèn"]
    const [deviceName, setDeviceName] = React.useState(props.name)
    const [deviceType, setDeviceType] = React.useState(props.type)
    const [relay, setRelay] = React.useState(props.relay)
    const [helperDeviceName, setHelperDeviceName] = React.useState(props.name)
    const [helperDeviceType, setHelperDeviceType] = React.useState(props.type)
    const [helperRelay, setHelperRelay] = React.useState(props.relay)
    React.useEffect(() => {
        setIsChoosed(props.relay)
        setDeviceName(props.name)
        setHelperDeviceName(props.name)
        setRelay(props.relay)
        setHelperRelay(props.relay)
        setDeviceType(props.type)
        setHelperDeviceType(props.type)
    }, [props.name])

    const handleChangeDevice = () => {
        fetch('http://172.17.13.131:3333/changedevice1', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                oldDeviceName: deviceName,
                deviceName: helperDeviceName,
                deviceType: helperDeviceType,
                roomId: props.id,
                userDbId: userDbId,
                relay: helperRelay,
            })
        }).then(res => res.json()).then(
            data => {
                const updatedDeviceList = deviceList.map(device => {
                    if (device.deviceName == deviceName && device.roomId == props.id) {
                        return { ...device, deviceName: helperDeviceName, deviceType: helperDeviceType, relay: helperRelay }
                    } else return device
                })
                setDeviceList(updatedDeviceList)
                setDeviceName(helperDeviceName)
                setDeviceType(helperDeviceType)
                setRelay(helperRelay)
                setIsChoosed(helperRelay)
            }
        )
        setChangeDeviceModalVisible(!changeDeviceModalVisible)
    }

    const cancelChangeDevice = () => {
        setHelperDeviceName(deviceName)
        setHelperDeviceType(deviceType)
        setHelperRelay(relay)
        setChangeDeviceModalVisible(!changeDeviceModalVisible)
    }

    const [notification, setNotification] = useState(false);
    const deleteDevice = () => {
        fetch('http://172.17.13.131:3333/deletedevice', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userDbId: userDbId,
                roomId: props.id,
                deviceName: deviceName
            })
        })
            .then(res => res.json()).then(
                data => {
                    setDeviceList(deviceList.filter(device => (device.deviceName != deviceName && device.roomId == props.id) || (device.roomId != props.id)))
                    if (deviceList.length > 0) {
                        setIsChoosed(deviceList[0].relay)
                        setDeviceName(deviceList[0].deviceName)
                        setDeviceName(deviceList[0].deviceName)
                        setDeviceType(deviceList[0].deviceType)
                        setRelay(deviceList[0].relay)
                    } else setIsChoosed(0)

                }
            )
        setNotification(!notification)
        setChangeDeviceModalVisible(!changeDeviceModalVisible)
    }

    return (
        <>
            {
                deviceList.filter(device => device.roomId == props.id).length == 0 ?
                    (
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ color: 'gray', fontSize: 27 }}>Chưa có thiết bị nào</Text>
                        </View>

                    ) :
                    (
                        <>
                            <Modal
                                animationType="slide"
                                transparent={true}
                                visible={changeDeviceModalVisible}
                                onRequestClose={() => {
                                    setChangeDeviceModalVisible(!changeDeviceModalVisible);
                                }}>
                                <Modal
                                    animationType="slide"
                                    transparent={true}
                                    visible={notification}
                                    onRequestClose={() => {
                                        setNotification(!notification);
                                    }}>
                                    <View style={styles.centeredView}>
                                        <View style={styles.modalView}>
                                            <Text style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 10 }}>Bạn có chắc chắn muốn xóa thiết bị này</Text>
                                            <View style={styles.buttonContainer}>
                                                <View>
                                                    <Pressable
                                                        style={[styles.button, styles.cancelButtonClose]}
                                                        onPress={() => setNotification(!notification)}>
                                                        <Text style={styles.textStyle}>Hủy bỏ</Text>
                                                    </Pressable>
                                                </View>
                                                <View >
                                                    <Pressable
                                                        style={[styles.button, styles.buttonClose]}
                                                        onPress={() => deleteDevice()}>
                                                        <Text style={styles.textStyle}>Đồng ý</Text>
                                                    </Pressable>
                                                </View>
                                            </View>
                                        </View>
                                    </View>

                                </Modal >
                                <View style={styles.centeredView}>
                                    <View style={styles.modalView}>
                                        <View>
                                            <Pressable onPress={() => setNotification(true)}>
                                                <View style={{ alignItems: 'flex-end' }}>
                                                    <FontAwesome
                                                        name='trash-o'
                                                        size={25}
                                                        style={{ color: 'red', marginRight: 10 }}
                                                    />
                                                </View>
                                            </Pressable>
                                            <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Tên thiết bị</Text>
                                            <View style={{ width: 60 }}>
                                                <SafeAreaView>
                                                    <TextInput
                                                        style={styles.input}
                                                        onChangeText={setHelperDeviceName}
                                                        value={helperDeviceName}
                                                    />
                                                </SafeAreaView>
                                            </View>

                                            <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Loại thiết bị</Text>
                                            <SelectDropdown
                                                data={deviceTypes}
                                                defaultValue={helperDeviceType == "fan" ? "Quạt" : "Bóng đèn"}
                                                onSelect={(selectedItem, index) => {
                                                    if (selectedItem == "Quạt") {
                                                        setHelperDeviceType("fan")
                                                    } else setHelperDeviceType("bulb")
                                                }}
                                                buttonTextAfterSelection={(selectedItem, index) => {
                                                    return selectedItem
                                                }}
                                                rowTextForSelection={(item, index) => {
                                                    return item
                                                }}
                                                rowTextStyle={{ textAlign: 'left' }}
                                                buttonStyle={styles.dropdown1BtnStyle}
                                                buttonTextStyle={styles.dropdown1BtnTxtStyle}
                                                renderDropdownIcon={isOpened => {
                                                    return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#444'} size={18} />;
                                                }}
                                            />

                                            <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Relay</Text>
                                            <View style={{ width: 60 }}>
                                                <SafeAreaView>
                                                    <TextInput
                                                        style={styles.input}
                                                        onChangeText={setHelperRelay}
                                                        value={String(helperRelay)}
                                                    />
                                                </SafeAreaView>
                                            </View>
                                        </View>
                                        <View style={styles.buttonContainer}>
                                            <View>
                                                <Pressable
                                                    style={[styles.button, styles.cancelButtonClose]}
                                                    onPress={() => cancelChangeDevice()}>
                                                    <Text style={styles.textStyle}>Hủy bỏ</Text>
                                                </Pressable>
                                            </View>
                                            <View >
                                                <Pressable
                                                    style={[styles.button, styles.buttonClose]}
                                                    onPress={() => handleChangeDevice()}>
                                                    <Text style={styles.textStyle}>Đồng ý</Text>
                                                </Pressable>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </Modal>

                            <View style={styles.deviceDetailContainer}>
                                <View style={styles.nameContainer}>
                                    <Text>{deviceName}</Text>
                                    <Pressable onPress={() => {
                                        setChangeDeviceModalVisible(true);
                                        setHelperDeviceName(deviceName);
                                        setHelperDeviceType(deviceType);
                                        setHelperRelay(relay)
                                    }}>
                                        <View style={styles.fixContainer}>
                                            <Text>Chỉnh sửa</Text>
                                            <FontAwesome
                                                name='pencil-square-o'
                                                size={25}
                                                style={styles.icon}
                                            />
                                        </View>
                                    </Pressable>
                                </View>
                                <Tab.Navigator
                                    screenOptions={{
                                        headerShown: false, tabBarIconStyle: { display: "none" }, tabBarLabelStyle: {
                                            fontSize: 15,
                                            marginBottom: 15
                                        },
                                    }}
                                >
                                    <Tab.Screen name='Trạng thái' component={State} initialParams={{ id: props.id, name: props.roomName }} />
                                    <Tab.Screen name='Tự động' component={Auto} initialParams={{ roomName: props.roomName, deviceName: props.name }} />
                                </Tab.Navigator>
                            </View >
                        </>
                    )
            }
        </>





    )
}
