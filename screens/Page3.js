import { PageText, PageDetails, PageDetailsText, PageScreen } from "../components/styles";
import { useNavigation } from "@react-navigation/native";

const Page3 = () => {
    const navigation = useNavigation();

    return (
        <PageScreen>
            <PageText>Page 3</PageText>
            <PageDetails onPress={() => navigation.navigate("Details")}>
                <PageDetailsText>Details</PageDetailsText>
            </PageDetails> 
        </PageScreen>
    )
}

export default Page3;