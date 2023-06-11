import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'
export default function HistoryItem(props) {
    return (
        <View style={styles.historyItemContainer}>
            <Text style={{ fontSize: 16, marginLeft: 10, marginBottom: 5, marginTop: 5, fontWeight: 'bold' }}>Tên phòng: {props.roomName}</Text>
            <Text style={{ fontSize: 16, marginLeft: 10, marginBottom: 5 }}>Tên thiết bị: {props.deviceName}</Text>
            <Text style={{ fontSize: 16, marginLeft: 10, marginBottom: 5 }}>Trạng thái: {props.deviceState == 'on' ? "Bật" : "Tắt"}</Text>
            <Text style={{ fontSize: 16, marginLeft: 10, marginBottom: 5 }}>Thời gian: {props.date}/{props.month}/{props.year}, {props.hour}:{props.minute}</Text>
        </View>
    )
}
