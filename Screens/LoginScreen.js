import React, { useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";

const initialState = {
  login: "",
  email: "",
  password: "",
};

const RegistrationScreen = () => {
  const [isShowKeybord, setIsShowKeybord] = useState(false);
  const [formState, setFormState] = useState(initialState);

  const handleShowKeybord = () => {
    setIsShowKeybord(true);
  };

  const handleCloseKeyboard = () => {
    setIsShowKeybord(false);
    Keyboard.dismiss();
    console.log(formState);
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={handleCloseKeyboard}>
        <ImageBackground
          style={styles.image}
          source={require("../assets/bg.jpg")}
          resizeMode="cover"
        >
          <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
          >
            <View style={styles.formContainer}>
              <View style={styles.avatarContainer}>
                <View style={styles.avatar}></View>
                <View style={styles.addAvatar}>
                  <Text
                    style={{
                      color: "#FF6C00",
                      fontSize: 16,
                      textAlign: "center",
                    }}
                  >
                    &#43;
                  </Text>
                </View>
              </View>
              <Text style={styles.header}>Реєстрація</Text>

              <View
                style={{
                  ...styles.form,
                  marginTop: isShowKeybord ? 16 : 32,
                }}
              >
                <View style={{ marginTop: 16 }}>
                  <TextInput
                    style={styles.input}
                    textAlign={"left"}
                    placeholder="Адреса електронної пошти"
                    onFocus={handleShowKeybord}
                    onChangeText={(value) =>
                      setFormState((prevState) => ({
                        ...prevState,
                        email: value,
                      }))
                    }
                  ></TextInput>
                </View>
                <View style={{ marginTop: 16 }}>
                  <TextInput
                    style={styles.input}
                    textAlign={"left"}
                    placeholder="Пароль"
                    secureTextEntry={true}
                    onFocus={handleShowKeybord}
                    onChangeText={(value) =>
                      setFormState((prevState) => ({
                        ...prevState,
                        password: value,
                      }))
                    }
                  ></TextInput>
                </View>
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={{
                    ...styles.button,
                    marginTop: isShowKeybord ? 16 : 43,
                  }}
                  onPress={handleCloseKeyboard}
                >
                  <Text style={{ color: "#fff", fontSize: 16 }}>
                    Зареєструватися
                  </Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  ...styles.loginLink,
                  marginBottom: isShowKeybord ? 16 : 45,
                }}
              >
                <Text>Вже є аккаунт? Увійти</Text>
              </View>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  image: {
    flex: 1,
    justifyContent: "flex-end",
  },
  header: {
    // fontFamily: "Roboto",
    fontSize: 30,
    marginTop: 92,
    textAlign: "center",
    fontWeight: 500,
    letterSpacing: 0.01,
  },
  avatarContainer: {
    position: "absolute",
    top: -60,
    left: "50%",
    transform: [{ translateX: -50 }],
  },
  avatar: {
    width: 120,
    height: 120,
    position: "relative",
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
  },
  addAvatar: {
    width: 25,
    height: 25,
    position: "absolute",
    bottom: 12.5,
    right: -12.5,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#FF6C00",
    borderRadius: 25 / 2,
    backgroundColor: "#fff",
  },
  formContainer: {
    position: "relative",
    justifyContent: "center",
    backgroundColor: "#fff",
    borderRadius: 25,
  },
  form: {
    marginHorizontal: 16,
    justifyContent: "center",
  },
  input: {
    padding: 15,
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "#F6F6F6",
    borderRadius: 8,
  },
  button: {
    padding: 16,

    backgroundColor: "#FF6C00",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  loginLink: {
    marginTop: 16,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default RegistrationScreen;
