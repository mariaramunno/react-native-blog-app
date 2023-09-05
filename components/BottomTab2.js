import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import XBar from 'react-native-x-bar'
import { Text } from 'react-native';
import { Colors } from './styles';
import { useState } from 'react';
const {brand, secondary, teritary} = Colors;
function BottomTab2() {

  return (
    <>
    <XBar
        slots={[
            {
            style : {
                backgroundColor : brand,
                padding : 10,
                borderRadius: 50,
            }},

            [
                { children : <MaterialCommunityIcons name="account-outline" size={40} color="white"/> },
                { children : <MaterialCommunityIcons name="plus-circle-outline" size={40} color="white"/> },
                { children : <MaterialCommunityIcons name="magnify" size={40} color="white" />},
                { children : <MaterialCommunityIcons name="comment-text-outline" size={40} color="white"/> },
            ]
        ]}
        onPress={ () => console.log('the entire XBar was pressed!') }
        activeOpacity={ .5 }
        style={{
            height : 80,
            borderColor : '#ddd',
            borderWidth : 1,
            borderRadius : 25,
            backgroundColor: brand
        }}
        layout='space evenly'
    />
    </>
  )
}

export default BottomTab2