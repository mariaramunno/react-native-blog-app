import { PageText, PageDetails, PageDetailsText, PageScreen } from "../components/styles";
import { useNavigation } from "@react-navigation/native";
import Video from "../components/Video";
import VideoList from "../components/VideoList";
import { ScrollView } from "react-native";

const Page1 = () => {

    const navigation = useNavigation();

    return (
        <ScrollView>
        <PageScreen>
            
            {VideoList.map((e)=>{
       return (
       <Video title={e.title} videoId={e.videoId}/>
     );})}
        </PageScreen>
        </ScrollView>
    )
}

export default Page1;