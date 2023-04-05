import React from 'react'
import { View, Text } from 'react-native'
import { MaterialIcons, Ionicons, FontAwesome } from '@expo/vector-icons'
import styles from './styles'
export default function RoomItem(props) {
    return (
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
                <FontAwesome
                    name='pencil-square-o'
                    size={25}
                    style={styles.iconRight}
                />
            </View>
            <Text style={styles.roomName}>{props.name}</Text>
        </View>
    )
}
