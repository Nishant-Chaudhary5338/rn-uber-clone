import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { ArrowRightOutlined } from '@ant-design/icons'
import { useNavigation } from '@react-navigation/native'




const data = [
    {id: 1,
     title: "Get a ride",
     image: "https://links.papareact.com/3pn",
     screen: "MapScreen"
    },
    { id: 2,
     title: "Order Food ",
     image: "https://links.papareact.com/28w",
     screen: "EatsScreen"
    },
]
const NavOptions = () => {
  const navigation = useNavigation();
  return (
    <View>
      <FlatList 
      horizontal
      data={data}
      key = {(item)=> item.id}
      renderItem={({item}) => (
        <TouchableOpacity 
         onPress={()=> navigation.navigate(item.screen)}
        style = {{backgroundColor: "gray", margin: 10, padding: 10}}>
            <View>
            
            <Image style = {{height : 120, width : 120, resizeMode : "contain"}} source = {{uri: item.image}} />
            <Text>{item.title}</Text>
            <ArrowRightOutlined  style = {{fontSize: 20, color: "black", borderRadius: 4}}/>
            </View>
        </TouchableOpacity>
      )}
      />
    </View>
  )
}

export default NavOptions