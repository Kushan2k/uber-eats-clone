import { View, Text, Image } from 'react-native'
import React from 'react'
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";




// const dummyData = {
//   image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&w=1000&q=80',
//   name: "Restuarent Name",
//   categories: [
//     { title: 'thai' },
//     { title: 'chinese' },
//     {title:'Sri lankan'}
//   ],
//   rating: 4.5,
//   reviews: 1200,
//   price:'$$'
// }




export default function About({ restuarent}) {
  const { name, image, categories, rating, reviews, price } = restuarent
  const catagorytext = categories?.map(cat => cat.title).join(' : ')
  const discription = `${catagorytext} ${price ? ' - ' + price : ''}`
  
  return (
    <View>
      <RestuarentImage image={image} />
      <RestuarentName name={name} />
      <RestuarentDiscription discription={discription} reviews={reviews} rating={rating} />
    </View>
  )
}

function RestuarentImage(props) {
  return (
    <Image source={{uri:props.image}} style={{width:'100%',height:230}} />

    
  )
}

function RestuarentName(props) {
  return (
    <Text style={{marginHorizontal:15,marginTop:10,fontSize:29,fontWeight:'600'}}>{props.name}</Text>
  )
}

function RestuarentDiscription(props) {
  return (
    <View style={{
     
      marginHorizontal: 15,
      marginTop: 10,
      flexDirection: 'row',
      justifyContent:'space-between'
    }}>
      <Text style={{
         fontSize: 15.5,
          fontWeight: '400',
      }}>{props.discription}  <FontAwesome5
          name='star'
          color={'#fcc93a'}
          size={12}
        /> {props.rating}   ({props.reviews})</Text>
      
    </View>
  )
}