import { View, Text } from 'react-native'
import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'

export default function SearchBar(props) {
  return (
    <View style={{
      marginTop: 15,
      flexDirection:'row'
    }}>
      <GooglePlacesAutocomplete
        
        query={{
          key:'AIzaSyA8ZXAjgPUgwojycqkpGZ86-NHnU5gxa3M',
        }}
        onPress={(data, details = null) => {
          const city = data.description.split(',')[0]
          props.setcity(city)
        
        }}
        placeholder='Search'
        styles={{
          textInput: {
            backgroundColor: '#eee',
            borderRadius: 20,
            fontWeight: '700',
            marginTop:7,
          },
          textInputContainer: {
            backgroundColor: '#eee',
            borderRadius: 50,
            flexDirection: 'row',
            alignItems: 'center',
            marginRight:13,
          }
        }}
        renderLeftButton={() => {
          (<View style={{marginLeft:10}}>
            <Ionicons name="location-sharp"  size={24} />
            
          </View>)
        }}
        renderRightButton={() => (
          <View style={{
            flexDirection: 'row',
            marginRight: 8,
            backgroundColor: 'white',
            alignItems: 'center',
            padding: 9,
            borderRadius:30,
          }}>

            <AntDesign name='clockcircle' style={{marginRight:8}} size={11}/>
            <Text>Search</Text>

          </View>
        )}
      />
    </View>
  )
}