import React from 'react'
import { Text, View } from 'react-native'
import Device_item from '../../components/device_item/Device_item'
import styles from './styles'
export default function Devices_main() {
    return (
        <View style={styles.container} >
            <Device_item type="fan" name="Quạt" />
            <Device_item type="lightbulb-outline" name="Bóng đèn 1" />
            <Device_item type="lightbulb-outline" name="Bóng đèn 2" />
            <Device_item type="door" name="Cửa chính" />
        </View>

    )
}
