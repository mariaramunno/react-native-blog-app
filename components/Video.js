import React, { useState, useCallback, useRef } from "react";
import { Button, View, Alert, Text } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";
import { PostContainer, PageDetails, PageDetailsText, VideoOptions, VideoTitle } from "./styles";
import { useNavigation } from "@react-navigation/native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Colors } from "./styles";

const {secondary} = Colors;

const Video = (item) => {
  const [playing, setPlaying] = useState(false);
  const navigation = useNavigation();

  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
      Alert.alert("video has finished playing!");
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);

  return (
    <PostContainer>
        <VideoTitle>{item.title}</VideoTitle>
        <YoutubePlayer 
            webViewStyle={{marginTop:15}}
            height={200}
            width={330}
            play={playing}
            videoId={item.videoId}
            onChangeState={onStateChange}
        />

        <VideoOptions>
            
            <PageDetails playButton={true} onPress={togglePlaying}>
                <MaterialCommunityIcons name={playing ? "pause" : "play"} size={38} color={secondary}></MaterialCommunityIcons>
            </PageDetails> 

            <PageDetails onPress={() => navigation.navigate("Details", {item})}>
                <PageDetailsText>Details</PageDetailsText>
            </PageDetails> 

        </VideoOptions>
    </PostContainer>
  );
}

export default Video;