import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Devices_main from './screens/devices/Devices_main';
import Manage_devices from './screens/devices/Manage_devices';

const Tab = createBottomTabNavigator();

export default function UserView() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Devices" component={Manage_devices} />

      </Tab.Navigator>
    </NavigationContainer>
  );
}