import React, { useState } from 'react'
import { View, Text, Pressable, Modal, SafeAreaView, TextInput } from 'react-native'
import { Entypo, Ionicons, FontAwesome5 } from '@expo/vector-icons'
import { FontAwesome } from '@expo/vector-icons'
import SelectDropdown from 'react-native-select-dropdown'
import styles from './styles'
import UserAPI from '../../userContext/UserContext'
import AuthenticationAPI from '../../userContext/AuthenticationContext'
import SensorListAPI from '../../userContext/SensorContext'
export default function SensorItem(props) {
    const { message } = React.useContext(UserAPI)
    const { userDbId } = React.useContext(AuthenticationAPI)
    const { sensorList, setSensorList } = React.useContext(SensorListAPI)
    const [modalVisible, setModalVisible] = useState(false);
    const [notification, setNotification] = useState(false);
    const [changeSensorVisible, setChangeSensorVisible] = useState(false);
    const sensorTypes = ["Nhiệt độ", "Độ ẩm", "Ánh sáng"]
    const [newSensorName, setNewSensorName] = useState("")
    const [newSensorType, setNewSensorType] = useState("")

    const [tempSensorName, setTempSensorName] = useState(props.name)
    const [tempSensorType, setTempSensorType] = useState(props.type)

    const [sensorName, setSensorName] = useState(props.name)
    const [sensorType, setSensorType] = useState(props.type)

    React.useEffect(() => {
        if (props.type == 'temp') {
            setSensorType("Nhiệt độ")
        } else if (props.type == 'humid') {
            setSensorType("Độ ẩm")
        } else setSensorType("Ánh sáng")
    }, [props.type])

    const cancelAddSensor = () => {
        setNewSensorName("")
        setNewSensorType("")
        setModalVisible(!modalVisible)
    }

    const cancelChangeSensor = () => {
        setTempSensorType(sensorType)
        setTempSensorName(sensorName)
        setChangeSensorVisible(!changeSensorVisible)
    }

    const handleAddSensor = () => {
        fetch('http://172.17.13.131:3333/addsensor', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userDbId: userDbId,
                sensorName: newSensorName,
                sensorType: newSensorType,
                roomId: props.id
            })
        })
            .then(res => res.json()).then(
                data => {
                    setSensorList([...sensorList, { sensorName: newSensorName, sensorType: newSensorType, userDbId: userDbId, roomId: props.id }])
                    setNewSensorName("")
                    setNewSensorType("")
                }
            ).catch((error) => {
                console.log(error)
            })
        setModalVisible(!modalVisible)
    }

    const handleChangeSensor = () => {
        fetch('http://172.17.13.131:3333/changesensor', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userDbId: userDbId,
                oldSensorName: sensorName,
                sensorName: tempSensorName,
                sensorType: tempSensorType,
                roomId: props.id
            })
        })
            .then(res => res.json()).then(
                data => {
                    const updatedSensorList = sensorList.map(sensor => {
                        if (sensor.sensorName == sensorName && sensor.roomId == props.id) {
                            return { ...sensor, sensorName: tempSensorName, sensorType: tempSensorType }
                        } else return sensor
                    })
                    setSensorList(updatedSensorList)
                    setSensorName(tempSensorName)
                    setSensorType(tempSensorType)
                }
            ).catch((error) => {
                console.log(error)
            })
        setChangeSensorVisible(!changeSensorVisible)
    }

    const deleteSensor = () => {
        fetch('http://172.17.13.131:3333/deletesensor', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userDbId: userDbId,
                roomId: props.id,
                sensorName: sensorName
            })
        })
            .then(res => res.json()).then(
                data => {
                    console.log(sensorList)
                    setSensorList(sensorList.filter(sensor => (sensor.sensorName != sensorName && sensor.roomId == props.id) || (sensor.roomId != props.id)))
                }
            )
        setNotification(!notification)
        setChangeSensorVisible(!changeSensorVisible)
    }
    return (
        props.addSensor == false ?
            (
                <>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={changeSensorVisible}
                        onRequestClose={() => {
                            setChangeSensorVisible(!changeSensorVisible);
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
                                    <Text style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 10 }}>Bạn có chắc chắn muốn xóa cảm biến này</Text>
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
                                                onPress={() => deleteSensor()}>
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
                                    <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Tên cảm biến</Text>
                                    <View style={{ width: 60 }}>
                                        <SafeAreaView>
                                            <TextInput
                                                style={styles.input}
                                                onChangeText={setTempSensorName}
                                                value={tempSensorName}
                                            />
                                        </SafeAreaView>
                                    </View>

                                    <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Loại cảm biến</Text>
                                    <SelectDropdown
                                        data={sensorTypes}
                                        onSelect={(selectedItem, index) => {
                                            if (selectedItem == "Nhiệt độ") {
                                                setTempSensorType("temp")
                                            } else if (selectedItem == "Độ ẩm") {
                                                setTempSensorType("humid")
                                            } else setTempSensorType("light")
                                        }}
                                        defaultValue={tempSensorType == "temp" ? sensorTypes[0] : (tempSensorType == "humid" ? sensorTypes[1] : sensorTypes[2])}
                                        buttonTextAfterSelection={(selectedItem, index) => {
                                            return selectedItem
                                        }}
                                        rowTextForSelection={(item, index) => {
                                            return item
                                        }}
                                        rowTextStyle={{ textAlign: 'left', fontSize: 20, paddingLeft: 9 }}
                                        buttonStyle={styles.dropdown1BtnStyle}
                                        buttonTextStyle={styles.dropdown1BtnTxtStyle}
                                        renderDropdownIcon={isOpened => {
                                            return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#444'} size={18} />;
                                        }}
                                    />
                                </View>
                                <View style={styles.buttonContainer}>
                                    <View>
                                        <Pressable
                                            style={[styles.button, styles.cancelButtonClose]}
                                            onPress={() => cancelChangeSensor()}>
                                            <Text style={styles.textStyle}>Hủy bỏ</Text>
                                        </Pressable>
                                    </View>
                                    <View >
                                        <Pressable
                                            style={[styles.button, styles.buttonClose]}
                                            onPress={() => handleChangeSensor()}>
                                            <Text style={styles.textStyle}>Đồng ý</Text>
                                        </Pressable>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </Modal>


                    <Pressable onPress={() => setChangeSensorVisible(true)}>
                        <View style={styles.sensorContainer}>
                            {props.type == 'temp' ?
                                (
                                    <FontAwesome5
                                        name='temperature-high'
                                        size={30}
                                        style={styles.icon}
                                    />
                                ) :
                                [props.type == 'humid' ?
                                    (
                                        <Ionicons
                                            name='water-outline'
                                            size={30}
                                            style={styles.icon}
                                        />
                                    ) :
                                    (
                                        <Entypo
                                            name='light-up'
                                            size={30}
                                            style={styles.icon}
                                        />
                                    )
                                ]
                            }
                            <View>
                                <Text style={styles.sensorName}>{props.name}</Text>

                                <View style={styles.sensorValue}>
                                    {
                                        props.type == 'temp' ?
                                            (
                                                message == '' ? <Text style={styles.value}>...</Text> :
                                                    <Text style={styles.value}>{message.slice(message.indexOf('TEMP') + 6, message.indexOf(',\"HUMID'))}</Text>
                                            ) :
                                            [props.type == 'humid' ?
                                                (
                                                    message == '' ? <Text style={styles.value}>...</Text> :
                                                        <Text style={styles.value}>{message.slice(message.indexOf('HUMID') + 7, message.indexOf(',\"LIGHT'))}</Text>
                                                ) :
                                                (
                                                    message == '' ? <Text style={styles.value}>...</Text> :
                                                        <Text style={styles.value}>{message.slice(message.indexOf('LIGHT') + 7, message.indexOf(',\"RELAY'))}</Text>
                                                )
                                            ]
                                    }

                                    {props.type == 'temp' ?
                                        (
                                            <Text style={styles.unit}>°C</Text>
                                        ) :
                                        [props.type == 'humid' ?
                                            (
                                                <Text style={styles.unit}>%</Text>
                                            ) :
                                            (
                                                <Text style={styles.unit}>%</Text>
                                            )
                                        ]
                                    }
                                </View>
                            </View>
                        </View>
                    </Pressable>
                </>
            ) : (
                <>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => {
                            setModalVisible(!modalVisible);
                        }}>
                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <View>
                                    <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Tên cảm biến</Text>
                                    <View style={{ width: 60 }}>
                                        <SafeAreaView>
                                            <TextInput
                                                style={styles.input}
                                                onChangeText={setNewSensorName}
                                                value={newSensorName}
                                            />
                                        </SafeAreaView>
                                    </View>

                                    <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Loại cảm biến</Text>
                                    <SelectDropdown
                                        data={sensorTypes}
                                        onSelect={(selectedItem, index) => {
                                            if (selectedItem == "Nhiệt độ") {
                                                setNewSensorType("temp")
                                            } else if (selectedItem == "Độ ẩm") {
                                                setNewSensorType("humid")
                                            } else setNewSensorType("light")
                                        }}
                                        buttonTextAfterSelection={(selectedItem, index) => {
                                            return selectedItem
                                        }}
                                        rowTextForSelection={(item, index) => {
                                            return item
                                        }}
                                        rowTextStyle={{ textAlign: 'left', fontSize: 20, paddingLeft: 9 }}
                                        buttonStyle={styles.dropdown1BtnStyle}
                                        buttonTextStyle={styles.dropdown1BtnTxtStyle}
                                        renderDropdownIcon={isOpened => {
                                            return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#444'} size={18} />;
                                        }}
                                    />
                                </View>
                                <View style={styles.buttonContainer}>
                                    <View>
                                        <Pressable
                                            style={[styles.button, styles.cancelButtonClose]}
                                            onPress={() => cancelAddSensor()}>
                                            <Text style={styles.textStyle}>Hủy bỏ</Text>
                                        </Pressable>
                                    </View>
                                    <View >
                                        <Pressable
                                            style={[styles.button, styles.buttonClose]}
                                            onPress={() => handleAddSensor()}>
                                            <Text style={styles.textStyle}>Đồng ý</Text>
                                        </Pressable>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </Modal>
                    <Pressable onPress={() => setModalVisible(true)}>
                        <View style={styles.sensorContainer2}>
                            <Text>Thêm cảm biến</Text>
                        </View>
                    </Pressable>

                </>

            )

    )
}
