import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity,Image } from "react-native";
import { Text } from "react-native-paper";
import Background from "../components/Background";
import Header from "../components/Header";
import Button from "../components/Button";
import TextInput from "../components/TextInput";
import BackButton from "../components/BackButton";
import { theme } from "../Constants/theme";
import { emailValidator } from "../helpers/emailValidator";
import { passwordValidator } from "../helpers/passwordValidator";
import { nameValidator } from "../helpers/nameValidator";
import { signInUser } from "../api/auth-api";
import Toast from "../components/Toast";
import Colors from '../Constants/Colors';

const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState({ value: "", error: "" });
  const [email, setEmail] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });
  const [loading, setLoading] = useState();
  const [error, setError] = useState();

  const onSignUpPressed = async () => {
    const nameError = nameValidator(name.value);
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);
    if (emailError || passwordError || nameError) {
      setName({ ...name, error: nameError });
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
      return;
    }
    setLoading(true);
    const response = await signInUser({
      name: name.value,
      email: email.value,
      password: password.value,
    });
    if (response.error) {
      setError(response.error);
    }
    setLoading(false);
  };

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Image source={require("../assets/logo2.jpg")} style={styles.image}>
      </Image>

      <Header>Create Account</Header>
      <TextInput
        label="Name"
        returnKeyType="next"
        value={name.value}
        onChangeText={(text) => setName({ value: text, error: "" })}
        error={!!name.error}
        errorText={name.error}
      />
      <TextInput
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: "" })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />
      <TextInput
        label="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={(text) => setPassword({ value: text, error: "" })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />
      <Button
        loading={loading}
        mode="contained"
        onPress={onSignUpPressed}
        style={{ marginTop: 24,backgroundColor: Colors.primaryColor }}
      >
        Sign Up
      </Button>
      <View style={styles.row}>
        <Text>Already have an account? </Text>
        <TouchableOpacity  onPress={() => navigation.replace("LoginScreen")}>
          <Text style={styles.link}>Login</Text>
        </TouchableOpacity>
      </View>
      <Toast message={error} onDismiss={() => setError("")} />
    </Background>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    marginTop: 4,
  },
  link: {
    fontWeight: "bold",
    color: Colors.darkColor,
  },
  image: {
    resizeMode:'cover',
    justifyContent: 'center',
    width:200,
    borderRadius:250,
    borderColor:Colors.secondaryColor,
    borderWidth:2,
    height:200,
  },
});

export default RegisterScreen;
