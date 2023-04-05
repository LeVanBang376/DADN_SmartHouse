import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import settingScreen from '../src/screens/settingScreen/settingScreen';
import managerSetting from '../../frontend/src/screens/settingScreen/managerSetting'
import ManageHome from '../src/screens/home/ManageHome';
import historyScreen from '../src/screens/historyScreen/historyScreen';
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
      <Tab.Screen name="Trang chủ" component={ManageHome} />
      <Tab.Screen name="Lịch sử" component={historyScreen} />
      <Tab.Screen name="Cài đặt" component={managerSetting} />
    </Tab.Navigator>
  );
}

export default Tabs