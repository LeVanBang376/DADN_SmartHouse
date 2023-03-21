import * as React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Devices_main from './Devices_main'
import Fan_detail from '../devices_detail/fan_detail/Fan_detail'
import Bulb_detail from '../devices_detail/bulb_detail/Bulb_detail'
import Color from '../../colors/Color'
const Stack = createNativeStackNavigator()

export default function Manage_devices() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerTintColor: Color.blue,
                headerTitleStyle: {
                    fontSize: 23,
                },
            }}
        >
            <Stack.Screen
                name='Devices_main'
                component={Devices_main}
                options={{
                    title: 'Devices',
                }}
            />

            <Stack.Screen
                name='Fan_detail'
                component={Fan_detail}
                options={{
                    title: 'Quạt',
                }}
            />

            <Stack.Screen
                name='Bulb_detail'
                component={Bulb_detail}
                options={{
                    title: 'Bóng đèn',
                }}
            />
        </Stack.Navigator>
    )
}
