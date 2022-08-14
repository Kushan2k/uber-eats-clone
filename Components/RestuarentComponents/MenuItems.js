import { View, Text, Image,ScrollView } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements/dist/divider/Divider'
import BouncyCheckbox from 'react-native-bouncy-checkbox'
import {useDispatch,useSelector} from 'react-redux'


const menuitems = [
  {
    title:'Chicken fried rice',
    discription:'checken fired rice with saled',
    price:'$15.7',
    image:'https://i.tribune.com.pk/media/images/1590373-biryani-1513939158/1590373-biryani-1513939158.gif'
  },
  {
    title:'beef burger',
    discription:'5 layer beef bruger',
    price:'$10.2',
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7FALVp5Tu2HWb_0L4rtpaZTnby8trzCrhwA&usqp=CAU'
  },
  {
    title:'Chicken takos',
    discription:'2 peaces of checken taakos chinese',
    price:'$8.5',
    image:'https://www.holidify.com/images/cmsuploads/compressed/Mexican_tacos_(9055162205)_20180601142919.jpg'
  },
  {
    title:'Chicken takos',
    discription:'2 peaces of checken taakos chinese',
    price:'$8.5',
    image:'https://www.holidify.com/images/cmsuploads/compressed/Mexican_tacos_(9055162205)_20180601142919.jpg'
  },
  {
    title:'Chicken takos',
    discription:'2 peaces of checken taakos chinese',
    price:'$8.5',
    image:'https://www.holidify.com/images/cmsuploads/compressed/Mexican_tacos_(9055162205)_20180601142919.jpg'
  },{
    title:'Chicken takos',
    discription:'2 peaces of checken taakos chinese',
    price:'$8.5',
    image:'https://www.holidify.com/images/cmsuploads/compressed/Mexican_tacos_(9055162205)_20180601142919.jpg'
  }
]

export default function MenuItems({restuarentName}) {

  console.log(restuarentName)
  const dispatch = useDispatch()
  
  const additem = (item, checkboxValue) => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: {
        ...item,
        restuarentName: restuarentName,
        checkboxValue: checkboxValue
      }
      

    })
  }

  const cartItems = useSelector(state => state.cartReducer.selectedItems.items)
  const isFoodinCart = (food, cartItems) => Boolean(cartItems.find(item => item.title === food.title))
    
  

  return (
    <ScrollView showsHorizontalScrollIndicator={false}>
      {
        menuitems.map((item, index) => {
          return (
            <View key={index}>
              <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                margin:20
              }}>
                <BouncyCheckbox iconStyle={{
                  borderColor: 'lightgrey',
                  
                }}
                  onPress={(checkValue) => additem(item, checkValue)}
                  isChecked={isFoodinCart(item,cartItems)}
                fillColor='green'
                />
                <FoodInfos name={item.title} discription={item.discription} price={item.price} />
                <FoodImage image={item.image} />
              </View>
              <Divider width={1.8} orientation='vertical'/>
            </View>
          )
        })
      }
    </ScrollView>
  )
}

function FoodInfos(props) {
  return (
    <View style={{
      width: '60%',
      justifyContent:'space-evenly'
    }}>
      <Text style={{fontWeight:'600',fontSize:19}}>{ props.name}</Text>
      <Text>{ props.discription}</Text>
      <Text>{ props.price}</Text>
    </View>
  )
}

function FoodImage(props) {
  return (
    <View>
      <Image
        source={{ uri: props.image }}
        style={{
          width: 100,
          height: 100,
          borderRadius:10
          
        }}
      />

    </View>
  )
}