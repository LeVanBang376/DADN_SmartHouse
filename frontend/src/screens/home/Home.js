import React, { useState } from 'react'
import { Pressable, Text, View, Modal } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import RoomItem from '../../components/roomItem/RoomItem'
import styles from './styles'
import RoomListAPI from '../../userContext/RoomListContext'
import RoomAPI from '../../userContext/RoomContext'
import UserHelperAPI from '../../userContext/UserHelperContext'
export default function Home({ navigation }) {
    const { roomList } = React.useContext(RoomListAPI)
    const { setIsChoosed } = React.useContext(UserHelperAPI)
    const { setRoomID } = React.useContext(RoomAPI)
    const [addRoomModalVisible, setAddRoomModalVisible] = useState(false);
    const handlePress = (roomID, roomName) => {
        setRoomID(roomID)
        setRoomID(roomID)
        setIsChoosed(0)
        navigation.navigate("RoomDetail", { ID: roomID, name: roomName })
    }
    return (
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
                        <Text style={styles.modalText}>Add room</Text>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setAddRoomModalVisible(!addRoomModalVisible)}>
                            <Text style={styles.textStyle}>Hide Modal</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>

            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <View style={styles.helloContainer}>
                    <Text style={styles.helloText}>Xin chào, Thuyên</Text>
                    <MaterialCommunityIcons
                        name='hand-wave'
                        size={40}
                        style={{ color: '#FFCC00' }}
                    />
                </View>
                <View style={styles.line}></View>
                <Text style={styles.selectRoomText}>Hãy chọn phòng</Text>
                <View style={styles.roomContainer}>
                    {roomList.map((room, number) => (
                        <Pressable onPress={() => handlePress(room.roomId, room.roomName)}>
                            <RoomItem key={number} name={room.roomName} type={room.roomType} ID={room.roomId} addRoom={false} />
                        </Pressable>
                    ))}
                    <Pressable onPress={() => setAddRoomModalVisible(true)}>
                        <RoomItem addRoom={true} />
                    </Pressable>
                </View >
            </View>
        </>

    )
}
