import React from 'react'
import { Text, View } from 'react-native'
import Device_item from '../../components/device_item/Device_item'
import styles from './styles'
export default function Devices_main({ navigation }) {
    const handlePress = (name) => {
        navigation.navigate("Fan_detail", name)
    }
    return (
        <View style={styles.container} >
            <Device_item type="fan" name="Quạt" onPress={() => handlePress()} />
            <Device_item type="lightbulb-outline" name="Bóng đèn 1" onPress={() => handlePress()} />
            <Device_item type="lightbulb-outline" name="Bóng đèn 2" onPress={() => handlePress()} />
            <Device_item type="door" name="Cửa chính" onPress={() => handlePress()} />
        </View>

    )
}
