import * as React from 'react'
import { getFocusedRouteNameFromRoute } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './Home'
import RoomDetail from '../roomDetail/RoomDetail'
import { UserHelperContext } from '../../userContext/UserHelperContext'

const Stack = createNativeStackNavigator()

export default function ManageHome({ navigation, route }) {
    React.useLayoutEffect(() => {
        const routeName = getFocusedRouteNameFromRoute(route);
        if (routeName == "RoomDetail") {
            navigation.setOptions({ tabBarStyle: { display: 'none' } })
        } else {
            navigation.setOptions({ tabBarStyle: { display: 'flex' } })
        }
    }, [navigation, route]);
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
                name='Home'
                component={Home}
                options={{
                    title: 'Trang chủ',
                }}
            />
            <Stack.Screen
                name='RoomDetail'
                component={RoomDetail}
                options={({ route }) => ({
                    title: route.params.name,
                })}
            />

        </Stack.Navigator>
    )
}
