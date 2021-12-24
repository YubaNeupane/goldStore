import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function GoldShop() {
  return (
    <View style={styles.screen}>
      <Text>Gold Shop</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
