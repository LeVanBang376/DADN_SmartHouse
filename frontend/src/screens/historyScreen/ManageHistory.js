import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import History from './History'
const Stack = createNativeStackNavigator()
export default function ManageHistory() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerTintColor: '#4067F1',
                headerTitleStyle: {
                    fontSize: 23,
                    fontWeight: 'bold'
                },
            }}
        >
            <Stack.Screen
                name='History'
                component={History}
                options={{
                    title: 'Lịch sử'
                }}
            />

        </Stack.Navigator>
    )
}
