import React, { useState } from 'react'
import { View, Text, Pressable, Modal, SafeAreaView, TextInput } from 'react-native'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import { FontAwesome } from '@expo/vector-icons'
import SelectDropdown from 'react-native-select-dropdown'
import styles from './styles'
import UserHelperAPI from '../../userContext/UserHelperContext'
import AuthenticationAPI from '../../userContext/AuthenticationContext'
import RoomAPI from '../../userContext/RoomContext'
import DeviceListAPI from '../../userContext/DeviceContext'

export default function DeviceItem(props) {
    const { deviceList, setDeviceList } = React.useContext(DeviceListAPI)
    const { userDbId } = React.useContext(AuthenticationAPI)
    const { isChoosed } = React.useContext(UserHelperAPI)
    const { roomID } = React.useContext(RoomAPI)
    const [addDeviceModalVisible, setAddDeviceModalVisible] = useState(false);
    const deviceType = ["Bóng đèn", "Quạt"]
    const [deviceName, setDeviceName] = useState();
    const [deviceTyp, setDeviceTyp] = useState()
    const [relay, setRelay] = useState()
    const handleAddDeivce = () => {
        fetch('http://172.17.13.131:3333/adddevice', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                deviceName: deviceName,
                deviceType: deviceTyp,
                roomId: roomID,
                userDbId: userDbId,
                relay: relay,
            })
        })
            .then(res => res.json()).then(
                data => {
                    setDeviceList([...deviceList, {
                        deviceName: deviceName,
                        deviceType: deviceTyp,
                        roomId: roomID,
                        userDbId: userDbId,
                        relay: relay,
                        state: 'off',
                        timeAuto: 'off',
                        sensorAuto: 'off',
                        onHour: 0,
                        onMin: 0,
                        offHour: 0,
                        offMin: 0,
                        onSensor: 0,
                        offSensor: 0,
                    }])
                    setDeviceName("")
                    setDeviceTyp("")
                    setRelay("")
                }
            )
    }

    const handleCancel = () => {
        setDeviceName("")
        setDeviceTyp("")
        setRelay("")
    }
    return (
        props.addDevice == false ?
            (
                <View style={isChoosed == props.id ? styles.deviceContainer2 : styles.deviceContainer1}>
                    {props.type == 'fan' ?
                        (
                            <MaterialCommunityIcons
                                name='fan'
                                size={45}
                                style={isChoosed == props.id ? styles.icon2 : styles.icon1}
                            />
                        ) :
                        (
                            <Ionicons
                                name='bulb-outline'
                                size={45}
                                style={isChoosed == props.id ? styles.icon2 : styles.icon1}
                            />
                        )
                    }
                    <Text style={isChoosed == props.id ? styles.text2 : styles.text1}>{props.name}</Text>
                </View>
            ) : (
                <>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={addDeviceModalVisible}
                        onRequestClose={() => {
                            setAddDeviceModalVisible(!addDeviceModalVisible);
                        }}>
                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <View>
                                    <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Tên thiết bị</Text>
                                    <View style={{ width: 60 }}>
                                        <SafeAreaView>
                                            <TextInput
                                                style={styles.input}
                                                onChangeText={setDeviceName}
                                                value={deviceName}
                                            />
                                        </SafeAreaView>
                                    </View>

                                    <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Loại thiết bị</Text>
                                    <SelectDropdown
                                        data={deviceType}
                                        onSelect={(selectedItem, index) => {
                                            if (selectedItem == "Bóng đèn") {
                                                setDeviceTyp("bulb")
                                            } else setDeviceTyp("fan")
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

                                    <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Relay (0, 1, 2...)</Text>
                                    <View style={{ width: 60 }}>
                                        <SafeAreaView>
                                            <TextInput
                                                style={styles.input}
                                                onChangeText={setRelay}
                                                value={relay}
                                            />
                                        </SafeAreaView>
                                    </View>
                                </View>
                                <View style={styles.buttonContainer}>
                                    <View>
                                        <Pressable
                                            style={[styles.button, styles.cancelButtonClose]}
                                            onPress={() => { handleCancel(); setAddDeviceModalVisible(!addDeviceModalVisible) }}>
                                            <Text style={styles.textStyle}>Hủy bỏ</Text>
                                        </Pressable>
                                    </View>
                                    <View >
                                        <Pressable
                                            style={[styles.button, styles.buttonClose]}
                                            onPress={() => { handleAddDeivce(); setAddDeviceModalVisible(!addDeviceModalVisible) }}>
                                            <Text style={styles.textStyle}>Đồng ý</Text>
                                        </Pressable>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </Modal>

                    <Pressable onPress={() => {
                        setDeviceName("")
                        setDeviceTyp("")
                        setRelay("")
                        setAddDeviceModalVisible(true)
                    }}>
                        <View style={styles.deviceContainer1}>
                            <Text style={styles.text1}>Thêm</Text>
                            <Text style={styles.text1}>thiết bị</Text>
                        </View>
                    </Pressable>
                </>


            )

    )
}
