import { View, Text, StyleSheet,TouchableOpacity } from 'react-native'
import React from 'react'



export default function HeaderTabs({activeTab,setactiveTab}) {


  return (
    <View style={style.header}>
      <HeaderButton title='Delivery' active={activeTab} activeTab={setactiveTab}  />
      <HeaderButton title='Pickup' active={activeTab} activeTab={setactiveTab}   />
    </View>
  )
}

function HeaderButton(props) {

  const {title,active,activeTab}=props
  
  return (
    
    <TouchableOpacity style={{
      backgroundColor: active==title?'black':'white',
      paddingVertical: 6,
      paddingHorizontal: 16,
      borderRadius:30
    }}
    onPress={()=>activeTab(title)}
    >
      <Text style={{
        color: active==title?'white':'black',
        fontSize: 15,
        fontWeight:'900',
      }}>
        {title}</Text>
      </TouchableOpacity>
    
  )
}

const style = StyleSheet.create({
  header: {
    
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop:5
    
  }
})