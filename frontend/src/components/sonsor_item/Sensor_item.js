import React, { useState, useEffect, startTransition } from 'react'
import { View, Text, Pressable } from 'react-native'
import { MaterialCommunityIcons, Ionicons, FontAwesome5, Entypo } from '@expo/vector-icons'
import styles from './styles'

export default function Sensor_item(props) {
    return (
        <View style={styles.container} >
            {props.type == 'temperature-high' ?
                (<FontAwesome5
                    name={props.type}
                    size={50}
                    style={styles.iconTemperature}
                />) :
                [props.type == 'light-up' ?
                    (
                        <Entypo
                            name={props.type}
                            size={50}
                            style={styles.icon}
                        />
                    ) :
                    (
                        <Ionicons
                            name={props.type}
                            size={50}
                            style={styles.icon}
                        />
                    )
                ]

            }
            <Text style={styles.name}>
                {props.name}
            </Text>

            {props.type == 'temperature-high' ?
                (
                    <Text style={styles.value}>
                        {props.temp}
                    </Text>
                ) :
                [props.type == 'light-up' ?
                    (
                        <Text style={styles.value}>
                            {props.light}
                        </Text>
                    ) :
                    (
                        <Text style={styles.value}>
                            {props.humid}
                        </Text>
                    )
                ]
            }
        </View>
    )
}
