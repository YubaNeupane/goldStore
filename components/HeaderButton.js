import React, { useEffect } from "react";
import { StyleSheet, Platform, View, Text } from "react-native";
import { HeaderButton } from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../constants/Colors";
import { useDispatch, useSelector } from "react-redux";

export default function CustomHeaderButton(props) {
  const color = Platform.OS == "android" ? "blue" : "red";

  const cart = useSelector((state) => state.shoppingCart);

  return (
    <View>
      <HeaderButton
        {...props}
        IconComponent={Ionicons}
        iconSize={30}
        color={Platform.OS == "android" ? "red" : "blue"}
        // color={Platform.OS == "android" ? "white" : Colors.secondaryDarkColor}
      />
      <View
        style={{
          position: "absolute",
          backgroundColor: color,
          width: 16,
          height: 16,
          borderRadius: 15 / 2,
          right: 10,
          top: -3,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            fontSize: 10,
            fontWeight: "bold",
          }}
        >
          {cart.count}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
