import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Color from "../constants/Colors";

export default function CustomAddToCartButton() {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <View>
          <MaterialCommunityIcons
            name="cart-plus"
            size={42}
            color={Color.secondaryTextColor}
          />
        </View>
        <View>
          <Text style={styles.text}>Add To Cart</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: Color.primaryLightColor,
    padding: 10,
    marginTop: -50,
    marginBottom: 10,
    width: 250,
    borderRadius: 100,
  },
  text: {
    fontFamily: "cinzel-bold",
    fontSize: 20,
    color: Color.primaryDarkColor,
  },
});
