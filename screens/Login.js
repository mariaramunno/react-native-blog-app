import React, {useState} from "react";
import { StatusBar } from 'expo-status-bar';
import {Octicons, Ionicons} from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

import { Formik } from 'formik';
import {
    StyledContainer, 
    InnerContainer, 
    PageLogo, 
    PageTitle,
    SubTitle,
    StyledFormArea,
    LeftIcon,
    StyledInputLabel,
    StyledTextInput,
    RightIcon, 
    Colors,
    StyledButton, 
    ButtonText,
    Line,
    ExtraText,
    ExtraView,
    TextLink,
    TextLinkContent
} from './../components/styles';


import { ActivityIndicator, KeyboardAvoidingView, View } from "react-native";
import { FIREBASE_AUTH } from "../FirebaseConfig";
import { async } from "@firebase/util";
import { signInWithEmailAndPassword } from "firebase/auth";

const {brand, darkLight, primary, secondary} = Colors;

const Login = () => {
    const [hidePassword, setHidePassword] = useState(true);
    const [loading, setLoading] = useState(false);
    const auth = FIREBASE_AUTH;
    const navigation = useNavigation();


    const signIn = async (values) => {
        setLoading(true);
        try {
            const response = await signInWithEmailAndPassword(auth, values.email, values.password);
            console.log(response);
            navigation.navigate("Back");
        }
        catch (error){
            console.log(error);
            alert("Sign in failed: " + error.message);
        }
        finally {
            setLoading(false);
        }
    }

    return (
        <StyledContainer>
            <StatusBar style="dark"/>
            <InnerContainer>
                <PageLogo resizeMode="contain" source={require('./../assets/img/logo.png')} tintColor={brand}/>
                <PageTitle>Tutorial-Tube</PageTitle>
                <SubTitle>Account Login</SubTitle>
                <Formik
                    initialValues={{email:"", password:""}}
                    onSubmit={(values) => {
                        console.log(values)
                        signIn(values);
                    }}>
                        {({handleChange, handleBlur, handleSubmit, values}) => (
                        <StyledFormArea>
                            <KeyboardAvoidingView behavior="padding">
                            <MyTextInput
                                label="Email Address"
                                icon="mail"
                                placeholder="Email"
                                placeholderTextColor= {darkLight}
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                value={values.email}
                                keyboardType="email-address"
                                autoCapitalize="none"
                            />
                            <MyTextInput
                                label="Password"
                                icon="lock"
                                placeholder="* * * * * * *"
                                placeholderTextColor= {darkLight}
                                onChangeText={handleChange('password')}
                                onBlur={handleBlur('password')}
                                value={values.password}
                                secureTextEntry={hidePassword}
                                hidePassword={hidePassword}
                                setHidePassword={setHidePassword}
                                isPassword={true}
                            />
                            { loading ? <ActivityIndicator size="large" color={brand} />
                            : <StyledButton onPress={handleSubmit}>
                                <ButtonText>
                                    Login
                                </ButtonText>
                            </StyledButton> }
                            <Line />
                            </KeyboardAvoidingView>
                            <ExtraView>
                                <ExtraText>
                                    Don't have an account already? 
                                </ExtraText>
                                <TextLink onPress={() => navigation.navigate('Signup')}>
                                    <TextLinkContent> Signup</TextLinkContent>
                                </TextLink>
                            </ExtraView>
                        </StyledFormArea>)}
                </Formik>
            </InnerContainer>
        </StyledContainer>
    )
}

const MyTextInput = ({label, icon, isPassword, hidePassword,setHidePassword, ...props}) => {
    return (
        <View>
            <LeftIcon>
                <Octicons name={icon} size={30} color={brand}/>
            </LeftIcon>
            <StyledInputLabel>{label}</StyledInputLabel>
            <StyledTextInput {...props}/>
            {isPassword && (
                <RightIcon >
                    <Ionicons onPress={() => setHidePassword(!hidePassword)} name={hidePassword ? 'md-eye-off' : 'md-eye'} size={30} color={darkLight}/>
                </RightIcon>
            )}
        </View>
    );
};

export default Login;