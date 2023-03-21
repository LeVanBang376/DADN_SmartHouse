import { NavigationContainer } from '@react-navigation/native'
import Tabs from './navigation/tab'
import React from 'react'
import Notifications from './src/components/notifications/Notifications'
const App = () => {
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  )
}

export default App;