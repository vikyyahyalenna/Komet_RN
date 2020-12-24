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

export default function Home() {
  return (
    <View style={styles.content}>
      <Text>Home</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    paddingTop: 30,
  },
});
