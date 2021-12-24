import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Search() {
  return (
    <View style={styles.screen}>
      <Text>Search</Text>
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
