import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export const shops = [
  {
    image_url: 'https://www.ubookstore.com/sca-dev-2019-2/extensions/UniversityBookStore/SummitUBS/3.0.3/img/no_image_available.jpeg?resizeid=6&resizeh=1920&resizew=1920',
    name: 'No Restuarents Found',
    rating: 0,
    alias: "check again later",
    reviews: 234,
    price:'$$',
    
  }
]


export default function RestuarentItems(props) {
  return (
    <>
      {
        props.restuarentData?.map((shop, index) => {
          return (
            <TouchableOpacity key={index} activeOpacity={0.9} style={{ marginBottom: 20 }}
              onPress={() => {
                props.navigation.navigate("RestuarentDetails", {
                  name: shop.name,
                  rating: shop.rating,
                  reviews: shop.review_count,
                  price: '$$',
                  image: shop.image_url,
                  categories:shop.categories
                })
            }}
            >
              <View >
                <RestuarentImage image={shop.image_url}  />
                <RestuarentText text={shop.name}  rating={shop.rating} sub={shop.alias} />
              </View>
            </TouchableOpacity>
          )
        })
      }
    </>
    
  )
}

function RestuarentImage(props) {
  return (
    <>
      
      <Image source={{
          uri:props.image
        }} style={{
          width: '100%',
          height:200,
      }} />
      
      <TouchableOpacity style={{
        position: 'absolute',
        right: 20,
        top:20,
      }}>
        <MaterialCommunityIcons name='heart-outline' size={25} color='#eee'/>
      </TouchableOpacity>
        
      
      
    </>
  )
}

function RestuarentText(props) {
  
  return (
    <View style={{
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      
      
    }}>
      <View>
        <Text style={{fontWeight:'900',textTransform:'capitalize'}}>{props.text}</Text>
        <Text style={{
          fontWeight: '500', color:'#818285',

        }}>
          {props.sub} </Text>
      </View>
      <View style={{
        backgroundColor: '#eee',
        padding: 3,
        borderRadius: 30,
        marginRight:10
      }}>
        <Text style={{margin:5}}>{props.rating}</Text>
      </View>
    </View>
  )
}
