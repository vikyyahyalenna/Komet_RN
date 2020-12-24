import React, { useState, useRef, useEffect } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { moderateScale, scale, verticalScale } from "../../util/Scale";
import { getStatusBarHeight } from "react-native-status-bar-height";
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  View,
  Modal,
  Animated,
  Image,
  Dimensions,
  SafeAreaView,
} from "react-native";

const { width, height } = Dimensions.get("window");

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [messageError, setmessageError] = useState("");
  const [modalVisible, setModal] = useState(false);
  const [isForm, setIsForm] = useState(false);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = async () => {
    console.log("fadeIn");
    // Will change fadeAnim value to 1 in 5 seconds
    await Animated.timing(fadeAnim, {
      toValue: 3,
      duration: 2000,
      useNativeDriver: true, // Add This line
    }).start();

    setTimeout(() => {
      Animated.timing(fadeAnim, {
        toValue: 2,
        duration: 1000,
        useNativeDriver: true, // Add This line
      }).start();
    }, 3100);
  };

  // const RenderModal = renderModal();

  function validation() {
    if (email == "") {
      setModal(true);
      setmessageError("Harap Masukkan Email");
    } else if (password == "") {
      setModal(true);
      setmessageError("Harap Masukkan Password");
    } else {
      setModal(false);
      setIsForm(true);
      setmessageError("");
    }
  }

  async function onLogin() {
    await validation();

    if (isForm == true) {
      navigation.navigate("Home");
    }

    fadeIn();
  }

  const RenderModal = () => {
    useEffect(() => console.log("mounted"), []);

    // useEffect(() => {
    //   fadeIn;
    // }, []);

    return (
      <View>
        <Modal animationType="fade" transparent={true} visible={modalVisible}>
          <View style={styles.centeredView}>
            <View style={styles.view_modal}>
              <View style={styles.header_modal}>
                <Animated.Image
                  style={[
                    {
                      opacity: fadeAnim,
                      height: 20,
                      width: 20,
                      resizeMode: "stretch",
                    },
                    { transform: [{ scale: fadeAnim }] },
                  ]}
                  source={require("../../asset/image/warning.png")}
                ></Animated.Image>
              </View>
              <View style={styles.content_modal}>
                <Text style={{ fontSize: 20 }}>Perhatian</Text>
                <Text style={{ fontSize: 14, marginTop: verticalScale(10) }}>
                  {messageError}
                </Text>

                <TouchableOpacity
                  onPress={() => setModal(false)}
                  // onPress={fadeIn}
                  style={{
                    position: "absolute",
                    bottom: verticalScale(20),
                    right: verticalScale(20),
                  }}
                >
                  <Text>OK</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    );
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#F5FCFF" }}>
      <KeyboardAwareScrollView
        enableResetScrollToCoords={false}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <View style={styles.container}>
          <RenderModal></RenderModal>
          <Image
            source={require("../../asset/image/bg_login.jpg")}
            style={styles.bg_login}
          ></Image>
          <Image
            source={require("../../asset/image/kaila_logo.png")}
            style={styles.login_logo}
          ></Image>

          <TextInput
            value={email}
            autoCapitalize="none"
            keyboardType="email-address"
            style={styles.text_input}
            placeholder="Email"
            onChangeText={(email) => setEmail(email)}
          ></TextInput>

          <TextInput
            value={password}
            autoCapitalize="none"
            autoCompleteType="password"
            returnKeyType="done"
            secureTextEntry
            textContentType="password"
            style={styles.text_input}
            placeholder="Kata Sandi"
            onChangeText={(password) => setPassword(password)}
          ></TextInput>
          <TouchableOpacity>
            <Text
              style={[styles.text_primary_16, { marginTop: verticalScale(20) }]}
            >
              Lupa kata sandi ?
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn_login} onPress={() => onLogin()}>
            <Text style={styles.text_btn_login}>MASUK</Text>
          </TouchableOpacity>

          <Text style={styles.text_black_16}>Atau</Text>
          <View style={{ flexDirection: "row", marginTop: verticalScale(10) }}>
            <Text style={styles.text_black_16}>Belum Punya Akun?</Text>

            <TouchableOpacity>
              <Text style={styles.text_blue_16}> Registrasi Disini</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  login_logo: {
    resizeMode: "stretch",
    width: moderateScale(200),
    height: moderateScale(60),
    marginBottom: verticalScale(70),
  },
  bg_login: {
    position: "absolute",
    height: height,
    width: width,
  },
  text_input: {
    backgroundColor: "#FFFFFF",
    borderRadius: moderateScale(12),
    marginTop: verticalScale(8),
    fontSize: moderateScale(12),
    paddingStart: moderateScale(16),
    height: verticalScale(46),
    width: width - moderateScale(20),
  },
  text_primary_16: {
    color: "#ae1015",
    fontSize: moderateScale(16),
    fontFamily: "SF Pro Text",
    // 2020-12-22 12:01:30.034219+0700 Kaila_VA[12973:605016]  SFProText-Regular",
  },
  btn_login: {
    width: width - moderateScale(20),
    borderRadius: 13.3,
    alignItems: "center",
    backgroundColor: "#A80002",
    marginTop: verticalScale(35),
    marginBottom: verticalScale(35),
    height: verticalScale(40),
    alignItems: "center",
    justifyContent: "center",
  },
  text_btn_login: {
    color: "white",
  },
  text_black_16: {
    justifyContent: "center",
    alignItems: "center",
    fontSize: moderateScale(16),
    fontFamily: "SF Pro Text",
  },
  text_blue_16: {
    justifyContent: "center",
    alignItems: "center",
    fontSize: moderateScale(16),
    color: "#035efc",
    fontFamily: "SF Pro Text",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(52, 52, 52, 0.5)",
  },
  view_modal: {
    width: width - moderateScale(40),
    height: verticalScale(170),
    backgroundColor: "white",
  },
  header_modal: {
    backgroundColor: "#ed151d",
    width: width - moderateScale(40),
    height: verticalScale(70),
    justifyContent: "center",
    alignItems: "center",
  },
  content_modal: {
    flex: 1,
    padding: moderateScale(10),
  },
});
