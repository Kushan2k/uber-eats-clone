import { View, Text } from 'react-native'
import React from 'react'

export default function OrderdItem({ item }) {
  const {title,price}=item
  return (
    <View style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      borderBottomColor: '#999',
      borderBottomWidth: 1,
      padding:20
    }}>
      <Text style={{ fontWeight: '600', fontSize: 16 }}>{title}</Text>
      <Text style={{opacity:0.7,fontSize:16}}>{ price}</Text>
    </View>
  )
}