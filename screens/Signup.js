import React, {useState} from "react";
import { StatusBar } from 'expo-status-bar';
import {Ionicons, Octicons} from '@expo/vector-icons';
import { Formik } from 'formik';

import { useNavigation } from "@react-navigation/native";

import {
    StyledContainer, 
    InnerContainer, 
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


import { View, TouchableOpacity, ActivityIndicator, KeyboardAvoidingView  } from "react-native";
import { FIREBASE_AUTH } from "../FirebaseConfig";
import { async } from "@firebase/util";
import { createUserWithEmailAndPassword } from "firebase/auth";
const {brand, darkLight, primary} = Colors;

const Signup = () => {
    const [hidePassword, setHidePassword] = useState(true);
    const [hideConPassword, setHideConPassword] = useState(true);
    const navigation = useNavigation();

    const [loading, setLoading] = useState(false);
    const auth = FIREBASE_AUTH;

    const signUp = async (values) => {
        setLoading(true);
        try {
            const response = await createUserWithEmailAndPassword(auth, values.email, values.password);
            console.log(response); 
            alert("Sign up was successful, please log in.");
            navigation.navigate("Login")
        }
        catch (error){
            console.log(error);
            alert("Sign up failed: " + error.message);
        }
        finally {
            setLoading(false);
        }
    }
    return (
        <StyledContainer>
            <StatusBar style="dark"/>
            <InnerContainer>
                <PageTitle>Tutorial-Tube</PageTitle>
                <SubTitle>Account Signup</SubTitle>
                <Formik
                    initialValues={{ email:'', password:'', confirmPassword:''}}
                    onSubmit={(values) => {
                        console.log(values);
                        signUp(values);
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
                            <MyTextInput
                                label="Confirm Password"
                                icon="lock"
                                placeholder="* * * * * * *"
                                placeholderTextColor= {darkLight}
                                onChangeText={handleChange('confirmPassword')}
                                onBlur={handleBlur('confirmPassword')}
                                value={values.confirmPassword}
                                secureTextEntry={hideConPassword}
                                hidePassword={hideConPassword}
                                setHidePassword={setHideConPassword}
                                isPassword={true}
                            />
                            { loading ? <ActivityIndicator size="large" color={brand} />
                            :
                            <StyledButton onPress={handleSubmit}>
                                <ButtonText>
                                    Signup
                                </ButtonText>
                             </StyledButton> }
                            <Line />
                            </KeyboardAvoidingView>
                            <ExtraView>
                                <ExtraText>
                                    Already have an account? 
                                </ExtraText>
                                <TextLink onPress={() => navigation.goBack()}>
                                    <TextLinkContent > Login</TextLinkContent>
                                </TextLink>
                        </ExtraView>
                        </StyledFormArea>)}
                </Formik> 
            </InnerContainer>
        </StyledContainer>
    )
};

const MyTextInput = ({label, icon, isPassword, hidePassword, setHidePassword, ...props}) => {
    return (
        <View>
            <LeftIcon>
                <Octicons name={icon} size={30} color={brand}/>
            </LeftIcon>
            <StyledInputLabel>{label}</StyledInputLabel>
            
        
            
        
        <StyledTextInput {...props} />
        
            {isPassword && (
                <RightIcon >
                    <Ionicons onPress={() => setHidePassword(!hidePassword)} name={hidePassword ? 'md-eye-off' : 'md-eye'} size={30} color={darkLight}/>
                </RightIcon>
            )}
        </View>
    );
};

export default Signup;