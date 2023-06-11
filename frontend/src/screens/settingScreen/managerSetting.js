import * as React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import ProfileScreen from './profileScreen'
import SettingScreen from './settingScreen'
import History from '../historyScreen/History'
import ChangePassword from '../../screens/settingScreen/changePassword'
import Policies from '../../screens/settingScreen/policies'
import Term from '../../screens/settingScreen/term'
import TermsAndPolicies from '../../screens/settingScreen/termsAndPolicies'
import Color from '../../colors/Color'
import LogOut from './logOut'
import Response from './response'
import HelpAndResponse from './helpAndResponse'
import HelpScreen from './helpScreen'
import RequestScreen from './requestScreen'
import ProblemScreen from './problemScreen'
import EditProfileScreen from './EditProfileScreen'
import ChangeTem from './changeTem'
const Stack = createNativeStackNavigator()

export default function ManagerSetting() {
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
                component={SettingScreen}
                options={{
                    title: '',
                }}
            />
            <Stack.Screen
                name='profileScreen'
                component={ProfileScreen}
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
                name='HistoryScreen'
                component={History}
                options={{
                    title: 'Lịch sử',
                }}
            />

            <Stack.Screen
                name='changePassword'
                component={ChangePassword}
                options={{
                    title: 'Đổi mật khẩu',
                }}
            />
            <Stack.Screen
                name='termsAndPolicies'
                component={TermsAndPolicies}
                options={{
                    title: 'Điều khoản và chính sách',
                }}
            />
            <Stack.Screen
                name='term'
                component={Term}
                options={{
                    title: 'Điều khoản',
                }}
            />
            <Stack.Screen
                name='policies'
                component={Policies}
                options={{
                    title: 'Chính sách',
                }}
            />
            <Stack.Screen
                name='helpAndResponse'
                component={HelpAndResponse}
                options={{
                    title: 'Phản hồi và trợ giúp',
                }}
            />
            <Stack.Screen
                name='helpScreen'
                component={HelpScreen}
                options={{
                    title: 'Trợ giúp',
                }}
            />
            <Stack.Screen
                name='response'
                component={Response}
                options={{
                    title: 'Phản hồi',
                }}
            />
            <Stack.Screen
                name='requestScreen'
                component={RequestScreen}
                options={{
                    title: 'Gửi yêu cầu trợ giúp',
                }}
            />
            <Stack.Screen
                name='problemScreen'
                component={ProblemScreen}
                options={{
                    title: 'Các vấn đề thường gặp',
                }}
            />

            <Stack.Screen
                name='logOut'
                component={LogOut}
                options={{
                    title: 'Đăng xuất',
                }}
            />
            <Stack.Screen
                name='changeTem'
                component={ChangeTem}
                options={{
                    title: 'Thay đổi ngưỡng nhiệt độ',
                }}
            />

        </Stack.Navigator>
    )
}