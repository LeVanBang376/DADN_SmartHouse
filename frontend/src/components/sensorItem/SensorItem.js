import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { Entypo, Ionicons, FontAwesome5 } from '@expo/vector-icons'
import styles from './styles'
import UserAPI from '../../userContext/UserContext'
export default function SensorItem(props) {
    const { message } = React.useContext(UserAPI)
    return (
        <View style={styles.sensorContainer}>
            {props.type == 'temp' ?
                (
                    <FontAwesome5
                        name='temperature-high'
                        size={30}
                        style={styles.icon}
                    />
                ) :
                [props.type == 'humid' ?
                    (
                        <Ionicons
                            name='water-outline'
                            size={30}
                            style={styles.icon}
                        />
                    ) :
                    (
                        <Entypo
                            name='light-up'
                            size={30}
                            style={styles.icon}
                        />
                    )
                ]
            }
            <View>
                {props.type == 'temp' ?
                    (
                        <Text style={styles.sensorName}>Nhiệt độ</Text>
                    ) :
                    [props.type == 'humid' ?
                        (
                            <Text style={styles.sensorName}>Độ ẩm</Text>
                        ) :
                        (
                            <Text style={styles.sensorName}>Ánh sáng</Text>
                        )
                    ]
                }
                <View style={styles.sensorValue}>
                    {
                        props.type == 'temp' ?
                            (
                                <Text style={styles.value}>{message.slice(message.indexOf('TEMP') + 6, message.indexOf(',\"HUMID'))}</Text>
                            ) :
                            [props.type == 'humid' ?
                                (
                                    <Text style={styles.value}>{message.slice(message.indexOf('HUMID') + 7, message.indexOf(',\"LIGHT'))}</Text>
                                ) :
                                (
                                    <Text style={styles.value}>{message.slice(message.indexOf('LIGHT') + 7, message.indexOf(',\"RELAY'))}</Text>
                                )
                            ]
                    }

                    {props.type == 'temp' ?
                        (
                            <Text style={styles.unit}>°C</Text>
                        ) :
                        [props.type == 'humid' ?
                            (
                                <Text style={styles.unit}>%</Text>
                            ) :
                            (
                                <Text style={styles.unit}>%</Text>
                            )
                        ]
                    }
                </View>
            </View>
        </View>
    )
}
