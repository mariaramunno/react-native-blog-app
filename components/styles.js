import { styled } from "styled-components";
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import  Constants from 'expo-constants';

const StatusBarHeight = Constants.statusBarHeight;

export const Colors = {
    primary:"#faf9fa",
    secondary: "#dfd8db",
    tertiary: "#6a7481",
    darkLight: "#6a7481",
    brand: "#891446",
    green: "#10b982",
    red: "#ef4444"
};

const { primary, secondary, tertiary, darkLight, brand, green, red } = Colors;
  
export const StyledContainer = styled.View`
    flex: 1;
    padding: 25px;
    padding-top: ${StatusBarHeight + 50}px;
    background-color: ${Colors.primary};
  `;
  
  export const InnerContainer = styled.View`
    width: 100%;
    flex: 1;
    align-items: center;
  `;
  
  export const WelcomeContainer = styled(InnerContainer)`
    padding: 25px;
    flex: 1;
    padding-top: ${StatusBarHeight}px;
    background-color: ${primary};
  `;
  
  export const PageLogo = styled.Image`
    width: 320px;
    height: 200px;
  `;
  
  export const PageTitle = styled.Text`
    font-size: 30px;
    text-align: center;
    font-weight: bold;
    color: ${brand};
    padding: 10px;
  
    ${(props) =>
      props.welcome &&
      `
      padding-top: 9%;
      font-size: 40px;
      color: white;
      margin-left: -33%;
    `}
  `;
  
  export const SubTitle = styled.Text`
    font-size: 18px;
    margin-bottom: 20px;
    letter-spacing: 1px;
    font-weight: bold;
    color: ${tertiary};
  
    ${(props) =>
      props.welcome &&
      `
      margin-bottom: 5px;
      font-weight: normal;
    `}
  `;
  
  export const StyledTextInput = styled.TextInput`
    background-color: ${secondary};
    padding: 15px;
    padding-left: 55px;
    padding-right: 55px;
    border-radius: 5px;
    font-size: 16px;
    height: 60px;
    margin-vertical: 3px;
    margin-bottom: 10px;
    color: ${tertiary};
  `;
  
  export const StyledInputLabel = styled.Text`
    color: ${tertiary};
    font-size: 13px;
    text-align: left;
  `;
  
  export const LeftIcon = styled.View`
    left: 15px;
    top: 35px;
    position: absolute;
    z-index: 1;
  `;
  
  export const RightIcon = styled.TouchableOpacity`
    right: 15px;
    top: 33px;
    position: absolute;
    z-index: 1;
  `;
  
  export const StyledButton = styled.TouchableOpacity`
    padding: 15px;
    background-color: ${brand};
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    margin-vertical: 10px;
    height: 60px;

  `;
  
  export const ButtonText = styled.Text`
    color: ${primary};
    font-size: 16px;
  `;
  
  
  export const Line = styled.View`
    height: 1px;
    width: 100%;
    background-color: ${darkLight};
    margin-vertical: 10px;
  `;
  
  export const StyledFormArea = styled.View`
    width: 90%;
  `;
  
  export const ExtraView = styled.View`
    justify-content: center;
    flex-direction: row;
    align-items: center;
    padding: 10px;
  `;
  
  export const ExtraText = styled.Text`
    justify-content: center;
    align-content: center;
    color: ${tertiary};
    font-size: 15px;
  `;
  
  export const TextLink = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
  `;
  
  export const TextLinkContent = styled.Text`
    color: ${brand};
    font-size: 15px;
  `;

  export const HomeHeader = styled.View`
    background-color: ${brand};
    width: 150%;
    height: 20%;
    margin-top: -60px;
    justify-content: center;
    align-items: center;
    padding-top: ${StatusBarHeight}px;

  `;

  export const LogoutIcon = styled.TouchableOpacity`
    z-index: 1;
    top: 7%;
    right: 3%;
    position: absolute;
`;

export const PageText = styled.Text`
      font-size: 30px;
      text-align: center;
      margin-bottom: 20%;
      margin-top: 10px;
`;

export const PageDetails = styled.TouchableOpacity`
      height: 15%;
      width: 20%;
      align-items: center;
      background-color: ${brand};
      border-radius: 20%;
      justify-content: center;
      text-align: center;
`;
export const PageDetailsText = styled.Text`
      color: ${secondary};
      font-size: 15px;
      font-weight: bold;
      padding: 5px 10px;
      text-align: center;
`;
export const PageScreen = styled.View`
      align-items: center;
      width: 100%;
      height: 100%;
      justify-content: center;
      padding-bottom: 50px;
`;

export const PostContainer = styled.View`
      padding: 50px;
      height: 300px;
`;

export const PostDetails = styled.TouchableOpacity`

`;

export const PostDetailsText = styled.Text`
      color: ${brand};
`;

export const VideoOptions = styled.View`
      flex-direction: row;
      height: 100%;
      width: 100%;
      margin-top: 10px;
      justify-content: space-evenly;
`;