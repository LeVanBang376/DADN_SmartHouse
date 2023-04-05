import React from 'react'
import { Pressable, Text, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import RoomItem from '../../components/roomItem/RoomItem'
import styles from './styles'
import DeviceListAPI from '../../userContext/DeviceContext'
import RoomAPI from '../../userContext/RoomContext'
export default function Home({ navigation }) {
    const { roomList } = React.useContext(DeviceListAPI)
    const { setRoomID } = React.useContext(RoomAPI)
    const handlePress = (roomID) => {
        setRoomID(roomID)
        setRoomID(roomID)
        navigation.navigate("RoomDetail", { ID: roomID })
    }
    return (
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
                    <Pressable onPress={() => handlePress(room.ID)}>
                        <RoomItem key={number} name={room.name} type={room.type} />
                    </Pressable>
                ))}
            </View >
        </View>


    )
}
