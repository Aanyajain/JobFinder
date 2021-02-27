import React from "react";
import {ImageBackground,View,Text,StyleSheet} from 'react-native';
import Background from "../components/Background";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Button from "../components/Button";
import Paragraph from "../components/Paragraph";

const StartScreen = ({ navigation }) => (
  <Background>
      <ImageBackground source={require("../assets/main.jpg")} style={styles.image}>
      </ImageBackground>
    <Header>Login Template</Header>
    <Paragraph>The easiest way to start with your Job Application.</Paragraph>
    <Button mode="contained" onPress={() => navigation.navigate("LoginScreen")}>
      Login
    </Button>
    <Button
      mode="outlined"
      onPress={() => navigation.navigate("RegisterScreen")}
    >
      Sign Up
    </Button>
  </Background>
);

const styles = StyleSheet.create({
  image: {
    resizeMode:'cover',
    justifyContent: 'center',
    width:300,
    height:300,
    margin:10,
  },
});

export default StartScreen;
