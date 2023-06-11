import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import settingScreen from '../src/screens/settingScreen/settingScreen';
import managerSetting from '../../frontend/src/screens/settingScreen/managerSetting'
import ManageHome from '../src/screens/home/ManageHome';
import ManageHistory from '../src/screens/historyScreen/ManageHistory';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        keyboardHidesTabBar: true,
      }}
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        name="Trang chủ"
        component={ManageHome}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="md-home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Lịch sử"
        component={ManageHistory}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="md-time" size={size} color={color} />
          ),
        }}

      />
      <Tab.Screen
        name="Cài đặt"
        component={managerSetting}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="md-settings" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default Tabs