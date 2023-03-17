<<<<<<< HEAD
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import UserView from './src/UserView';
export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
    <UserView />
  );
=======
import {NavigationContainer} from '@react-navigation/native'
import Tabs from './navigation/tab'
import React from 'react'

const App = () => {
  return(
    <NavigationContainer>
      <Tabs/>
    </NavigationContainer>
  )
>>>>>>> thuyenvippro113
}

export default App;