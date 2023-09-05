import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import XBar from 'react-native-x-bar'
import { Text } from 'react-native';
import { Colors } from './styles';
import { useState } from 'react';
const {brand, secondary, teritary} = Colors;
function BottomTab() {
    const [img, setImage] = useState("heart-outline");
  return (
    <>
    <XBar
        slots={[
            {
            style : {
                backgroundColor : teritary,
                padding : 10,
                borderRadius: 50
            }},

            [
                { children : <MaterialCommunityIcons name="account-outline" size={40} color={brand}/> },
                { children : <MaterialCommunityIcons name="folder-outline" size={40} color={brand}/> },
                { children : <MaterialCommunityIcons name={img} size={40} color={brand} onPress={ () => (img=="heart-outline") ? setImage("heart") : setImage("heart-outline")}/>},
                { children : <MaterialCommunityIcons name="comment-text-outline" size={40} color={brand}/> },
                { children : <MaterialCommunityIcons name="share-variant-outline" size={40} color={brand}/> }
            ]
        ]}
        onPress={ () => console.log('the entire XBar was pressed!') }
        activeOpacity={ .5 }
        style={{
            height : 80,
            borderColor : '#ddd',
            borderWidth : 1,
            borderRadius : 2,
            backgroundColor: 'white',
        }}
        layout='space evenly'
    />
    </>
  )
}

export default BottomTab;