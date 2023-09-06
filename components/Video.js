import React, { useState, useCallback, useRef } from "react";
import { Button, View, Alert, Text } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";
import { PostContainer, PageDetails, PageDetailsText, VideoOptions } from "./styles";
import { useNavigation } from "@react-navigation/native";

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
        <Text>{item.title}</Text>
        <YoutubePlayer
            height={190}
            width={330}
            play={playing}
            videoId={item.videoId}
            onChangeState={onStateChange}
        />

        <VideoOptions>
            
            <PageDetails onPress={togglePlaying}>
                <PageDetailsText>{playing ? "Pause" : "Play"}</PageDetailsText>
            </PageDetails> 

            <PageDetails onPress={() => navigation.navigate("Details", {item})}>
                <PageDetailsText>Details</PageDetailsText>
            </PageDetails> 

        </VideoOptions>
    </PostContainer>
  );
}

export default Video;