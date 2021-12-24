import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function ItemDetails() {
  return (
    <View style={styles.screen}>
      <Text>Item Details</Text>
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
