import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import sensorScreen from '../src/screens/sensorScreen/sensorScreen';
import settingScreen from '../src/screens/settingScreen/settingScreen';
import managerSetting from '../../frontend/src/screens/settingScreen/managerSetting'
import historyScreen from '../src/screens/historyScreen/historyScreen';
import Manage_devices from '../src/screens/devices/Manage_devices'
import manageSetting from '../src/screens/settingScreen/managerSetting';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        keyboardHidesTabBar: true,
      }}>
      <Tab.Screen 
        name="Thiết bị" 
        component={Manage_devices} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="md-home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen 
        name="Cảm biến" 
        component={sensorScreen} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="md-pulse" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen 
        name="Lịch sử" 
        component={historyScreen} 
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