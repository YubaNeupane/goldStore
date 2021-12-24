import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function ShopingCart() {
  return (
    <View style={styles.screen}>
      <Text>Shoping Cart</Text>
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
