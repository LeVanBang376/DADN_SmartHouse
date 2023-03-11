import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Devices_main from './screens/devices/Devices_main';

const Tab = createBottomTabNavigator();

export default function UserView() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Devices" component={Devices_main} />

      </Tab.Navigator>
    </NavigationContainer>
  );
}