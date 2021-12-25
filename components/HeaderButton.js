import React from "react";
import { StyleSheet, Platform } from "react-native";
import { HeaderButton } from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../constants/Colors";

export default function CustomHeaderButton(props) {
  return (
    <HeaderButton
      {...props}
      IconComponent={Ionicons}
      iconSize={30}
      color={Platform.OS == "android" ? "red" : "blue"}
      // color={Platform.OS == "android" ? "white" : Colors.secondaryDarkColor}
    />
  );
}

const styles = StyleSheet.create({});
