import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import deviceScreen from '../screen/deviceScreen'
import historyScreen from '../screen/historyScreen'
import sensorScreen from '../screen/sensorScreen'
import settingsScreen from '../screen/settingScreen'


const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator>
        <Tab.Screen name="Thiết bị" component={deviceScreen} />
        <Tab.Screen name="Cảm biến" component={sensorScreen} />
        <Tab.Screen name="Lịch sử" component={historyScreen} />
        <Tab.Screen name="Cài đặt" component={settingsScreen} />
    </Tab.Navigator>
  );
}

export default Tabs


