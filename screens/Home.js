import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import TopTab from '../components/TopTab';
import {
  PageTitle,
  HomeHeader,
  LogoutIcon
} from './../components/styles';
import BottomTab2 from '../components/BottomTab2';

const Home = () => {
  const navigation = useNavigation();

    return ( 
    <>
        <StatusBar style="light" />
              <HomeHeader>
                <PageTitle welcome={true}>Tutorial-Tube</PageTitle>
              </HomeHeader>
              <LogoutIcon>
                  <MaterialCommunityIcons onPress={() => navigation.navigate('Login')} name="logout" size={40} color="white" />
              </LogoutIcon>
              <TopTab/>
              
              <View style={{width:380, bottom:30, marginLeft: 25}}>
              <BottomTab2/> 
              </View> 
    </>
  );
};


export default Home;