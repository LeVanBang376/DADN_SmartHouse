import React from 'react'
import { View, Text } from 'react-native'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import styles from './styles'
import UserHelperAPI from '../../userContext/UserHelperContext'
export default function DeviceItem(props) {
    const { isChoosed } = React.useContext(UserHelperAPI)
    return (
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
    )
}
