import React, { useState } from 'react'
import { View, Text, Pressable, Modal, SafeAreaView, TextInput } from 'react-native'
import { MaterialIcons, Ionicons, FontAwesome } from '@expo/vector-icons'
import SelectDropdown from 'react-native-select-dropdown'
import RoomListAPI from '../../userContext/RoomListContext'
import AuthenticationAPI from '../../userContext/AuthenticationContext'
import styles from './styles'
export default function RoomItem(props) {
    const { roomList, setRoomList } = React.useContext(RoomListAPI)
    const { userDbId } = React.useContext(AuthenticationAPI)
    const [changeRoomModalVisible, setChangeRoomModalVisible] = useState(false);
    const [addRoomModalVisible, setAddRoomModalVisible] = useState(false);
    const [notification, setNotification] = useState(false);
    const roomTypes = ["Trung tâm", "Phòng khách", "Phòng ngủ", "Phòng bếp", "Phòng tắm"]
    const [roomType, setRoomType] = useState()
    const [newRoomName, setNewRoomName] = useState()
    const [newRoomType, setNewRoomType] = useState()
    const [newRoomID, setNewRoomID] = useState()
    const [changeRoomName, setChangeRoomName] = useState(props.name)
    const [changeRoomType, setChangeRoomType] = useState(props.type)
    const [changeRoomID, setChangeRoomID] = useState(props.ID)

    const [tempRoomName, setTempRoomName] = useState(props.name)
    const [tempRoomType, setTempRoomType] = useState(props.type)
    const [tempRoomID, setTempRoomID] = useState(props.ID)

    React.useEffect(() => {
        setTempRoomType(props.type)
        setChangeRoomType(props.type)
    }, [props.type])

    React.useEffect(() => {
        if (changeRoomType == "home") {
            setRoomType(roomTypes[0])
        } else if (changeRoomType == "livingroom") {
            setRoomType(roomTypes[1])
        } else if (changeRoomType == "bedroom") {
            setRoomType(roomTypes[2])
        } else if (changeRoomType == "kitchen") {
            setRoomType(roomTypes[3])
        } else setRoomType(roomTypes[4])
    }, [changeRoomType])

    const addRoom = () => {
        setRoomList([...roomList, { roomName: newRoomName, roomType: newRoomType, roomId: newRoomID, userDbId: userDbId }])

    }

    const handleAddRoom = () => {
        fetch('http://172.17.13.131:3333/addroom', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userDbId: userDbId,
                roomName: newRoomName,
                roomType: newRoomType,
                roomId: newRoomID
            })
        })
            .then(res => res.json()).then(
                data => {
                    addRoom()
                    setNewRoomID("")
                    setNewRoomName("")
                    setNewRoomType("")
                }
            ).catch((error) => {
                console.log(error)
            })
        setAddRoomModalVisible(!addRoomModalVisible)
    }

    const cancelAddRoom = () => {
        setAddRoomModalVisible(!addRoomModalVisible)
        setNewRoomID("")
        setNewRoomName("")
        setNewRoomType("")
    }

    const updateRoom = () => {
        const rooms = roomList.map(room => {
            if (changeRoomName == room.roomName) {
                return { ...room, roomName: tempRoomName, roomId: tempRoomID, roomType: tempRoomType }
            } else return room
        })
        setRoomList(rooms)
    }

    const handleChangeRoom = () => {
        fetch('http://172.17.13.131:3333/changeroom', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userDbId: userDbId,
                oldRoomName: changeRoomName,
                roomName: tempRoomName,
                roomType: tempRoomType,
                oldRoomId: changeRoomID,
                roomId: tempRoomID
            })
        })
            .then(res => res.json()).then(
                data => {
                    updateRoom()
                    setChangeRoomID(tempRoomID)
                    setChangeRoomName(tempRoomName)
                    setChangeRoomType(tempRoomType)
                }
            )
        setChangeRoomModalVisible(!changeRoomModalVisible)
    }

    const cancelChangeRoom = () => {
        setChangeRoomModalVisible(!changeRoomModalVisible)
        setTempRoomID(changeRoomID)
        setTempRoomName(changeRoomName)
        setTempRoomType(changeRoomType)
    }

    const deleteRoom = () => {
        fetch('http://172.17.13.131:3333/deleteroom', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userDbId: userDbId,
                roomId: changeRoomID
            })
        })
            .then(res => res.json()).then(
                data => {
                    console.log('success')
                    setRoomList(roomList.filter(room => room.roomId != changeRoomID))

                }
            )
        setNotification(!notification)
        setChangeRoomModalVisible(!changeRoomModalVisible)
    }
    return (
        props.addRoom == false ?
            (
                <>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={changeRoomModalVisible}
                        onRequestClose={() => {
                            setChangeRoomModalVisible(!changeRoomModalVisible);
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
                                    <Text style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 10 }}>Bạn có chắc chắn muốn xóa phòng này</Text>
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
                                                onPress={() => deleteRoom()}>
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

                                    <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Tên phòng</Text>
                                    <View style={{ width: 60 }}>
                                        <SafeAreaView>
                                            <TextInput
                                                style={styles.input}
                                                onChangeText={setTempRoomName}
                                                value={tempRoomName}
                                            />
                                        </SafeAreaView>
                                    </View>

                                    <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Loại phòng</Text>
                                    <SelectDropdown
                                        data={roomTypes}
                                        defaultValue={roomType}
                                        onSelect={(selectedItem, index) => {
                                            if (selectedItem == "Trung tâm") {
                                                setTempRoomType("home")
                                            } else if (selectedItem == "Phòng khách") {
                                                setTempRoomType("livingroom")
                                            } else if (selectedItem == "Phòng ngủ") {
                                                setTempRoomType("bedroom")
                                            } else if (selectedItem == "Phòng bếp") {
                                                setTempRoomType("kitchen")
                                            } else setTempRoomType("bathroom")
                                        }}
                                        buttonTextAfterSelection={(selectedItem, index) => {
                                            // text represented after item is selected
                                            // if data array is an array of objects then return selectedItem.property to render after item is selected
                                            return selectedItem
                                        }}
                                        rowTextForSelection={(item, index) => {
                                            // text represented for each item in dropdown
                                            // if data array is an array of objects then return item.property to represent item in dropdown
                                            return item
                                        }}
                                        rowTextStyle={{ textAlign: 'left', fontSize: 20, paddingLeft: 9 }}
                                        buttonStyle={styles.dropdown1BtnStyle}
                                        buttonTextStyle={styles.dropdown1BtnTxtStyle}
                                        renderDropdownIcon={isOpened => {
                                            return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#444'} size={18} />;
                                        }}
                                    />

                                    <Text style={{ fontWeight: 'bold', fontSize: 18 }}>ID</Text>
                                    <View style={{ width: 60 }}>
                                        <SafeAreaView>
                                            <TextInput
                                                style={styles.input}
                                                onChangeText={setTempRoomID}
                                                value={String(tempRoomID)}
                                            />
                                        </SafeAreaView>
                                    </View>

                                </View>

                                <View style={styles.buttonContainer}>
                                    <View>
                                        <Pressable
                                            style={[styles.button, styles.cancelButtonClose]}
                                            onPress={() => cancelChangeRoom()}>
                                            <Text style={styles.textStyle}>Hủy bỏ</Text>
                                        </Pressable>
                                    </View>
                                    <View >
                                        <Pressable
                                            style={[styles.button, styles.buttonClose]}
                                            onPress={() => handleChangeRoom()}>
                                            <Text style={styles.textStyle}>Đồng ý</Text>
                                        </Pressable>
                                    </View>
                                </View>
                            </View>
                        </View>

                    </Modal >
                    <View style={styles.roomItemContainer}>
                        <View style={styles.iconContainer}>
                            {props.type == 'kitchen' ?
                                (
                                    <MaterialIcons
                                        name='kitchen'
                                        size={40}
                                        style={styles.iconLeft}
                                    />
                                ) :
                                [props.type == 'bedroom' ?
                                    (
                                        <Ionicons
                                            name='bed-outline'
                                            size={40}
                                            style={styles.iconLeft}
                                        />
                                    ) :
                                    (
                                        <Ionicons
                                            name='home-outline'
                                            size={40}
                                            style={styles.iconLeft}
                                        />
                                    )

                                ]
                            }
                            <Pressable onPress={() => setChangeRoomModalVisible(true)}>
                                <FontAwesome
                                    name='pencil-square-o'
                                    size={25}
                                    style={styles.iconRight}
                                />
                            </Pressable>

                        </View>
                        <Text style={styles.roomName}>{props.name}</Text>
                    </View>
                </>
            ) : (
                <>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={addRoomModalVisible}
                        onRequestClose={() => {
                            setAddRoomModalVisible(!addRoomModalVisible);
                        }}>
                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <View>
                                    <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Tên phòng</Text>
                                    <View style={{ width: 60 }}>
                                        <SafeAreaView>
                                            <TextInput
                                                style={styles.input}
                                                onChangeText={setNewRoomName}
                                                value={newRoomName}
                                            />
                                        </SafeAreaView>
                                    </View>

                                    <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Loại phòng</Text>
                                    <SelectDropdown
                                        data={roomTypes}
                                        onSelect={(selectedItem, index) => {
                                            if (selectedItem == "Trung tâm") {
                                                setNewRoomType("home")
                                            } else if (selectedItem == "Phòng khách") {
                                                setNewRoomType("livingroom")
                                            } else if (selectedItem == "Phòng ngủ") {
                                                setNewRoomType("bedroom")
                                            } else if (selectedItem == "Phòng bếp") {
                                                setNewRoomType("kitchen")
                                            } else setNewRoomType("bathroom")
                                        }}
                                        buttonTextAfterSelection={(selectedItem, index) => {
                                            // text represented after item is selected
                                            // if data array is an array of objects then return selectedItem.property to render after item is selected
                                            return selectedItem
                                        }}
                                        rowTextForSelection={(item, index) => {
                                            // text represented for each item in dropdown
                                            // if data array is an array of objects then return item.property to represent item in dropdown
                                            return item
                                        }}
                                        // buttonStyle={styles.dropdownStyle}
                                        rowTextStyle={{ textAlign: 'left' }}
                                        // buttonTextStyle={{ textAlign: 'right' }}
                                        buttonStyle={styles.dropdown1BtnStyle}
                                        buttonTextStyle={styles.dropdown1BtnTxtStyle}
                                        renderDropdownIcon={isOpened => {
                                            return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#444'} size={18} />;
                                        }}
                                    />

                                    <Text style={{ fontWeight: 'bold', fontSize: 18 }}>ID</Text>
                                    <View style={{ width: 60 }}>
                                        <SafeAreaView>
                                            <TextInput
                                                style={styles.input}
                                                onChangeText={setNewRoomID}
                                                value={newRoomID}
                                            />
                                        </SafeAreaView>
                                    </View>
                                </View>

                                <View style={styles.buttonContainer}>
                                    <View>
                                        <Pressable
                                            style={[styles.button, styles.cancelButtonClose]}
                                            onPress={() => cancelAddRoom()}>
                                            <Text style={styles.textStyle}>Hủy bỏ</Text>
                                        </Pressable>
                                    </View>
                                    <View >
                                        <Pressable
                                            style={[styles.button, styles.buttonClose]}
                                            onPress={() => handleAddRoom()}>
                                            <Text style={styles.textStyle}>Đồng ý</Text>
                                        </Pressable>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </Modal>

                    <Pressable onPress={() => setAddRoomModalVisible(true)}>
                        <View style={styles.roomItemContainer2}>
                            <Text style={styles.roomName2}>Thêm phòng</Text>
                        </View>
                    </Pressable>

                </>
            )
    )
}
