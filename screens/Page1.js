import { Text, View } from "react-native";
import { PageText, PageDetails, PageDetailsText, PageScreen } from "../components/styles";
import { useNavigation } from "@react-navigation/native";
import BottomTab2 from "../components/BottomTab2";

const Page1 = () => {

    const navigation = useNavigation();

    return (
        <PageScreen>
            <PageText>Page 1</PageText>
            <PageDetails onPress={() => navigation.navigate("Details")}>
                <PageDetailsText>Details</PageDetailsText>
            </PageDetails> 
            {/* <View style={{width:380, bottom:-240}}>
            <BottomTab2/> 
            </View>  */}
        </PageScreen>
    )
}

export default Page1;