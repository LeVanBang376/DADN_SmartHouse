import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import sensorScreen from '../src/screens/sensorScreen/sensorScreen';
import settingScreen from '../src/screens/settingScreen/settingScreen';
import managerSetting from '../../frontend/src/screens/settingScreen/managerSetting'
import historyScreen from '../src/screens/historyScreen/historyScreen';
import Manage_devices from '../src/screens/devices/Manage_devices'

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
     tabBarOptions={{
      keyboardHidesTabBar: true,
    }}>
      <Tab.Screen name="Thiết bị" component={Manage_devices} />
      <Tab.Screen name="Cảm biến" component={sensorScreen} />
      <Tab.Screen name="Lịch sử" component={historyScreen} />
      <Tab.Screen name="Cài đặt" component={managerSetting} />
    </Tab.Navigator>
  );
}

export default Tabs


