import React from 'react'
import {createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Home from './Screens/Home'
import RestuarentDetails from './Screens/RestuarentDetails'
import { Provider  } from 'react-redux'
import confugureStore from './Redux/store'

export default function Navigation() {

  const Stack = createStackNavigator()
  const store=confugureStore()
  
  
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home' screenOptions={{
          headerShown:false
        }} >
          <Stack.Screen name='Home' component={Home} />
          <Stack.Screen name='RestuarentDetails' component={RestuarentDetails}/>

        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}