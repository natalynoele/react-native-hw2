import React, { useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";

const RegistrationScreen = () => {
  // const [isShowKeybord, setIsShowKeybord] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <ImageBackground
          style={styles.image}
          source={require("../assets/bg.jpg")}
          resizeMode="cover"
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
            <Text style={styles.title}>Реєстрація</Text>
            <KeyboardAvoidingView
              behavior={Platform.OS === "ios" ? "padding" : "height"}
            >
              <View style={styles.form}>
                <View style={{ marginTop: 16 }}>
                  <TextInput
                    style={styles.input}
                    textAlign={"left"}
                    placeholder="Логін"
                  ></TextInput>
                </View>
                <View style={{ marginTop: 16 }}>
                  <TextInput
                    style={styles.input}
                    textAlign={"left"}
                    placeholder="Адреса електронної пошти"
                  ></TextInput>
                </View>
                <View style={{ marginTop: 16 }}>
                  <TextInput
                    style={styles.input}
                    textAlign={"left"}
                    placeholder="Пароль"
                    secureTextEntry={true}
                  ></TextInput>
                </View>
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={styles.button}
                  onPress={() => {
                    Keyboard.dismiss();
                  }}
                >
                  <Text style={{ color: "#fff", fontSize: 16 }}>
                    Зареєструватися
                  </Text>
                </TouchableOpacity>
              </View>
            </KeyboardAvoidingView>
          </View>
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
    height: 550,
    position: "relative",
    justifyContent: "center",
    backgroundColor: "#fff",
    borderRadius: 25,
  },
  form: {
    marginTop: 32,
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
    marginTop: 43,
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    // fontFamily: "Roboto",
    textAlign: "center",
    marginTop: 92,
    fontSize: 30,
    fontWeight: 500,
    letterSpacing: 0.01,
  },
});

export default RegistrationScreen;
