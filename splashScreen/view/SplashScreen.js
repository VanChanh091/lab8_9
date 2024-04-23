import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Rn from "../assets/reactNative.png";

const SplashScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#1e1e1e",
      }}
    >
      <Image
        source={Rn}
        style={{ width: 100, height: 100, resizeMode: "cover" }}
      />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({});
