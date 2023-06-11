import { NavigationContainer } from '@react-navigation/native'
import Tabs from './navigation/tab'
import React from 'react'
import { UserContext } from './src/userContext/UserContext'
import { UserHelperContext } from './src/userContext/UserHelperContext'
import { DeviceContext } from './src/userContext/DeviceContext'
import { RoomListContext } from './src/userContext/RoomListContext'
import { SensorContext } from './src/userContext/SensorContext'
import { RoomContext } from './src/userContext/RoomContext'
import { PublisherContext } from './src/userContext/PublisherContext'
import { AuthenticationContext } from './src/userContext/AuthenticationContext'
import { ActivityContext } from './src/userContext/ActivityContext'
import Index from './src/screens/Index'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <AuthenticationContext>
      <RoomContext>
        <ActivityContext>
          <UserHelperContext>
            <UserContext>
              <RoomListContext>
                <SensorContext>
                  <DeviceContext>
                    <ActivityContext>
                      <PublisherContext>
                        <NavigationContainer>
                          <Index />
                        </NavigationContainer>
                      </PublisherContext>
                    </ActivityContext>
                  </DeviceContext>
                </SensorContext>
              </RoomListContext>
            </UserContext>
          </UserHelperContext>
        </ActivityContext>
      </RoomContext>
    </AuthenticationContext>
  )
}

export default App;