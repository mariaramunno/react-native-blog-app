import { Text, View } from "react-native"
import { PageText } from "../components/styles";
import BottomTab from "../components/BottomTab";
const Details = () => {
    return (
        <>
        <PageText>Detailsssssssss........</PageText>
        <View style={{position:"absolute",bottom:0, width:430}}>
        <BottomTab/>
        </View>
        </>
    )
}

export default Details;