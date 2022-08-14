import { View, Text, TouchableOpacity,Modal } from 'react-native'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import OrderdItem from './OrderdItem'

export default function ViewCart() {

  const { items, restuarentName } = useSelector(state => state.cartReducer.selectedItems)
  const total = items.
    map(item => Number(item.price.replace('$', ''))).
    reduce((prev, current) => prev + current, 0)
  
  const totalSTR = total.toLocaleString('en', {
    style: 'currency',
    currency: 'USD',
    
  })

  const [modelVissible,setModelVissible]=useState(false)

  // console.log(totalSTR)

  function ModelContents() {
    return (
      <>
        <View style={{ flex: 1 ,justifyContent: 'flex-end', backgroundColor: 'rgba(0,0,0,0.6)' }}>
          <View style={{backgroundColor:'white',padding:10,height:500}}>
            <Text style={{ textAlign: 'center', fontWeight: '600', fontSize: 18, marginBottom: 10 }}>{restuarentName}
            </Text>
            {items.map((item, index) => {
              return (
                <OrderdItem key={index} item={item} />
              )
            })}
            <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:15}}>
              <Text style={{textAlign:'left',fontWeight:'600',fontSize:16,marginBottom:10}}>Subtotal</Text>
              <Text style={{}}>{totalSTR}</Text>
            </View>
            <View style={{
              flexDirection: 'row',
              justifyContent:'center'
            }}>
              <TouchableOpacity onPress={()=>setModelVissible(false)} style={{marginTop:15,backgroundColor:'black',padding:9,borderRadius:30,width:300,position:'relative',alignItems:'center'}}>
                <Text style={{color:'white',fontSize:20}}>Checkout</Text>
              </TouchableOpacity>
              
            </View>
          </View>

        </View>
      </>
    )
  }
  
  return (
    <>
      <Modal visible={modelVissible} animationType='slide' transparent={true}
        onRequestClose={() => setModelVissible(false)}>
        <ModelContents/>
      </Modal>

      {total?(
        <View style={{
          flex: 1,
          zIndex: 999,
          position: 'absolute',
          bottom: 20,
          alignItems: 'center',
          width: '100%',
          justifyContent:'space-around'
        }}>
          <View style={{
            flexDirection: 'row',
            justifyContent: 'center',
            width: '100%',
            
          }}>
            <TouchableOpacity style={{
              marginTop: 15,
              flexDirection:'row',
              backgroundColor: 'black',
              alignItems: 'center',
              padding: 10,
              width: 300,
              position: 'relative',
              borderRadius: 30,
              justifyContent:'flex-end'
              }}
              onPress={()=>setModelVissible(true)}
            >
              <Text style={{color:'white',fontSize:20,marginRight:30}}>View Cart</Text>
            <Text style={{ color: 'white', fontSize: 20,marginRight:5 }}>${ totalSTR}</Text>
            </TouchableOpacity>
          </View>
        </View>
          ):(<></>)
      }
    </>
  )
      
}