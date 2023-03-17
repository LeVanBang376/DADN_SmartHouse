import React from 'react'
import { View, Text, Pressable } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import Device_state from '../device_state/Device_state'
import styles from './styles'
export default function Device_item(props) {
    return (
        <Pressable onPress={() => props.onPress()}>
            <View style={styles.container} >
                <MaterialCommunityIcons
                    name={props.type}
                    size={50}
                    style={styles.icon}
                />
                <Text style={styles.name}>
                    {props.name}
                </Text>
                <Device_state type={props.type} />
            </View>
        </Pressable>

    )
}
