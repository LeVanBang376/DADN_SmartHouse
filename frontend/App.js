import { NavigationContainer } from '@react-navigation/native'
import Tabs from './navigation/tab'
import React from 'react'
import { UserContext } from './src/userContext/UserContext'
import { UserHelperContext } from './src/userContext/UserHelperContext'
import { DeviceContext } from './src/userContext/DeviceContext'
import { RoomContext } from './src/userContext/RoomContext'
import { PublisherContext } from './src/userContext/PublisherContext'
const App = () => {
  return (
    <RoomContext>
      <UserHelperContext>
        <UserContext>
          <DeviceContext>
            <PublisherContext>
              <NavigationContainer>
                <Tabs />
              </NavigationContainer>
            </PublisherContext>
          </DeviceContext>
        </UserContext>
      </UserHelperContext>
    </RoomContext>
  )
}

export default App;