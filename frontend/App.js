import { NavigationContainer } from '@react-navigation/native'
// import Tabs from './navigation/tab'
import React from 'react'

import { StyleSheet, Text, View } from 'react-native'
import Login from './src/screens/LoginScreens/Login'
import Signup from './src/screens/LoginScreens/Signup'
import Homepage from './src/screens/LoginScreens/Homepage'
import { createStackNavigator } from "@react-navigation/stack"
import Roomcontext from './src/roomcontext/roomcontext'
const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='login' component={Login}
          options={
            {
              headerShown: false
            }
          }
        />

        <Stack.Screen name='signup' component={Signup}
          options={
            {
              headerShown: false
            }
          } />

        <Stack.Screen name='roomcontext' component={Roomcontext}
          options={
            {
              headerShown: false
            }
          }
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// const App = () => {
//   return (
//     <RoomContext>
//       <UserHelperContext>
//         <UserContext>
//           <DeviceContext>
//             <PublisherContext>
//               <NavigationContainer>
//                 <Tabs />
//               </NavigationContainer>
//             </PublisherContext>
//           </DeviceContext>
//         </UserContext>
//       </UserHelperContext>
//     </RoomContext>
//   )
// }

// export default App;