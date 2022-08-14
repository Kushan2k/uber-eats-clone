import { View, Text,SafeAreaView } from 'react-native'
import React from 'react'
import About from '../Components/RestuarentComponents/About'
import { Divider } from 'react-native-elements/dist/divider/Divider'
import MenuItems from '../Components/RestuarentComponents/MenuItems'
import ViewCart from '../Components/RestuarentComponents/ViewCart'

export default function RestuarentDetails({ route,navigation }) {
  
  // console.log(route)
  return (
    <SafeAreaView style={{
      backgroundColor: "#eee",
      flex: 1,
    }}>

      <About restuarent={route.params } />
      <Divider width={1.8} style={{ marginVertical: 10 }} />
      <MenuItems restuarentName={route.params.name} />
      <ViewCart navigation={navigation} restuarentName={route.params.name} />
    </SafeAreaView>
  )
}