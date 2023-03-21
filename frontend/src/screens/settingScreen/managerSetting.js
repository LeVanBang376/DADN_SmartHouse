import * as React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import profileScreen from './profileScreen'
import settingScreen from './settingScreen'
import historyScreen from '../historyScreen/historyScreen'
import sensorScreen from '../sensorScreen/sensorScreen'
import Color from '../../colors/Color'
const Stack = createNativeStackNavigator()

export default function manageSetting() {
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
                name='profileScreen'
                component={profileScreen}
                options={{
                    title: 'thông tin cá nhân',
                }}
            />
            <Stack.Screen
                name='settingScreen'
                component={settingScreen}
                options={{
                    title: 'cài đặt',
                }}
            />



            <Stack.Screen
                name='historyScreen'
                component={historyScreen}
                options={{
                    title: 'Lịch sử',
                }}
            />

            <Stack.Screen
                name='sensorScreen'
                component={sensorScreen}
                options={{
                    title: 'Cảm biến',
                }}
            />
        </Stack.Navigator>
    )
}