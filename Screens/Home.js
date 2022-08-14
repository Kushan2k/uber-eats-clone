import { View, ScrollView, Text,SafeAreaView } from 'react-native'
import React, { useEffect, useState } from 'react'
import HeaderTabs from '../Components/HomeComponents/HeaderTabs'
import SearchBar from '../Components/HomeComponents/SearchBar'
import Catagories from '../Components/HomeComponents/Catagories'
import RestuarentItems, { shops } from '../Components/HomeComponents/RestuarentItems'
import BottomTabs from '../Components/HomeComponents/BottomTabs'
import { Divider } from 'react-native-elements'


const YELP_API_KEY='1mB3Uv1w6tRTNjEyZ8uJEwfEGmWeey5TQrz4QgIyhk33apB4C-7iOpNrBEGE1xEEkKPqkrxFmSSgoZEi5dBaVdTmz_njudBm7xuP-uGW-OcrkVNKGisisLzrSIX0YnYx'

export default function Home({navigation}) {
  
  const [restuarentdata, setRestuarentdata] = React.useState(shops)
  const [city, setCity] = useState("San Francisco")
  const [activeTab,setAciveTab]=useState("Delivery")

  async function getData() {
    const url = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`

    const options = {
      headers: {
        Authorization:`Bearer ${YELP_API_KEY}`
      }
    }

    return await fetch(url, options).then(data => data.json()).then(json => {
      const filertData = json.businesses.filter(bus => bus.transactions.includes(activeTab.toLowerCase()))
      
      
      setRestuarentdata(filertData)
      
    }).catch(error=>getData())
    

  }

  useEffect(() => {
   getData() 
  },[city,activeTab])

  
  return (
    
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1,marginTop:55,paddingHorizontal:15}}>
      <View style={{backgroundColor:'white',paddingBottom:10}}>
        <HeaderTabs activeTab={ activeTab} setactiveTab={setAciveTab} />
        <SearchBar setcity={setCity} />
      
      </View>
      <ScrollView showsVerticalScrollIndicator={false} style={{}}  >
        <Catagories />
        <RestuarentItems restuarentData={restuarentdata} navigation={navigation} />
        
      </ScrollView>

      <Divider  width={1} />
      <BottomTabs/>

      
      
    </SafeAreaView>
    
  )
}