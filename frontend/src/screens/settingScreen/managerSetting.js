import * as React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import profileScreen from './profileScreen'
import settingScreen from './settingScreen'
import historyScreen from '../historyScreen/historyScreen'
import changePassword from '../../screens/settingScreen/changePassword'
import policies from '../../screens/settingScreen/policies'
import term from '../../screens/settingScreen/term'
import termsAndPolicies from '../../screens/settingScreen/termsAndPolicies'
import Color from '../../colors/Color'
import logOut from './logOut'
import response from './response'
import helpAndResponse from './helpAndResponse'
import helpScreen from './helpScreen'
import requestScreen from './requestScreen'
import problemScreen from './problemScreen'
import EditProfileScreen from './EditProfileScreen'
import Login from '../LoginScreens/Login'
const Stack = createNativeStackNavigator()

export default function managerSetting() {
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
                name='settingScreen'
                component={settingScreen}
                options={{
                    title: '',
                }}
            />
            <Stack.Screen
                name='profileScreen'
                component={profileScreen}
                options={{
                    title: 'Thông tin cá nhân',
                }}
            />
            <Stack.Screen
                name='EditProfileScreen'
                component={EditProfileScreen}
                options={{
                    title: 'Chỉnh sửa thông tin cá nhân',
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
                name='changePassword'
                component={changePassword}
                options={{
                    title: 'Đổi mật khẩu',
                }}
            />
            <Stack.Screen
                name='termsAndPolicies'
                component={termsAndPolicies}
                options={{
                    title: 'Điều khoản và chính sách',
                }}
            />
            <Stack.Screen
                name='term'
                component={term}
                options={{
                    title: 'Điều khoản',
                }}
            />
            <Stack.Screen
                name='policies'
                component={policies}
                options={{
                    title: 'Chính sách',
                }}
            />
            <Stack.Screen
                name='helpAndResponse'
                component={helpAndResponse}
                options={{
                    title: 'Phản hồi và trợ giúp',
                }}
            />
            <Stack.Screen
                name='helpScreen'
                component={helpScreen}
                options={{
                    title: 'Trợ giúp',
                }}
            />
            <Stack.Screen
                name='response'
                component={response}
                options={{
                    title: 'Phản hồi',
                }}
            />
            <Stack.Screen
                name='requestScreen'
                component={requestScreen}
                options={{
                    title: 'Gửi yêu cầu trợ giúp',
                }}
            />
            <Stack.Screen
                name='problemScreen'
                component={problemScreen}
                options={{
                    title: 'Các vấn đề thường gặp',
                }}
            />

            <Stack.Screen
                name='logOut'
                component={logOut}
                options={{
                    title: 'Đăng xuất',
                }}
            />
            <Stack.Screen
                name='loginScreen'
                component={Login}
                options={{
                    title: 'Login',
                }}
            />
        </Stack.Navigator>
    )
}